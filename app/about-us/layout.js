import React from "react";

export const metadata = {
  title: "About Us | Access Experts",
  description:
    "Learn about Australia's leading Microsoft Access consultants delivering custom databases that streamline workflows and boost business productivity.",
  openGraph: {
    title: "About Us | Access Experts",
    description:
      "Learn about Australia's leading Microsoft Access consultants delivering custom databases that streamline workflows and boost business productivity.",
    url: "https://www.accessexperts.com.au/about-us",
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
    type: "article",
  },

  keywords: ["microsoft access consultants australia"],

  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "About Us | Access Experts",
    description:
      "Learn about Australia's leading Microsoft Access consultants delivering custom databases that streamline workflows and boost business productivity.",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: "/about-us",
  },
};

export default function AboutLayout({ children }) {
  return <>{children}</>;
}
