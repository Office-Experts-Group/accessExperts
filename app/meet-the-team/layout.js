import React from "react";

export const metadata = {
  // Basic metadata
  title: "Meet the Team | Access Experts",
  description:
    "Meet our team of certified Microsoft Access developers, consultants, and trainers. Experts in database development, integration, and business solutions across Australia.",

  // OpenGraph
  openGraph: {
    title: "Meet the Team | Access Experts",
    description:
      "Meet our team of certified Microsoft Access developers, consultants, and trainers. Experts in database development, integration, and business solutions across Australia.",
    url: "https://www.accessexperts.com.au/meet-the-team",
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
    type: "article",
  },

  // Additional metadata
  keywords: ["Microsoft Access developers Australia"],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Meet Our Expert Access Database Team | Access Experts Australia",
    description:
      "Connect with our skilled team of Microsoft Access specialists. Experts in database development, SQL Server integration, SharePoint, and Azure solutions.",
  },

  // Additional tags
  alternates: {
    canonical: "/meet-the-team",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
