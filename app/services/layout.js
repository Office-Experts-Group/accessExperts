import React from "react";

export const metadata = {
  // Basic metadata
  title: "Microsoft Access Services | Custom Database Solutions Australia",
  description:
    "Comprehensive Microsoft Access database services including custom development, cloud integration, migration, support and training. Expert consultants Australia-wide.",

  // OpenGraph
  openGraph: {
    title: "Microsoft Access Services | Custom Database Solutions Australia",
    description:
      "Comprehensive Microsoft Access database services including custom development, cloud integration, migration, support and training. Expert consultants Australia-wide.",
    url: "https://www.accessexperts.com.au/services",
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
  keywords: ["Microsoft Access services Australia"],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Microsoft Access Services | Custom Database Solutions Australia",
    description:
      "Comprehensive Microsoft Access database services including custom development, cloud integration, migration, support and training. Expert consultants Australia-wide.",
    images: ["/logo.png"],
  },

  // Canonical URL
  alternates: {
    canonical: "https://www.accessexperts.com.au/services",
  },
};

export default function ServicesLayout({ children }) {
  return <>{children}</>;
}
