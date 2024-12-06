import React from "react";
import Image from "next/image";

import styles from "../../../styles/pageSegment.module.css";

import board from "../../../public/board600x450.webp";

const PageSegmentMain = () => {
  return (
    <section className={styles.pageSegment}>
      <div className={styles.imgWrapper}>
        <Image
          src={board}
          alt="lady with a futuristic tablet device"
          width={600}
          height={450}
        />
      </div>

      <div className={styles.contentWrapper}>
        <div className={styles.content}>
          <p>Microsoft Access</p>
          <h2>
            Database Analysis,<br></br> Design and Development
          </h2>
          <p>
            Our Microsoft Access database experts can help determine whether
            your integration requirements are viable and build the required
            functionality for your company with competitive pricing and a
            prompt, high quality service.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PageSegmentMain;
