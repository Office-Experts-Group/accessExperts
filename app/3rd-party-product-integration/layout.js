import React from "react";

export const metadata = {
  // Basic metadata
  title: "3rd Party Product Integration | Access Experts",
  description:
    "Professional Microsoft Access integration services connecting your databases with CRMs, accounting software, and third-party applications. Competitive pricing and expert consultation.",
  // OpenGraph
  openGraph: {
    title: "Microsoft Access Integration Solutions | Access Experts Australia",
    description:
      "Professional Microsoft Access integration services connecting your databases with CRMs, accounting software, and third-party applications. Competitive pricing and expert consultation.",
    url: "https://www.accessexperts.com.au/3rd-party-product-integration",
    siteName: "Access Experts",
    images: [
      {
        url: "https://www.accessexperts.com.au/logo.png",
        width: 1200,
        height: 630,
        alt: "Access Experts Logo",
      },
    ],
    locale: "en-AU",
    type: "article",
  },

  // Additional metadata
  keywords: [
    "Access integration services",
    // Integration-specific long tail
    // "Microsoft Access CRM integration solutions",
    // "Access database accounting software integration",
    // "MYOB Access database connectivity",
    // "Xero Access database integration",
    // "SharePoint Access database connection",
    // "SQL Server Access database integration",
    // "Access database ERP system integration",
    // "Custom Access integration development",

    // // Feature-specific
    // "Access multi-platform data synchronization",
    // "Automated Access data import export",
    // "Access real-time data integration",
    // "Access database API connectivity",
    // "Legacy system Access integration",
    // "Access cloud service integration",

    // // Solution-specific
    // "Access inventory management integration",
    // "Access financial system integration",
    // "Access customer database integration",
    // "Access workflow automation integration",
    // "Access document management integration",
    // "Access reporting system integration",

    // // Technical specifics
    // "VBA integration development Access",
    // "Access ODBC connection setup",
    // "Access REST API integration",
    // "Access Azure SQL integration",
    // "Access web service integration",
    // "Access database migration services",

    // // Location-specific
    // "Access integration specialists Sydney",
    // "Microsoft Access consultants Melbourne",
    // "Database integration experts Brisbane",
    // "Access development services Perth",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@MSOfficeExperts",
    title: "Microsoft Access Integration Solutions | Access Experts Australia",
    description:
      "Professional Microsoft Access integration services connecting your databases with CRMs, accounting software, and third-party applications. Competitive pricing and expert consultation.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
