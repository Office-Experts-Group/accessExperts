import React from "react";
import dynamic from "next/dynamic";

import ServiceHero from "../../components/ServiceHero";
import PageSegmentMain from "./(components)/PageSegmentMain";
const ExpertsAwait = dynamic(() => import("../../components/ExpertsAwait"));
const Contact = dynamic(() => import("../../components/Contact"));
const PageSegment4 = dynamic(() => import("./(components)/PageSegment4"));
const PageSegment5 = dynamic(() => import("./(components)/PageSegment5"));
const Promo = dynamic(() => import("../../components/Promo"));
const GoodToKnow = dynamic(() => import("./(components)/GoodToKnow"));

import sql from "../../public/pageHeros/sql.webp";
import sqlMob from "../../public/pageHeros/mob/sqlMob.webp";

import {
  generateProfessionalServiceSchema,
  generateOrganizationSchema,
  generateWebSiteSchema,
} from "../../utils/schemaGenerators";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    generateOrganizationSchema(),
    generateProfessionalServiceSchema(),
    generateWebSiteSchema(
      "https://www.accessexperts.com.au",
      "Access Experts",
      "Australia-wide Microsoft Access Design, Development and Consulting Experts",
    ),
    {
      "@type": "WebPage",
      "@id":
        "https://www.accessexperts.com.au/sql-server-backend-business-solutions",
      url: "https://www.accessexperts.com.au/sql-server-backend-business-solutions",
      name: "SQL Server Backend Solutions | Enterprise Database Performance",
      isPartOf: {
        "@id": "https://www.accessexperts.com.au#website",
      },
      datePublished: "2025-10-23T00:00:00+00:00",
      dateModified: "2025-10-23T00:00:00+00:00",
      description:
        "Upgrade your Access database with SQL Server backend for 10x faster performance, enterprise security, and multi-user scalability. Expert migration services across Australia.",
      breadcrumb: {
        "@id":
          "https://www.accessexperts.com.au/sql-server-backend-business-solutions#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: [
            "https://www.accessexperts.com.au/sql-server-backend-business-solutions",
          ],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.accessexperts.com.au/sql-server-backend-business-solutions#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.accessexperts.com.au",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "SQL Server Backend Solutions",
          item: "https://www.accessexperts.com.au/sql-server-backend-business-solutions",
        },
      ],
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
        title="SQL Server Backend Solutions"
        desktopImage={sql}
        mobileImage={sqlMob}
        altDesk="SQL written on blocks"
        altMob="SQL Icon digital design"
      />
      <PageSegmentMain />
      <PageSegment5 />
      <GoodToKnow />
      <PageSegment4 />
      <div style={{ marginTop: "-5rem" }}>
        <Promo
          h2="Ready to Optimise Your Database?"
          p="We help Australian businesses transition smoothly from Access or Excel databases to SQL Server backends. Our team ensures minimal disruption, maximised performance, and complete data security."
        />
      </div>
      <ExpertsAwait />
      <Contact />
    </>
  );
};

export default Page;
