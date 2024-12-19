import React from "react";

import dynamic from "next/dynamic";

// Keep Hero static as it's above fold
import Hero from "./(components)/Hero";
import Services from "./(components)/Services"; // above fold on mobile
import ResponsivePlaceholder from "../components/ResponsivePlaceholder";

// Dynamically import everything else
const CTAMain = dynamic(() => import("./(components)/CTAMain"), {
  loading: () => (
    <ResponsivePlaceholder desktopHeight={210} mobileHeight={325} />
  ),
});

const IsRight = dynamic(() => import("./(components)/IsRight"), {
  loading: () => (
    <ResponsivePlaceholder desktopHeight={1000} mobileHeight={700} />
  ),
});

const SolutionsCarousel = dynamic(
  () => import("./(components)/SolutionsCarousel"),
  {
    loading: () => (
      <ResponsivePlaceholder desktopHeight={450} mobileHeight={300} />
    ),
  }
);

const Testimonials = dynamic(() => import("./(components)/Testimonials"), {
  loading: () => (
    <ResponsivePlaceholder desktopHeight={600} mobileHeight={400} />
  ),
});

const Brands = dynamic(() => import("../components/Brands"), {
  loading: () => (
    <ResponsivePlaceholder desktopHeight={263} mobileHeight={200} />
  ),
});

const CTAFull = dynamic(() => import("./(components)/CTAFull"), {
  loading: () => (
    <ResponsivePlaceholder desktopHeight={485} mobileHeight={350} />
  ),
});

const Promo = dynamic(() => import("../components/Promo"), {
  loading: () => (
    <ResponsivePlaceholder
      desktopHeight={130}
      mobileHeight={100}
      showSpinner={false}
    />
  ),
});

const Contact = dynamic(() => import("../components/Contact"), {
  loading: () => (
    <ResponsivePlaceholder desktopHeight={600} mobileHeight={500} />
  ),
});

import { getHomePageSchema } from "../utils/testimonialSchemaGenerator";
import { testimonials } from "../testimonials";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    ...getHomePageSchema(testimonials)["@graph"],
    {
      "@type": "WebPage",
      "@id": "https://www.accessexperts.com.au/",
      url: "https://www.accessexperts.com.au/",
      name: "Access Experts: For All Your Microsoft Technology Development and Consulting Services",
      isPartOf: {
        "@id": "https://www.accessexperts.com.au/#website",
      },
      datePublished: "2024-10-27T00:00:00+00:00",
      dateModified: "2024-10-27T00:00:00+00:00",
      description:
        "Our Australia-wide, cross-industry Microsoft Access database consultants deliver prompt, quality service with competitive pricing. Fulfilling all of your Microsoft Access consulting needs, our experts excel in Microsoft technology services from database creation to maintenance, troubleshooting, integration, data manipulation, programming, conversions, upgrades, training and support.",
      breadcrumb: {
        "@id": "https://www.accessexperts.com.au/#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: ["https://www.accessexperts.com.au/"],
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://www.accessexperts.com.au/#website",
      url: "https://www.accessexperts.com.au/",
      name: "Access Experts: Microsoft Access Development and Consulting Services",
      description:
        "Your Microsoft Access Design, Development and Consulting Experts",
      publisher: {
        "@id": "https://www.accessexperts.com.au/#organization",
      },
      potentialAction: [
        {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate:
              "https://www.accessexperts.com.au/?s={search_term_string}",
          },
          "query-input": {
            "@type": "PropertyValueSpecification",
            valueRequired: true,
            valueName: "search_term_string",
          },
        },
      ],
      inLanguage: "en-AU",
    },
    {
      "@type": "Organization",
      "@id": "https://www.accessexperts.com.au/#organization",
      name: "Access Experts",
      url: "https://www.accessexperts.com.au/",
      telephone: "1300 10 28 10",
      email: "consult@officeexperts.com.au",
      priceRange: "$50-$5000",
      paymentAccepted: "Credit Card, Cheque, Direct Debit",
      currenciesAccepted: "AUD",
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "1300 10 28 10",
          contactType: "customer service",
          email: "consult@officeexperts.com.au",
          availableLanguage: ["en", "en-AU"],
        },
      ],
      areaServed: [
        {
          "@type": "Country",
          name: "Australia",
        },
        {
          "@type": "AdministrativeArea",
          name: "New South Wales",
        },
        {
          "@type": "AdministrativeArea",
          name: "Victoria",
        },
        {
          "@type": "AdministrativeArea",
          name: "Queensland",
        },
        {
          "@type": "AdministrativeArea",
          name: "Western Australia",
        },
        {
          "@type": "AdministrativeArea",
          name: "South Australia",
        },
        {
          "@type": "AdministrativeArea",
          name: "Tasmania",
        },
        {
          "@type": "AdministrativeArea",
          name: "Australian Capital Territory",
        },
        {
          "@type": "AdministrativeArea",
          name: "Northern Territory",
        },
      ],
      logo: {
        "@type": "ImageObject",
        inLanguage: "en-AU",
        "@id": "https://www.accessexperts.com.au/logo.webp",
        url: "/logo.webp",
        contentUrl: "/logo.webp",
        width: 1200,
        height: 620,
        caption: "Office Experts Group",
      },
      image: {
        "@id": "https://www.accessexperts.com.au/logo.webp",
      },
      sameAs: ["https://www.facebook.com/MSOfficeExperts"],
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
      <Hero />
      <Services />
      <CTAMain />
      <IsRight />
      <SolutionsCarousel />
      <Testimonials testimonials={testimonials} />
      <Brands />
      <CTAFull />
      <Promo
        h2="We Deliver the Best Quality"
        p="The Access experts specialist team is part of the Office experts Group, leaders in Microsoft technologies for over 25yrs"
      />
      <Contact />
    </>
  );
};

export default Page;
