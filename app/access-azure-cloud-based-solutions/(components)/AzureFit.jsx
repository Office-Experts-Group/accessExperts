// app/access-azure-cloud-based-solutions/(components)/AzureFit.jsx

import React from "react";
import Link from "next/link";
import styles from "../../../styles/azureFit.module.scss";

import { FitCheckSvg } from "../(svgs)/FitCheckSvg";

const AzureFit = () => {
  return (
    <section className={styles.section} id="is-access-azure">
      <div className={styles.content}>
        <span className={styles.eyebrow}>Weighing Up Your Options</span>
        <h2 className={styles.heading}>Is Access/Azure for You?</h2>
        <p className={styles.body}>
          While we can also create database solutions without using Azure, the
          fact that your database in Azure is an{" "}
          <Link href="https://www.officeexperts.com.au/services/by-business-solution/office-and-sql-server-integration/">
            SQL Server database
          </Link>{" "}
          that is cloud based means some of the previous limitations on Access
          become irrelevant. It also means we can create very cost effective
          solutions, which in the past wasn't possible for web/cloud based
          applications.
        </p>

        <div className={styles.note}>
          <p className={styles.noteText}>
            <strong>The main constraint:</strong> non-Windows-based devices. MS
            Access can't be installed on these, or the scale of the database and
            its users needs to be very large. If either applies to you, read our
            guide on{" "}
            <Link href="/is-access-right-for-your-company">
              whether Access is right for your company
            </Link>
            .
          </p>
        </div>
      </div>

      <div className={styles.visual} aria-hidden="true">
        <FitCheckSvg />
      </div>
    </section>
  );
};

export default AzureFit;
