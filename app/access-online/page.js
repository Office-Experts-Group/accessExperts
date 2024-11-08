import React from "react";

import ServiceHero from "../../../../components/ServiceHero";
import PageSegmentMain from "./(components)/PageSegmentMain";
import PageSegmentSmall from "./(components)/PageSegmentSmall";
import PageSegment4 from "./(components)/PageSegment4";
import ExpertsAwait from "../../../../components/ExpertsAwait";
import Contact from "../../../../components/Contact";
import Promo from "../../../../components/Promo";
import FAQSection from "../../../../components/FAQSection";

import faqs from "../../faqs/access-online.js";

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
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Monday",
          opens: "09:00",
          closes: "17:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Tuesday",
          opens: "09:00",
          closes: "17:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Wednesday",
          opens: "09:00",
          closes: "17:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Thursday",
          opens: "09:00",
          closes: "17:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Friday",
          opens: "09:00",
          closes: "17:00",
        },
      ],
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
      <ServiceHero title="Online Access Database Solutions" />
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
