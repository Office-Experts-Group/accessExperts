import React from "react";

export const metadata = {
  // Basic metadata
  title: "Microsoft Access vs. Excel: When to Use Which for Your Business",
  description:
    "Discover when to use Microsoft Access versus Excel for your business data management. Learn the key differences, benefits, and how to leverage both tools together for optimal efficiency.",

  // OpenGraph
  openGraph: {
    title: "Microsoft Access vs. Excel: When to Use Which for Your Business",
    description:
      "Discover when to use Microsoft Access versus Excel for your business data management. Learn the key differences, benefits, and how to leverage both tools together for optimal efficiency.",
    url: "https://www.accessexperts.com.au/blog/access-vs-excel",
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
  keywords: ["Microsoft Access vs Excel"],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsAU",
    title: "Microsoft Access vs. Excel: When to Use Which for Your Business",
    description:
      "Discover when to use Microsoft Access versus Excel for your business data management. Learn the key differences, benefits, and how to leverage both tools together for optimal efficiency.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "/blog/access-vs-excel",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
