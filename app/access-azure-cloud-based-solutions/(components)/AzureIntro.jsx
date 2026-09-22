// app/access-azure-cloud-based-solutions/(components)/AzureIntro.jsx

import React from "react";
import Link from "next/link";
import styles from "../../../styles/azureIntro.module.scss";

import { AzureCloudSyncSvg } from "../(svgs)/AzureCloudSyncSvg";

const AzureIntro = () => {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        {/* Left: content */}
        <div className={styles.content}>
          <span className={styles.eyebrow}>Database Analysis &amp; Design</span>
          <h2 className={styles.heading}>
            Your Access database,{" "}
            <span className={styles.accent}>hosted in the cloud.</span>
          </h2>
          <p className={styles.body}>
            With Microsoft Azure we can host your data in the cloud with
            Microsoft. Your data can then be accessed from our custom built
            Access databases, which can connect from any location, allowing us
            to create cloud based solutions for Microsoft Access.
          </p>
          <p className={styles.body}>
            Whether you have an existing database that needs to move, or you're
            starting from scratch, our developers can plan the architecture
            around how your team actually works.
          </p>

          <Link
            href="#contact"
            className="btn"
            style={{ width: "fit-content" }}
          >
            Discuss your project
          </Link>
        </div>

        {/* Right: SVG illustration */}
        <div className={styles.svgWrap} aria-hidden="true">
          <AzureCloudSyncSvg />
        </div>
      </div>
    </section>
  );
};

export default AzureIntro;
