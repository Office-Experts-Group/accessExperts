import React from "react";

export const metadata = {
  // Basic metadata
  title: "3rd Party Product Integration | Access Experts",
  description:
    "Professional Access integration with CRMs, accounting software, and third-party apps. Expert advice and affordable pricing.",
  // OpenGraph
  openGraph: {
    title: "Microsoft Access Integration Solutions | Access Experts Australia",
    description:
      "Professional Access integration with CRMs, accounting software, and third-party apps. Expert advice and affordable pricing.",
    url: "https://www.accessexperts.com.au/3rd-party-product-integration",
    siteName: "Access Experts",
    images: [
      {
        url: "https://www.accessexperts.com.au/logo.png",
        width: 1200,
        height: 630,
        alt: "Access Experts Logo",
      },
    ],
    locale: "en-AU",
    type: "article",
  },

  // Additional metadata
  keywords: ["Access integration services"],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@MSOfficeExperts",
    title: "Microsoft Access Integration Solutions | Access Experts Australia",
    description:
      "Professional Access integration with CRMs, accounting software, and third-party apps. Expert advice and affordable pricing.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "/3rd-party-product-integration",
    alternate: [
      {
        url: "https://www.officeexperts.com.au/services/microsoft-access/3rd-party-product-integration",
      },
      {
        url: "https://www.excelexperts.com.au/services/microsoft-access/3rd-party-product-integration",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
