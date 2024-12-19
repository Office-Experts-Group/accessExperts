import React from "react";
import dynamic from "next/dynamic";

import ResponsivePlaceholder from "../../components/ResponsivePlaceholder";
import ServiceHero from "../../components/ServiceHero";
import PageSegmentMain from "./(components)/PageSegmentMain";

const PageSegmentSmall = dynamic(
  () => import("./(components)/PageSegmentSmall"),
  {
    loading: () => (
      <ResponsivePlaceholder desktopHeight={272} mobileHeight={486} />
    ),
  }
);

const PageSegment4 = dynamic(() => import("./(components)/PageSegment4"), {
  loading: () => (
    <ResponsivePlaceholder desktopHeight={500} mobileHeight={805} />
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

import faqs from "../../faqs/access-online.js";

import pen from "../../public/pageHeros/pen.webp";
import seatMob from "../../public/pageHeros/mob/seatMob.webp";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://accessexperts.com.au/access-online/",
      url: "https://accessexperts.com.au/access-online/",
      name: "Online Microsoft Access Solutions & Remote Database Services",
      isPartOf: {
        "@id": "https://accessexperts.com.au/#website",
      },
      datePublished: "2024-10-27T00:00:00+00:00",
      dateModified: "2024-10-27T00:00:00+00:00",
      description:
        "Professional online Microsoft Access database services. Remote consulting, development, and support for all your database needs.",
      breadcrumb: {
        "@id": "https://accessexperts.com.au/access-online/#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: ["https://accessexperts.com.au/access-online/"],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://accessexperts.com.au/access-online/#breadcrumb",
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
          name: "Access Online",
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
      <ServiceHero
        title="Online Access Database Solutions"
        desktopImage={pen}
        mobileImage={seatMob}
        altDesk={"Pen held infront of graphs"}
        altMob={"office environment"}
      />
      <PageSegmentMain />
      <PageSegmentSmall />
      <PageSegment4 />
      <ExpertsAwait />
      <Promo
        h2="iPad and iPhone Solutions"
        p="We often get asked, “What about iPads and iPhones?” …and yes, it is possible to create limited solutions using these and other platforms."
      />
      <FAQSection faqs={faqs} />
      <Contact />
    </>
  );
};

export default Page;
