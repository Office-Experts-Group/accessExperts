import React from "react";

import ServiceHero from "../../components/ServiceHero";
import LocationPages from "../(components)/LocationPages";
import CTAMainProps from "../(components)/CTAMainProps";
import ContactLocationSegment from "../../components/ContactLocationSegment";
import ServicesLocation from "../(components)/ServicesLocation";
import Promo from "../../components/Promo";
import GoodToKnow from "../../components/GoodToKnow";

import melbourne from "../../public/pageHeros/melbourne.webp";
import melbourneMob from "../../public/pageHeros/mob/melbourneMob.webp";

import { getHomePageSchema } from "../../utils/testimonialSchemaGenerator";
import {
  generateProfessionalServiceSchema,
  generateOrganizationSchema,
} from "../../utils/schemaGenerators";
import { testimonials } from "../../testimonials";

import LocationSummary from "../(components)/LocationSummary";
import Testimonials from "../(components)/Testimonials";
import MeetTheTeamSlider from "../../components/MeetTheTeamSlider";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    generateOrganizationSchema(),
    generateProfessionalServiceSchema(),
    ...getHomePageSchema(testimonials, "access")["@graph"],
    {
      "@type": "WebPage",
      "@id": "https://www.accessexperts.com.au/access-consultants-melbourne",
      url: "https://www.accessexperts.com.au/access-consultants-melbourne",
      name: "Microsoft Access Consultants Melbourne",
      isPartOf: {
        "@id": "https://www.accessexperts.com.au#website",
      },
      datePublished: "2024-10-26T00:00:00+00:00",
      dateModified: "2025-03-26T00:00:00+00:00",
      breadcrumb: {
        "@id":
          "https://www.accessexperts.com.au/word-consultants-melbourne#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: [
            "https://www.accessexperts.com.au/word-consultants-melbourne",
          ],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.accessexperts.com.au/word-consultants-melbourne#breadcrumb",
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
          name: "Microsoft Word Consultants Melbourne",
        },
      ],
    },
  ],
};

const Page = () => {
  const location = "Melbourne";

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ServiceHero
        title={`Microsoft Access Consultants ${location}`}
        desktopImage={melbourne}
        mobileImage={melbourneMob}
        altDesk="Melbourne"
        altMob="Melbourne"
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
