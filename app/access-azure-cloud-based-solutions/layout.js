import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  // Basic metadata
  title:
    "Access/Azure Cloud Based Database Solutions | Microsoft Access Database Integration",
  description:
    "Expert Microsoft Access and Azure integration services for cloud-based database solutions. Custom Access database development with Azure SQL Server hosting for secure, scalable, and accessible data management.",

  // OpenGraph
  openGraph: {
    title:
      "Access/Azure Cloud Database Solutions | Microsoft Access Integration Experts",
    description:
      "Professional Microsoft Access and Azure cloud database integration services. Custom development, database migration, and web app connectivity solutions for business efficiency.",
    url: "https://www.accessexperts.com.au/access-azure-cloud-based-solutions/",
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
    // Core Azure/Access integration
    "Microsoft Access Azure integration",
    "Azure SQL Server database migration",
    "Cloud-based Access database solutions",
    "Access database cloud hosting",

    // Specific solutions
    "Access front-end Azure back-end integration",
    "Azure database port from Access",
    "Access multi-location data access",
    "Azure web app database connectivity",

    // Technical specifications
    "Access Azure SQL Server integration",
    "Azure database hosting for Access",
    "Access cloud database conversion",
    "Azure database split configuration",

    // Service-specific long tail
    "Access database cloud migration services",
    "Azure SQL Server back-end setup",
    "Multi-user Access Azure solutions",
    "Cross-platform Azure database access",

    // Business solutions
    "Small business Azure database hosting",
    "Enterprise Access cloud migration",
    "Secure Access data cloud storage",
    "Remote Access database solutions",

    // Integration specifics
    "Access Azure web app integration",
    "Cloud database maintenance services",
    "Azure SQL Server optimization",
    "Access database hosting solutions",

    // Location-specific
    "Azure Access integration Australia",
    "Cloud database experts Sydney",
    "Microsoft Access specialists Melbourne",
    "Azure database consultants Brisbane",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title:
      "Access/Azure Cloud Database Solutions | Microsoft Access Integration Experts",
    description:
      "Professional Microsoft Access and Azure cloud database integration services. Custom development, database migration, and web app connectivity solutions for business efficiency.",
    images: [
      "https://www.accessexperts.com.au/wp-content/uploads/2023/09/microsoft-office-experts-group-logo.png",
    ],
  },

  // Additional tags

  canonical:
    "https://www.accessexperts.com.au/access-azure-cloud-based-solutions/",
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
