import React from "react";
import Link from "next/link";

import AnimateOnScroll from "../../../components/AnimateOnScroll";

import styles from "../../../styles/conclusionSection.module.scss";

const ConclusionSection = () => {
  const warningSigns = [
    "Forms taking minutes to open instead of seconds",
    "Queries timing out or running extremely slowly",
    "Frequent application crashes or freezes",
    "Cryptic error messages appearing regularly",
    "Database file size growing disproportionately",
    "Performance degrading in multi-user environments",
  ];

  return (
    <section className={styles.conclusionSection}>
      <div className={styles.container}>
        <AnimateOnScroll animation="fade-up" duration={1} delay={0}>
          <div className={styles.content}>
            <p className={styles.tagline}>Don't Let Problems Escalate</p>

            <h2>Is Your Database Sending Warning Signs?</h2>

            <p className={styles.mainText}>
              Database performance issues rarely fix themselves. What starts as
              a minor inconvenience often spirals into serious productivity
              losses, data integrity risks, and user frustration. Recognising
              the warning signs early and taking action can prevent costly
              downtime and emergency repairs.
            </p>

            <div className={styles.warningBox}>
              <h3>Common Warning Signs That Need Attention</h3>

              <p className={styles.warningText}>
                If you're experiencing any of these symptoms, your database
                would benefit from professional optimisation:
              </p>

              <div className={styles.warningList}>
                {warningSigns.map((sign, index) => (
                  <div key={index} className={styles.warningItem}>
                    <svg viewBox="0 0 24 24" fill="none">
                      <path
                        d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 9v4M12 17h.01"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                    <span>{sign}</span>
                  </div>
                ))}
              </div>

              <p className={styles.impactText}>
                <strong>The longer you wait, the worse it gets.</strong> Small
                performance issues compound over time. A database that's merely
                slow today can become completely unusable tomorrow. Corruption
                that starts with occasional errors can lead to catastrophic data
                loss. Early intervention is always more cost-effective than
                emergency recovery.
              </p>
            </div>

            <div className={styles.ctaBox}>
              <h3>Get Expert Help Today</h3>
              <p>
                Our database specialists have successfully restored hundreds of
                struggling Access databases across Australia. We'll diagnose
                your performance issues, provide clear recommendations, and
                implement solutions that deliver measurable improvements. Don't
                let database problems hold your business back.
              </p>
              <div className={styles.ctaButtons}>
                <Link href="/contact-us" className={styles.primaryBtn}>
                  Request a Consultation
                </Link>
                <Link href="tel:1300102810" className={styles.secondaryBtn}>
                  Call 1300 102 810
                </Link>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default ConclusionSection;
