import React from "react";

import ServiceHero from "../../components/ServiceHero";
import ServicePageCards from "./(components)/ServicePageCards";
import Contact from "../../components/Contact";
import PageSegment4 from "./(components)/PageSegment4";
import PageSegmentMain from "./(components)/PageSegmentMain";
import BlackSegment from "./(components)/BlackSegment";
import Promo from "./(components)/Promo";
import Segment4Repeat from "./(components)/Segment4Repeat";
import ExpertsAwait from "../../components/ExpertsAwait";
import Contents from "./(components)/Contents";

import graphic from "../../public/pageHeros/tableGraph.webp";
import graph from "../../public/pageHeros/mob/graph.webp";

import {
  generateProfessionalServiceSchema,
  generateOrganizationSchema,
} from "../../utils/schemaGenerators";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    generateOrganizationSchema(),
    generateProfessionalServiceSchema(),
    {
      "@type": "WebPage",
      "@id": "https://www.accessexperts.com.au/upgrades-and-migration/",
      url: "https://www.accessexperts.com.au/upgrades-and-migration/",
      name: "Microsoft Access Database Upgrades & Migration Services",
      isPartOf: {
        "@id": "https://www.accessexperts.com.au#website",
      },
      datePublished: "2024-10-27T00:00:00+00:00",
      dateModified: "2025-07-04T00:00:00+00:00",
      description:
        "Access database upgrades and migrations made easy. Fix compatibility issues, modernise your system, and improve performance with minimal downtime.",
      inLanguage: "en-AU",
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.accessexperts.com.au/upgrades-and-migration#breadcrumb",
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
          name: "Upgrades and Migration",
          item: "https://www.accessexperts.com.au/upgrades-and-migration",
        },
      ],
    },
    {
      "@type": "Organization",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Microsoft Access Upgrade and Migration Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Database Migration",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Version Upgrades",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Data Conversion",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "System Integration",
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
      <Contents />
      <ServiceHero
        title="Upgrades and Migration"
        desktopImage={graphic}
        mobileImage={graph}
        altDesk={"Graphs on a table"}
        altMob={"Graphs"}
      />
      <ServicePageCards />
      <PageSegmentMain />
      <PageSegment4 />
      <BlackSegment />
      <Promo />
      <Segment4Repeat />
      <ExpertsAwait />
      <Contact />
    </>
  );
};

export default Page;
