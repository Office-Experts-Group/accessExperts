import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  // Basic metadata
  title:
    "Access Online | Microsoft Access Cloud Database Solutions & Integration",
  description:
    "Specialised Microsoft Access online database solutions with Azure and SharePoint integration. Expert consultants delivering cloud-based Access database development, Office 365 integration, and mobile access solutions across Australia.",

  // Additional metadata
  keywords: [
    "Access online database solutions",
    //   // Core Access Online services
    //   "Microsoft Access cloud database solutions",
    //   "Access database Office 365 integration",
    //   "SharePoint Access database hosting",
    //   "Azure Access database migration",

    //   // Specific solutions
    //   "multi-user Access database hosting",
    //   "Access database mobile connectivity",
    //   "iPad Access database solutions",
    //   "iPhone database access setup",

    //   // Integration specifics
    //   "Access SharePoint data connection",
    //   "Access Azure SQL integration",
    //   "Office 365 Access web database",
    //   "cloud-hosted Access applications",

    //   // Implementation focused
    //   "Access database remote access setup",
    //   "secure Access cloud migration",
    //   "Access web database conversion",
    //   "online Access form development",

    //   // Cost and business specific
    //   "affordable Access cloud hosting",
    //   "Access database monthly hosting",
    //   "business Access cloud solutions",
    //   "enterprise Access hosting plans",

    //   // Technical capabilities
    //   "Access database synchronization",
    //   "Access cloud backup solutions",
    //   "Access multi-device deployment",
    //   "Access web app development",

    //   // Location specific
    //   "Access cloud solutions Australia",
    //   "Sydney Access database hosting",
    //   "Melbourne Access cloud services",
    //   "Brisbane Access online solutions",
  ],

  canonical: "https://www.accessexperts.com.au/access-online/",
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
