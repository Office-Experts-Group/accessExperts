import React from "react";

export const metadata = {
  // Basic metadata
  title: "Access and Azure Cloud Based Database Solutions |  Access Experts",
  description:
    "Expert Microsoft Access and Azure integration services for cloud-based database solutions. Custom Access database development with Azure SQL Server hosting for secure, scalable, and accessible data management.",

  // OpenGraph
  openGraph: {
    title: "Access and Azure Cloud Based Database Solutions |  Access Experts",
    description:
      "Expert Microsoft Access and Azure integration services for cloud-based database solutions. Custom Access database development with Azure SQL Server hosting for secure, scalable, and accessible data management.",
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
    title:
      "Access/Azure Cloud Database Solutions | Microsoft Access Integration Experts",
    description:
      "Professional Microsoft Access and Azure cloud database integration services. Custom development, database migration, and web app connectivity solutions for business efficiency.",
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
