// app/access-azure-cloud-based-solutions/page.js

import React from "react";
import dynamic from "next/dynamic";

import ServiceHero from "../../components/ServiceHero";
import AzureIntro from "./(components)/AzureIntro";

const AzureCapabilities = dynamic(
  () => import("./(components)/AzureCapabilities"),
);
const AzureFit = dynamic(() => import("./(components)/AzureFit"));
const AzureRequirements = dynamic(
  () => import("./(components)/AzureRequirements"),
);
const AzureProcess = dynamic(() => import("./(components)/AzureProcess"));
const ExpertsAwait = dynamic(() => import("../../components/ExpertsAwait"));
const AzureExperts = dynamic(() => import("./(components)/AzureExperts"));
const Contact = dynamic(() => import("../../components/Contact"));
const FAQSection = dynamic(() => import("../../components/FAQSection"));

import faqs from "../../faqs/cloud-solutions";
import faqSchema from "../../faqs/cloudSolutionsSchema";

import marker from "../../public/pageHeros/marker.webp";
import codeMob from "../../public/pageHeros/mob/codeMob.webp";

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
        "https://www.accessexperts.com.au/access-azure-cloud-based-solutions",
      url: "https://www.accessexperts.com.au/access-azure-cloud-based-solutions",
      name: "Microsoft Access Azure Cloud Solutions & Integration Services",
      isPartOf: {
        "@id": "https://www.accessexperts.com.au#website",
      },
      datePublished: "2024-10-27T00:00:00+00:00",
      dateModified: "2026-09-22T00:00:00+00:00",
      description:
        "Access and Azure integration services for cloud-hosted databases. We build secure, scalable solutions with Azure SQL Server and Access.",
      breadcrumb: {
        "@id":
          "https://www.accessexperts.com.au/access-azure-cloud-based-solutions#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: [
            "https://www.accessexperts.com.au/access-azure-cloud-based-solutions",
          ],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.accessexperts.com.au/access-azure-cloud-based-solutions#breadcrumb",
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
          name: "Microsoft Access Azure Cloud Based Solutions",
          item: "https://www.accessexperts.com.au/access-azure-cloud-based-solutions",
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <ServiceHero
        title="Azure Cloud Based Solutions"
        desktopImage={marker}
        mobileImage={codeMob}
        altDesk={"Futuristic white board marker"}
        altMob={"indiscriminate code on a screen"}
      />
      <AzureIntro />
      <AzureCapabilities />
      <AzureProcess />
      <AzureFit />
      <AzureRequirements />
      <ExpertsAwait />
      <AzureExperts />
      <FAQSection faqs={faqs} />
      <Contact />
    </>
  );
};

export default Page;
