import React from "react";

export const metadata = {
  // Basic metadata
  title:
    "Microsoft Access Alternatives 2026 | Expert Guide to Database Migration",
  description:
    "Considering alternatives to Microsoft Access? Our experts help you choose the RIGHT solution - SQL Server, Azure, or staying with Access. Free database assessment available.",

  // OpenGraph
  openGraph: {
    title:
      "Microsoft Access Alternatives 2026 | Expert Guide to Database Migration",
    description:
      "Considering alternatives to Microsoft Access? Our experts help you choose the RIGHT solution - SQL Server, Azure, or staying with Access. Free database assessment available.",
    url: "https://www.accessexperts.com.au/blog/microsoft-access-alternatives-guide",
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
    type: "article",
  },

  // Additional metadata
  keywords: ["microsoft access alternatives"],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title:
      "Microsoft Access Alternatives 2026 | Expert Guide to Database Migration",
    description:
      "Considering alternatives to Microsoft Access? Our experts help you choose the RIGHT solution - SQL Server, Azure, or staying with Access. Free database assessment available.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "/blog/microsoft-access-alternatives-guide",
  },

  // Article metadata
  authors: [{ name: "Office Experts Group" }],
  publishedTime: "2026-01-15T00:00:00.000Z",
  modifiedTime: "2026-01-15T00:00:00.000Z",

  robots: {
    index: false,
    follow: false,
  },
};

export default function BlogLayout({ children }) {
  return <>{children}</>;
}
