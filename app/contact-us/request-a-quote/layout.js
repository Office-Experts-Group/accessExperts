import React from "react";

export const metadata = {
  // Basic metadata
  title: "Request a Quote | Access Experts",
  description:
    "Submit your Microsoft Access database project requirements, specifications, and files for a detailed quote. Our experienced Access developers provide custom solutions, integration services, and database consulting.",

  // OpenGraph
  openGraph: {
    title: "Request a Quote | Access Experts",
    description:
      "Submit your Microsoft Access database project requirements, specifications, and files for a detailed quote. Our experienced Access developers provide custom solutions, integration services, and database consulting.",
    url: "https://www.accessexperts.com.au/contact-us/request-a-quote/",
  },

  // Additional metadata
  keywords: [
    // Core Services
    "Microsoft Access custom database quote",

    // // Specific Solutions
    // "Access SQL Server integration quote",
    // "Access database migration estimate",
    // "Access Azure cloud integration cost",
    // "VBA macro development pricing",

    // // Service-specific long tail
    // "Access database upgrade consultation",
    // "Legacy Access database migration quote",
    // "Multi-user Access database setup",
    // "Access SharePoint integration pricing",

    // // Support Services
    // "Access database maintenance quote",
    // "Database backup solution pricing",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Request a Quote for Microsoft Access Database Services",
    description:
      "Get a customised quote for your Microsoft Access database needs. From development and integration to troubleshooting and upgrades - our experts deliver tailored solutions with competitive pricing.",
  },

  // Additional tags
  metadataBase: new URL("https://www.accessexperts.com.au"),
  alternates: {
    canonical: "/contact-us/request-a-quote",
    languages: {
      "en-AU": "/contact-us/request-a-quote",
    },
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
