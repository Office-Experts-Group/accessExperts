import React from "react";

export const metadata = {
  // Basic metadata
  title: "SQL Server Backend Solutions | Enterprise Database Performance",
  description:
    "Upgrade your Access database with SQL Server backend for 10x faster performance, enterprise security, and multi-user scalability. Expert migration services across Australia.",

  // OpenGraph
  openGraph: {
    title: "SQL Server Backend Solutions | Enterprise Database Performance",
    description:
      "Upgrade your Access database with SQL Server backend for 10x faster performance, enterprise security, and multi-user scalability. Expert migration services across Australia.",
    url: "https://www.accessexperts.com.au/sql-server-backend-business-solutions",
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
    type: "article",
  },

  // Additional metadata
  keywords: ["SQL Server backend migration"],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "SQL Server Backend Solutions | Enterprise Database Performance",
    description:
      "Upgrade your Access database with SQL Server backend for 10x faster performance, enterprise security, and multi-user scalability. Expert migration services across Australia.",
    images: ["/logo.png"],
  },

  // Canonical URL
  alternates: {
    canonical:
      "https://www.accessexperts.com.au/sql-server-backend-business-solutions",
  },
};

export default function SQLServerBackendLayout({ children }) {
  return <>{children}</>;
}
