import React from "react";
import Image from "next/image";

import AnimateOnScroll from "../../../components/AnimateOnScroll";

import styles from "../../../styles/pageSegment4.module.css";

import hourglass from "../../../public/hourglass.webp";

const PageSegment4 = () => {
  const warningItems = [
    {
      number: "1",
      title: "Multiple Users Experiencing Slowdowns",
      text: "With SQL Server, data is processed on a dedicated server. SQL Server handles multiple users more efficiently with row-level locking, reducing contention and improving responsiveness in multi-user environments.",
    },
    {
      number: "2",
      title: "Database Size Becoming Unmanageable",
      text: "Frequent compacting, corruption repairs, or performance issues are early signs of overload. SQL Server eliminates these risks with automatic data integrity checks, transaction logs, and advanced recovery tools, protecting your business from data loss and downtime.",
    },
    {
      number: "3",
      title: "Backup and Security Concerns",
      text: "If your database is stored on local computers or network drives, you're exposed to hardware failures, theft, and data breaches. SQL Server introduces enterprise-grade protection, encrypted storage, automated backups, and audit trails that help meet compliance and data-governance requirements.",
    },
    {
      number: "4",
      title: "Integration Challenges",
      text: "SQL Server connects with your entire Microsoft ecosystem, including Power BI, Excel, Microsoft 365, and accounting or CRM systems. Data flows automatically across your organisation, reducing admin time and improving accuracy.",
    },
  ];

  return (
    <section className="animate-wrapper" style={{ margin: "8rem 0 6rem 0" }}>
      <div
        className={`${styles.pageSegment} ${styles.services}`}
        style={{ flexDirection: "column", gap: "1.5rem" }}
      >
        <Image
          src={hourglass}
          alt="hourglass"
          width={600}
          height={450}
          className={styles.absImage2}
        />
        <AnimateOnScroll animation="fade-up" duration={1} delay={0}>
          <div className={styles.content}>
            <h2 style={{ textAlign: "center", margin: "0 auto 1rem auto" }}>
              Is Your Database Slowing Your Business Down?
            </h2>
            <p
              style={{
                maxWidth: "800px",
                margin: "0 auto",
                textAlign: "center",
                color: "#046999",
                fontWeight: "700",
                fontSize: "1.2rem",
                fontStyle: "italic",
                margin: "1rem 0",
              }}
            >
              Modern businesses rely on their databases to operate efficiently.
              But when performance issues emerge, the impact ripples through
              your entire organisation.
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="slide-left" duration={1} delay={0}>
          <div className={styles.content}>
            {warningItems.map((item, index) => (
              <div key={index} style={{ marginBottom: "2rem" }}>
                <h3 style={{ marginBottom: ".5rem", fontSize: "1.25rem" }}>
                  {item.title}
                </h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default PageSegment4;
