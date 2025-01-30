import Image from "next/image";
import React from "react";

import styles from "../../../styles/pageSegment2.module.css";

import office from "../../../public/office770x430.webp";
import Link from "next/link";

const PageSegmentMain2 = () => {
  return (
    <section className={`${styles.pageSegment} ${styles.specialGrid}`}>
      <Image
        src={office}
        alt="empty desk in an office environment"
        width={770}
        height={430}
      />

      <div className={styles.contents}>
        <div className={styles.contentWrapper}>
          <h3>Access is a great choice for:</h3>
          <div className={styles.contentLink}>
            <p>Data management</p>
          </div>
          <div className={styles.contentLink}>
            <p>Data structuring and querying</p>
          </div>
          <div className={styles.contentLink}>
            <p>Multiple user management</p>
          </div>
          <div className={styles.contentLink}>
            <p>Data reporting</p>
          </div>
        </div>

        <div className={styles.buttonWrapper}>
          <Link href="/contact-us" className={`${styles.contactBtn} btn`}>
            Contact Us
          </Link>
        </div>
      </div>

      <div className={styles.info}>
        <h2>Is Access The Right Strategy?</h2>
        <p>We get asked this question all the time!</p>
        <p>
          Our talented Microsoft Access programmers are the very best when it
          comes to custom Access development, databases and integration, as well
          as understanding your business, support and training needs. They can
          quickly advise how Access can support your business.
        </p>
      </div>
    </section>
  );
};

export default PageSegmentMain2;
