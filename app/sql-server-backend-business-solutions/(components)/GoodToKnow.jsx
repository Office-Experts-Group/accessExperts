import React from "react";
import Image from "next/image";

import AnimateOnScroll from "../../../components/AnimateOnScroll";

import styles from "../../../styles/goodToKnow.module.css";

import bg from "../../../public/service-bg.webp";

const GoodToKnow = () => {
  return (
    <section className={styles.goodToKnow}>
      <Image src={bg} alt="background world map" className={styles.bg} fill />
      <div className={styles.triangleDiv}>
        <h2>Why Access Experts</h2>
      </div>
      <AnimateOnScroll animation="fade-up" delay={0} duration={1}>
        <p style={{ padding: "1rem 10vw", letterSpacing: "1px" }}>
          We've helped hundreds of Australian businesses move from slow,
          unreliable Access or Excel databases to fast, secure, and scalable SQL
          Server backends transforming the way they manage and access their
          data. Our clients range from small local companies to large
          multi-branch organisations, we can help with...
        </p>
        <div className={styles.serviceListContainer}>
          <ul className={styles.serviceList}>
            <li>Seamless migration with minimal downtime</li>
            <li>Cloud or on-premise configuration</li>
            <li>Integration with existing systems</li>
            <li>Ongoing support, monitoring, and maintenance</li>
          </ul>
        </div>
      </AnimateOnScroll>
    </section>
  );
};

export default GoodToKnow;
