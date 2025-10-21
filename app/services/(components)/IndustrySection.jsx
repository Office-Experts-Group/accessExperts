import React from "react";
import Image from "next/image";

import AnimateOnScroll from "../../../components/AnimateOnScroll";

import styles from "../../../styles/pageSegment3.module.css";

// Import industry images - using available images or placeholder
import manufacturing from "../../../public/manufacturing.webp";
import healthcare from "../../../public/healthcare.webp";
import retail from "../../../public/retail.webp";
import government from "../../../public/government.webp";
import financial from "../../../public/financial.webp";
import education from "../../../public/education.webp";
import construction from "../../../public/construction.webp";
import professional from "../../../public/professional.webp";

const IndustrySection = () => {
  const industries = [
    {
      title: "Manufacturing & Logistics",
      description: "Production scheduling and inventory management",
      detail:
        "Streamline production scheduling, inventory management, quality control tracking and supply chain coordination with custom databases that integrate with your existing systems and provide real-time operational visibility.",
      image: manufacturing,
    },
    {
      title: "Healthcare & Medical",
      description: "Patient records and compliance documentation",
      detail:
        "Manage patient records, appointment scheduling, billing systems and compliance documentation with secure, HIPAA-compliant databases designed for medical practices, clinics and healthcare organisations.",
      image: healthcare,
    },
    {
      title: "Education & Training",
      description: "Student enrolments and course scheduling",
      detail:
        "Coordinate student enrolments, course scheduling, attendance tracking, assessment management and reporting requirements with intuitive databases tailored for schools, universities and training organisations.",
      image: education,
    },
    {
      title: "Professional Services",
      description: "Client matters and project timelines",
      detail:
        "Track client matters, project timelines, billable hours, resource allocation and document management with sophisticated databases designed for legal firms, consultancies and professional service providers.",
      image: professional,
    },
    {
      title: "Government & Public Sector",
      description: "Secure, compliant database solutions",
      detail:
        "Deliver secure, compliant database solutions for government departments and agencies, managing everything from permit applications and regulatory compliance to constituent services and interdepartmental data sharing.",
      image: government,
    },
    {
      title: "Retail & E-commerce",
      description: "Inventory and customer relationship management",
      detail:
        "Manage inventory levels, customer relationships, sales tracking, supplier coordination and multi-channel operations with databases that integrate with point-of-sale systems and e-commerce platforms.",
      image: retail,
    },
    {
      title: "Construction & Engineering",
      description: "Project management and resource scheduling",
      detail:
        "Control project management, resource scheduling, equipment tracking, contractor coordination and compliance documentation with robust databases built for the construction and engineering sectors.",
      image: construction,
    },
    {
      title: "Finance & Accounting",
      description: "Financial reporting and audit trails",
      detail:
        "Automate financial reporting, client portfolio management, audit trails, reconciliation processes and regulatory compliance with secure databases designed for accounting firms and financial service providers.",
      image: financial,
    },
  ];

  return (
    <section
      className={styles.pageSegment}
      id="industries"
      style={{
        padding: "6rem 0 0 0",
        scrollMarginTop: "100px",
        margin: "0",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
        className={styles.content}
      >
        <AnimateOnScroll animation="fade-up" duration={1} delay={0.2}>
          <div className={styles.underline}>
            <h2
              style={{
                fontSize: "2rem",
                textAlign: "center",
                padding: "0 1rem",
              }}
            >
              Industry-Specific Solutions
            </h2>
          </div>
          <p
            style={{
              maxWidth: "100vw",
              textAlign: "center",
              padding: "0 10vw",
            }}
          >
            Our Access consultants bring deep industry knowledge and
            cross-sector expertise to every project. Our solutions cover diverse
            industries throughout Australia, understanding the unique compliance
            requirements, workflows and data challenges each sector faces.
          </p>
        </AnimateOnScroll>

        <div className={styles.useCases}>
          {industries.map((industry, index) => (
            <AnimateOnScroll
              key={index}
              animation="slide-left"
              duration={1}
              delay={0.2}
            >
              <div className={styles.gridHolder}>
                <Image
                  src={industry.image}
                  width={150}
                  height={150}
                  alt={`${industry.title} icon`}
                />
                <div>
                  <h3 style={{ color: "#046999" }}>{industry.title}</h3>
                  <p style={{ fontWeight: "600", marginBottom: "0.5rem" }}>
                    {industry.description}
                  </p>
                  <p style={{ color: "#777a7e" }}>{industry.detail}</p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustrySection;
