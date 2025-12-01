import React from "react";

export const metadata = {
  // Basic metadata
  title: "Why Dropbox + Access Databases Don't Mix: Better Cloud Solutions",
  description:
    "Storing Microsoft Access databases in Dropbox leads to corruption, data loss, and conflicts. Learn why this approach fails and discover reliable alternatives like SQL Server and Azure SQL for secure multi-user access.",

  // OpenGraph
  openGraph: {
    title: "Why Dropbox + Access Databases Don't Mix: Better Cloud Solutions",
    description:
      "Storing Microsoft Access databases in Dropbox leads to corruption, data loss, and conflicts. Learn why this approach fails and discover reliable alternatives like SQL Server and Azure SQL for secure multi-user access.",
    url: "https://www.accessexperts.com.au/blog/why-dropbox-fails-with-access-databases",
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
  keywords: ["access database dropbox problems"],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsAU",
    title: "Why Dropbox + Access Databases Don't Mix: Better Cloud Solutions",
    description:
      "Storing Microsoft Access databases in Dropbox leads to corruption, data loss, and conflicts. Learn why this approach fails and discover reliable alternatives like SQL Server and Azure SQL for secure multi-user access.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "/blog/why-dropbox-fails-with-access-databases",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}