import React from "react";

export const metadata = {
  // Basic metadata
  title: "Is Access Right for your Company? | Access Experts",
  description:
    "Professional consultation on Microsoft Access database solutions for business. Expert analysis of data management needs, user requirements, and system compatibility.",

  // OpenGraph
  openGraph: {
    title: "Is Access Right for your Company? | Access Experts",
    description:
      "Professional consultation on Microsoft Access database solutions for business. Expert analysis of data management needs, user requirements, and system compatibility.",
    url: "https://www.accessexperts.com.au/is-access-right-for-your-company/",
  },

  // Additional metadata
  keywords: [
    "Custom Access database development",
    // Core Access database services
    // "Microsoft Access database consultation",
    // "Access database compatibility assessment",
    // "Multi-user Access database solutions",

    // // Specific solution keywords
    // "Access data management systems",
    // "Access database structure optimization",
    // "Microsoft Access reporting tools",
    // "Access database user management",

    // // Integration-focused
    // "Access SQL Server integration solutions",
    // "Access SharePoint connectivity",
    // "Access Azure cloud integration",
    // "Access Office 365 integration",

    // // Business-specific long tail
    // "Access database migration assessment",
    // "Access business process automation",
    // "Access inventory management systems",
    // "Access customer database solutions",

    // // Technical specifics
    // "Access VBA development consulting",
    // "Access database performance optimization",
    // "Access multi-location data access",
    // "Access database security solutions",

    // // Industry-focused
    // "Access financial reporting systems",
    // "Access project management databases",
    // "Access CRM database solutions",
    // "Access workflow automation systems",
  ],
  metadataBase: new URL("https://www.accessexperts.com.au"),
  alternates: {
    canonical: "/is-access-right-for-your-company/",
    languages: {
      "en-AU": "/is-access-right-for-your-company/",
    },
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
