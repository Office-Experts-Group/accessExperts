import React from "react";
import dynamic from "next/dynamic";

import ResponsivePlaceholder from "../../components/ResponsivePlaceholder";
import ServiceHero from "../../components/ServiceHero";
import PageSegmentMain2 from "./(components)/PageSegmentMain2";
import Contents from "./(components)/Contents";

const PageSegment3 = dynamic(() => import("./(components)/PageSegment3"), {
  loading: () => (
    <ResponsivePlaceholder desktopHeight={415} mobileHeight={718} />
  ),
});

const PageSegment4New = dynamic(
  () => import("./(components)/PageSegment4New"),
  {
    loading: () => (
      <ResponsivePlaceholder desktopHeight={400} mobileHeight={674} />
    ),
  }
);

const PageSegment5 = dynamic(() => import("./(components)/PageSegment5"), {
  loading: () => (
    <ResponsivePlaceholder desktopHeight={810} mobileHeight={511} />
  ),
});

const PageSegment6 = dynamic(() => import("./(components)/PageSegment6"), {
  loading: () => (
    <ResponsivePlaceholder desktopHeight={656} mobileHeight={1087} />
  ),
});

const PageSegment7 = dynamic(() => import("./(components)/PageSegment7"), {
  loading: () => (
    <ResponsivePlaceholder desktopHeight={415} mobileHeight={718} />
  ),
});

const PageSegment8 = dynamic(() => import("./(components)/PageSegment8"), {
  loading: () => (
    <ResponsivePlaceholder desktopHeight={436} mobileHeight={367} />
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

const ExpertsAwait = dynamic(() => import("../../components/ExpertsAwait"), {
  loading: () => (
    <ResponsivePlaceholder desktopHeight={1023} mobileHeight={1564} />
  ),
});

const Contact = dynamic(() => import("../../components/Contact"), {
  loading: () => (
    <ResponsivePlaceholder desktopHeight={600} mobileHeight={500} />
  ),
});

import marker from "../../public/pageHeros/marker.webp";
import codeMob from "../../public/pageHeros/mob/codeMob.webp";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.accessexperts.com.au/access-azure-cloud-solutions/",
      url: "https://www.accessexperts.com.au/access-azure-cloud-solutions/",
      name: "Microsoft Access Azure Cloud Solutions & Integration Services",
      isPartOf: {
        "@id": "https://www.accessexperts.com.au/#website",
      },
      datePublished: "2024-10-27T00:00:00+00:00",
      dateModified: "2024-10-27T00:00:00+00:00",
      description:
        "Professional Microsoft Access Azure cloud integration services. Our experts deliver seamless database migration, cloud optimization, and Azure integration solutions.",
      breadcrumb: {
        "@id":
          "https://www.accessexperts.com.au/access-azure-cloud-solutions/#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: ["https://www.accessexperts.com.au/azure-cloud-solutions/"],
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://www.accessexperts.com.au/#website",
      url: "https://www.accessexperts.com.au/",
      name: "Access Experts: Azure Cloud Integration Services",
      description:
        "Expert Microsoft Access and Azure Cloud Integration Solutions",
      publisher: {
        "@id": "https://www.accessexperts.com.au/#organization",
      },
      potentialAction: [
        {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate:
              "https://www.accessexperts.com.au/?s={search_term_string}",
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
      <Contact />
    </>
  );
};

export default Page;
