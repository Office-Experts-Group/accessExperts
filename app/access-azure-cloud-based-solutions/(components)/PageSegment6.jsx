import React from "react";
import styles from "../../../styles/faqSection.module.scss";

const ContentsSection = () => {
  return (
    <section
      className={`${styles.faqSection} ${styles.contentsSection}`}
      id="requirements"
    >
      <div>
        <h2>Access/Azure Requirements</h2>
        <div className={styles.faqContainer}>
          <div className={styles.faqItem}>
            <p>Windows PC/Tablet</p>
          </div>

          <div className={styles.faqItem}>
            <p>
              Install Microsoft Access or the free Access run time on each
              device
            </p>
          </div>

          <div className={styles.faqItem}>
            <p>Install the free Azure driver</p>
          </div>

          <div className={styles.faqItem}>
            <p>Internet connection</p>
          </div>

          <div className={styles.faqItem}>
            <p>
              Azure subscription (We can host and maintain your Azure Database
              for you)
            </p>
          </div>
        </div>
      </div>

      <div>
        <h2>Alternatives to Access/Azure</h2>
        <div className={styles.faqContainer}>
          <div className={styles.faqItem}>
            <p>ASP/SQL Server Azure Based Application</p>
          </div>

          <div className={styles.faqItem}>
            <p>VB.NET or C#.NET + SQL Server Application</p>
          </div>

          <div className={styles.faqItem}>
            <p>ASP.NET Web Application</p>
          </div>

          <div className={styles.faqItem}>
            <p>Client/Server Access Applications</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentsSection;
