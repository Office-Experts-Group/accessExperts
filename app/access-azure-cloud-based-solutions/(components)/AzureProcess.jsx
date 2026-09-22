// app/access-azure-cloud-based-solutions/(components)/AzureProcess.jsx

import React from "react";
import Link from "next/link";
import styles from "../../../styles/azureProcess.module.scss";

const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path
      d="M3 8h10M9 4l4 4-4 4"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const AzureProcess = () => {
  return (
    <section className={styles.section} id="low-cost">
      <div className={styles.inner}>
        {/* ── Left: pitch + stats ── */}
        <div className={styles.left}>
          <span className={styles.eyebrow}>Low Cost Solution</span>
          <h2 className={styles.heading}>
            A cloud database, <span className={styles.accent}>without the enterprise price tag.</span>
          </h2>
          <p className={styles.body}>
            There's a monthly fee for hosting a database with Azure. If
            you'd like us to take care of the maintenance and hosting, the
            current cost is $35 per month for small to medium data usage.
            Once your custom database is delivered, there are no further
            costs unless you need ongoing help, training or additions.
          </p>
          <p className={styles.body}>
            We're always here to help with any ongoing requirements, and if
            your system eventually outgrows Access altogether, we can guide
            you through what an{" "}
            <Link
              href="/upgrades-and-migration"
              style={{ color: "#0a85bf", fontWeight: 700 }}
            >
              upgrade or migration
            </Link>{" "}
            path looks like.
          </p>

          <Link href="#contact" className={styles.cta}>
            Get a hosting quote
            <ArrowIcon />
          </Link>

          <div className={styles.stats}>
            <div>
              <div className={styles.statValue}>$35</div>
              <div className={styles.statLabel}>per month, small/medium usage</div>
            </div>
            <div>
              <div className={styles.statValue}>25+</div>
              <div className={styles.statLabel}>years database experience</div>
            </div>
            <div>
              <div className={styles.statValue}>100%</div>
              <div className={styles.statLabel}>Australian owned</div>
            </div>
          </div>
        </div>

        {/* ── Right: pricing card + support links ── */}
        <div className={styles.right}>
          <div className={styles.priceCard}>
            <div className={styles.priceRow}>
              <span className={styles.priceValue}>$35</span>
              <span className={styles.pricePeriod}>/ month</span>
            </div>
            <p className={styles.priceDesc}>
              Hosting and maintenance for a small to medium size database,
              fully managed by our team.
            </p>
            <p className={styles.priceNote}>
              No further costs once your database is delivered, unless you
              need ongoing help, training or additions down the track.
            </p>
          </div>

          <div className={styles.linkRow}>
            <Link href="/access-support" className={styles.linkItem}>
              <span className={styles.linkItemText}>Ongoing Access support plans</span>
              <span className={styles.linkItemArrow} aria-hidden="true">
                <ArrowIcon />
              </span>
            </Link>
            <Link
              href="/blog/your-access-database-needs-a-cloud-strategy"
              className={styles.linkItem}
            >
              <span className={styles.linkItemText}>Does your database need a cloud strategy?</span>
              <span className={styles.linkItemArrow} aria-hidden="true">
                <ArrowIcon />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AzureProcess;
