import React from "react";
import dynamic from "next/dynamic";

import ServiceHero from "../../components/ServiceHero";
import PageSegmentMain from "./(components)/PageSegmentMain";
const ServicesSection = dynamic(() => import("./(components)/ServicesSection"));
const IndustrySection = dynamic(() => import("./(components)/IndustrySection"));
const HowWeWork = dynamic(() => import("./(components)/HowWeWork"));
const AustraliaWide = dynamic(() => import("./(components)/AustraliaWide"));
const Testimonials = dynamic(() => import("../(components)/Testimonials"));
const ExpertsAwait = dynamic(() => import("../../components/ExpertsAwait"));
const Contact = dynamic(() => import("../../components/Contact"));
const DeskImage = dynamic(() => import("./(components)/DeskImage"));

import { testimonials } from "../../testimonials";

import services from "../../public/pageHeros/services.webp";
import servicesMob from "../../public/pageHeros/mob/servicesMob.webp";

import {
  generateProfessionalServiceSchema,
  generateOrganizationSchema,
  generateWebSiteSchema,
} from "../../utils/schemaGenerators";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    generateOrganizationSchema(),
    generateProfessionalServiceSchema(),
    generateWebSiteSchema(
      "https://www.accessexperts.com.au",
      "Access Experts",
      "Australia-wide Microsoft Access Design, Development and Consulting Experts",
    ),
    {
      "@type": "WebPage",
      "@id": "https://www.accessexperts.com.au/services",
      url: "https://www.accessexperts.com.au/services",
      name: "Microsoft Access Services | Custom Database Solutions Australia",
      isPartOf: {
        "@id": "https://www.accessexperts.com.au#website",
      },
      datePublished: "2025-10-20T00:00:00+00:00",
      dateModified: "2025-10-20T00:00:00+00:00",
      description:
        "Comprehensive Microsoft Access database services including custom development, cloud integration, migration, support and training. Expert consultants Australia-wide.",
      breadcrumb: {
        "@id": "https://www.accessexperts.com.au/services#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: ["https://www.accessexperts.com.au/services"],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.accessexperts.com.au/services#breadcrumb",
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
          name: "Services",
          item: "https://www.accessexperts.com.au/services",
        },
      ],
    },
    {
      "@type": "Service",
      "@id": "https://www.accessexperts.com.au/services#service",
      serviceType: "Microsoft Access Database Services",
      provider: {
        "@id": "https://www.accessexperts.com.au#organization",
      },
      areaServed: {
        "@type": "Country",
        name: "Australia",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Microsoft Access Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Custom Database Development",
              description:
                "Bespoke Access database design, development and VBA programming",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Cloud & Online Solutions",
              description:
                "Office 365, SharePoint and Azure SQL Server integration",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Third-Party Integration",
              description:
                "CRM, accounting and business application connectivity",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Migration & Upgrades",
              description: "Version upgrades and SQL Server migration services",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Support & Maintenance",
              description:
                "Ongoing troubleshooting, optimization and emergency support",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Training & Documentation",
              description:
                "User training and comprehensive system documentation",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Power BI Integration",
              description:
                "Business intelligence and visual analytics solutions",
            },
          },
        ],
      },
    },
    {
      "@type": "ItemList",
      "@id": "https://www.accessexperts.com.au/services#industries",
      name: "Industries Served",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Manufacturing & Logistics",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Healthcare & Medical",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Education & Training",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Professional Services",
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Government & Public Sector",
        },
        {
          "@type": "ListItem",
          position: 6,
          name: "Retail & E-commerce",
        },
        {
          "@type": "ListItem",
          position: 7,
          name: "Construction & Engineering",
        },
        {
          "@type": "ListItem",
          position: 8,
          name: "Finance & Accounting",
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
        title="Microsoft Access Services"
        desktopImage={services}
        mobileImage={servicesMob}
        altDesk="Microsoft Access database services"
        altMob="Access database solutions"
      />
      <PageSegmentMain />
      <ServicesSection />
      <IndustrySection />
      <DeskImage />
      <HowWeWork />
      <AustraliaWide />
      <Testimonials testimonials={testimonials} />
      <ExpertsAwait />
      <Contact />
    </>
  );
};

export default Page;
