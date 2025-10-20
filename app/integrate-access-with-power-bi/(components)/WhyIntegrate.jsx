import React from "react";
import Image from "next/image";

import DeskImage from "./DeskImage";

import styles from "../../../styles/pageSegment4.module.css";

import accessBI from "../../../public/access-to-power-bi.webp";
import accessAus from "../../../public/access-australia.webp";

const WhyIntegrate = () => {
  const businessChallenges = [
    {
      strong: "Limited visualisation tools",
      text: "charts and pivot tables can only go so far.",
    },
    {
      strong: "Scalability issues",
      text: "performance slows as file sizes and user numbers increase.",
    },
    {
      strong: "Manual workflows",
      text: "frequent exports to Excel or CSV for analysis.",
    },
    {
      strong: "Difficulty sharing insights",
      text: "data often stays locked on one computer or network.",
    },
  ];

  const powerBIBenefits = [
    {
      strong: "Interactive dashboards",
      text: "turn Access tables and queries into live visual reports.",
    },
    {
      strong: "Centralised sharing",
      text: "publish dashboards to Power BI Service or Microsoft Teams for easy access.",
    },
    {
      strong: "Automated refresh",
      text: "schedule data updates directly from your Access source.",
    },
    {
      strong: "Cross-data analysis",
      text: "combine Access with Excel, SQL, SharePoint, or even online APIs to get a complete picture.",
    },
    {
      strong: "Modern visuals and AI-driven insights",
      text: "spot trends and outliers with just a few clicks.",
    },
  ];

  const useCases = [
    {
      strong: "Sales Performance Dashboards",
      text: "Sales data stored in Access is visualised in Power BI for regional and product-level analysis, helping managers track KPIs in real time.",
    },
    {
      strong: "Operational Efficiency",
      text: "Combining Access with Excel and third-party APIs (e.g., accounting or CRM tools) gives business owners a unified view of operations.",
    },
    {
      strong: "Internal Reporting Portals",
      text: "Power BI dashboards are embedded into company intranets or Microsoft Teams channels, allowing team members to explore live data without leaving their workspace.",
    },
  ];

  return (
    <>
      {/* Section 1: Introduction and Business Challenge */}
      <div className="animate-wrapper">
        <div className={styles.pageSegment} style={{ margin: "4rem 0" }}>
          <div className={styles.content}>
            <h2 style={{ marginBottom: "1rem" }}>
              Why Integrate Access with Power BI?
            </h2>
            <h3 style={{ marginBottom: "1rem", fontSize: "1.5rem" }}>
              Turning Legacy Data into Visual Dashboards
            </h3>
            <p style={{ marginBottom: "1.5rem" }}>
              Power BI extends the life and value of your Access database by
              transforming your data into interactive dashboards and real-time
              reports that can be shared securely within your team.
            </p>

            <h3 style={{ marginBottom: "1rem", fontSize: "1.5rem" }}>
              The Business Challenge
            </h3>
            <p style={{ marginBottom: "1rem" }}>
              Microsoft Access is a powerful desktop database, but it wasn't
              designed for the latest demands for data analytics. Integrating
              within the Microsoft Suite allows for a reliable, secure data
              transition and helps avoid some common issues with legacy Access
              databases.
            </p>

            <div className={styles.points}>
              {businessChallenges.map(({ strong, text }, index) => (
                <div
                  key={index}
                  className={styles.point}
                  style={{ marginBottom: "0.5rem" }}
                >
                  <div className={styles.tick}>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="1"
                      viewBox="0 0 24 24"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"></path>
                    </svg>
                  </div>
                  <p>
                    <strong>{strong}</strong> — {text}
                  </p>
                </div>
              ))}
            </div>

            <p style={{ marginTop: "1.5rem" }}>
              For teams that depend on Access, these limitations can make it
              hard to leverage their existing assets, integrating with Power BI
              reveals a plethora of new tools to visualise and utilise your
              business data.
            </p>
          </div>

          <div className="image-wrapper">
            <Image
              src={accessBI}
              alt="Access to power BI integration"
              width={450}
              height={300}
            />
          </div>
        </div>
      </div>

      {/* Section 2: What Power BI Brings */}
      <div
        className="animate-wrapper"
        style={{ backgroundColor: "rgb(242, 243, 245)" }}
      >
        <DeskImage />
        <div className={styles.pageSegment} style={{ paddingBottom: "6rem" }}>
          <div className={styles.content}>
            <h2 style={{ marginBottom: "1rem" }}>What Power BI Brings</h2>
            <p style={{ marginBottom: "1rem" }}>
              Integrating Power BI with Access opens new possibilities...
            </p>

            <div className={styles.points}>
              {powerBIBenefits.map(({ strong, text }, index) => (
                <div
                  key={index}
                  className={styles.point}
                  style={{ marginBottom: "0.5rem" }}
                >
                  <div className={styles.tick}>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="1"
                      viewBox="0 0 24 24"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"></path>
                    </svg>
                  </div>
                  <p>
                    <strong>{strong}</strong> — {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Section 3: Real-World Use Cases */}
      <div className="animate-wrapper">
        <div className={styles.pageSegment} style={{ margin: "6rem 0" }}>
          <div className={styles.content}>
            <h2 style={{ marginBottom: "1rem" }}>
              Real-World Use Cases in Australia
            </h2>
            <p style={{ marginBottom: "1rem" }}>
              Here are a few ways Australian organisations are benefiting from
              this integration...
            </p>

            <div className={styles.points}>
              {useCases.map(({ strong, text }, index) => (
                <div
                  key={index}
                  className={styles.point}
                  style={{ marginBottom: "0.5rem" }}
                >
                  <div className={styles.tick}>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="1"
                      viewBox="0 0 24 24"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"></path>
                    </svg>
                  </div>
                  <p>
                    <strong>{strong}</strong> — {text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="image-wrapper">
            <Image
              src={accessAus}
              alt="Australian businesses using Power BI with Access"
              width={450}
              height={300}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyIntegrate;
