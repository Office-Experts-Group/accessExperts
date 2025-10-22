import React from "react";

export const metadata = {
  // Basic metadata
  title:
    "Optimise & Repair Slow Access Databases | Database Performance Experts",
  description:
    "Professional Access database optimisation and repair services across Australia. Fix slow databases, repair corruption, improve performance. Expert diagnostics, tuning and recovery services from experienced consultants.",

  // OpenGraph
  openGraph: {
    title:
      "Optimise & Repair Slow Access Databases | Database Performance Experts",
    description:
      "Professional Access database optimisation and repair services across Australia. Fix slow databases, repair corruption, improve performance. Expert diagnostics, tuning and recovery services from experienced consultants.",
    url: "https://www.accessexperts.com.au/access-database-optimisation-and-repair",
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
  keywords: ["Access database repair services"],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title:
      "Optimise & Repair Slow Access Databases | Database Performance Experts",
    description:
      "Professional Access database optimisation and repair services across Australia. Fix slow databases, repair corruption, improve performance. Expert diagnostics, tuning and recovery services from experienced consultants.",
    images: ["/logo.png"],
  },

  // Canonical URL
  alternates: {
    canonical:
      "https://www.accessexperts.com.au/access-database-optimisation-and-repair",
  },
};

export default function Layout({ children }) {
  return <>{children}</>;
}
