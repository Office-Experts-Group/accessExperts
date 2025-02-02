import React from "react";

export const metadata = {
  // Basic metadata
  title: "Meet the Team | Access Experts",
  description:
    "Meet our team of certified Microsoft Access developers, consultants, and trainers. Experts in database development, integration, and business solutions across Australia.",

  // OpenGraph
  openGraph: {
    title: "Meet the Team | Access Experts",
    description:
      "Meet our team of certified Microsoft Access developers, consultants, and trainers. Experts in database development, integration, and business solutions across Australia.",
    url: "https://www.accessexperts.com.au/meet-the-team",
  },

  // Additional metadata
  keywords: [
    "Microsoft Access developers Australia",
    // Team expertise
    // "Access database consultants",
    // "Database integration specialists",
    // "Microsoft certified Access experts",

    // // Technical expertise
    // "SQL Server integration experts",
    // "SharePoint development team",
    // "Azure cloud specialists",
    // "Office 365 integration consultants",

    // // Service-related
    // "Access database training team",
    // "Database support specialists",
    // "Custom database developers",
    // "Data migration experts",

    // // Location-specific
    // "Australian database consultants",
    // "Microsoft Access experts Sydney",
    // "Database specialists Melbourne",
    // "Access consultants Brisbane",

    // // Skills-focused
    // "VBA development experts",
    // "Database architecture specialists",
    // "Access UI/UX designers",
    // "Database security experts",

    // // Professional qualities
    // "Certified database developers",
    // "Experienced Access consultants",
    // "Professional database team",
    // "Expert database trainers",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Meet Our Expert Access Database Team | Access Experts Australia",
    description:
      "Connect with our skilled team of Microsoft Access specialists. Experts in database development, SQL Server integration, SharePoint, and Azure solutions.",
  },

  // Additional tags
  metadataBase: new URL("https://www.accessexperts.com.au"),
  alternates: {
    canonical: "/meet-the-team",
    languages: {
      "en-AU": "/meet-the-team",
    },
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
