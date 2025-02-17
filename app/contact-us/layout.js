import React from "react";

export const metadata = {
  // Basic metadata
  title: "Contact Us | Access Expert Consulting ",
  description:
    "Contact our Microsoft Access database experts for consulting, development, and support services. Available for projects across Australia with competitive pricing and prompt service.",

  // OpenGraph
  openGraph: {
    title: "Contact Us | Access Expert Consulting ",
    description:
      "Get in touch with our Microsoft Access database specialists for custom development, integration, support, and consulting services across Australia.",
    url: "https://www.accessexperts.com.au/contact-us",
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
  keywords: [
    // Core Access services
    "Microsoft Access consultant contact",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@AccessExperts",
    title:
      "Contact Access Experts – Microsoft Access Database Consulting & Development",
    description:
      "Get in touch with our Microsoft Access database specialists for custom development, integration, support, and consulting services across Australia.",
    images: ["/logo.png"],
  },

  // Additional tags
  alternates: {
    canonical: "/contact-us",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
