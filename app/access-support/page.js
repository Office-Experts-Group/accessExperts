import React from "react";

import ServiceHero from "../../components/ServiceHero";
import PageSegmentMain from "./(components)/PageSegmentMain";
import PageSegment4 from "./(components)/PageSegment4";
import PageSegmentCenter from "./(components)/PageSegmentCenter";
import MiniTicks from "./(components)/MiniTicks";
import ExpertsAwait from "../../components/ExpertsAwait";
import FAQSection from "../../components/FAQSection";
import Contact from "../../components/Contact";

import faqs from "../../faqs/access-support";

import twoComputers from "../../public/pageHeros/twoComputers.webp";
import glassesMob from "../../public/pageHeros/mob/glassesMob.webp";

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
      "@id": "https://www.accessexperts.com.au/access-support",
      url: "https://www.accessexperts.com.au/access-support",
      name: "Microsoft Access Database Support & Maintenance Services",
      isPartOf: {
        "@id": "https://www.accessexperts.com.au#website",
      },
      datePublished: "2024-10-27T00:00:00+00:00",
      dateModified: "2025-03-27T00:00:00+00:00",
      description:
        "Expert Microsoft Access database support services including maintenance, troubleshooting, upgrades, and ongoing technical assistance.",
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
