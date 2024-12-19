import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  // Basic metadata
  title:
    "Microsoft Access: Help and Training – Access Experts – Database Solutions",
  description:
    "Expert Microsoft Access database consultants providing remote and onsite support, troubleshooting, training, and maintenance services. Available Australia-wide with competitive rates.",
  // Additional metadata
  keywords: [
    "Microsoft Access support",
    //   // Core Access support services
    //   "Microsoft Access database troubleshooting",
    //   "Access database remote support services",
    //   "Professional Access database training",
    //   "Access database maintenance assistance",

    //   // Location-specific
    //   "Microsoft Access consultants Sydney",
    //   "Access database experts Melbourne",
    //   "Database support services Brisbane",
    //   "Access consulting Perth",

    //   // Service-specific long tail
    //   "Remote Access database error resolution",
    //   "Custom Access database training programs",
    //   "Microsoft Access VBA code review services",
    //   "Database performance optimization Access",
    //   "Access database upgrade assistance",

    //   // Task-specific
    //   "Access database corruption repair",
    //   "Microsoft Access data recovery services",
    //   "Access form development support",
    //   "Database query optimization Access",
    //   "Access report troubleshooting help",

    //   // Technology combinations
    //   "Access SQL Server integration support",
    //   "Microsoft 365 Access database sync",
    //   "SharePoint Access database connection",
    //   "Azure cloud Access database migration",

    //   // Specific solutions
    //   "Access multi-user database support",
    //   "Database security implementation Access",
    //   "Access automation script debugging",
    //   "Custom Access report development",
    //   "Database normalization consulting Access",
  ],

  canonical: "https://www.accessexperts.com.au/access-support/",
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
