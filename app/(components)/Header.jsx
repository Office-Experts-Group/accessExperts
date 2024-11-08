"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "../../../../styles/header.module.css";
import MobileNav from "./MobileNav";

import logo from "../../../../public/logo300x130.webp";

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Handle scroll
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        setIsScrolled(window.scrollY > 10);
      }
    };

    // Add scroll listener only on client
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
      // Initial check
      handleScroll();
    }

    // Cleanup
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const handleMouseEnter = (dropdown) => {
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <div
        className={styles.logo}
        style={
          isScrolled
            ? {
                transform: "scale(0.5)",
                transition: "transform 0.3s ease-in-out",
              }
            : {}
        }
      >
        <Image src={logo} alt="Office experts logo" width={300} height={130} />
      </div>

      <div className={styles.mobNav}>
        <MobileNav />
      </div>

      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li
            className={styles.navItem}
            onMouseEnter={() => handleMouseEnter("home")}
            onMouseLeave={handleMouseLeave}
          >
            <Link href="/">
              <p className={styles.navLink}>Home</p>
            </Link>
            <ul
              className={`${styles.dropdown} ${
                activeDropdown === "home" ? styles.active : ""
              }`}
            >
              <li>
                <Link href="https://officeexperts.com.au">Office Experts</Link>
              </li>
              <li>
                <Link href="https://excelexperts.com.au">Excel Experts</Link>
              </li>
              <li>
                <Link href="https://powerplatformexperts.com.au">
                  Power Platform Experts
                </Link>
              </li>
              <li>
                <Link href="/">Access Experts</Link>
              </li>
              <li>
                <Link href="https://wordexperts.com.au">Word Experts</Link>
              </li>
            </ul>
          </li>
          <li
            className={styles.navItem}
            onMouseEnter={() => handleMouseEnter("services")}
            onMouseLeave={handleMouseLeave}
          >
            <p className={styles.navLink}>Services</p>
            <ul
              className={`${styles.dropdown} ${
                activeDropdown === "services" ? styles.active : ""
              }`}
            >
              <li>
                <Link href="https://www.officeexperts.com.au/services/">
                  All our services
                </Link>
              </li>
              <li className={styles.nestedDropdown}>
                <Link href="https://www.powerplatformexperts.com.au/">
                  Microsoft Power Platform
                </Link>
                <ul className={styles.nestedItems}>
                  <li>
                    <Link href="https://www.powerplatformexperts.com.au/services/microsoft-power-platform/microsoft-power-apps">
                      Microsoft Power Apps
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.powerplatformexperts.com.au/services/microsoft-power-platform/microsoft-power-bi">
                      Microsoft Power BI
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.powerplatformexperts.com.au/services/microsoft-power-platform/microsoft-power-automate">
                      Microsoft Power Automate
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.powerplatformexperts.com.au/services/microsoft-power-platform/microsoft-power-pages">
                      Microsoft Power Pages
                    </Link>
                  </li>
                </ul>
              </li>
              <li className={styles.nestedDropdown}>
                <Link href="https://www.officeexperts.com.au/services/by-office-product/">
                  By Office Product
                </Link>
                <ul className={styles.nestedItems}>
                  <li>
                    <Link href="https://www.officeexperts.com.au/services/microsoft-office/">
                      Microsoft Office
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.excelexperts.com.au/">
                      Microsoft Excel
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.accessexperts.com.au/">
                      Microsoft Access
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.wordexperts.com.au/">
                      Microsoft Word
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.officeexperts.com.au/services/microsoft-powerpoint/">
                      Microsoft PowerPoint
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.officeexperts.com.au/services/microsoft-office-365/">
                      Microsoft Office 365
                    </Link>
                  </li>
                </ul>
              </li>
              <li className={styles.nestedDropdown}>
                <Link href="https://www.officeexperts.com.au/services/by-business-solution/">
                  Business Solutions
                </Link>
                <ul className={styles.nestedItems}>
                  <li>
                    <Link href="https://www.officeexperts.com.au/services/by-business-solution/vba-macro-development/">
                      VBA Macro Development
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.officeexperts.com.au/services/by-business-solution/custom-office-solutions/">
                      Custom Office Solutions
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.officeexperts.com.au/services/by-business-solution/database-development-and-solutions/">
                      Database Solutions
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.officeexperts.com.au/services/by-business-solution/online-solutions/">
                      Online Solutions
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.officeexperts.com.au/services/by-business-solution/cloud-based-solutions-with-azure/">
                      Microsoft Cloud Based Solutions
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.officeexperts.com.au/services/by-business-solution/dashboards/">
                      Dashboards
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.officeexperts.com.au/services/by-business-solution/3rd-party-application-or-office-integration/">
                      3rd Party App or Office Integration
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.officeexperts.com.au/services/by-business-solution/office-and-sql-server-integration/">
                      Office and SQL Server
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.officeexperts.com.au/services/microsoft-office/upgrades-and-migration/">
                      Upgrades and Migration
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.officeexperts.com.au/services/by-business-solution/add-in-creation/">
                      Add-in Creation
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li className={styles.navItem}>
            <Link href={`/client-testimonials`} className={styles.navLink}>
              Testimonials
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href={`/meet-the-team`} className={styles.navLink}>
              Meet the Team
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link
              href="https://www.officeexperts.com.au/faq"
              className={styles.navLink}
            >
              FAQ
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href={`/contact-us`} className={styles.navLink}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      <div className={styles.headerContacts}>
        <div className={styles.socials}>
          <Link
            href="https://www.facebook.com/MSOfficeExperts"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              stroke="#f8f8f8"
              fill="#f8f8f8"
              strokeWidth="0"
              viewBox="0 0 320 512"
              height="1.2em"
              width="1.2em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
            </svg>
          </Link>

          <Link
            href="https://www.instagram.com/officeexpertsgroup"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              stroke="#f8f8f8"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              height="1.2em"
              width="1.2em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.5" y2="6.5"></line>
            </svg>
          </Link>

          <Link
            href="https://www.twitter.com/OfficeExpertsG1"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              stroke="#f8f8f8"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              height="1.2em"
              width="1.2em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
            </svg>
          </Link>

          <Link
            href="https://www.youtube.com/channel/UCw2Xf02ukEwvM6fQ2lVZxuw"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              stroke="#f8f8f8"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              height="1.2em"
              width="1.2em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
              <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
            </svg>
          </Link>

          <Link
            href="https://www.linkedin.com/company/office-experts-group"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              stroke="#f8f8f8"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              height="1.2em"
              width="1.2em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </Link>
        </div>
        <svg
          style={{ cursor: "pointer" }}
          stroke="#f8f8f8"
          fill="#f8f8f8"
          strokeWidth="0"
          viewBox="0 0 24 24"
          height="1.4em"
          width="1.4em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M19.023,16.977c-0.513-0.488-1.004-0.997-1.367-1.384c-0.372-0.378-0.596-0.653-0.596-0.653l-2.8-1.337 C15.34,12.37,16,10.763,16,9c0-3.859-3.14-7-7-7S2,5.141,2,9s3.14,7,7,7c1.763,0,3.37-0.66,4.603-1.739l1.337,2.8 c0,0,0.275,0.224,0.653,0.596c0.387,0.363,0.896,0.854,1.384,1.367c0.494,0.506,0.988,1.012,1.358,1.392 c0.362,0.388,0.604,0.646,0.604,0.646l2.121-2.121c0,0-0.258-0.242-0.646-0.604C20.035,17.965,19.529,17.471,19.023,16.977z M9,14 c-2.757,0-5-2.243-5-5s2.243-5,5-5s5,2.243,5,5S11.757,14,9,14z"></path>
        </svg>
        <button className="btn">Contact Us</button>
      </div>
    </header>
  );
};

export default Header;
