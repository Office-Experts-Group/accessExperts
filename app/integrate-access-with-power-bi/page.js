import React from "react";
import dynamic from "next/dynamic";

import ServiceHero from "../../components/ServiceHero";
import PageSegmentMain from "./(components)/PageSegmentMain";
const ExpertsAwait = dynamic(() => import("../../components/ExpertsAwait"));
const Contact = dynamic(() => import("../../components/Contact"));
const Promo = dynamic(() => import("../../components/Promo"));
const WhyIntegrate = dynamic(() => import("./(components)/WhyIntegrate"));

import integration from "../../public/pageHeros/integration.webp";
import integrationMob from "../../public/pageHeros/mob/integrationMob.webp";

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
      "@id": "https://www.accessexperts.com.au/integrate-access-with-power-bi",
      url: "https://www.accessexperts.com.au/integrate-access-with-power-bi",
      name: "Integrate Microsoft Access with Power BI | Access Experts",
      isPartOf: {
        "@id": "https://www.accessexperts.com.au#website",
      },
      datePublished: "2025-10-20T00:00:00+00:00",
      dateModified: "2025-10-20T00:00:00+00:00",
      description:
        "Integrate Microsoft Access with Power BI to create interactive dashboards and modern analytics. Expert integration services for Australian businesses.",
      breadcrumb: {
        "@id":
          "https://www.accessexperts.com.au/integrate-access-with-power-bi#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: [
            "https://www.accessexperts.com.au/integrate-access-with-power-bi",
          ],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.accessexperts.com.au/integrate-access-with-power-bi#breadcrumb",
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
          name: "Integrate Access with Power BI",
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

      <main>
        <ServiceHero
          title="Integrate Access with Power BI"
          desktopImage={integration}
          mobileImage={integrationMob}
          altDesk="Microsoft Access and Power BI integration"
          altMob="Microsoft Access and Power BI integration"
        />

        <PageSegmentMain />
        <WhyIntegrate />
        <div style={{ paddingBottom: "3rem" }}>
          <Promo
            h2="Need Expert Help with Access and Power BI Integration?"
            p="Our Microsoft-certified consultants specialise in connecting Access databases to Power BI, creating custom dashboards, and implementing automated reporting solutions."
          />
        </div>
        <ExpertsAwait />
        <Contact />
      </main>
    </>
  );
};

export default Page;
