import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  // Basic metadata
  title:
    "Is Access Right for your Company? | Microsoft Access Database Consulting",
  description:
    "Expert guidance on whether Microsoft Access is the right database solution for your business needs. specialised in data management, structuring, multi-user systems, and reporting solutions.",

  // OpenGraph
  openGraph: {
    title:
      "Is Microsoft Access Right for Your Business? | Access Database Solutions",
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
  canonical:
    "https://www.accessexperts.com.au/is-access-right-for-your-company/",
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
