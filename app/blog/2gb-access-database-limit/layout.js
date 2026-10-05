import React from "react";

export const metadata = {
  // Basic metadata
  title: "Your Access Database Just Hit 2GB... Now What? A Survival Guide",
  description:
    "The 2GB limit crisis hits without warning. Learn why it happens, how to recognise the warning signs, and discover immediate fixes vs long-term solutions including migration paths to SQL Server and Azure.",

  // OpenGraph
  openGraph: {
    title: "Your Access Database Just Hit 2GB... Now What? A Survival Guide",
    description:
      "The 2GB limit crisis hits without warning. Learn why it happens, how to recognise the warning signs, and discover immediate fixes vs long-term solutions including migration paths to SQL Server and Azure.",
    url: "https://www.accessexperts.com.au/blog/2gb-access-database-limit",
    siteName: "Access Experts",
    images: [
      {
        url: "/blog/2gb/stop.webp",
        width: 600,
        height: 400,
        alt: "Your Access Database Just Hit 2GB... Now What? A Survival Guide",
      },
    ],
    locale: "en-AU",
    type: "article",
  },

  // Additional metadata
  keywords: ["Access 2GB limit"],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsAU",
    title: "Your Access Database Just Hit 2GB... Now What?",
    description:
      "The 2GB limit crisis hits without warning. Learn why it happens, how to recognise the warning signs, and discover immediate fixes vs long-term solutions including migration paths to SQL Server and Azure.",
    url: "/blog/2gb/stop.webp",
  },

  alternates: {
    canonical: "/blog/2gb-access-database-limit",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
