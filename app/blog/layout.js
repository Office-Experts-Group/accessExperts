import React from "react";

export const metadata = {
  // Basic metadata
  title: "Access Experts Blog",
  description:
    "Learn from the experts with tutorials, tips, and best practices for Microsoft Access database development, integration and modernisation.",

  // OpenGraph
  openGraph: {
    title: "Access Experts Blog",
    description:
      "Learn from the experts with tutorials, tips, and best practices for Microsoft Access database development, integration and modernisation.",
    url: "https://www.accessexperts.com.au/blog",
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
    type: "website",
  },

  // Additional metadata
  keywords: ["Access Experts Blog"],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Access Experts Blog",
    description:
      "Learn from the experts with tutorials, tips, and best practices for Microsoft Access database development, integration and modernisation.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "/blog",
  },
};

export default function BlogLayout({ children }) {
  return <>{children}</>;
}
