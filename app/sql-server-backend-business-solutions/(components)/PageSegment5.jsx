"use client";
import React from "react";

import AnimateOnScroll from "../../../components/AnimateOnScroll";

const PageSegment5 = () => {
  const keyBenefits = [
    {
      icon: "⚡",
      title: "Speed & Productivity",
      text: "Queries and reports can run up to 10x faster than traditional file-based databases. SQL Server processes queries on the server and returns only results, not entire datasets, dramatically reducing network traffic. Forms that took minutes to load now open in seconds.",
    },
    {
      icon: "🔐",
      title: "Security & Compliance",
      text: "Built-in encryption, access control, and auditing meet modern data-protection standards. Enterprise-grade security features include encrypted storage, automated backups, and comprehensive audit trails that help meet compliance and data-governance requirements.",
    },
    {
      icon: "🌐",
      title: "Integration",
      text: 'Works seamlessly with <a style="cursor: pointer; color: #046999; font-weight: 700;" href="https://www.officeexperts.com.au/services/microsoft-power-bi">Power BI</a>, <a style="cursor: pointer; color: #046999; font-weight: 700;" href="https://www.excelexperts.com.au">Excel</a>, <a style="cursor: pointer; color: #046999; font-weight: 700;" href="https://www.officeexperts.com.au/services/by-business-solution/3rd-party-application-integration">third-party systems</a>. Data flows automatically across your organisation through native Microsoft ecosystem connections and robust API support, reducing admin time and improving accuracy.',
    },
    {
      icon: "📈",
      title: "Scalability",
      text: "Easily handle more users and larger data volumes without rewriting your application. SQL Server's architecture grows effortlessly from small teams to enterprise operations, supporting 10 MB to multiple terabytes of data with consistent performance.",
    },
    {
      icon: "💾",
      title: "Reliability",
      text: "Automated backups and transaction logging reduce downtime and data-loss risk. Continuous backup and restore options, automatic data integrity checks, and advanced recovery tools protect your business from hardware failures and data corruption.",
    },
    {
      icon: "💡",
      title: "Future-Ready",
      text: 'SQL Server supports analytics, AI, and business intelligence tools — keeping your data strategy modern. Advanced features like machine learning integration, real-time analytics, and <a style="cursor: pointer; color: #046999; font-weight: 700;" href="/access-azure-cloud-based-solutions">cloud connectivity</a> ensure your database grows with emerging technologies.',
    },
    {
      icon: "🔄",
      title: "Server-Side Processing",
      text: "Queries execute on the server and return only the results you need, not entire tables. This reduces network traffic dramatically compared to Access backends, delivering faster load times and more responsive forms, especially for remote staff or VPN connections.",
    },
    {
      icon: "📊",
      title: "Advanced Indexing",
      text: "Clustered and non-clustered indexes, covering indexes, and optimised execution plans dramatically improve query performance. Complex queries that took minutes in Access execute in seconds, while automatic query optimisation ensures consistent performance.",
    },
    {
      icon: "🔌",
      title: "Connection Pooling",
      text: "ODBC connections use connection pooling to reduce the overhead of repeatedly opening and closing database connections. This eliminates connection delays that plague Access backends, providing instant response times even with frequent database operations.",
    },
    {
      icon: "⚙️",
      title: "Stored Procedures & Views",
      text: "Offload complex logic to pre-compiled stored procedures and views that execute faster than equivalent Access queries. These database objects reduce frontend load, provide consistent optimised performance, and simplify application maintenance.",
    },
    {
      icon: "👥",
      title: "Concurrency Control",
      text: "Row-level locking allows multiple users to edit different records simultaneously without conflicts. Unlike Access which locks entire pages or tables, SQL Server's advanced locking mechanisms eliminate 'database is locked' messages in multi-user environments.",
    },
    {
      icon: "🎯",
      title: "Enterprise Performance",
      text: "Professional database management features including automatic statistics updates, intelligent query caching, and resource governor capabilities ensure optimal performance under heavy workloads. Your database maintains speed and reliability even during peak usage periods.",
    },
  ];

  return (
    <section>
      <div className="animate-wrapper" style={{ margin: "6rem 0 9rem 0" }}>
        <AnimateOnScroll animation="fade-up" duration={1} delay={0}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h2 style={{ marginBottom: "1rem" }}>
              Key Business Benefits of a SQL Server Backend
            </h2>
            <p
              style={{
                maxWidth: "800px",
                margin: "0 auto",
                color: "#777a7e",
                fontSize: "1.1rem",
                lineHeight: "2",
              }}
            >
              SQL Server delivers measurable performance improvements and
              enterprise-grade reliability for growing businesses. Here's how
              the technology transforms your database operations:
            </p>
          </div>
        </AnimateOnScroll>

        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 2rem",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "2rem",
          }}
        >
          {keyBenefits.map((benefit, index) => (
            <AnimateOnScroll
              key={index}
              animation="scale-up"
              duration={1}
              delay={index * 0.05}
            >
              <div
                style={{
                  background: "#fff",
                  border: "1px solid #e0e0e0",
                  borderRadius: "8px",
                  padding: "2rem 1.5rem",
                  textAlign: "center",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
                }}
              >
                <div
                  style={{
                    fontSize: "3rem",
                    marginBottom: "1rem",
                  }}
                >
                  {benefit.icon}
                </div>
                <h3
                  style={{
                    marginBottom: "0.75rem",
                    fontSize: "1.25rem",
                    color: "#2c3e50",
                  }}
                >
                  {benefit.title}
                </h3>
                <p
                  style={{
                    margin: 0,
                    color: "#555",
                    lineHeight: "1.6",
                    fontSize: "0.95rem",
                  }}
                  dangerouslySetInnerHTML={{ __html: benefit.text }}
                />
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PageSegment5;
