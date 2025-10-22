import React from "react";

import ServiceHero from "../../components/ServiceHero";
import PageSegmentMain from "./(components)/PageSegmentMain";
import Promo from "../../components/Promo";
import ExpertsAwait from "../../components/ExpertsAwait";
import Contact from "../../components/Contact";

import repair from "../../public/pageHeros/repair.webp";
import repairMob from "../../public/pageHeros/mob/repairMob.webp";

import {
  generateProfessionalServiceSchema,
  generateOrganizationSchema,
} from "../../utils/schemaGenerators";
import IntroSection from "./(components)/IntroSection";
import CausesSection from "./(components)/CausesSection";
import OptimisationServices from "./(components)/OptimisationServices";
import ConclusionSection from "./(components)/ConclusionSection";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    generateOrganizationSchema(),
    generateProfessionalServiceSchema(),
    {
      "@type": "WebPage",
      "@id":
        "https://www.accessexperts.com.au/access-database-optimisation-and-repair",
      url: "https://www.accessexperts.com.au/access-database-optimisation-and-repair",
      name: "Optimise & Repair Slow Access Databases | Database Performance Experts",
      isPartOf: {
        "@id": "https://www.accessexperts.com.au#website",
      },
      datePublished: "2025-10-22T00:00:00+00:00",
      dateModified: "2025-10-22T00:00:00+00:00",
      description:
        "Professional Access database optimisation and repair services across Australia. Fix slow databases, repair corruption, improve performance. Expert diagnostics, tuning and recovery services from experienced consultants.",
      breadcrumb: {
        "@id":
          "https://www.accessexperts.com.au/access-database-optimisation-and-repair#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: [
            "https://www.accessexperts.com.au/access-database-optimisation-and-repair",
          ],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.accessexperts.com.au/access-database-optimisation-and-repair#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.accessexperts.com.au/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Optimising & Repairing Slow Databases",
        },
      ],
    },
    {
      "@type": "Service",
      "@id":
        "https://www.accessexperts.com.au/access-database-optimisation-and-repair#service",
      name: "Access Database Optimisation and Repair",
      provider: {
        "@id": "https://www.accessexperts.com.au#organization",
      },
      serviceType: "Database Performance Optimisation and Repair",
      description:
        "Comprehensive database optimisation and repair services including performance tuning, corruption repair, query optimisation, index management, and data recovery for Microsoft Access databases.",
      areaServed: {
        "@type": "Country",
        name: "Australia",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Database Optimisation and Repair Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Database Performance Analysis",
              description:
                "Comprehensive diagnostics to identify performance bottlenecks, slow queries, and inefficient database design.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Database Corruption Repair",
              description:
                "Expert repair services for corrupted Access databases including data recovery and file integrity restoration.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Query and Index Optimisation",
              description:
                "Performance tuning through query optimisation, proper indexing strategies, and database structure improvements.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Database Splitting and Backend Optimisation",
              description:
                "Split databases for improved multi-user performance and optimise backend data structures for faster access.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "SQL Server Migration",
              description:
                "Migrate Access backends to SQL Server for improved scalability, performance, and reliability.",
            },
          },
        ],
      },
    },
  ],
};

const Page = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ServiceHero
        title="Optimising & Repairing Slow Databases"
        desktopImage={repair}
        mobileImage={repairMob}
        altDesk="A variety of spanners & tools"
        altMob="A variety of spanners & tools"
      />
      <PageSegmentMain />
      <IntroSection />
      <OptimisationServices />
      <CausesSection />
      <ExpertsAwait />
      {/* <Promo
        h2="Restore Your Database Performance"
        p="Our database specialists can diagnose and resolve performance issues, repair corruption, and optimise your Access databases for peak efficiency. Contact us today for a comprehensive database health check."
      /> */}
      <ConclusionSection />
      <Contact />
    </>
  );
};

export default Page;
