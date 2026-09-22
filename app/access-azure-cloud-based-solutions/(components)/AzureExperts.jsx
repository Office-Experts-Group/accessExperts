// app/access-azure-cloud-based-solutions/(components)/AzureExperts.jsx

import React from "react";
import Link from "next/link";
import styles from "../../../styles/azureExperts.module.scss";

import { DatabaseExpertsSvg } from "../(svgs)/DatabaseExpertsSvg";

const AzureExperts = () => {
  return (
    <section className={styles.section} id="experts">
      <div className={styles.inner}>
        <div className={styles.content}>
          <span className={styles.eyebrow}>Microsoft Database Solution Experts</span>
          <h2 className={styles.heading}>
            Developers across every area of database work
          </h2>
          <p className={styles.body}>
            We have developers who work across all areas of Microsoft
            database development. If you need help designing or determining
            what's best for your business, our talented database programmers
            can analyse and develop a solution that suits your
            organisation's requirements. Our experienced consultants are
            ready to help you out.
          </p>

          <div className={styles.links}>
            <Link href="/meet-the-team" className={styles.linkChip}>
              Meet our team
            </Link>
            <Link
              href="/integrate-access-with-power-bi"
              className={styles.linkChip}
            >
              Access + Power BI
            </Link>
            <Link
              href="/access-database-optimisation-and-repair"
              className={styles.linkChip}
            >
              Database optimisation
            </Link>
          </div>
        </div>

        <div className={styles.visual} aria-hidden="true">
          <DatabaseExpertsSvg />
        </div>
      </div>
    </section>
  );
};

export default AzureExperts;
