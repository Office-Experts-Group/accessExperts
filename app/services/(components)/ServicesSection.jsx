import React from "react";
import Link from "next/link";
import Image from "next/image";

import AnimateOnScroll from "../../../components/AnimateOnScroll";
import CardIntersectionWrapper from "../../../components/CardIntersectionWrapper";

import styles from "../../../styles/servicesSection.module.css";

import background from "../../../public/gearBG.webp";

const ServicesSection = () => {
  const services = [
    {
      title: "Custom Database Development",
      description:
        "We design and build bespoke Access databases tailored to your exact business requirements. Our consultants begin with thorough business analysis to understand your workflows, data relationships and reporting needs. We can architect database solutions featuring custom forms for intuitive data entry, sophisticated reports for insights, and VBA automation to eliminate repetitive tasks.",
      links: [
        {
          href: "https://www.officeexperts.com.au/services/by-business-solution/database-development-and-solutions",
          text: "Database Development",
        },
      ],
    },
    {
      title: "Cloud & Online Solutions",
      description:
        "Extend your Access databases beyond the desktop with our cloud and online integration services. We specialise in connecting Access to Office 365, SharePoint and Azure SQL Server, enabling remote access and real-time collaboration. You may require a fully cloud-hosted solution, a hybrid approach combining local and cloud storage, or integration with Microsoft 365 apps.",
      links: [
        {
          href: "/access-online",
          text: "Cloud Solutions",
        },
        {
          href: "/access-azure-cloud-based-solutions",
          text: "Azure Integration",
        },
      ],
    },
    {
      title: "Third-Party Integration",
      description:
        "Maximise your database investment by connecting Access with the business applications you already use. Our integration experts link Access databases to CRM systems like Dynamics and Salesforce, accounting packages including MYOB, Xero and QuickBooks, and other Microsoft Office applications. We build automated data flows that eliminate manual re-entry, ensure data consistency across platforms, and create unified reporting dashboards.",
      links: [
        {
          href: "/3rd-party-product-integration",
          text: "Integration Services",
        },
      ],
    },
    {
      title: "Migration & Upgrades",
      description:
        "Modernise legacy databases with our comprehensive migration and upgrade services. We handle Access version upgrades to ensure compatibility with current Windows and Office releases, migrate databases to SQL Server for improved performance and scalability, and convert outdated systems to contemporary architectures. Our migration process includes thorough testing, user training, and post-migration support.",
      links: [
        {
          href: "/upgrades-and-migration",
          text: "Migration Services",
        },
      ],
    },
    {
      title: "Support & Maintenance",
      description:
        "Keep your Access databases running at peak performance with our proactive support and maintenance services. We provide rapid troubleshooting for urgent issues, performance optimisation to improve speed and reliability, and regular health checks to prevent problems before they occur. We offer flexible arrangements from ad-hoc assistance to comprehensive maintenance contracts.",
      links: [
        {
          href: "/access-support",
          text: "Get Support",
        },
      ],
    },
    {
      title: "Power BI Integration",
      description:
        "Transform your Access data into compelling visual insights with Power BI integration. We connect your Access databases to Power BI, creating interactive dashboards and automated reports that bring your data to life. Our consultants design custom visualisations, implement real-time analytics, and build self-service reporting solutions that empower decision-makers across your organisation.",
      links: [
        {
          href: "/integrate-access-with-power-bi",
          text: "Power BI Integration",
        },
      ],
    },
  ];

  return (
    <section className={styles.servicesSection}>
      <Image
        src={background}
        alt="Background"
        className={`${styles.backgroundImage} ${styles.top}`}
      />
      <Image
        src={background}
        alt="Background"
        className={`${styles.backgroundImage} ${styles.bottom}`}
      />
      <div className={styles.container}>
        <AnimateOnScroll animation="fade-up" duration={1} delay={0}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              Our Microsoft Access Services
            </h2>
            <p className={styles.sectionSubtitle}>
              Tailored Database Solutions for Every Business Need
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-down" delay={0.2} duration={1}>
          <div className={styles.servicesGrid}>
            {services.map((service, index) => (
              <CardIntersectionWrapper key={index}>
                <div className={styles.serviceCard}>
                  <h3 className={styles.serviceTitle}>{service.title}</h3>

                  <p className={styles.serviceDescription}>
                    {service.description}
                  </p>

                  {service.links.length > 0 && (
                    <div className={styles.serviceLinks}>
                      {service.links.map((link, linkIndex) => (
                        <Link
                          key={linkIndex}
                          href={link.href}
                          className={styles.serviceLink}
                        >
                          <span>{link.text}</span>
                          <svg viewBox="0 0 24 24" className={styles.linkIcon}>
                            <path
                              d="M7 17L17 7M17 7H8M17 7V16"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </CardIntersectionWrapper>
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default ServicesSection;
