import React from "react";

export const metadata = {
  // Basic metadata
  title: "Access and Azure Cloud Based Database Solutions",
  description:
    "Access and Azure integration services for cloud-hosted databases. We build secure, scalable solutions with Azure SQL Server and Access.",

  // OpenGraph
  openGraph: {
    title: "Access and Azure Cloud Based Database Solutions",
    description:
      "Access and Azure integration services for cloud-hosted databases. We build secure, scalable solutions with Azure SQL Server and Access.",
    url: "https://www.accessexperts.com.au/access-azure-cloud-based-solutions",
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
  keywords: ["Cloud-based database solutions"],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Access and Azure Cloud Based Database Solutions",
    description:
      "Access and Azure integration services for cloud-hosted databases. We build secure, scalable solutions with Azure SQL Server and Access.",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: "/access-azure-cloud-based-solutions",
    alternate: [
      {
        url: "https://www.officeexperts.com.au/services/microsoft-access/access-azure-cloud-based-solutions",
      },
      {
        url: "https://www.excelexperts.com.au/services/microsoft-access/access-azure-cloud-based-solutions",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
