import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  // Basic metadata
  title:
    "Access/Azure Cloud Based Database Solutions | Microsoft Access Database Integration",
  description:
    "Expert Microsoft Access and Azure integration services for cloud-based database solutions. Custom Access database development with Azure SQL Server hosting for secure, scalable, and accessible data management.",

  // Additional metadata
  keywords: [
    // Core Azure/Access integration
    "Access azure cloud based solutions",
    // "Microsoft Access Azure integration",
    // "Azure SQL Server database migration",
    // "Cloud-based Access database solutions",
    // "Access database cloud hosting",

    // // Specific solutions
    // "Access front-end Azure back-end integration",
    // "Azure database port from Access",
    // "Access multi-location data access",
    // "Azure web app database connectivity",

    // // Technical specifications
    // "Access Azure SQL Server integration",
    // "Azure database hosting for Access",
    // "Access cloud database conversion",
    // "Azure database split configuration",

    // // Service-specific long tail
    // "Access database cloud migration services",
    // "Azure SQL Server back-end setup",
    // "Multi-user Access Azure solutions",
    // "Cross-platform Azure database access",

    // // Business solutions
    // "Small business Azure database hosting",
    // "Enterprise Access cloud migration",
    // "Secure Access data cloud storage",
    // "Remote Access database solutions",

    // // Integration specifics
    // "Access Azure web app integration",
    // "Cloud database maintenance services",
    // "Azure SQL Server optimization",
    // "Access database hosting solutions",

    // // Location-specific
    // "Azure Access integration Australia",
    // "Cloud database experts Sydney",
    // "Microsoft Access specialists Melbourne",
    // "Azure database consultants Brisbane",
  ],

  canonical:
    "https://www.accessexperts.com.au/access-azure-cloud-based-solutions/",
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
