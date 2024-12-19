import React from "react";
import dynamic from "next/dynamic";

import ResponsivePlaceholder from "../../components/ResponsivePlaceholder";
import ServiceHero from "../../components/ServiceHero";
import PageSegmentMain from "./(components)/PageSegmentMain";

const PageSegment4 = dynamic(() => import("./(components)/PageSegment4"), {
  loading: () => (
    <ResponsivePlaceholder desktopHeight={436} mobileHeight={677} />
  ),
});

const PageSegmentCenter = dynamic(
  () => import("./(components)/PageSegmentCenter"),
  {
    loading: () => (
      <ResponsivePlaceholder desktopHeight={491} mobileHeight={895} />
    ),
  }
);

const MiniTicks = dynamic(() => import("./(components)/MiniTicks"), {
  loading: () => (
    <ResponsivePlaceholder desktopHeight={340} mobileHeight={642} />
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

import faqs from "../../faqs/access-support";

import twoComputers from "../../public/pageHeros/twoComputers.webp";
import glassesMob from "../../public/pageHeros/mob/glassesMob.webp";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://accessexperts.com.au/access-support/",
      url: "https://accessexperts.com.au/access-support/",
      name: "Microsoft Access Database Support & Maintenance Services",
      isPartOf: {
        "@id": "https://accessexperts.com.au/#website",
      },
      datePublished: "2024-10-27T00:00:00+00:00",
      dateModified: "2024-10-27T00:00:00+00:00",
      description:
        "Expert Microsoft Access database support services including maintenance, troubleshooting, upgrades, and ongoing technical assistance.",
      breadcrumb: {
        "@id": "https://accessexperts.com.au/access-support/#breadcrumb",
      },
      inLanguage: "en-AU",
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://accessexperts.com.au/access-support/#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://accessexperts.com.au/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Access Support",
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
