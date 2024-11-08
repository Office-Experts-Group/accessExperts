import React from "react";

import Contact from "../../../../../components/Contact";
import ServiceHero from "../../../../../components/ServiceHero";
import CTAMain from "../(components)/CTAMain";
import ContactDetails from "../../../../../components/ContactDetails";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://accessexperts.com.au/contact-us/request-a-quote/",
      url: "https://accessexperts.com.au/contact-us/request-a-quote/",
      name: "Request a Quote - Access Experts Database Services",
      isPartOf: {
        "@id": "https://accessexperts.com.au/#website",
      },
      datePublished: "2024-10-27T00:00:00+00:00",
      dateModified: "2024-10-27T00:00:00+00:00",
      description:
        "Request a quote for professional Microsoft Access database services. Get competitive pricing for your database development, support, and consulting needs.",
      breadcrumb: {
        "@id":
          "https://accessexperts.com.au/contact-us/request-a-quote/#breadcrumb",
      },
      inLanguage: "en-AU",
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://accessexperts.com.au/contact-us/request-a-quote/#breadcrumb",
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
          name: "Contact Us",
          item: "https://accessexperts.com.au/contact-us/",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Request a Quote",
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
        name: "Microsoft Access Design, Development and Consulting Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Database Development",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Consulting Services",
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
              name: "Training",
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
      <ServiceHero title="Request a Quote" />
      <CTAMain />
      <Contact isQuote={true} />
      <ContactDetails />
    </>
  );
};

export default Page;
