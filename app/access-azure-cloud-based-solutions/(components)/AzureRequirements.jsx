// app/access-azure-cloud-based-solutions/(components)/AzureRequirements.jsx

import React from "react";
import Link from "next/link";
import styles from "../../../styles/azureRequirements.module.scss";

import {
  WindowsIcon,
  InstallIcon,
  DriverIcon,
  InternetIcon,
  SubscriptionIcon,
} from "../(svgs)/RequirementIcons";

const requirements = [
  { Icon: WindowsIcon, text: "Windows PC or tablet" },
  {
    Icon: InstallIcon,
    text: "Microsoft Access, or the free Access run time, installed on each device",
  },
  { Icon: DriverIcon, text: "The free Azure driver installed" },
  { Icon: InternetIcon, text: "A working internet connection" },
  {
    Icon: SubscriptionIcon,
    text: "An Azure subscription",
  },
];

const alternatives = [
  "ASP/SQL Server Azure based application",
  "VB.NET or C#.NET with a SQL Server application",
  "ASP.NET web application",
  "Client/server Access applications",
];

const AzureRequirements = () => {
  return (
    <section className={styles.section} id="requirements">
      <div className={styles.inner}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>Before You Start</span>
          <h2 className={styles.heading}>
            Requirements and alternative approaches
          </h2>
          <p className={styles.subheading}>
            Access/Azure is a great fit for many businesses, but it's worth
            knowing what's needed on your end, and what else is on the table if
            your situation calls for a different approach.
          </p>
        </div>

        <div className={styles.groups}>
          {/* ── Requirements ── */}
          <div id="requirements-list">
            <div className={styles.groupLabel}>
              <span className={styles.groupBadge}>01</span>
              Access/Azure Requirements
            </div>
            <ul className={styles.reqList}>
              {requirements.map(({ Icon, text }) => (
                <li key={text} className={styles.reqItem}>
                  <span className={styles.reqIcon} aria-hidden="true">
                    <Icon />
                  </span>
                  <p className={styles.reqText}>{text}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Alternatives ── */}
          <div id="alternatives">
            <div className={styles.groupLabel}>
              <span className={styles.groupBadge}>02</span>
              Alternatives to Access/Azure
            </div>
            <ul className={styles.altList}>
              {alternatives.map((item) => (
                <li key={item} className={styles.altItem}>
                  <span className={styles.altDot} aria-hidden="true" />
                  <p className={styles.altText}>{item}</p>
                </li>
              ))}
            </ul>
            <Link
              href="/blog/microsoft-access-alternatives-guide"
              className={styles.altLink}
            >
              Read our full guide to Access alternatives
              <svg
                width="14"
                height="14"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AzureRequirements;
