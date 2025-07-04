import React from "react";

export const metadata = {
  title: "About Us | Access Experts",
  description:
    "Australia's leading Microsoft Access consultants, Access Experts design efficient, custom databases that simplify workflows, improve productivity, and support business growth.",
  openGraph: {
    title: "About Us | Access Experts",
    description:
      "Australia's leading Microsoft Access consultants, Access Experts design efficient, custom databases that simplify workflows, improve productivity, and support business growth.",
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
      "Australia's leading Microsoft Access consultants, Access Experts design efficient, custom databases that simplify workflows, improve productivity, and support business growth.",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: "/about-us",
  },
};

export default function AboutLayout({ children }) {
  return <>{children}</>;
}
