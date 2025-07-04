import React from "react";

import ServiceHero from "../../components/ServiceHero";
import LocationPages from "../(components)/LocationPages";
import CTAMainProps from "../(components)/CTAMainProps";
import ContactLocationSegment from "../../components/ContactLocationSegment";
import ServicesLocation from "../(components)/ServicesLocation";
import Promo from "../../components/Promo";
import GoodToKnow from "../../components/GoodToKnow";

import brisbane from "../../public/pageHeros/brisbane.webp";
import brisbaneMob from "../../public/pageHeros/mob/brisbaneMob.webp";

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
      "@id": "https://www.accessexperts.com.au/access-consultants-brisbane",
      url: "https://www.accessexperts.com.au/access-consultants-brisbane",
      name: "Microsoft Access Consultants Brisbane",
      description:
        "Microsoft Access consultants in Brisbane with 25+ years' experience. Custom database development, integration, and support services.",
      isPartOf: {
        "@id": "https://www.accessexperts.com.au#website",
      },
      datePublished: "2024-10-26T00:00:00+00:00",
      dateModified: "2025-07-04T00:00:00+00:00",
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
