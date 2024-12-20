"use client";
import { useEffect, useRef } from "react";
import styles from "../styles/servicesCard.module.scss";

export default function CardIntersectionWrapper({ children }) {
  const wrapperRef = useRef(null);

  useEffect(() => {
    // Create observer only if IntersectionObserver is available
    if (!("IntersectionObserver" in window)) return;

    // Create observer once and reuse
    const observer = new IntersectionObserver(
      (entries) => {
        requestAnimationFrame(() => {
          entries.forEach((entry) => {
            if (!entry.target.classList) return;

            // Cache DOM queries
            if (!entry.target.cardImage) {
              entry.target.cardImage = entry.target.querySelector(
                `.${styles.cardImage}`
              );
              entry.target.cardContent = entry.target.querySelector(
                `.${styles.cardContent}`
              );
            }

            // Batch classList changes
            const isIntersecting = entry.isIntersecting;
            entry.target.classList.toggle(styles.inView, isIntersecting);

            if (entry.target.cardImage) {
              entry.target.cardImage.classList.toggle(
                styles.inViewImage,
                isIntersecting
              );
            }
            if (entry.target.cardContent) {
              entry.target.cardContent.classList.toggle(
                styles.inViewContent,
                isIntersecting
              );
            }
          });
        });
      },
      {
        threshold: [0.5],
        rootMargin: "-33.3% 0px",
      }
    );

    // Cache card query
    const cards = wrapperRef.current?.querySelectorAll(
      `[class*="${styles.card}"]`
    );
    if (cards) {
      cards.forEach((card) => observer.observe(card));
    }

    return () => observer.disconnect();
  }, []);

  return <div ref={wrapperRef}>{children}</div>;
}
