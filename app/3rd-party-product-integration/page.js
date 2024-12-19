import React from "react";
import dynamic from "next/dynamic";

import ResponsivePlaceholder from "../../components/ResponsivePlaceholder";
import PageSegmentMain from "./(components)/PageSegmentMain";
import ServiceHero from "../../components/ServiceHero";

const Promo = dynamic(() => import("../../components/Promo"), {
  loading: () => (
    <ResponsivePlaceholder
      desktopHeight={130}
      mobileHeight={100}
      showSpinner={false}
    />
  ),
});

const Contact = dynamic(() => import("../../components/Contact"), {
  loading: () => (
    <ResponsivePlaceholder desktopHeight={600} mobileHeight={500} />
  ),
});

const ExpertsAwait = dynamic(() => import("../../components/ExpertsAwait"), {
  loading: () => (
    <ResponsivePlaceholder desktopHeight={1023} mobileHeight={1564} />
  ),
});

const FAQSection = dynamic(() => import("../../components/FAQSection"), {
  loading: () => (
    <ResponsivePlaceholder desktopHeight={630} mobileHeight={840} />
  ),
});

import faqs from "../../faqs/3rd-party-product-integration.js";

import graphic from "../../public/pageHeros/graphic.webp";
import graph from "../../public/pageHeros/mob/graph.webp";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://accessexperts.com.au/3rd-party-product-integration",
      url: "https://accessexperts.com.au/3rd-party-product-integration",
      name: "Access Experts: For All Your Microsoft Technology Development and Consulting Services",
      isPartOf: {
        "@id": "https://accessexperts.com.au/#website",
      },
      datePublished: "2024-10-27T00:00:00+00:00",
      dateModified: "2024-10-27T00:00:00+00:00",
      description:
        "Our Australia-wide, cross-industry Microsoft Access database consultants deliver prompt, quality service with competitive pricing. Fulfilling all of your Microsoft Access consulting needs, our experts excel in Microsoft technology services from database creation to maintenance, troubleshooting, integration, data manipulation, programming, conversions, upgrades, training and support.",
      breadcrumb: {
        "@id": "https://accessexperts.com.au/#breadcrumb",
      },
      inLanguage: "en-AU",
    },
    {
      "@type": "WebSite",
      "@id": "https://accessexperts.com.au/#website",
      url: "https://accessexperts.com.au/3rd-party-product-integration",
      name: "Access Experts: Microsoft Access Development and Consulting Services",
      description:
        "Your Microsoft Access Design, Development and Consulting Experts",
      publisher: {
        "@id": "https://accessexperts.com.au/#organization",
      },
      potentialAction: [
        {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: "https://accessexperts.com.au/?s={search_term_string}",
          },
          "query-input": {
            "@type": "PropertyValueSpecification",
            valueRequired: true,
            valueName: "search_term_string",
          },
        },
      ],
      inLanguage: "en-AU",
    },
    {
      "@type": "Organization",
      description:
        "Our Australia-wide, cross-industry Microsoft Access database consultants deliver prompt, quality service with competitive pricing. Fulfilling all of your Microsoft Access consulting needs, our experts excel in Microsoft technology services from database creation to maintenance, troubleshooting, integration, data manipulation, programming, conversions, upgrades, training and support.",
      brand: {
        "@type": "Thing",
        name: [
          "Access Experts",
          "Microsoft Access",
          "Access consultant",
          "Access training",
          "Microsoft Access expert",
          "Microsoft Access consultant",
          "Microsoft Access training",
          "Microsoft Access consulting",
          "Access expert",
          "Microsoft Excel",
          "Microsoft Power BI",
          "Microsoft Office 365",
        ],
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
