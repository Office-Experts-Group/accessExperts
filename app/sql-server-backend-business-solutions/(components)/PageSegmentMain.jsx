import React from "react";
import Image from "next/image";

import AnimateOnScroll from "../../../components/AnimateOnScroll";

import styles from "../../../styles/pageSegment.module.css";

import SQLGrow from "../../../public/sql-growing.webp";

const PageSegmentMain = () => {
  return (
    <section className={styles.pageSegment}>
      <div className={styles.imgWrapper}>
        <AnimateOnScroll animation="slide-right" duration={1} delay={0}>
          <Image
            src={SQLGrow}
            alt="SQL Server database backend architecture"
            width={600}
            height={450}
            priority
          />
        </AnimateOnScroll>
      </div>

      <div className={styles.contentWrapper}>
        <AnimateOnScroll animation="fade-up" duration={1} delay={0.3}>
          <div className={styles.content}>
            <p>Enterprise-Grade Performance</p>
            <h2>SQL Server Backend for Growing Businesses</h2>
            <p>
              When your business database needs to handle multiple users, large
              datasets, and critical daily operations, the backend
              infrastructure becomes crucial. Microsoft SQL Server delivers the
              performance, reliability, and security that modern Australian
              businesses require.
            </p>
            <p>
              SQL Server powers over 27% of the world's databases and is trusted
              by organisations of every size, from small teams to enterprise
              operations. With 39% of SQL Server users being small businesses
              and 45% medium-sized organisations.
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default PageSegmentMain;
