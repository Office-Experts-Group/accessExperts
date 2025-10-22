import React from "react";
import Image from "next/image";

import AnimateOnScroll from "../../../components/AnimateOnScroll";

import styles from "../../../styles/pageSegment4.module.css";

import performance from "../../../public/performance.webp";
import paperWork from "../../../public/paperWork.webp";

const OptimisationServices = () => {
  const servicesFirstHalf = [
    {
      strong: "Performance Analysis & Diagnosis ",
      text: "begins with comprehensive testing to identify bottlenecks. We analyse query execution plans, review table structures, examine form load times, and profile VBA code performance. Our detailed diagnostic reports pinpoint exactly what's slowing your database down and provide clear recommendations prioritised by impact.",
    },
    {
      strong: "Database Splitting & Backend Optimisation ",
      text: "separates your data from your interface, dramatically improving multi-user performance. We create optimised backend databases with proper indexing, establish reliable linked table connections, and implement persistent connection strategies to eliminate the performance lag that plagues unsplit databases over networks.",
    },
    {
      strong: "Index Optimisation & Query Tuning ",
      text: "transforms slow queries into lightning-fast operations. We add strategic indexes to frequently queried fields, remove redundant or counterproductive indexes, rewrite inefficient queries, and optimise joins and filtering. A well-indexed database can run hundreds of times faster than one without proper indexing.",
    },
  ];
  const servicesSecondHalf = [
    {
      strong: "Form & Report Performance Improvements ",
      text: "address the most visible performance issues users encounter daily. We implement record source optimisation, reduce subform overhead, add progressive loading for large datasets, optimise combo box row sources, and eliminate unnecessary recalculations. Forms that took minutes to open can load in seconds.",
    },
    {
      strong: "VBA Code Optimisation ",
      text: "eliminates programming bottlenecks that slow your database. We replace inefficient DLookup functions with recordsets, optimise loops and array operations, implement proper error handling, eliminate redundant database calls, and add progress indicators for long-running processes. Clean, efficient code makes a remarkable difference.",
    },
    {
      strong: "SQL Server Migration for Scalability ",
      text: "moves your backend data to Microsoft SQL Server when Access reaches its limits. This migration handles larger datasets, supports more concurrent users, provides enterprise-grade reliability, and offers advanced features like stored procedures and views. Your familiar Access front-end remains unchanged while performance improves dramatically.",
    },
    {
      strong: "Regular Maintenance Planning ",
      text: "prevents performance degradation through scheduled compact and repair operations, automated backup procedures, index maintenance routines, growth monitoring and alerts, and periodic performance reviews. Proactive maintenance keeps your database running smoothly and catches potential issues before they impact users.",
    },
  ];

  return (
    <section className="animate-wrapper" style={{ margin: "6rem 0" }}>
      <div className={`${styles.pageSegment} ${styles.services}`}>
        <AnimateOnScroll animation="slide-left" duration={1} delay={0}>
          <div className={styles.content}>
            <h2 style={{ marginBottom: "1rem" }}>
              Our Database Optimisation Services
            </h2>
            <p style={{ marginBottom: "2rem" }}>
              We deliver comprehensive performance improvements tailored to your
              database's specific issues. Our optimisation services address
              everything from quick wins to major architectural improvements,
              ensuring your Access database operates at peak efficiency.
            </p>

            <div className={styles.splitWrapper}>
              <div className={styles.points}>
                {servicesFirstHalf.map((service, index) => (
                  <div
                    key={index}
                    className={styles.point}
                    style={{ marginBottom: "1rem" }}
                  >
                    <div className={styles.pointContent}>
                      <p>
                        <strong style={{ color: "#046999" }}>
                          {service.strong}
                        </strong>
                        {service.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <Image
                src={performance}
                alt="Person beginning a sprint"
                width={300}
                height={150}
                className={styles.splitImage}
              />
            </div>

            <div className={styles.splitWrapper}>
              <Image
                src={paperWork}
                alt="paper Work"
                width={450}
                height={300}
                className={styles.splitImage}
              />

              <div className={styles.points} style={{ marginTop: "3rem" }}>
                {servicesSecondHalf.map((service, index) => (
                  <div
                    key={index}
                    className={styles.point}
                    style={{ marginBottom: "1rem" }}
                  >
                    <div className={styles.pointContent}>
                      <p>
                        <strong style={{ color: "#046999" }}>
                          {service.strong}
                        </strong>
                        {service.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default OptimisationServices;
