import React from "react";

export const metadata = {
  // Basic metadata
  title: "Access Experts Blog",
  description:
    "Expert tutorials, tips, and best practices for Microsoft Access database development and modernisation. Learn how to build robust databases, integrate with cloud technologies, and transform your Access systems for the modern workplace.",

  // OpenGraph
  openGraph: {
    title: "Access Experts Blog",
    description:
      "Expert tutorials, tips, and best practices for Microsoft Access database development and modernisation. Learn how to build robust databases, integrate with cloud technologies, and transform your Access systems for the modern workplace.",
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
      "Expert tutorials, tips, and best practices for Microsoft Access database development and modernisation. Learn how to build robust databases, integrate with cloud technologies, and transform your Access systems for the modern workplace.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "/blog",
  },
};

export default function BlogLayout({ children }) {
  return <>{children}</>;
}
