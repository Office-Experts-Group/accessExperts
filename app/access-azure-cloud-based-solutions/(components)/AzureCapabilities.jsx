// app/access-azure-cloud-based-solutions/(components)/AzureCapabilities.jsx

import React from "react";
import Link from "next/link";
import styles from "../../../styles/azureCapabilities.module.scss";

import { AccessSplitSvg } from "../(svgs)/AccessSplitSvg";
import { WebAppLinkSvg } from "../(svgs)/WebAppLinkSvg";

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path
      d="M3 8h10M9 4l4 4-4 4"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const AzureCapabilities = () => {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        {/* ── Row 1: Existing Access Databases ── */}
        <div className={styles.row} id="existing-access">
          <div className={styles.content}>
            <span className={styles.eyebrow}>Migrate an Existing Database</span>
            <h2 className={styles.heading}>Existing Access Databases</h2>
            <p className={styles.body}>
              If you have an existing Microsoft Access database, we can take
              your back end and port it to Azure. If your database doesn't
              already have a back end, we can split it and create one. We
              then point your front end to Azure so everything works the
              same way, except your data becomes accessible from any
              location.
            </p>
            <Link
              href="/sql-server-backend-business-solutions"
              className={styles.link}
            >
              Read about SQL Server back ends
              <ArrowIcon />
            </Link>
          </div>
          <div className={styles.visual} aria-hidden="true">
            <AccessSplitSvg />
          </div>
        </div>

        {/* ── Row 2: Web Apps Linked to Databases ── */}
        <div
          className={`${styles.row} ${styles.rowReversed}`}
          id="web-apps"
        >
          <div className={styles.content}>
            <span className={styles.eyebrow}>Reach Anyone, On Any Device</span>
            <h2 className={styles.heading}>Web Apps Linked to Databases</h2>
            <p className={styles.body}>
              Often you'll want to gather data from clients, suppliers or
              people who don't have access to your database application.
              Using Azure we can build hosted web apps that run on any
              device through a web browser, gathering data and storing it
              in your Azure database, giving you instant access through
              your database application.
            </p>
            <Link href="/access-online" className={styles.link}>
              More on Access Online solutions
              <ArrowIcon />
            </Link>
          </div>
          <div className={styles.visual} aria-hidden="true">
            <WebAppLinkSvg />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AzureCapabilities;
