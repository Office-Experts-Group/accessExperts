import React from "react";

export const metadata = {
  // Basic metadata
  title: "Microsoft Access Consultants Northern Rivers, NSW",
  description:
    "Australia-wide Microsoft Access team with consultants servicing the Northern Rivers region of NSW. Professional database development, integration, upgrades, and remote support backed by 25+ years of experience.",

  // OpenGraph
  openGraph: {
    title: "Microsoft Access Consultants Northern Rivers, NSW",
    description:
      "Australia-wide Microsoft Access team with consultants servicing the Northern Rivers region of NSW. Professional database development, integration, upgrades, and remote support backed by 25+ years of experience.",
    url: "https://www.accessexperts.com.au/access-consultants-northern-rivers-nsw",
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
    "Microsoft Access consultants Northern Rivers, NSW",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Microsoft Access Consultants Northern Rivers, NSW",
    description:
      "Australia-wide Microsoft Access team with consultants servicing the Northern Rivers region of NSW. Professional database development, integration, upgrades, and remote support backed by 25+ years of experience.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "/access-consultants-northern-rivers-nsw",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
