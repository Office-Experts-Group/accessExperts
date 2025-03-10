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
      dateModified: "2025-03-26T00:00:00+00:00",
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
            excel: "https://www.excelexperts.com.au/contact-us",
            word: "https://www.wordexperts.com.au/contact-us",
            access: "/contact-us",
            powerplatform: "https://www.powerplatformexperts.com.au/contact-us",
            office: "https://www.officeexperts.com.au/contact-us",
          },
        },
        {
          name: "Northern Rivers, NSW",
          image: northernRivers,
          alt: "Northern Rivers region",
          description:
            "Serving the Northern Rivers region of NSW, our local database team implements advanced Microsoft Access solutions for organisations of all sizes. We provide both remote and on-site database development and support to enhance your data management capabilities.",
          serviceLinks: {
            excel: "https://www.excelexperts.com.au/contact-us",
            word: "https://www.wordexperts.com.au/contact-us",
            access: "/contact-us",
            powerplatform: "https://www.powerplatformexperts.com.au/contact-us",
            office: "https://www.officeexperts.com.au/contact-us",
          },
        },
        {
          name: "Wollongong, NSW",
          image: wollongong,
          alt: "Wollongong coastline",
          description:
            "Our Wollongong database consultants assist businesses throughout the Illawarra region with specialised Microsoft Access services. We develop customised database applications that help organisations optimize their data infrastructure and improve operational efficiency.",
          serviceLinks: {
            excel: "https://www.excelexperts.com.au/contact-us",
            word: "https://www.wordexperts.com.au/contact-us",
            access: "/contact-us",
            powerplatform: "https://www.powerplatformexperts.com.au/contact-us",
            office: "https://www.officeexperts.com.au/contact-us",
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
            "Our Melbourne team offers premium Microsoft Access database services across Greater Melbourne. As part of Office Experts Group, we specialise in database development, data integration, and automated reporting solutions utilizing Microsoft Access and related technologies. Our dedicated Access developers are industry leaders in database design and implementation.",
          serviceLinks: {
            excel: "https://www.excelexperts.com.au/contact-us",
            word: "https://www.wordexperts.com.au/contact-us",
            access: "/contact-us",
            powerplatform: "https://www.powerplatformexperts.com.au/contact-us",
            office: "https://www.officeexperts.com.au/contact-us",
          },
        },
        {
          name: "Richmond, VIC",
          image: richmond,
          alt: "Richmond area",
          description:
            "Our database professionals in Richmond create tailored Microsoft Access solutions for local enterprises. We specialise in developing data management systems that focus on workflow automation and enhancing organizational data integrity and accessibility.",
          serviceLinks: {
            excel: "https://www.excelexperts.com.au/contact-us",
            word: "https://www.wordexperts.com.au/contact-us",
            access: "/contact-us",
            powerplatform: "https://www.powerplatformexperts.com.au/contact-us",
            office: "https://www.officeexperts.com.au/contact-us",
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
            excel: "https://www.excelexperts.com.au/contact-us",
            word: "https://www.wordexperts.com.au/contact-us",
            access: "/contact-us",
            powerplatform: "https://www.powerplatformexperts.com.au/contact-us",
            office: "https://www.officeexperts.com.au/contact-us",
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
            excel: "https://www.excelexperts.com.au/contact-us",
            word: "https://www.wordexperts.com.au/contact-us",
            access: "/contact-us",
            powerplatform: "https://www.powerplatformexperts.com.au/contact-us",
            office: "https://www.officeexperts.com.au/contact-us",
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
            excel: "https://www.excelexperts.com.au/contact-us",
            word: "https://www.wordexperts.com.au/contact-us",
            access: "/contact-us",
            powerplatform: "https://www.powerplatformexperts.com.au/contact-us",
            office: "https://www.officeexperts.com.au/contact-us",
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
            excel: "https://www.excelexperts.com.au/contact-us",
            word: "https://www.wordexperts.com.au/contact-us",
            access: "/contact-us",
            powerplatform: "https://www.powerplatformexperts.com.au/contact-us",
            office: "https://www.officeexperts.com.au/contact-us",
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
            excel: "https://www.excelexperts.com.au/contact-us",
            word: "https://www.wordexperts.com.au/contact-us",
            access: "/contact-us",
            powerplatform: "https://www.powerplatformexperts.com.au/contact-us",
            office: "https://www.officeexperts.com.au/contact-us",
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
        h2={"Need Microsoft expertise in your area?"}
        p={
          "Contact us today to discover how our local and remote services can help your business leverage the full power of Microsoft Word."
        }
      />
      <Contact />
    </>
  );
};

export default Page;
