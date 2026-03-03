import React from "react";
import dynamic from "next/dynamic";

import ServiceHero from "../../components/ServiceHero";
import PageSegmentMain from "./(components)/PageSegmentMain";
const PageSegment4 = dynamic(() => import("./(components)/PageSegment4"));
const PageSegmentCenter = dynamic(
  () => import("./(components)/PageSegmentCenter"),
);
const MiniTicks = dynamic(() => import("./(components)/MiniTicks"));
const ExpertsAwait = dynamic(() => import("../../components/ExpertsAwait"));
const FAQSection = dynamic(() => import("../../components/FAQSection"));
const Contact = dynamic(() => import("../../components/Contact"));

import faqs from "../../faqs/access-support";

import twoComputers from "../../public/pageHeros/twoComputers.webp";
import glassesMob from "../../public/pageHeros/mob/glassesMob.webp";

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
      "@id": "https://www.accessexperts.com.au/access-support",
      url: "https://www.accessexperts.com.au/access-support",
      name: "Microsoft Access Support and Training | Microsoft Access ",
      isPartOf: {
        "@id": "https://www.accessexperts.com.au#website",
      },
      datePublished: "2024-10-27T00:00:00+00:00",
      dateModified: "2025-07-04T00:00:00+00:00",
      description:
        "Microsoft Access support specialists offering remote and onsite help, troubleshooting, training, and maintenance Australia-wide.",
      breadcrumb: {
        "@id": "https://www.accessexperts.com.au/access-support#breadcrumb",
      },
      inLanguage: "en-AU",
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.accessexperts.com.au/access-support#breadcrumb",
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
          name: "Access Support",
          item: "https://www.accessexperts.com.au/access-support",
        },
      ],
    },
    {
      "@type": "Organization",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Microsoft Access Support Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Database Maintenance",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Technical Support",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Database Troubleshooting",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Performance Optimization",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Database Upgrades",
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
        title="Help and Training"
        desktopImage={twoComputers}
        mobileImage={glassesMob}
        altDesk={"Two computers on a desk"}
        altMob={"Glasses on a table"}
      />
      <PageSegmentMain />
      <PageSegment4 />
      <PageSegmentCenter />
      <MiniTicks />
      <ExpertsAwait />
      <div style={{ marginTop: "4rem" }}>
        <FAQSection faqs={faqs} />
      </div>
      <Contact />
    </>
  );
};

export default Page;
