import React from "react";
import Image from "next/image";

import AnimateOnScroll from "../../../components/AnimateOnScroll";

import styles from "../../../styles/pageSegment.module.css";

import services from "../../../public/services.webp";

const PageSegmentMain = () => {
  return (
    <section className={styles.pageSegment}>
      <div className={styles.imgWrapper} style={{ borderBottom: "none" }}>
        <AnimateOnScroll animation="slide-right" duration={1} delay={0}>
          <Image
            src={services}
            alt="Our Services"
            width={450}
            height={300}
            priority
          />
        </AnimateOnScroll>
      </div>

      <div className={styles.contentWrapper}>
        <AnimateOnScroll animation="fade-up" duration={1} delay={0.3}>
          <div className={styles.content}>
            <p>Australia-wide Consultation</p>
            <h2>Comprehensive Access Database Solutions</h2>
            <p>
              With over 25 years of experience serving Australian businesses,
              Access Experts delivers comprehensive Microsoft Access database
              solutions across all industries. Our senior consultants specialise
              in custom database development, cloud migration, system
              integration, upgrades and ongoing support. From initial
              consultation and design through to deployment and training, we
              provide expert guidance at every stage. Whether you need to
              modernise legacy systems, integrate with existing applications, or
              migrate to cloud-based solutions, our team has the technical
              expertise and industry knowledge to deliver reliable, efficient
              database systems that drive business success.
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default PageSegmentMain;
