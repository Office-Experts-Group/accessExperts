import React from "react";

import Contact from "../../../../components/Contact";
import ServiceHero from "../../../../components/ServiceHero";
import CTAMain from "./(components)/CTAMain";
import ContactDetails from "../../../../components/ContactDetails";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://accessexperts.com.au/contact-us/",
      url: "https://accessexperts.com.au/contact-us/",
      name: "Contact Access Experts - Microsoft Access Database Consulting",
      isPartOf: {
        "@id": "https://accessexperts.com.au/#website",
      },
      datePublished: "2024-10-27T00:00:00+00:00",
      dateModified: "2024-10-27T00:00:00+00:00",
      description:
        "Contact our Australia-wide Microsoft Access database consultants for prompt, quality service with competitive pricing. Expert database creation, maintenance, troubleshooting, and support.",
      breadcrumb: {
        "@id": "https://accessexperts.com.au/contact-us/#breadcrumb",
      },
      inLanguage: "en-AU",
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://accessexperts.com.au/contact-us/#breadcrumb",
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
          name: "Contact",
        },
      ],
    },
    {
      "@type": "Organization",
      "@id": "https://accessexperts.com.au/#organization",
      name: "Access Experts",
      legalName: "Access Experts",
      alternateName: ["Office Experts", "Excel Experts"],
      url: "https://accessexperts.com.au/",
      email: "consult@officeexperts.com.au",
      telephone: "1300 10 28 10",
      priceRange: "$50-$5000",
      areaServed: [
        {
          "@type": "City",
          name: "Sydney",
        },
        {
          "@type": "City",
          name: "Gold Coast",
        },
        {
          "@type": "City",
          name: "Darwin",
        },
        {
          "@type": "City",
          name: "Perth",
        },
        {
          "@type": "City",
          name: "Canberra",
        },
        {
          "@type": "City",
          name: "Brisbane",
        },
        {
          "@type": "City",
          name: "Melbourne",
        },
        {
          "@type": "City",
          name: "Central Coast",
        },
        {
          "@type": "City",
          name: "Northern Rivers",
        },
        {
          "@type": "City",
          name: "Wollongong",
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
      sameAs: ["https://www.facebook.com/MSOfficeExperts"],
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
      <ServiceHero title="Contact Us" />
      <CTAMain />
      <Contact />
      <ContactDetails />
    </>
  );
};

export default Page;
