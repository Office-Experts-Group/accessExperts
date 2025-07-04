import React from "react";
import Link from "next/link";
import Image from "next/image";

import styles from "../../../styles/whyChoose.module.css";

import faqs from "../../../faqs/about-us";

import semi from "../../../public/shapes/semi600x600.webp";
import AnimateOnScroll from "../../../components/AnimateOnScroll";

const WhyChooseUs = () => {
  return (
    <section className={styles.whyChoose}>
      <Image
        src={semi}
        alt="Semi Circle"
        height={900}
        width={900}
        className={styles.semi}
      />
      <AnimateOnScroll animation="fade-up-right" delay={0} duration={1.5}>
        <div className={styles.content}>
          <p>Why Choose Us?</p>
          <h2>Reliable, Personalised Access Solutions</h2>
          <p>
            We deliver high-quality Microsoft Access solutions with personalised
            support tailored to your business needs. Our goal is to exceed
            expectations and become your trusted partner for{" "}
            <Link href={"https://www.accessexperts.com.au"}>
              Microsoft Access development
            </Link>
            , data management, and{" "}
            <Link href={"/3rd-party-product-integration"}>
              system integration
            </Link>
            .
          </p>
        </div>
      </AnimateOnScroll>

      <AnimateOnScroll animation="slide-right" delay={0} duration={1.5}>
        <div className={styles.dropdowns}>
          <div className={styles.faqContainer} role="group">
            {faqs.map(({ question, answer }, index) => (
              <details
                key={`faq-${index}`}
                className={styles.faqItem}
                name="faq-group"
              >
                <summary>
                  <p className={styles.questionText}>{question}</p>
                </summary>
                <div className={styles.faqContent}>
                  <p>{answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </AnimateOnScroll>
    </section>
  );
};

export default WhyChooseUs;
