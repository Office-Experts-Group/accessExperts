import React from "react";

export const metadata = {
  // Basic metadata
  title: "Contact Us | Access Expert Consulting ",
  description:
    "Speak with Access database consultants for expert development, support, and integration. Prompt service Australia-wide at competitive rates.",

  // OpenGraph
  openGraph: {
    title: "Contact Us | Access Expert Consulting ",
    description:
      "Speak with Access database consultants for expert development, support, and integration. Prompt service Australia-wide at competitive rates.",
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
      "Speak with Access database consultants for expert development, support, and integration. Prompt service Australia-wide at competitive rates.",
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
