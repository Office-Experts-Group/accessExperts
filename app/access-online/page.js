import React from "react";

import ServiceHero from "../../components/ServiceHero";
import PageSegmentMain from "./(components)/PageSegmentMain";
import PageSegmentSmall from "./(components)/PageSegmentSmall";
import PageSegment4 from "./(components)/PageSegment4";
import ExpertsAwait from "../../components/ExpertsAwait";
import Contact from "../../components/Contact";
import Promo from "../../components/Promo";
import FAQSection from "../../components/FAQSection";

import faqs from "../../faqs/access-online.js";

import pen from "../../public/pageHeros/pen.webp";
import seatMob from "../../public/pageHeros/mob/seatMob.webp";

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
      "@id": "https://www.accessexperts.com.au/access-online",
      url: "https://www.accessexperts.com.au/access-online",
      name: "Online Microsoft Access Solutions & Remote Database Services",
      isPartOf: {
        "@id": "https://www.accessexperts.com.au#website",
      },
      datePublished: "2024-10-27T00:00:00+00:00",
      dateModified: "2025-07-04T00:00:00+00:00",
      description:
        "Microsoft Access cloud database solutions with Office 365, SharePoint, and Azure. Online Access development and mobile-ready support.",
      breadcrumb: {
        "@id": "https://www.accessexperts.com.au/access-online#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: ["https://www.accessexperts.com.au/access-online"],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.accessexperts.com.au/access-online#breadcrumb",
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
          name: "Access Online",
          item: "https://www.accessexperts.com.au/access-online",
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
        title="Online Access Database Solutions"
        desktopImage={pen}
        mobileImage={seatMob}
        altDesk={"Pen held infront of graphs"}
        altMob={"office environment"}
      />
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
