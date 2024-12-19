import React from "react";
import dynamic from "next/dynamic";

import ResponsivePlaceholder from "../../components/ResponsivePlaceholder";

import ServiceHero from "../../components/ServiceHero";
import ServicePageCards from "./(components)/ServicePageCards";
import Contents from "./(components)/Contents";
import PageSegmentMain from "./(components)/PageSegmentMain";

const PageSegment4 = dynamic(() => import("./(components)/PageSegment4"), {
  loading: () => (
    <ResponsivePlaceholder desktopHeight={373} mobileHeight={625} />
  ),
});

const BlackSegment = dynamic(() => import("./(components)/BlackSegment"), {
  loading: () => (
    <ResponsivePlaceholder desktopHeight={727} mobileHeight={805} />
  ),
});

const Segment4Repeat = dynamic(() => import("./(components)/Segment4Repeat"), {
  loading: () => (
    <ResponsivePlaceholder desktopHeight={374} mobileHeight={1084} />
  ),
});

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

import graphic from "../../public/pageHeros/tableGraph.webp";
import graph from "../../public/pageHeros/mob/graph.webp";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://accessexperts.com.au/upgrades-and-migration/",
      url: "https://accessexperts.com.au/upgrades-and-migration/",
      name: "Microsoft Access Database Upgrades & Migration Services",
      isPartOf: {
        "@id": "https://accessexperts.com.au/#website",
      },
      datePublished: "2024-10-27T00:00:00+00:00",
      dateModified: "2024-10-27T00:00:00+00:00",
      description:
        "Professional Microsoft Access database upgrade and migration services. Expert assistance in modernizing your database systems and ensuring smooth transitions.",
      inLanguage: "en-AU",
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://accessexperts.com.au/upgrades-and-migration/#breadcrumb",
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
          name: "Upgrades and Migration",
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
