import React from "react";

export const metadata = {
  // Basic metadata
  title: "Microsoft Access Online - Access Experts",
  description:
    "Microsoft Access cloud database solutions with Office 365, SharePoint, and Azure. Online Access development and mobile-ready support.",
  // OpenGraph
  openGraph: {
    title: "Microsoft Access Online - Access Experts",
    description:
      "Microsoft Access cloud database solutions with Office 365, SharePoint, and Azure. Online Access development and mobile-ready support.",
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
    type: "website",
  },

  // Additional metadata
  keywords: ["Access online solutions"],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@MSOfficeExperts",
    title: "Microsoft Access Online - Access Experts",
    description:
      "Microsoft Access cloud database solutions with Office 365, SharePoint, and Azure. Online Access development and mobile-ready support.",
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
