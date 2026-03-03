import React from "react";

// Static imports — above the fold on desktop and mobile
import Hero from "./(components)/Hero";
import Services from "./(components)/Services";

// Dynamic imports — defers JS hydration for below-fold components
import dynamic from "next/dynamic";

const CTAMain = dynamic(() => import("./(components)/CTAMain"));
const IsRight = dynamic(() => import("./(components)/IsRight"));
const SolutionsCarousel = dynamic(
  () => import("./(components)/SolutionsCarousel"),
);
const CTAFull = dynamic(() => import("./(components)/CTAFull"));
const Testimonials = dynamic(() => import("./(components)/Testimonials"));
const Brands = dynamic(() => import("../components/Brands"));
const Promo = dynamic(() => import("../components/Promo"));
const FAQSection = dynamic(() => import("../components/FAQSection"));
const Contact = dynamic(() => import("../components/Contact"));

import faqs from "../faqs/home";
import faqSchema from "../faqs/homeSchema";

import { getHomePageSchema } from "../utils/testimonialSchemaGenerator";
import { testimonials } from "../testimonials";
import {
  generateOrganizationSchema,
  generateProfessionalServiceSchema,
  generateWebSiteSchema,
} from "../utils/schemaGenerators";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    ...getHomePageSchema(testimonials, "access")["@graph"],
    generateOrganizationSchema(),
    generateProfessionalServiceSchema(),
    generateWebSiteSchema(
      "https://www.accessexperts.com.au",
      "Access Experts",
      "Australia-wide Microsoft Access Design, Development and Consulting Experts",
    ),
    {
      "@type": "WebPage",
      "@id": "https://www.accessexperts.com.au",
      url: "https://www.accessexperts.com.au",
      name: "Access Experts: For All Your Microsoft Technology Development and Consulting Services",
      isPartOf: {
        "@id": "https://www.accessexperts.com.au#website",
      },
      datePublished: "2024-10-27T00:00:00+00:00",
      dateModified: "2026-03-02T00:00:00+00:00",
      description:
        "Our Australia-wide, cross-industry Microsoft Access database consultants deliver prompt, quality service with competitive pricing. Fulfilling all of your Microsoft Access consulting needs.",
      breadcrumb: {
        "@id": "https://www.accessexperts.com.au#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: ["https://www.accessexperts.com.au"],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.accessexperts.com.au#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Hero />
      <Services />
      <CTAMain />
      <IsRight />
      <SolutionsCarousel />
      <Testimonials testimonials={testimonials} />
      <Brands />
      <CTAFull />
      <Promo
        h2="We Deliver the Best Quality"
        p="The Access experts specialist team is part of the Office experts Group, leaders in Microsoft technologies for over 25yrs"
      />
      <FAQSection faqs={faqs} />
      <Contact />
    </>
  );
};

export default Page;
