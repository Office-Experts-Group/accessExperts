import React from "react";

import Contact from "../../../components/Contact";
import ServiceHero from "../../../components/ServiceHero";
import CTAMain from "../(components)/CTAMain";

import calculator from "../../../public/pageHeros/calculator.webp";
import calcMob from "../../../public/pageHeros/mob/calcMob.webp";

import {
  generateProfessionalServiceSchema,
  generateOrganizationSchema,
} from "../../../utils/schemaGenerators";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    generateOrganizationSchema(),
    generateProfessionalServiceSchema(),
    {
      "@type": "WebPage",
      "@id": "https://www.accessexperts.com.au/contact-us/request-a-quote",
      url: "https://www.accessexperts.com.au/contact-us/request-a-quote",
      name: "Request a Quote - Access Experts Database Services",
      isPartOf: {
        "@id": "https://www.accessexperts.com.au#website",
      },
      datePublished: "2024-10-27T00:00:00+00:00",
      dateModified: "2025-07-04T00:00:00+00:00",
      description:
        "Get a detailed quote for your Microsoft Access project. We offer custom development, integration, and professional consulting.",
      breadcrumb: {
        "@id":
          "https://www.accessexperts.com.au/contact-us/request-a-quote#breadcrumb",
      },
      inLanguage: "en-AU",
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.accessexperts.com.au/contact-us/request-a-quote#breadcrumb",
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
          name: "Contact Us",
          item: "https://www.accessexperts.com.au/contact-us",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Request a Quote",
          item: "https://www.accessexperts.com.au/contact-us/request-a-quote",
        },
      ],
    },
    {
      "@type": "Organization",
      "@id": "https://www.accessexperts.com.au#organization",
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
        title="Request a Quote"
        desktopImage={calculator}
        mobileImage={calcMob}
        altDesk={"calculator on a desk"}
        altMob={"calculator on a desk"}
      />
      <CTAMain />
      <Contact isQuote={true} />
    </>
  );
};

export default Page;
