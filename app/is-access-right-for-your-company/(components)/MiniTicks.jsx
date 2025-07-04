import React from "react";
import Image from "next/image";
import Link from "next/link";

import AnimateOnScroll from "../../../components/AnimateOnScroll";

import styles from "../../../styles/pageSegmentCenter.module.css";

import access from "../../../public/access600x400.webp";

const MiniTicks = () => {
  const benefits = [
    {
      text: "SQL Server",
      link: "https://www.officeexperts.com.au/services/by-business-solution/office-and-sql-server-integration",
    },
    {
      text: "Visual Studio (C#, VB, ASP)",
      isText: true,
    },
    {
      text: "MySQL",
      isText: true,
    },
    {
      text: "Office 365",
      link: "https://www.officeexperts.com.au/services/microsoft-office-365",
    },
    {
      text: "SharePoint",
      link: "/access-online",
    },
    {
      text: "Azure",
      link: "/access-azure-cloud-based-solutions",
    },
  ];

  const renderBenefitContent = (benefit) => {
    if (benefit.isText) {
      return <p>{benefit.text}</p>;
    }

    return (
      <Link href={benefit.link} className={styles.benefitLink}>
        {benefit.text}
      </Link>
    );
  };

  return (
    <section
      className={`${styles.pageSegment} ${styles.gap} ${styles.btmMargin}`}
    >
      <div className={styles.pageSegmentCenter}>
        <h2>Access Help and Support</h2>

        <p className={styles.tickText}>
          In addition to creating Access databases, our experienced consultants
          build database solutions with technologies including:
        </p>
        <div className={styles.benefitsList}>
          {benefits.map((benefit, index) => (
            <AnimateOnScroll
              key={benefit.index}
              animation="slide-left"
              delay={index * 0.1}
            >
              <div className={styles.point}>
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
                <p>{renderBenefitContent(benefit)}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>

      <AnimateOnScroll animation="slide-right" duration={1} delay={0}>
        <Image
          src={access}
          alt="person pointing at a computer screen"
          width={600}
          height={400}
          className={styles.marginLeft}
        />
      </AnimateOnScroll>
    </section>
  );
};

export default MiniTicks;
