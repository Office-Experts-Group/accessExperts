import React from "react";

export const metadata = {
  // Basic metadata
  title: "Microsoft Access Consultants Darwin",
  description:
    "Australia-wide Microsoft Access consulting team with consultants servicing Darwin and the Northern Territory. Custom database development, integration, upgrades, and remote support for NT businesses backed by 25+ years' experience.",

  // OpenGraph
  openGraph: {
    title: "Microsoft Access Consultants Darwin",
    description:
      "Australia-wide Microsoft Access consulting team with consultants servicing Darwin and the Northern Territory. Custom database development, integration, upgrades, and remote support for NT businesses backed by 25+ years' experience.",
    url: "https://www.accessexperts.com.au/access-consultants-darwin",
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
    "Microsoft Access consultants Darwin",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Microsoft Access Consultants Darwin",
    description:
      "Australia-wide Microsoft Access consulting team with consultants servicing Darwin and the Northern Territory. Custom database development, integration, upgrades, and remote support for NT businesses backed by 25+ years' experience.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "/access-consultants-darwin",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
