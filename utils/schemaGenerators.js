// utils/schemaGenerators.js
export const generateProfessionalServiceSchema = () => ({
  "@type": "ProfessionalService",
  "@id": `https://www.accessexperts.com.au/#business`,
  name: "Microsoft Access Consulting Services",
  url: "https://www.accessexperts.com.au/",
  description: "Professional Microsoft Access consulting and support services",
  priceRange: "$$",
  serviceType: "Microsoft Access Consulting",
  availableService: [
    {
      "@type": "Service",
      name: "Remote Consulting",
      description: "Australia-wide remote Microsoft Access consulting services",
    },
    {
      "@type": "Service",
      name: "On-site Consulting",
      description:
        "In-house Microsoft Access consulting services available in major metropolitan areas",
    },
  ],
  areaServed: [
    {
      "@type": "Country",
      name: "Australia",
    },
    {
      "@type": "AdministrativeArea",
      name: "New South Wales",
    },
    {
      "@type": "AdministrativeArea",
      name: "Victoria",
    },
    {
      "@type": "AdministrativeArea",
      name: "Queensland",
    },
    {
      "@type": "AdministrativeArea",
      name: "Western Australia",
    },
    {
      "@type": "AdministrativeArea",
      name: "South Australia",
    },
    {
      "@type": "AdministrativeArea",
      name: "Tasmania",
    },
    {
      "@type": "AdministrativeArea",
      name: "Australian Capital Territory",
    },
    {
      "@type": "AdministrativeArea",
      name: "Northern Territory",
    },
  ],
  location: [
    // New South Wales
    {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressCountry: "AU",
        addressRegion: "NSW",
        addressLocality: "Sydney",
        postalCode: "2000",
      },
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Sydney Metropolitan Area",
      },
    },
    {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressCountry: "AU",
        addressRegion: "NSW",
        addressLocality: "Grafton",
        postalCode: "2460",
      },
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Grafton Region",
      },
    },
    {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressCountry: "AU",
        addressRegion: "NSW",
        addressLocality: "Newcastle",
        postalCode: "2300",
      },
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Newcastle Metropolitan Area",
      },
    },
    {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressCountry: "AU",
        addressRegion: "NSW",
        addressLocality: "Wollongong",
        postalCode: "2500",
      },
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Wollongong Metropolitan Area",
      },
    },
    // Victoria
    {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressCountry: "AU",
        addressRegion: "VIC",
        addressLocality: "Melbourne",
        postalCode: "3000",
      },
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Melbourne Metropolitan Area",
      },
    },
    {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressCountry: "AU",
        addressRegion: "VIC",
        addressLocality: "Richmond",
        postalCode: "3121",
      },
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Richmond Area",
      },
    },
    {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressCountry: "AU",
        addressRegion: "VIC",
        addressLocality: "Geelong",
        postalCode: "3220",
      },
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Geelong Metropolitan Area",
      },
    },
    // Queensland
    {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressCountry: "AU",
        addressRegion: "QLD",
        addressLocality: "Brisbane",
        postalCode: "4000",
      },
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Brisbane Metropolitan Area",
      },
    },
    {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressCountry: "AU",
        addressRegion: "QLD",
        addressLocality: "Gold Coast",
        postalCode: "4217",
      },
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Gold Coast Metropolitan Area",
      },
    },
    // Western Australia
    {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressCountry: "AU",
        addressRegion: "WA",
        addressLocality: "Perth",
        postalCode: "6000",
      },
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Perth Metropolitan Area",
      },
    },
    // South Australia
    {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressCountry: "AU",
        addressRegion: "SA",
        addressLocality: "Adelaide",
        postalCode: "5000",
      },
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Adelaide Metropolitan Area",
      },
    },
    // Northern Territory
    {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressCountry: "AU",
        addressRegion: "NT",
        addressLocality: "Darwin",
        postalCode: "0800",
      },
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Darwin Metropolitan Area",
      },
    },
    // ACT
    {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressCountry: "AU",
        addressRegion: "ACT",
        addressLocality: "Canberra",
        postalCode: "2600",
      },
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Canberra Metropolitan Area",
      },
    },
  ],
  virtualLocation: {
    "@type": "VirtualLocation",
    name: "Remote Service Available Australia-wide",
  },
  provider: {
    "@type": "Organization",
    "@id": `https://www.accessexperts.com.au/#organization`,
  },
  telephone: "1300 102 810",
  email: "consult@officeexperts.com.au",
});

export const generateOrganizationSchema = () => ({
  "@type": "Organization",
  "@id": "https://www.accessexperts.com.au/#organization",
  name: "Office Experts Group",
  url: "https://www.accessexperts.com.au/",
  telephone: "1300 102 810",
  email: "consult@officeexperts.com.au",
  // Enhanced contact point information
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer service",
      telephone: "1300 102 810",
      email: "consult@officeexperts.com.au",
      availableLanguage: ["en", "en-AU"],
      contactOption: "TollFree",
      hoursAvailable: "Mo,Tu,We,Th,Fr 09:00-17:00",
    },
  ],
  // Remote service availability
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Access Database Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Azure Cloud Integration",
          description: "Access database integration with Azure cloud services",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Online Access Solutions",
          description: "Web-enabled Microsoft Access application development",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Third-party Integration",
          description:
            "Integration of Access with external systems and applications",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Technical Support",
          description: "Comprehensive Access database support and maintenance",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Database Migration",
          description: "Access database upgrades and data migration services",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Custom Solutions",
          description: "Bespoke Access database design and development",
        },
      },
    ],
  },
  location: [
    // New South Wales
    {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressCountry: "AU",
        addressRegion: "NSW",
        addressLocality: "Sydney",
        postalCode: "2000",
      },
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Sydney Metropolitan Area",
      },
    },
    {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressCountry: "AU",
        addressRegion: "NSW",
        addressLocality: "Grafton",
        postalCode: "2460",
      },
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Grafton Region",
      },
    },
    {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressCountry: "AU",
        addressRegion: "NSW",
        addressLocality: "Newcastle",
        postalCode: "2300",
      },
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Newcastle Metropolitan Area",
      },
    },
    {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressCountry: "AU",
        addressRegion: "NSW",
        addressLocality: "Wollongong",
        postalCode: "2500",
      },
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Wollongong Metropolitan Area",
      },
    },
    // Victoria
    {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressCountry: "AU",
        addressRegion: "VIC",
        addressLocality: "Melbourne",
        postalCode: "3000",
      },
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Melbourne Metropolitan Area",
      },
    },
    {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressCountry: "AU",
        addressRegion: "VIC",
        addressLocality: "Richmond",
        postalCode: "3121",
      },
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Richmond Area",
      },
    },
    {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressCountry: "AU",
        addressRegion: "VIC",
        addressLocality: "Geelong",
        postalCode: "3220",
      },
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Geelong Metropolitan Area",
      },
    },
    // Queensland
    {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressCountry: "AU",
        addressRegion: "QLD",
        addressLocality: "Brisbane",
        postalCode: "4000",
      },
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Brisbane Metropolitan Area",
      },
    },
    {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressCountry: "AU",
        addressRegion: "QLD",
        addressLocality: "Gold Coast",
        postalCode: "4217",
      },
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Gold Coast Metropolitan Area",
      },
    },
    // Western Australia
    {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressCountry: "AU",
        addressRegion: "WA",
        addressLocality: "Perth",
        postalCode: "6000",
      },
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Perth Metropolitan Area",
      },
    },
    // South Australia
    {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressCountry: "AU",
        addressRegion: "SA",
        addressLocality: "Adelaide",
        postalCode: "5000",
      },
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Adelaide Metropolitan Area",
      },
    },
    // Northern Territory
    {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressCountry: "AU",
        addressRegion: "NT",
        addressLocality: "Darwin",
        postalCode: "0800",
      },
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Darwin Metropolitan Area",
      },
    },
    // ACT
    {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressCountry: "AU",
        addressRegion: "ACT",
        addressLocality: "Canberra",
        postalCode: "2600",
      },
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Canberra Metropolitan Area",
      },
    },
  ],
  virtualLocation: {
    "@type": "VirtualLocation",
    name: "Remote Service Available Australia-wide",
  },
  logo: {
    "@type": "ImageObject",
    inLanguage: "en-AU",
    "@id": "/logo.png",
    url: "/logo.png",
    contentUrl: "/logo.png",
    width: 1200,
    height: 630,
    caption: "Office Experts Group",
  },
  image: {
    "@id": "/logo.png",
  },
  sameAs: [
    "https://www.facebook.com/MSOfficeExperts",
    "https://x.com/OfficeExpertsG1",
    "https://www.instagram.com/officeexpertsgroup",
    "https://www.linkedin.com/company/office-experts-group",
    "https://www.youtube.com/channel/UCw2Xf02ukEwvM6fQ2lVZxuw",
  ],
});
