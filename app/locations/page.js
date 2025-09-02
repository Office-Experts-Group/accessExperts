import React from "react";

import ServiceHero from "../../components/ServiceHero";
import LocationGroups from "./(components)/LocationGroups";
import Promo from "../../components/Promo";
import Contact from "../../components/Contact";

import australia from "../../public/pageHeros/australia.webp";
import australiaMob from "../../public/pageHeros/mob/australiaMob.webp";

import {
  generateProfessionalServiceSchema,
  generateOrganizationSchema,
} from "../../utils/schemaGenerators";

// Import location images
import sydney from "../../public/pageHeros/sydney.webp";
import melbourne from "../../public/pageHeros/mob/melbourneMob.webp";
import brisbane from "../../public/pageHeros/mob/brisbaneMob.webp";
import perth from "../../public/pageHeros/mob/perthMob.webp";
import adelaide from "../../public/pageHeros/mob/adelaideMob.webp";
import canberra from "../../public/pageHeros/mob/canberraMob.webp";
import northernRivers from "../../public/pageHeros/mob/northernRiversMob.webp";
import wollongong from "../../public/pageHeros/mob/wollongongMob.webp";
import richmond from "../../public/pageHeros/mob/richmondMob.webp";
import darwin from "../../public/pageHeros/mob/darwinMob.webp";
import goldCoast from "../../public/pageHeros/mob/goldCoastMob.webp";
import centralCoast from "../../public/pageHeros/mob/centralCoastMob.webp";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    generateOrganizationSchema(),
    generateProfessionalServiceSchema(),
    {
      "@type": "WebPage",
      "@id": "https://www.accessexperts.com.au/locations",
      url: "https://www.accessexperts.com.au/locations",
      name: "Microsoft Access Experts Locations | Australia-Wide Service",
      isPartOf: {
        "@id": "https://www.accessexperts.com.au#website",
      },
      datePublished: "2024-10-26T00:00:00+00:00",
      dateModified: "2025-09-02T00:00:00+00:00",
      breadcrumb: {
        "@id": "https://www.accessexperts.com.au/locations#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: ["https://www.accessexperts.com.au/locations"],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.accessexperts.com.au/locations#breadcrumb",
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
          name: "Locations",
          item: "https://www.accessexperts.com.au/locations",
        },
      ],
    },
  ],
};

const Page = () => {
  // Define the location data
  const locationData = [
    {
      id: "nsw",
      sectionTitle: "New South Wales",
      locations: [
        {
          name: "Sydney, NSW",
          image: sydney,
          alt: "Sydney skyline",
          description:
            "Our Sydney database specialists deliver professional Microsoft Access consulting throughout the Greater Sydney region. From custom database design to data migration services, our team provides comprehensive support and training alongside a full range of Microsoft Access database solutions.",
          serviceLinks: {
            excel: "https://www.excelexperts.com.au/excel-consultants-sydney",
            word: "https://www.wordexperts.com.au/word-consultants-sydney",
            access: "/access-consultants-sydney",
            powerplatform:
              "https://www.powerplatformexperts.com.au/power-platform-consultants-sydney",
            office:
              "https://www.officeexperts.com.au/office-and-office-365-experts-sydney",
          },
        },
        {
          name: "Central Coast, NSW",
          image: centralCoast,
          alt: "Central Coast region",
          description:
            "On the beautiful Central Coast region of NSW, our team provides Microsoft Access solutions for a variety of businesses. Working either through remote access and online support, or on-site support for database development and data management systems.",
          serviceLinks: {
            excel:
              "https://www.excelexperts.com.au/excel-consultants-central-coast-nsw",
            word: "https://www.wordexperts.com.au/word-consultants-central-coast-nsw",
            access: "/access-consultants-central-coast-nsw",
            powerplatform:
              "https://www.powerplatformexperts.com.au/power-platform-consultants-central-coast-nsw",
            office:
              "https://www.officeexperts.com.au/office-and-office-365-experts-central-coast-nsw",
          },
        },
        {
          name: "Wollongong, NSW",
          image: wollongong,
          alt: "Wollongong coastline",
          description:
            "Our Wollongong database consultants assist businesses throughout the Illawarra region with specialised Microsoft Access services. We develop customised database applications that help organisations optimise their data infrastructure and improve operational efficiency.",
          serviceLinks: {
            excel:
              "https://www.excelexperts.com.au/excel-consultants-wollongong",
            word: "https://www.wordexperts.com.au/word-consultants-wollongong",
            access: "/access-consultants-wollongong",
            powerplatform:
              "https://www.powerplatformexperts.com.au/power-platform-consultants-wollongong",
            office:
              "https://www.officeexperts.com.au/office-excel-access-and-365-experts-wollongong",
          },
        },
        {
          name: "Northern Rivers, NSW",
          image: northernRivers,
          alt: "Northern Rivers region",
          description:
            "Serving the Northern Rivers region of NSW, our local database team implements advanced Microsoft Access solutions for organisations of all sizes. We provide both remote and on-site database development and support to enhance your data management capabilities.",
          serviceLinks: {
            excel:
              "https://www.excelexperts.com.au/excel-consultants-northern-rivers-nsw",
            word: "https://www.wordexperts.com.au/word-consultants-northern-rivers-nsw",
            access: "/access-consultants-northern-rivers-nsw",
            powerplatform:
              "https://www.powerplatformexperts.com.au/power-platform-consultants-northern-rivers-nsw",
            office:
              "https://www.officeexperts.com.au/office-excel-access-and-365-experts-northern-rivers-nsw",
          },
        },
      ],
    },
    {
      id: "vic",
      sectionTitle: "Victoria",
      locations: [
        {
          name: "Melbourne, VIC",
          image: melbourne,
          alt: "Melbourne cityscape",
          description:
            "Our Melbourne team offers premium Microsoft Access database services across Greater Melbourne. As part of Office Experts Group, we specialise in database development, data integration, and automated reporting solutions utilising Microsoft Access and related technologies. Our dedicated Access developers are industry leaders in database design and implementation.",
          serviceLinks: {
            excel:
              "https://www.excelexperts.com.au/excel-consultants-melbourne",
            word: "https://www.wordexperts.com.au/word-consultants-melbourne",
            access: "/access-consultants-melbourne",
            powerplatform:
              "https://www.powerplatformexperts.com.au/power-platform-consultants-melbourne",
            office:
              "https://www.officeexperts.com.au/office-and-office-365-experts-melbourne",
          },
        },
        {
          name: "Richmond, VIC",
          image: richmond,
          alt: "Richmond area",
          description:
            "Our database professionals in Richmond create tailored Microsoft Access solutions for local enterprises. We specialise in developing data management systems that focus on workflow automation and enhancing organisational data integrity and accessibility.",
          serviceLinks: {
            excel: "https://www.excelexperts.com.au/excel-consultants-richmond",
            word: "https://www.wordexperts.com.au/word-consultants-richmond",
            access: "/access-consultants-richmond",
            powerplatform:
              "https://www.powerplatformexperts.com.au/power-platform-consultants-richmond",
            office:
              "https://www.officeexperts.com.au/office-and-office-365-experts-richmond",
          },
        },
      ],
    },
    {
      id: "qld",
      sectionTitle: "Queensland",
      locations: [
        {
          name: "Brisbane, QLD",
          image: brisbane,
          alt: "Brisbane river and skyline",
          description:
            "Our Brisbane database team delivers end-to-end Microsoft Access solutions throughout Southeast Queensland. We develop custom databases, implement data migration strategies, and provide expert training to help businesses maximise their data management potential. Our Access specialists have been creating reliable database systems for more than 25 years.",
          serviceLinks: {
            excel: "https://www.excelexperts.com.au/excel-consultants-brisbane",
            word: "https://www.wordexperts.com.au/word-consultants-brisbane",
            access: "/access-consultants-brisbane",
            powerplatform:
              "https://www.powerplatformexperts.com.au/power-platform-consultants-brisbane",
            office:
              "https://www.officeexperts.com.au/office-excel-access-and-365-experts-brisbane",
          },
        },
        {
          name: "Gold Coast, QLD",
          image: goldCoast,
          alt: "Gold Coast skyline and beaches",
          description:
            "Our Gold Coast team specialises in Microsoft Access consulting and training for local businesses. From database design to data integration, custom forms, and automated reporting systems, we provide tailored services to improve efficiency and productivity.",
          serviceLinks: {
            excel:
              "https://www.excelexperts.com.au/excel-consultants-gold-coast",
            word: "https://www.wordexperts.com.au/word-consultants-gold-coast",
            access: "/access-consultants-gold-coast",
            powerplatform:
              "https://www.powerplatformexperts.com.au/power-platform-consultants-gold-coast",
            office:
              "https://www.officeexperts.com.au/word-and-powerpoint-experts-gold-coast",
          },
        },
      ],
    },
    {
      id: "wa",
      sectionTitle: "Western Australia",
      locations: [
        {
          name: "Perth, WA",
          image: perth,
          alt: "Perth skyline",
          description:
            "Our Perth database consultants implement powerful Microsoft Access solutions for businesses across Western Australia. We design custom database applications that help automate data collection, reporting, and analysis to streamline your business operations.",
          serviceLinks: {
            excel: "https://www.excelexperts.com.au/excel-consultants-perth",
            word: "https://www.wordexperts.com.au/word-consultants-perth",
            access: "/access-consultants-perth",
            powerplatform:
              "https://www.powerplatformexperts.com.au/power-platform-consultants-perth",
            office:
              "https://www.officeexperts.com.au/office-excel-access-and-365-experts-perth",
          },
        },
      ],
    },
    {
      id: "sa",
      sectionTitle: "South Australia",
      locations: [
        {
          name: "Adelaide, SA",
          image: adelaide,
          alt: "Adelaide city view",
          description:
            "Serving South Australian organisations, our Adelaide team delivers expert Microsoft Access database development and support. We have over 25 years of experience creating tailored database solutions that address complex data management challenges and enhance business intelligence capabilities.",
          serviceLinks: {
            excel: "https://www.excelexperts.com.au/excel-consultants-adelaide",
            word: "https://www.wordexperts.com.au/word-consultants-adelaide",
            access: "/access-consultants-adelaide",
            powerplatform:
              "https://www.powerplatformexperts.com.au/power-platform-consultants-adelaide",
            office:
              "https://www.officeexperts.com.au/office-excel-access-and-365-experts-adelaide",
          },
        },
      ],
    },
    {
      id: "act",
      sectionTitle: "Australian Capital Territory",
      locations: [
        {
          name: "Canberra, ACT",
          image: canberra,
          alt: "Canberra parliament house",
          description:
            "Our Canberra database team specialises in Microsoft Access solutions for government agencies as well as local organisations. As part of the Office Experts Group, our Access specialists are committed to delivering secure, compliant database applications that meet the unique requirements of government departments and local Canberra businesses.",
          serviceLinks: {
            excel: "https://www.excelexperts.com.au/excel-consultants-canberra",
            word: "https://www.wordexperts.com.au/word-consultants-canberra",
            access: "/access-consultants-canberra",
            powerplatform:
              "https://www.powerplatformexperts.com.au/power-platform-consultants-canberra",
            office:
              "https://www.officeexperts.com.au/office-and-office-365-experts-canberra",
          },
        },
      ],
    },
    {
      id: "nt",
      sectionTitle: "Northern Territory",
      locations: [
        {
          name: "Darwin, NT",
          image: darwin,
          alt: "Darwin harbor",
          description:
            "Our Northern Territory team implements specialised Microsoft Access database solutions for Darwin businesses and organisations. We provide both remote and on-site database development, integration services, and performance optimisation across the entire Microsoft Suite.",
          serviceLinks: {
            excel: "https://www.excelexperts.com.au/excel-consultants-darwin",
            word: "https://www.wordexperts.com.au/word-consultants-darwin",
            access: "/access-consultants-darwin",
            powerplatform:
              "https://www.powerplatformexperts.com.au/power-platform-consultants-darwin",
            office:
              "https://www.officeexperts.com.au/office-excel-access-and-365-experts-darwin",
          },
        },
      ],
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ServiceHero
        title="Our Locations"
        desktopImage={australia}
        mobileImage={australiaMob}
        altDesk="Australia map"
        altMob="man holding Australia flag"
      />

      {locationData.map((section) => (
        <LocationGroups
          key={section.id}
          sectionTitle={section.sectionTitle}
          locations={section.locations}
        />
      ))}

      <Promo
        h2={"Need Microsoft Access expertise in your area?"}
        p={
          "Contact us today to discover how our local and remote services can help your business leverage the full power of Microsoft Access."
        }
      />
      <Contact />
    </>
  );
};

export default Page;
