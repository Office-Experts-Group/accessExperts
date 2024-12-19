import React from "react";
import dynamic from "next/dynamic";

import ResponsivePlaceholder from "../../components/ResponsivePlaceholder";
import ServiceHero from "../../components/ServiceHero";
import PageSegmentMain2 from "./(components)/PageSegmentMain2";
import Contents from "./(components)/Contents";

const MiniTicks = dynamic(() => import("./(components)/MiniTicks"), {
  loading: () => (
    <ResponsivePlaceholder desktopHeight={468} mobileHeight={887} />
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

const FAQSection = dynamic(() => import("../../components/FAQSection"), {
  loading: () => (
    <ResponsivePlaceholder desktopHeight={630} mobileHeight={840} />
  ),
});

import faqs from "../../faqs/is-access-right-for-you";

import desk from "../../public/pageHeros/desk.webp";
import codeScreen from "../../public/pageHeros/mob/codeScreenMob.webp";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://accessexperts.com.au/is-access-right-for-your-company/",
      url: "https://accessexperts.com.au/is-access-right-for-your-company/",
      name: "Is Microsoft Access Right for Your Company? - Access Experts",
      isPartOf: {
        "@id": "https://accessexperts.com.au/#website",
      },
      datePublished: "2024-10-27T00:00:00+00:00",
      dateModified: "2024-10-27T00:00:00+00:00",
      description:
        "Discover if Microsoft Access is the right database solution for your business. Expert analysis and consultation to determine the best database strategy for your needs.",
      breadcrumb: {
        "@id":
          "https://accessexperts.com.au/is-access-right-for-your-company/#breadcrumb",
      },
      inLanguage: "en-AU",
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://accessexperts.com.au/is-access-right-for-your-company/#breadcrumb",
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
          name: "Is Access Right for Your Company?",
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
