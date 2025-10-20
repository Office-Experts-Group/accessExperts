import React from "react";
import Image from "next/image";

import styles from "../../../styles/pageSegment.module.css";

import placeholder from "../../../public/board600x450.webp";

const PageSegmentMain = () => {
  return (
    <section className={styles.pageSegment}>
      <div className={styles.imgWrapper}>
        <Image
          src={placeholder}
          alt="Microsoft Access and Power BI integration dashboard"
          width={540}
          height={480}
        />
      </div>

      <div className={styles.contentWrapper}>
        <div className={styles.content}>
          <p>Unlock Visual Insights</p>
          <h2>
            Combine Your Access Data<br></br> with Power BI
          </h2>
          <p>
            Australian businesses still rely on Microsoft Access for day-to-day
            operations, but as data grows, so does the need for modern reporting
            and real-time insights. By integrating Access with Power BI, you can
            transform static tables into dynamic dashboards that showcase
            trends, improve decision-making, and connect your legacy data to
            Microsoft's modern analytics.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PageSegmentMain;
