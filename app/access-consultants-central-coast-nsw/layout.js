import React from "react";

export const metadata = {
  // Basic metadata
  title: "Microsoft Access Consultants Central Coast NSW",
  description:
    "Australia-wide Microsoft Access consulting team with consultants servicing the Central Coast of NSW. Expert database development, integration, upgrades, and support delivered remotely or on-site across the region.",

  // OpenGraph
  openGraph: {
    title: "Microsoft Access Consultants Central Coast NSW",
    description:
      "Australia-wide Microsoft Access consulting team with consultants servicing the Central Coast of NSW. Expert database development, integration, upgrades, and support delivered remotely or on-site across the region.",

    url: "https://www.accessexperts.com.au/access-consultants-central-coast-nsw",
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
    "Microsoft Access consultants Central Coast NSW",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Microsoft Access Consultants Central Coast NSW",
    description:
      "Australia-wide Microsoft Access consulting team with consultants servicing the Central Coast of NSW. Expert database development, integration, upgrades, and support delivered remotely or on-site across the region.",

    images: ["/logo.png"],
  },

  alternates: {
    canonical: "/access-consultants-central-coast-nsw",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
