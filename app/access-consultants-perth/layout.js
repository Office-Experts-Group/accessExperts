import React from "react";

export const metadata = {
  // Basic metadata
  title: "Microsoft Access Consultants Perth",
  description:
    "Perth-based Microsoft Access consulting backed by 25+ years of national expertise. Specialising in database development, data migration, and Access to SQL Server integration for WA businesses.",

  // OpenGraph
  openGraph: {
    title: "Microsoft Access Consultants Perth",
    description:
      "Perth-based Microsoft Access consulting backed by 25+ years of national expertise. Specialising in database development, data migration, and Access to SQL Server integration for WA businesses.",

    url: "https://www.accessexperts.com.au/access-consultants-perth",
    siteName: "Access Experts",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Office Experts Group Logo",
      },
    ],
    locale: "en-AU",
    type: "website",
  },

  // Additional metadata
  keywords: [
    // Location-specific
    "Microsoft Access consultants Perth",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Microsoft Access Consultants Perth",
    description:
      "Perth-based Microsoft Access consulting backed by 25+ years of national expertise. Specialising in database development, data migration, and Access to SQL Server integration for WA businesses.",

    images: ["/logo.png"],
  },

  alternates: {
    canonical: "/access-consultants-perth",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
