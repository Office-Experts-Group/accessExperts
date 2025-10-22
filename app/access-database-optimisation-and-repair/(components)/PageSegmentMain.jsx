import React from "react";
import Image from "next/image";

import AnimateOnScroll from "../../../components/AnimateOnScroll";

import styles from "../../../styles/pageSegment.module.css";

import dataRepair from "../../../public/data-repair.webp";

const PageSegmentMain = () => {
  return (
    <section className={styles.pageSegment}>
      <div className={styles.imgWrapper}>
        <AnimateOnScroll animation="slide-left" duration={1} delay={0}>
          <Image
            src={dataRepair}
            alt="Speedometer and computer data"
            width={600}
            height={400}
          />
        </AnimateOnScroll>
      </div>

      <div className={styles.contentWrapper}>
        <AnimateOnScroll animation="fade-up" duration={1} delay={0.3}>
          <div className={styles.content}>
            <p>Expert Database Solutions</p>
            <h2>Access Database Repair</h2>
            <p>
              Over time, databases can become sluggish due to poor design, file
              bloat, corruption, or inadequate indexing. Our Access database
              specialists diagnose performance bottlenecks and implement proven
              optimisation techniques to restore speed and reliability.
            </p>
            <p>
              With over 25 years of experience repairing and optimising Access
              databases across Australia, we can troubleshoot issues ranging
              from minor performance slowdowns to severe corruption requiring
              complete data recovery.
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default PageSegmentMain;
