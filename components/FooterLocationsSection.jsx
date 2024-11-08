import React from "react";
import Link from "next/link";

import styles from "../styles/footerLocations.module.css";

const FooterLocationsSection = () => {
  return (
    <div className={styles.locationsSection}>
      <h3>Our Locations</h3>
      <p className={styles.remoteAccess}>Australia-wide via remote access</p>

      {/* Sydney with Services Dropdown */}
      <div className={styles.dropdownSection}>
        <h4 className={styles.dropdownHeader}>Sydney</h4>
        <div className={styles.dropdownContent}>
          <div className={styles.serviceGroup}>
            <Link href="https://www.officeexperts.com.au/excel-and-access-experts-sydney/">
              Excel
            </Link>
            <Link href="https://www.officeexperts.com.au/excel-and-access-experts-sydney/">
              Access
            </Link>
          </div>
          <div className={styles.serviceGroup}>
            <Link href="https://www.officeexperts.com.au/word-and-powerpoint-experts-sydney/">
              Word
            </Link>
            <Link href="https://www.officeexperts.com.au/word-and-powerpoint-experts-sydney/">
              PowerPoint
            </Link>
          </div>
          <div className={styles.serviceGroup}>
            <Link href="https://www.officeexperts.com.au/office-and-office-365-experts-sydney/">
              Office
            </Link>
            <Link href="/https://www.officeexperts.com.au/office-and-office-365-experts-sydney/">
              Office 365
            </Link>
          </div>
        </div>
      </div>

      {/* Melbourne with Services Dropdown */}
      <div className={styles.dropdownSection}>
        <h4 className={styles.dropdownHeader}>Melbourne</h4>
        <div className={styles.dropdownContent}>
          <div className={styles.serviceGroup}>
            <Link href="https://www.officeexperts.com.au/excel-and-access-experts-melbourne/">
              Excel
            </Link>
            <Link href="https://www.officeexperts.com.au/excel-and-access-experts-melbourne/">
              Access
            </Link>
          </div>
          <div className={styles.serviceGroup}>
            <Link href="https://www.officeexperts.com.au/word-and-powerpoint-experts-melbourne/">
              Word
            </Link>
            <Link href="https://www.officeexperts.com.au/word-and-powerpoint-experts-melbourne/">
              PowerPoint
            </Link>
          </div>
          <div className={styles.serviceGroup}>
            <Link href="https://www.officeexperts.com.au/office-and-office-365-experts-melbourne/">
              Office
            </Link>
            <Link href="https://www.officeexperts.com.au/office-and-office-365-experts-melbourne/">
              Office 365
            </Link>
          </div>
        </div>
      </div>

      {/* Richmond with Services Dropdown */}
      <div className={styles.dropdownSection}>
        <h4 className={styles.dropdownHeader}>Richmond</h4>
        <div className={styles.dropdownContent}>
          <div className={styles.serviceGroup}>
            <Link href="https://www.officeexperts.com.au/excel-and-access-experts-richmond/">
              Excel
            </Link>
            <Link href="https://www.officeexperts.com.au/excel-and-access-experts-richmond/">
              Access
            </Link>
          </div>
          <div className={styles.serviceGroup}>
            <Link href="https://www.officeexperts.com.au/word-and-powerpoint-experts-richmond/">
              Word
            </Link>
            <Link href="https://www.officeexperts.com.au/word-and-powerpoint-experts-richmond/">
              PowerPoint
            </Link>
          </div>
          <div className={styles.serviceGroup}>
            <Link href="https://www.officeexperts.com.au/office-and-office-365-experts-richmond/">
              Office
            </Link>
            <Link href="https://www.officeexperts.com.au/office-and-office-365-experts-richmond/">
              Office 365
            </Link>
          </div>
        </div>
      </div>

      {/* Static Links */}
      <Link
        href="https://www.officeexperts.com.au/office-excel-access-and-365-experts-brisbane/"
        className={styles.staticLink}
      >
        Brisbane
      </Link>
      <Link
        href="https://www.officeexperts.com.au/word-and-powerpoint-experts-gold-coast/"
        className={styles.staticLink}
      >
        Gold Coast
      </Link>
      <Link
        href="https://www.officeexperts.com.au/word-and-powerpoint-experts-canberra/"
        className={styles.staticLink}
      >
        Canberra
      </Link>

      {/* Perth with Services Dropdown */}
      <div className={styles.dropdownSection}>
        <h4 className={styles.dropdownHeader}>Perth</h4>
        <div className={styles.dropdownContent}>
          <div className={styles.serviceGroup}>
            <Link href="https://www.officeexperts.com.au/word-and-powerpoint-experts-perth/">
              Word
            </Link>
            <Link href="https://www.officeexperts.com.au/word-and-powerpoint-experts-perth/">
              PowerPoint
            </Link>
          </div>
          <div className={styles.serviceGroup}>
            <Link href="https://www.officeexperts.com.au/office-excel-access-and-365-experts-perth/">
              Excel
            </Link>
            <Link href="https://www.officeexperts.com.au/office-excel-access-and-365-experts-perth/">
              Access
            </Link>
          </div>
          <div className={styles.serviceGroup}>
            <Link href="https://www.officeexperts.com.au/office-excel-access-and-365-experts-perth/">
              Office
            </Link>
            <Link href="https://www.officeexperts.com.au/office-excel-access-and-365-experts-perth/">
              Office 365
            </Link>
          </div>
        </div>
      </div>

      {/* More Static Links */}
      <Link
        href="https://www.officeexperts.com.au/office-excel-access-and-word-experts-wollongong/"
        className={styles.staticLink}
      >
        Wollongong
      </Link>
      <Link
        href="https://www.officeexperts.com.au/office-excel-access-and-365-experts-darwin/"
        className={styles.staticLink}
      >
        Darwin
      </Link>
      <Link
        href="https://www.officeexperts.com.au/excel-and-access-experts-central-coast-nsw/"
        className={styles.staticLink}
      >
        Central Coast
      </Link>
      <Link
        href="/https://www.officeexperts.com.au/office-excel-access-and-365-experts-northern-rivers-nsw/"
        className={styles.staticLink}
      >
        Northern Rivers
      </Link>
    </div>
  );
};

export default FooterLocationsSection;
