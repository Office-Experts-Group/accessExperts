import React from "react";
import Image from "next/image";

import AnimateOnScroll from "../../../components/AnimateOnScroll";

import styles from "../../../styles/causesSection.module.scss";

import snail from "../../../public/snail.webp";

const CausesSection = () => {
  const causes = [
    {
      title: "Database File Bloat & Fragmentation",
      description:
        "As databases grow, Access accumulates temporary objects and deleted record remnants that aren't automatically cleaned up. This fragmentation causes file sizes to balloon unnecessarily, slowing down every operation from opening forms to running queries.",
      symptoms: [
        "Database file much larger than data suggests",
        "Slow opening and closing times",
        "Gradual performance degradation",
      ],
      icon: (
        <svg viewBox="0 0 24 24">
          <path
            d="M4 6h16M4 12h16M4 18h16"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="8" cy="6" r="1" fill="currentColor" />
          <circle cx="8" cy="12" r="1" fill="currentColor" />
          <circle cx="8" cy="18" r="1" fill="currentColor" />
        </svg>
      ),
    },
    {
      title: "Poor Table Design & Indexing",
      description:
        "Databases built without proper planning often lack essential indexes on frequently queried fields. Missing or excessive indexes, unnormalised tables, and inappropriate data types force Access to work harder than necessary, creating significant performance bottlenecks.",
      symptoms: [
        "Queries taking minutes instead of seconds",
        "Forms slow to filter or sort",
        "Reports timing out with large datasets",
      ],
      icon: (
        <svg viewBox="0 0 24 24">
          <rect
            x="3"
            y="3"
            width="7"
            height="7"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <rect
            x="14"
            y="3"
            width="7"
            height="7"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <rect
            x="3"
            y="14"
            width="7"
            height="7"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <rect
            x="14"
            y="14"
            width="7"
            height="7"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    // {
    //   title: "Network Performance Issues",
    //   description:
    //     "Split databases shared over networks experience unique performance challenges. Every form load, every record edit sends data across the network. Slow or unstable connections, VPN usage, or wireless networks can turn responsive databases into frustratingly sluggish systems.",
    //   symptoms: [
    //     "Fast locally, slow over network",
    //     "Performance varies by user location",
    //     "Frequent connection timeouts",
    //   ],
    //   icon: (
    //     <svg viewBox="0 0 24 24">
    //       <path
    //         d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"
    //         strokeWidth="0"
    //         fill="currentColor"
    //       />
    //     </svg>
    //   ),
    // },
    {
      title: "Memory & Resource Limitations",
      description:
        "Access databases running on machines with insufficient RAM or processing power struggle to maintain acceptable performance. When databases exceed available memory, constant disk access creates severe slowdowns that affect all users.",
      symptoms: [
        "System freezes or hangs",
        "Out of memory errors",
        "Slow with multiple databases open",
      ],
      icon: (
        <svg viewBox="0 0 24 24">
          <rect
            x="2"
            y="5"
            width="20"
            height="14"
            rx="2"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M6 9h4M6 13h8M18 9v4"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      title: "Inefficient Queries & Forms",
      description:
        "Poorly constructed queries that retrieve unnecessary data, forms loading entire tables instead of filtered recordsets, and cascading combo boxes without proper optimisation all contribute to slow performance.",
      symptoms: [
        "Long wait times opening forms",
        "Combo boxes taking ages to populate",
        "Excessive memory usage during queries",
      ],
      icon: (
        <svg viewBox="0 0 24 24">
          <circle cx="11" cy="11" r="8" strokeWidth="2" />
          <path d="m21 21-4.35-4.35" strokeWidth="2" strokeLinecap="round" />
          <path d="M11 8v6M8 11h6" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      title: "VBA Code Performance Issues",
      description:
        "Inefficient VBA code with nested loops, repeated DLookup functions, or lack of error handling can bring databases to a crawl. Code that made sense with small datasets becomes problematic as data volumes grow.",
      symptoms: [
        "Buttons or actions taking too long",
        "Database unresponsive during processes",
        "Code errors slowing overall performance",
      ],
      icon: (
        <svg viewBox="0 0 24 24">
          <path
            d="M16 18l2-2-2-2M8 6L6 8l2 2"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M13 3L11 21" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      title: "Corruption & File Integrity",
      description:
        "Database corruption manifests as mysterious errors, missing objects, or unexplained slowdowns. Corruption often results from improper shutdowns, network interruptions, or hardware issues. Even minor corruption can significantly impact performance until properly repaired.",
      symptoms: [
        "Unexpected error messages",
        "Forms or reports failing to open",
        "Increasing instability over time",
      ],
      icon: (
        <svg viewBox="0 0 24 24">
          <path
            d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M12 9v4M12 17h.01" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
    },
  ];

  return (
    <section className={styles.causesSection}>
      <Image
        src={snail}
        alt="snail"
        className={styles.absImage}
        height={300}
        width={300}
      />
      <div className={styles.container}>
        <AnimateOnScroll animation="fade-up" duration={1} delay={0}>
          <div className={styles.sectionHeader}>
            <p className={styles.tagline}>Identifying Performance Issues</p>
            <h2>Common Causes of Slow Database Performance</h2>
            <p className={styles.subtitle}>
              Understanding what's slowing down your Access database is the
              first step toward restoring optimal performance. These are the
              most common culprits we encounter when diagnosing database issues.
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-up" duration={1} delay={0.2}>
          <div className={styles.causesGrid}>
            {causes.map((cause, index) => (
              <div key={index} className={styles.causeCard}>
                <div className={styles.iconWrapper}>{cause.icon}</div>
                <h3>{cause.title}</h3>
                <p>{cause.description}</p>
                <div className={styles.symptoms}>
                  <span className={styles.symptomsTitle}>Common Symptoms:</span>
                  <ul>
                    {cause.symptoms.map((symptom, idx) => (
                      <li key={idx}>{symptom}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default CausesSection;
