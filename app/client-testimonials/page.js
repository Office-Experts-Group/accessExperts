import React from "react";

import Contact from "../../components/Contact";
import TestimonialPage from "./(components)/TestimonialPage";
import ServiceHero from "../../components/ServiceHero";

import { getTestimonialsPageSchema } from "../../utils/testimonialSchemaGenerator";
import { testimonials } from "../../testimonials";
import { filterAndSortTestimonials } from "../../utils/filterTestimonials";

const serviceTestimonials =
  filterAndSortTestimonials(testimonials, "access") || testimonials;

import testimonialsPic from "../../public/pageHeros/testimonials.webp";
import testimonialsMob from "../../public/pageHeros/mob/testimonialsMob.webp";

import {
  generateProfessionalServiceSchema,
  generateOrganizationSchema,
} from "../../utils/schemaGenerators";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    ...getTestimonialsPageSchema(serviceTestimonials, "access")["@graph"],
    generateOrganizationSchema(),
    generateProfessionalServiceSchema(),
    {
      "@type": "WebPage",
      "@id": "https://accessexperts.com.au/client-testimonials",
      url: "https://accessexperts.com.au/client-testimonials",
      name: "Client Testimonials - Access Experts Success Stories",
      isPartOf: {
        "@id": "https://accessexperts.com.au#website",
      },
      datePublished: "2024-10-27T00:00:00+00:00",
      dateModified: "2024-10-27T00:00:00+00:00",
      description:
        "Read what our clients say about our Microsoft Access database solutions. Real testimonials from satisfied customers across Australia.",
      breadcrumb: {
        "@id": "https://accessexperts.com.au/client-testimonials#breadcrumb",
      },
      inLanguage: "en-AU",
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://accessexperts.com.au/client-testimonials#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://accessexperts.com.au",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Client Testimonials",
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
        title="Client Testimonials"
        desktopImage={testimonialsPic}
        mobileImage={testimonialsMob}
        altDesk={"Smiley face on a wooden block"}
        altMob={"5 stars"}
      />
      <TestimonialPage testimonials={serviceTestimonials} />
      <Contact />
    </>
  );
};

export default Page;
