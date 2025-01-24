import React from "react";

export const metadata = {
  // Basic metadata
  title: "Microsoft Access Support and Training | Access Experts ",
  description:
    "Expert Microsoft Access database consultants providing remote and onsite support, troubleshooting, training, and maintenance services. Available Australia-wide with competitive rates.",
  // OpenGraph
  openGraph: {
    title: "Microsoft Access Support and Training | Access Experts ",
    description:
      "Expert Microsoft Access database consultants providing remote and onsite support, troubleshooting, training, and maintenance services. Available Australia-wide with competitive rates.",
    url: "https://www.accessexperts.com.au/access-support/",
    siteName: "Access Experts",
    images: [
      {
        url: "/logo.png",
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
    "Microsoft Access support",
    // Core Access support services
    // "Microsoft Access database troubleshooting",
    // "Access database remote support services",
    // "Professional Access database training",
    // "Access database maintenance assistance",

    // // Location-specific
    // "Microsoft Access consultants Sydney",
    // "Access database experts Melbourne",
    // "Database support services Brisbane",
    // "Access consulting Perth",

    // // Service-specific long tail
    // "Remote Access database error resolution",
    // "Custom Access database training programs",
    // "Microsoft Access VBA code review services",
    // "Database performance optimization Access",
    // "Access database upgrade assistance",

    // // Task-specific
    // "Access database corruption repair",
    // "Microsoft Access data recovery services",
    // "Access form development support",
    // "Database query optimization Access",
    // "Access report troubleshooting help",

    // // Technology combinations
    // "Access SQL Server integration support",
    // "Microsoft 365 Access database sync",
    // "SharePoint Access database connection",
    // "Azure cloud Access database migration",

    // // Specific solutions
    // "Access multi-user database support",
    // "Database security implementation Access",
    // "Access automation script debugging",
    // "Custom Access report development",
    // "Database normalization consulting Access",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@AccessExperts",
    title: "Microsoft Access Help & Training | Access Database Experts",
    description:
      "Professional Microsoft Access database support and training services. Remote or onsite assistance for database issues, custom training, and expert consultancy.",
    images: ["/logo.png"],
  },

  metadataBase: new URL("https://www.accessexperts.com.au"),
  alternates: {
    canonical: "/access-support",
    languages: {
      "en-AU": "/access-support",
    },
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
