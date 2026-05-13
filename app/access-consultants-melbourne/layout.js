import React from "react";

export const metadata = {
  // Basic metadata
  title: "Microsoft Access Consultants Melbourne",
  description:
    "Australia-wide Microsoft Access consulting team with Melbourne-based consultants available for Victorian businesses. Tailored database development, VBA automation, integration, upgrades, and support backed by 25+ years’ experience.",

  // OpenGraph
  openGraph: {
    title: "Microsoft Access Consultants Melbourne",
    description:
      "Australia-wide Microsoft Access consulting team with Melbourne-based consultants available for Victorian businesses. Tailored database development, VBA automation, integration, upgrades, and support backed by 25+ years’ experience.",

    url: "https://www.accessexperts.com.au/access-consultants-melbourne",
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
    "Microsoft Access consultants Melbourne",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Microsoft Access Consultants Melbourne",
    description:
      "Australia-wide Microsoft Access consulting team with Melbourne-based consultants available for Victorian businesses. Tailored database development, VBA automation, integration, upgrades, and support backed by 25+ years’ experience.",

    images: ["/logo.png"],
  },

  alternates: {
    canonical: "/access-consultants-melbourne",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
