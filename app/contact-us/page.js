import React from "react";

import Contact from "../../components/Contact";
import ServiceHero from "../../components/ServiceHero";
import CTAMain from "./(components)/CTAMain";

import contactUs from "../../public/pageHeros/contactUs.webp";
import contactUsMob from "../../public/pageHeros/mob/contactUsMob.webp";

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
        title="Contact Us"
        desktopImage={contactUs}
        mobileImage={contactUsMob}
        altDesk={"contact method icons on wooden blocks"}
        altMob={"contact method icons on wooden blocks"}
      />
      <CTAMain />
      <Contact />
    </>
  );
};

export default Page;
