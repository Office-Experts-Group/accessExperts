import React from "react";

export const metadata = {
  // Basic metadata
  title: "Access Database Running Slow? 7 Performance Killers (and How to Fix Them)",
  description:
    "Is your Access database painfully slow? Discover the 7 most common performance killers and learn quick fixes that can restore speed in minutes. Expert solutions for Australian businesses.",

  // OpenGraph
  openGraph: {
    title: "Access Database Running Slow? 7 Performance Killers (and How to Fix Them)",
    description:
      "Is your Access database painfully slow? Discover the 7 most common performance killers and learn quick fixes that can restore speed in minutes. Expert solutions for Australian businesses.",
    url: "https://www.accessexperts.com.au/blog/access-database-slow-performance",
    siteName: "Access Experts",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Office Experts Logo",
      },
    ],
    locale: "en-AU",
    type: "website",
  },

  // Additional metadata
  keywords: [
    "access database slow performance",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsAU",
    title: "Access Database Running Slow? 7 Performance Killers (and How to Fix Them)",
    description:
      "Is your Access database painfully slow? Discover the 7 most common performance killers and learn quick fixes that can restore speed in minutes. Expert solutions for Australian businesses.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "/blog/access-database-slow-performance",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}