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
const RelatedLinks = dynamic(() => import("../../components/RelatedLinks"));
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
      <RelatedLinks
        theme="dark"
        eyebrow="Case Studies"
        heading="Taking legacy Access databases to the cloud"
        links={[
          {
            href: "https://www.officeexperts.com.au/case-studies/film-crew-booking-system-access-nextjs-rebuild",
            linkText: "Read the Azure SQL Server rebuild",
            title:
              "Migrating a VM-locked Access 2000 database to Azure with a 10x faster Next.js website",
            description:
              "A freelance crew agency ran its whole booking operation on a native Access 2000 database that only worked on a virtual machine, so its website could not connect to it. We rebuilt the front end on our Access framework with a cloud back end on Azure SQL Server, then rewrote the WordPress website in Next.js with a direct database connection. The new site loads 10x faster, and crew diaries, availability lists, emails and end of day processing now run automatically.",
            image:
              "https://www.officeexperts.com.au/case-studies/film-crew-booking-system-rebuildLg.png",
            imageAlt:
              "Access 2000 booking database migrated to Azure SQL Server with a Next.js website",
          },
          {
            href: "https://www.officeexperts.com.au/case-studies/private-client-cashflow-forecasting-tool",
            linkText: "See the privately hosted Azure tool",
            title:
              "Turning uneven investment income into one clear monthly figure to plan against",
            description:
              "A private client's investment and business income arrived in seasonal lumps while commitments fell steadily, and decisions were being made without a full forward view of cash flow. We built a private planning tool, hosted privately on Microsoft Azure, with a 12-month rolling cash flow forecast, a what-if sandbox and a calculation of the income needed each month before GST. It was delivered in 2 weeks, from brief to a working tool.",
            image:
              "https://www.officeexperts.com.au/case-studies/private-client-cashflow-plannerLg.png",
            imageAlt:
              "Private cash flow planning tool hosted on Microsoft Azure",
          },
        ]}
      />
      <div style={{ marginTop: "6rem" }}>
        <FAQSection faqs={faqs} />
      </div>
      <Contact />
    </>
  );
};

export default Page;
