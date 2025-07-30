import React from "react";

export const metadata = {
  // Basic metadata
  title:
    "Hybrid Access Solutions: Connect to Power Apps Without Losing What Works",
  description:
    "Learn how to modernise your Microsoft Access database with Power Platform without losing your existing forms, reports, and VBA code. Discover hybrid solutions that connect Access to Dataverse and Power Apps for enhanced mobility and automation.",

  // OpenGraph
  openGraph: {
    title:
      "Hybrid Access Solutions: Connect to Power Apps Without Losing What Works",
    description:
      "Learn how to modernise your Microsoft Access database with Power Platform without losing your existing forms, reports, and VBA code. Discover hybrid solutions that connect Access to Dataverse and Power Apps for enhanced mobility and automation.",
    url: "https://www.accessexperts.com.au/blog/using-power-platform-with-access-database",
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
    type: "website",
  },

  // Additional metadata
  keywords: ["power platform with access database"],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsAU",
    title:
      "Hybrid Access Solutions: Connect to Power Apps Without Losing What Works",
    description:
      "Learn how to modernise your Microsoft Access database with Power Platform without losing your existing forms, reports, and VBA code. Discover hybrid solutions that connect Access to Dataverse and Power Apps for enhanced mobility and automation.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "/blog/using-power-platform-with-access-database",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
