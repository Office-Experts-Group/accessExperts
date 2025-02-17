import React from "react";

export const metadata = {
  // Basic metadata
  title: "Microsoft Access Online | Access Experts",
  description:
    "Professional Microsoft Access cloud database solutions, including Office 365 integration, SharePoint connectivity, and Azure hosting. Expert consultants for online database development and mobile access solutions.",
  // OpenGraph
  openGraph: {
    title: "Access Online | Cloud-Based Microsoft Access Database Solutions",
    description:
      "Professional Microsoft Access cloud database solutions, including Office 365 integration, SharePoint connectivity, and Azure hosting. Expert consultants for online database development and mobile access solutions.",
    url: "https://www.accessexperts.com.au/access-online",
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
  keywords: ["Access online solutions"],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@MSOfficeExperts",
    title: "Access Online | Cloud-Based Microsoft Access Database Solutions",
    description:
      "Professional Microsoft Access cloud database solutions, including Office 365 integration, SharePoint connectivity, and Azure hosting. Expert consultants for online database development and mobile access solutions.",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: "/access-online",
    alternate: [
      {
        url: "https://www.officeexperts.com.au/services/microsoft-access/access-online",
      },
      {
        url: "https://www.excelexperts.com.au/services/microsoft-access/access-online",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
