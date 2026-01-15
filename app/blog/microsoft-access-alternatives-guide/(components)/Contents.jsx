"use client";
import React, { useState } from "react";
import styles from "../../../../styles/contentsComponent.module.css";

const Contents = () => {
  const [isHidden, setIsHidden] = useState(true);

  return (
    <div
      className={`${styles.blogContents}`}
      style={isHidden ? {} : { right: "0", top: "15vh" }}
    >
      {isHidden ? (
        <button onClick={() => setIsHidden(false)}>Contents</button>
      ) : (
        <div
          className={`${styles.blogContentsPanel} ${
            !isHidden ? styles.blogPanelVisible : ""
          }`}
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 1024 1024"
            height="2.5em"
            width="2.5em"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => setIsHidden(true)}
          >
            <path d="M354 671h58.9c4.7 0 9.2-2.1 12.3-5.7L512 561.8l86.8 103.5c3 3.6 7.5 5.7 12.3 5.7H670c6.8 0 10.5-7.9 6.1-13.1L553.8 512l122.4-145.9c4.4-5.2.7-13.1-6.1-13.1h-58.9c-4.7 0-9.2 2.1-12.3 5.7L512 462.2l-86.8-103.5c-3-3.6-7.5-5.7-12.3-5.7H354c-6.8 0-10.5 7.9-6.1 13.1L470.2 512 347.9 657.9A7.95 7.95 0 0 0 354 671z"></path>
            <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"></path>
          </svg>
          <h3>Quick Pick</h3>
          <a href="#is-access-the-problem" onClick={() => setIsHidden(true)}>
            <div className={styles.contentLink}>
              <p>Access the Problem?</p>
            </div>
          </a>
          <a href="#problem-slow" onClick={() => setIsHidden(true)}>
            <div className={styles.contentLink}>
              <p>Access is Too Slow</p>
            </div>
          </a>
          <a href="#problem-users" onClick={() => setIsHidden(true)}>
            <div className={styles.contentLink}>
              <p>Multiple Users</p>
            </div>
          </a>
          <a href="#migration-motivation" onClick={() => setIsHidden(true)}>
            <div className={styles.contentLink}>
              <p>Migration Motivation</p>
            </div>
          </a>
          <a href="#real-alternatives" onClick={() => setIsHidden(true)}>
            <div className={styles.contentLink}>
              <p>Alternatives for 2026</p>
            </div>
          </a>
          <a href="#alt-sql-server" onClick={() => setIsHidden(true)}>
            <div className={styles.contentLink}>
              <p>SQL Server Migration</p>
            </div>
          </a>
          <a href="#alt-power-platform" onClick={() => setIsHidden(true)}>
            <div className={styles.contentLink}>
              <p>Power Platform</p>
            </div>
          </a>
          <a href="#alt-custom-web" onClick={() => setIsHidden(true)}>
            <div className={styles.contentLink}>
              <p>Web Application</p>
            </div>
          </a>
          <a href="#common-mistakes" onClick={() => setIsHidden(true)}>
            <div className={styles.contentLink}>
              <p>Migration Mistakes</p>
            </div>
          </a>
          <a href="#decision-framework" onClick={() => setIsHidden(true)}>
            <div className={styles.contentLink}>
              <p>Decision Framework</p>
            </div>
          </a>
          <a href="#conclusion" onClick={() => setIsHidden(true)}>
            <div className={styles.contentLink}>
              <p>Conclusion</p>
            </div>
          </a>
        </div>
      )}
    </div>
  );
};

export default Contents;
