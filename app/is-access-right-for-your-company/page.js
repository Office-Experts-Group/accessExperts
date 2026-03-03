import React from "react";
import dynamic from "next/dynamic";

import ServiceHero from "../../components/ServiceHero";
import PageSegmentMain2 from "./(components)/PageSegmentMain2";

const Promo = dynamic(() => import("../../components/Promo"));
const MiniTicks = dynamic(() => import("./(components)/MiniTicks"));
const ExpertsAwait = dynamic(() => import("../../components/ExpertsAwait"));
const FAQSection = dynamic(() => import("../../components/FAQSection"));
const Contact = dynamic(() => import("../../components/Contact"));
const Contents = dynamic(() => import("./(components)/Contents"));

import faqs from "../../faqs/is-access-right-for-you";

import desk from "../../public/pageHeros/desk.webp";
import codeScreen from "../../public/pageHeros/mob/codeScreenMob.webp";

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
        "https://www.accessexperts.com.au/is-access-right-for-your-company",
      url: "https://www.accessexperts.com.au/is-access-right-for-your-company",
      name: "Is Microsoft Access Right for Your Company? - Access Experts",
      isPartOf: {
        "@id": "https://www.accessexperts.com.au#website",
      },
      datePublished: "2024-10-27T00:00:00+00:00",
      dateModified: "2025-07-04T00:00:00+00:00",
      description:
        "Not sure if Microsoft Access is right for your business? We offer expert analysis of data needs, users, and system compatibility.",
      breadcrumb: {
        "@id":
          "https://www.accessexperts.com.au/is-access-right-for-your-company#breadcrumb",
      },
      inLanguage: "en-AU",
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.accessexperts.com.au/is-access-right-for-your-company#breadcrumb",
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
          name: "Is Access Right for Your Company?",
          item: "https://www.accessexperts.com.au/is-access-right-for-your-company",
        },
      ],
    },
    {
      "@type": "Organization",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Microsoft Access Consultation Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Database Assessment",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Business Requirements Analysis",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Solution Consulting",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Database Strategy Planning",
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
        title="Is Microsoft Access the Right Technology for your Company?"
        desktopImage={desk}
        mobileImage={codeScreen}
        altMob={"Computer code on a screen"}
        altDesk={"Desktop in an office environment"}
      />
      <PageSegmentMain2 />
      <Promo
        h2="Just Ask The Access Experts"
        p="Whether your solution is online and/or offline, we can help point you in the right direction to keep your business ahead of the rest."
      />
      <MiniTicks />
      <ExpertsAwait />
      <div style={{ marginTop: "6rem" }}>
        <FAQSection faqs={faqs} />
      </div>
      <Contact />
    </>
  );
};

export default Page;
