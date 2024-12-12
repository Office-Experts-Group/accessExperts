import React from "react";

import Contact from "../../components/Contact";
import TestimonialPage from "./(components)/TestimonialPage";
import ServiceHero from "../../components/ServiceHero";

import { getTestimonialsPageSchema } from "../../utils/testimonialSchemaGenerator";
import { testimonials } from "../../testimonials";

import testimonialsPic from "../../public/pageHeros/testimonials.webp";
import testimonialsMob from "../../public/pageHeros/mob/testimonialsMob.webp";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    ...getTestimonialsPageSchema(testimonials)["@graph"],
    {
      "@type": "WebPage",
      "@id": "https://accessexperts.com.au/client-testimonials/",
      url: "https://accessexperts.com.au/client-testimonials/",
      name: "Client Testimonials - Access Experts Success Stories",
      isPartOf: {
        "@id": "https://accessexperts.com.au/#website",
      },
      datePublished: "2024-10-27T00:00:00+00:00",
      dateModified: "2024-10-27T00:00:00+00:00",
      description:
        "Read what our clients say about our Microsoft Access database solutions. Real testimonials from satisfied customers across Australia.",
      breadcrumb: {
        "@id": "https://accessexperts.com.au/client-testimonials/#breadcrumb",
      },
      inLanguage: "en-AU",
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://accessexperts.com.au/client-testimonials/#breadcrumb",
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
          name: "Client Testimonials",
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
      <TestimonialPage testimonials={testimonials} />
      <Contact />
    </>
  );
};

export default Page;
