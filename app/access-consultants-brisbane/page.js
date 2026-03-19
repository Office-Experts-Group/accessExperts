import React from "react";
import dynamic from "next/dynamic";

import ServiceHero from "../../components/ServiceHero";

const LocationPages = dynamic(() => import("../(components)/LocationPages"));
const CTAMainProps = dynamic(() => import("../(components)/CTAMainProps"));
const ContactLocationSegment = dynamic(
  () => import("../../components/ContactLocationSegment"),
);
const ServicesLocation = dynamic(
  () => import("../(components)/ServicesLocation"),
);
const Promo = dynamic(() => import("../../components/Promo"));
const GoodToKnow = dynamic(() => import("../../components/GoodToKnow"));
const LocationSummary = dynamic(
  () => import("../(components)/LocationSummary"),
);
const Testimonials = dynamic(() => import("../(components)/Testimonials"));
const MeetTheTeamSlider = dynamic(
  () => import("../../components/MeetTheTeamSlider"),
);

import { getHomePageSchema } from "../../utils/testimonialSchemaGenerator";
import {
  generateProfessionalServiceSchema,
  generateOrganizationSchema,
  generateWebSiteSchema,
} from "../../utils/schemaGenerators";
import { testimonials } from "../../testimonials";

import brisbane from "../../public/pageHeros/brisbane.webp";
import brisbaneMob from "../../public/pageHeros/mob/brisbaneMob.webp";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    generateOrganizationSchema(),
    generateProfessionalServiceSchema(),
    ...getHomePageSchema(testimonials, "access")["@graph"],
    generateWebSiteSchema(
      "https://www.accessexperts.com.au",
      "Access Experts",
      "Australia-wide Microsoft Access Design, Development and Consulting Experts",
    ),
    {
      "@type": "WebPage",
      "@id": "https://www.accessexperts.com.au/access-consultants-brisbane",
      url: "https://www.accessexperts.com.au/access-consultants-brisbane",
      name: "Microsoft Access Consultants Brisbane",
      description:
        "Microsoft Access consultants in Brisbane with extensive cross-industry experience. From custom database builds to legacy system upgrades, we support Queensland businesses of all sizes.",

      isPartOf: {
        "@id": "https://www.accessexperts.com.au#website",
      },
      datePublished: "2024-10-26T00:00:00+00:00",
      dateModified: "2026-03-19T00:00:00+00:00",
      breadcrumb: {
        "@id":
          "https://www.accessexperts.com.au/word-consultants-brisbane#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: [
            "https://www.accessexperts.com.au/word-consultants-brisbane",
          ],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.accessexperts.com.au/word-consultants-brisbane#breadcrumb",
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
          name: "Microsoft Word Consultants Brisbane",
        },
      ],
    },
  ],
};

const Page = () => {
  const location = "Brisbane";

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ServiceHero
        title={`Microsoft Access Consultants ${location}`}
        desktopImage={brisbane}
        mobileImage={brisbaneMob}
        altDesk="Brisbane"
        altMob="Brisbane"
      />
      <LocationSummary location={location} service="Microsoft Access" />
      <LocationPages location={location} />
      <CTAMainProps location={location} />
      <ServicesLocation location={location} />
      <MeetTheTeamSlider />
      <GoodToKnow />
      <Testimonials testimonials={testimonials} />
      <Promo
        h2={"Let's transform your database solutions!"}
        p={
          "Unlock the full potential of Microsoft Access with our expert consultant solutions, designed to enhance data management and streamline your business processes."
        }
      />
      <ContactLocationSegment location={location} />
    </>
  );
};

export default Page;
