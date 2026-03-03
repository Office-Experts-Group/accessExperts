import React from "react";
import dynamic from "next/dynamic";

import PageSegmentMain from "./(components)/PageSegmentMain";
import ServiceHero from "../../components/ServiceHero";
const Promo = dynamic(() => import("../../components/Promo"));
const Contact = dynamic(() => import("../../components/Contact"));
const ExpertsAwait = dynamic(() => import("../../components/ExpertsAwait"));
const FAQSection = dynamic(() => import("../../components/FAQSection"));

import faqs from "../../faqs/3rd-party-product-integration.js";
import faqSchema from "../../faqs/integrationSchema.js";

import graphic from "../../public/pageHeros/graphic.webp";
import graph from "../../public/pageHeros/mob/graph.webp";

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
      "@id": "https://www.accessexperts.com.au/3rd-party-product-integration",
      url: "https://www.accessexperts.com.au/3rd-party-product-integration",
      name: "Access Experts: For All Your Microsoft Technology Development and Consulting Services",
      isPartOf: {
        "@id": "https://www.accessexperts.com.au#website",
      },
      datePublished: "2024-10-27T00:00:00+00:00",
      dateModified: "2026-03-02T00:00:00+00:00",
      description:
        "Professional 3rd-party product integration for Microsoft Access. Incorporate your database throughout your business workflows with expert advice and affordable pricing.",
      breadcrumb: {
        "@id": "https://www.accessexperts.com.au#breadcrumb",
      },
      inLanguage: "en-AU",
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.accessexperts.com.au/3rd-party-product-integration#breadcrumb",
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
          name: "Microsoft Access 3rd Party Product Integration",
          item: "https://www.accessexperts.com.au/3rd-party-product-integration",
        },
      ],
    },
    {
      brand: {
        "@type": "Thing",
        name: ["Microsoft Access 3rd Party Product Integration"],
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Microsoft Access Design, Development and Consulting Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Data Manipulation",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "VBA Macro development",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Microsoft SQL Server integration",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Microsoft .NET solutions",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Cloud backups, backups",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Dashboards, reporting solutions, charts, graphs",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Microsoft SharePoint integration",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Microsoft Azure integration",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Integrate financial systems",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Review code and fix defects",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Automation and upgrades",
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <ServiceHero
        title={"Third Party Product Integration"}
        desktopImage={graphic}
        mobileImage={graph}
        altMob={"Graphs"}
        altDesk={"Graphs on a table"}
      />
      <PageSegmentMain />
      <ExpertsAwait />
      <Promo
        h2="Need An Integration Solution?
        "
        p="Do you have another Office application, CRM, accounting package or other 3rd party product that you want linked to Access?
        
        Do you want to extend a 3rd party product's functionality using Access?"
      />
      <FAQSection faqs={faqs} />
      <Contact />
    </>
  );
};

export default Page;
