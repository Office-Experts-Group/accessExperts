import React from "react";

export const metadata = {
  // Basic metadata
  title: "Can You Run Microsoft Access on Mac? 5 Solutions That Actually Work",
  description:
    "Discover practical solutions for running Microsoft Access on Mac. Compare Parallels, cloud hosting, Boot Camp, file viewers, and migration alternatives.",

  // OpenGraph
  openGraph: {
    title:
      "Can You Run Microsoft Access on Mac? 5 Solutions That Actually Work",
    description:
      "Discover practical solutions for running Microsoft Access on Mac. Compare Parallels, cloud hosting, Boot Camp, file viewers, and migration alternatives.",
    url: "https://www.accessexperts.com.au/blog/microsoft-access-on-mac",
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
  keywords: ["Microsoft Access on Mac"],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title:
      "Can You Run Microsoft Access on Mac? 5 Solutions That Actually Work",
    description:
      "Discover practical solutions for running Microsoft Access on Mac. Compare Parallels, cloud hosting, Boot Camp, file viewers, and migration alternatives.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "/blog/microsoft-access-on-mac",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
