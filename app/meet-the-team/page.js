import React from "react";

import ServiceHero from "../../components/ServiceHero";
import MeetTheTeam from "../../components/MeetTheTeam";
import Contact from "../../components/Contact";
import Services from "./(components)/Services";

import handShake from "../../public/pageHeros/handShake.webp";
import handShakeMob from "../../public/pageHeros/mob/handShakeMob.webp";

import {
  generateProfessionalServiceSchema,
  generateOrganizationSchema,
} from "../../utils/schemaGenerators";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    generateOrganizationSchema(),
    generateProfessionalServiceSchema(),
    {
      "@type": "WebPage",
      "@id": "https://www.accessexperts.com.au/meet-the-team",
      url: "https://www.accessexperts.com.au/meet-the-team",
      name: "Meet Our Microsoft Access Database Experts",
      isPartOf: {
        "@id": "https://www.accessexperts.com.au#website",
      },
      datePublished: "2024-10-27T00:00:00+00:00",
      dateModified: "2025-08-13T00:00:00+00:00",
      description:
        "Meet our expert Microsoft Access developers and consultants. Specialists in database design, integration, and business solutions Australia-wide.",
      breadcrumb: {
        "@id": "https://www.accessexperts.com.au/meet-the-team#breadcrumb",
      },
      inLanguage: "en-AU",
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.accessexperts.com.au/meet-the-team#breadcrumb",
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
          name: "Meet the Team",
          item: "https://www.accessexperts.com.au/meet-the-team",
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
        title="Meet Our Team"
        desktopImage={handShake}
        mobileImage={handShakeMob}
        altDesk={"Hand shaking"}
        altMob={"Hand shaking"}
      />
      <Services />
      <MeetTheTeam />
      <Contact />
    </>
  );
};

export default Page;
