"use client";
import React, { useEffect, useState } from "react";
import Script from "next/script";
import styles from "../styles/cookieConsent.module.css";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [showGA, setShowGA] = useState(false);

  useEffect(() => {
    setIsClient(true);

    // Check if consent already exists
    const consentChoice = localStorage.getItem("cookieConsent");
    if (consentChoice === "accepted") {
      setShowGA(true);
      return;
    }

    // Show consent after slight delay if no choice made
    const timer = setTimeout(() => {
      if (!localStorage.getItem("cookieConsent")) {
        setIsVisible(true);
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setShowGA(true);
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "declined");
    setIsVisible(false);
  };

  return (
    <>
      {showGA && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="lazyOnload"
          />
          <Script id="google-analytics" strategy="lazyOnload">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}');
            `}
          </Script>
        </>
      )}

      {isClient && isVisible && (
        <div className={styles.container}>
          <div className={styles.alert}>
            <h2 className={styles.title}>Cookie Consent</h2>
            <div className={styles.description}>
              <p className={styles.message}>
                We use cookies to analyze our traffic and improve your
                experience.
              </p>
              <div className={styles.buttonGroup}>
                <button onClick={handleAccept} className={styles.acceptButton}>
                  Accept All
                </button>
                <button
                  onClick={handleDecline}
                  className={styles.declineButton}
                >
                  Decline
                </button>
              </div>
            </div>
            <button
              onClick={handleDecline}
              className={styles.closeButton}
              aria-label="Close"
            >
              <span className={styles.srOnly}>Close</span>
              <svg
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default CookieConsent;
