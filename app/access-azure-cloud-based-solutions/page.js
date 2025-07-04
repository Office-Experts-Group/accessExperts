import React from "react";

import ServiceHero from "../../components/ServiceHero";
import PageSegmentMain2 from "./(components)/PageSegmentMain2";
import PageSegment3 from "./(components)/PageSegment3";
import PageSegment4New from "./(components)/PageSegment4New";
import PageSegment5 from "./(components)/PageSegment5";
import PageSegment6 from "./(components)/PageSegment6";
import ExpertsAwait from "../../components/ExpertsAwait";
import PageSegment7 from "./(components)/PageSegment7";
import PageSegment8 from "./(components)/PageSegment8";
import Contact from "../../components/Contact";
import Promo from "../../components/Promo";
import Contents from "./(components)/Contents";
import FAQSection from "../../components/FAQSection";

import faqs from "../../faqs/cloud-solutions";
import faqSchema from "../../faqs/cloudSolutionsSchema";

import marker from "../../public/pageHeros/marker.webp";
import codeMob from "../../public/pageHeros/mob/codeMob.webp";

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
      "@id": "https://www.accessexperts.com.au/access-azure-cloud-solutions",
      url: "https://www.accessexperts.com.au/access-azure-cloud-solutions",
      name: "Microsoft Access Azure Cloud Solutions & Integration Services",
      isPartOf: {
        "@id": "https://www.accessexperts.com.au#website",
      },
      datePublished: "2024-10-27T00:00:00+00:00",
      dateModified: "2025-07-04T00:00:00+00:00",
      description:
        "Access and Azure integration services for cloud-hosted databases. We build secure, scalable solutions with Azure SQL Server and Access.",
      breadcrumb: {
        "@id":
          "https://www.accessexperts.com.au/access-azure-cloud-solutions#breadcrumb",
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
      <Contents />
      <ServiceHero
        title="Azure Cloud Based Solutions"
        desktopImage={marker}
        mobileImage={codeMob}
        altDesk={"Futuristic white board marker"}
        altMob={"indiscriminate code on a screen"}
      />
      <PageSegmentMain2 />
      <PageSegment3 />
      <PageSegment4New />
      <PageSegment5 />
      <PageSegment6 />
      <ExpertsAwait />
      <PageSegment7 />
      <PageSegment8 />
      <Promo
        h2="Want Your Access Database in the Cloud?"
        p="Transform your existing Access database into a cloud-based solution accessible from anywhere. We can help migrate your data to Azure and create custom web solutions for your team."
      />
      <FAQSection faqs={faqs} />
      <Contact />
    </>
  );
};

export default Page;
