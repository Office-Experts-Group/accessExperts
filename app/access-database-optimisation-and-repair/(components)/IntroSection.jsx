import React from "react";
import Image from "next/image";

import AnimateOnScroll from "../../../components/AnimateOnScroll";

import styles from "../../../styles/introSection.module.scss";

import stopwatch from "../../../public/stopwatch.webp";

const IntroSection = () => {
  return (
    <section className={styles.introSection}>
      <Image
        src={stopwatch}
        alt="stopwatch"
        className={styles.absImage}
        height={300}
        width={300}
      />
      <div className={styles.container}>
        <AnimateOnScroll animation="fade-up" duration={1} delay={0}>
          <div className={styles.content}>
            <p className={styles.tagline}>Understanding Database Performance</p>

            <h2>Why Do Access Databases Slow Down Over Time?</h2>

            <p className={styles.description}>
              Even well-designed Access databases can experience performance
              degradation over time. Database slowdowns rarely happen overnight.
              They develop gradually as temporary objects accumulate, deleted
              records leave behind fragmented space, and growing data volumes
              strain inadequate indexes. Poor initial design choices compound
              these issues, particularly when databases weren't built to handle
              your current scale or complexity.
            </p>

            <div className={styles.highlight}>
              <p>
                <strong>The good news?</strong> Most performance problems are
                fixable. Our database specialists have successfully restored
                speed and reliability to hundreds of struggling Access databases
                across Australia.
              </p>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default IntroSection;
