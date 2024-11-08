import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  // Basic metadata
  title:
    "3rd Party Product Integration – Access Experts – Microsoft Access Database Design, Development and Consulting",
  description:
    "Specialized Microsoft Access database integration services for connecting Access with CRMs, accounting packages, and other third-party applications. Expert consultants providing viable integration solutions with competitive pricing.",

  // OpenGraph
  openGraph: {
    title: "Microsoft Access Integration Solutions | Access Experts Australia",
    description:
      "Professional Microsoft Access integration services connecting your databases with CRMs, accounting software, and third-party applications. Competitive pricing and expert consultation.",
    url: "https://www.accessexperts.com.au/3rd-party-product-integration/",
    siteName: "Access Experts",
    images: [
      {
        url: "https://www.accessexperts.com.au/wp-content/uploads/2023/09/microsoft-office-experts-group-logo.png",
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
    // Integration-specific long tail
    "Microsoft Access CRM integration solutions",
    "Access database accounting software integration",
    "MYOB Access database connectivity",
    "Xero Access database integration",
    "SharePoint Access database connection",
    "SQL Server Access database integration",
    "Access database ERP system integration",
    "Custom Access integration development",

    // Feature-specific
    "Access multi-platform data synchronization",
    "Automated Access data import export",
    "Access real-time data integration",
    "Access database API connectivity",
    "Legacy system Access integration",
    "Access cloud service integration",

    // Solution-specific
    "Access inventory management integration",
    "Access financial system integration",
    "Access customer database integration",
    "Access workflow automation integration",
    "Access document management integration",
    "Access reporting system integration",

    // Technical specifics
    "VBA integration development Access",
    "Access ODBC connection setup",
    "Access REST API integration",
    "Access Azure SQL integration",
    "Access web service integration",
    "Access database migration services",

    // Location-specific
    "Access integration specialists Sydney",
    "Microsoft Access consultants Melbourne",
    "Database integration experts Brisbane",
    "Access development services Perth",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@MSOfficeExperts",
    title: "Microsoft Access Integration Solutions | Access Experts Australia",
    description:
      "Professional Microsoft Access integration services connecting your databases with CRMs, accounting software, and third-party applications. Competitive pricing and expert consultation.",
    images: [
      "https://www.accessexperts.com.au/wp-content/uploads/2023/09/microsoft-office-experts-group-logo.png",
    ],
  },

  // Additional tags

  canonical: "https://www.accessexperts.com.au/3rd-party-product-integration/",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },

  // Icons
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
