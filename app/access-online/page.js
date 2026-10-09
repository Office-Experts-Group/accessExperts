import React from "react";
import dynamic from "next/dynamic";

import ServiceHero from "../../components/ServiceHero";

const PageSegmentMain = dynamic(() => import("./(components)/PageSegmentMain"));
const PageSegmentSmall = dynamic(
  () => import("./(components)/PageSegmentSmall"),
);
const PageSegment4 = dynamic(() => import("./(components)/PageSegment4"));
const ExpertsAwait = dynamic(() => import("../../components/ExpertsAwait"));
const Contact = dynamic(() => import("../../components/Contact"));
const Promo = dynamic(() => import("../../components/Promo"));
const RelatedLinks = dynamic(() => import("../../components/RelatedLinks"));
const FAQSection = dynamic(() => import("../../components/FAQSection"));

import faqs from "../../faqs/access-online.js";

import pen from "../../public/pageHeros/pen.webp";
import seatMob from "../../public/pageHeros/mob/seatMob.webp";

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
      <RelatedLinks
        theme="light"
        eyebrow="Case Studies"
        heading="Business tools that run online"
        links={[
          {
            href: "https://www.officeexperts.com.au/case-studies/custom-quoting-tool",
            linkText: "Integrate modern tools with legacy systems",
            title:
              "Replacing manual quote requests with an instant online tax depreciation calculator",
            description:
              "A tax depreciation specialist had no way for a prospective property investor to get an estimate without contacting the office, and every quote was worked out by hand. We built a custom React calculator, embedded in their WordPress site as a plugin, that emails an instant branded estimate to both the customer and the client's team. The client can update rates and building price index data themselves.",
            image:
              "https://www.officeexperts.com.au/case-studies/custom-quoting-tool.png",
            imageAlt:
              "Custom React tax depreciation calculator embedded in a WordPress site",
          },
          {
            href: "https://www.officeexperts.com.au/case-studies/private-client-cashflow-forecasting-tool",
            linkText: "See our private web planning tool",
            title:
              "Turning uneven investment income into one clear monthly figure to plan against",
            description:
              "A private client's investment and business income arrived in seasonal lumps while commitments fell steadily, and decisions were being made without a full forward view of cash flow. We built a private planning tool, hosted privately on Microsoft Azure, with a 12-month rolling cash flow forecast, a what-if sandbox and a calculation of the income needed each month before GST. It was delivered in 2 weeks, from brief to a working tool.",
            image:
              "https://www.officeexperts.com.au/case-studies/private-client-cashflow-plannerLg.png",
            imageAlt:
              "Private cash flow planning tool hosted on Microsoft Azure",
          },
        ]}
      />
      <div style={{ marginTop: "6rem" }}>
        <FAQSection faqs={faqs} />
      </div>
      <Contact />
    </>
  );
};

export default Page;
