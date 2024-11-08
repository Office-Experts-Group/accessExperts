import React from "react";

import ServiceHero from "../../../../components/ServiceHero";
import PageSegmentMain2 from "./(components)/PageSegmentMain2";
import Promo from "../../../../components/Promo";
import MiniTicks from "./(components)/MiniTicks";
import ExpertsAwait from "../../../../components/ExpertsAwait";
import FAQSection from "../../../../components/FAQSection";
import Contact from "../../../../components/Contact";

import faqs from "../../faqs/is-access-right-for-you";

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
      "@id": "https://accessexperts.com.au/#organization",
      name: "Access Experts",
      url: "https://accessexperts.com.au/",
      email: "access@officeexperts.com.au",
      telephone: "1300 10 28 10",
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "1300 10 28 10",
          contactType: "customer service",
          email: "consult@accessexperts.com.au",
          availableLanguage: ["en", "en-AU"],
        },
      ],
      priceRange: "$50-$5000",
      paymentAccepted: "Credit Card, Cheque, Direct Debit",
      currenciesAccepted: "AUD",
      openingHours: "Mo-Fr 09:00-17:00",
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
      areaServed: [
        {
          "@type": "Country",
          name: "Australia",
        },
        {
          "@type": "AdministrativeArea",
          name: "New South Wales",
        },
        {
          "@type": "AdministrativeArea",
          name: "Victoria",
        },
        {
          "@type": "AdministrativeArea",
          name: "Queensland",
        },
        {
          "@type": "AdministrativeArea",
          name: "Western Australia",
        },
        {
          "@type": "AdministrativeArea",
          name: "South Australia",
        },
        {
          "@type": "AdministrativeArea",
          name: "Tasmania",
        },
        {
          "@type": "AdministrativeArea",
          name: "Australian Capital Territory",
        },
        {
          "@type": "AdministrativeArea",
          name: "Northern Territory",
        },
      ],
      logo: {
        "@type": "ImageObject",
        inLanguage: "en-AU",
        "@id": "https://accessexperts.com.au/#/schema/logo/image/",
        url: "/logo.png",
        contentUrl: "/logo.png",
        width: 326,
        height: 107,
        caption: "Access Experts",
      },
      image: {
        "@id": "https://accessexperts.com.au/#/schema/logo/image/",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5",
        reviewCount: "112",
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
      <ServiceHero title="Is Microsoft Access the Right Technology for your Company?" />
      <PageSegmentMain2 />
      <Promo
        h2="Just Ask The Accesss Experts"
        p="Whether your solution is online and/or offline, we can help point you in the right direction to keep your business ahead of the rest."
      />
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
