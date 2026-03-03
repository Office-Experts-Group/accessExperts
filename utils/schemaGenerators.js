// utils/schemaGenerators.js
// Generates reusable Organization, ProfessionalService, and WebSite schemas for Access Experts

// Shared service areas used across both schema types
const SERVICE_AREAS = [
  { "@type": "Country", name: "Australia" },
  { "@type": "AdministrativeArea", name: "New South Wales" },
  { "@type": "AdministrativeArea", name: "Victoria" },
  { "@type": "AdministrativeArea", name: "Queensland" },
  { "@type": "AdministrativeArea", name: "Western Australia" },
  { "@type": "AdministrativeArea", name: "South Australia" },
  { "@type": "AdministrativeArea", name: "Tasmania" },
  { "@type": "AdministrativeArea", name: "Australian Capital Territory" },
  { "@type": "AdministrativeArea", name: "Northern Territory" },
];

// Physical/operational locations for the business
const LOCATIONS = [
  {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressCountry: "AU",
      addressRegion: "NSW",
      addressLocality: "Sydney",
      postalCode: "2000",
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
  },
  {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressCountry: "AU",
      addressRegion: "VIC",
      addressLocality: "Melbourne",
      postalCode: "3000",
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
  },
  {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressCountry: "AU",
      addressRegion: "QLD",
      addressLocality: "Brisbane",
      postalCode: "4000",
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
  },
  {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressCountry: "AU",
      addressRegion: "WA",
      addressLocality: "Perth",
      postalCode: "6000",
    },
  },
  {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressCountry: "AU",
      addressRegion: "SA",
      addressLocality: "Adelaide",
      postalCode: "5000",
    },
  },
  {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressCountry: "AU",
      addressRegion: "NT",
      addressLocality: "Darwin",
      postalCode: "0800",
    },
  },
  {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressCountry: "AU",
      addressRegion: "ACT",
      addressLocality: "Canberra",
      postalCode: "2600",
    },
  },
];

// Access-specific services — comprehensive list to maximise SEO and AI overview coverage
const SERVICES = [
  // Core database development
  {
    name: "Microsoft Access Database Design",
    serviceType: "Access Consulting",
  },
  { name: "Access Database Development", serviceType: "Access Consulting" },
  {
    name: "Custom Access Application Development",
    serviceType: "Access Consulting",
  },
  { name: "Access Form and Report Design", serviceType: "Access Consulting" },
  {
    name: "Access Query and SQL Development",
    serviceType: "Access Consulting",
  },
  {
    name: "Access Macro and VBA Development",
    serviceType: "Access Consulting",
  },
  {
    name: "Access Table and Relationship Design",
    serviceType: "Access Consulting",
  },
  // Data management
  {
    name: "Data Entry and Validation Systems",
    serviceType: "Access Consulting",
  },
  { name: "Data Cleaning and Normalisation", serviceType: "Access Consulting" },
  {
    name: "Data Import and Export Automation",
    serviceType: "Access Consulting",
  },
  { name: "Data Migration to Access", serviceType: "Access Consulting" },
  { name: "Access to SQL Server Migration", serviceType: "Access Consulting" },
  { name: "Legacy Database Modernisation", serviceType: "Access Consulting" },
  // Integration
  { name: "Access and Excel Integration", serviceType: "Access Consulting" },
  {
    name: "Access and SharePoint Integration",
    serviceType: "Access Consulting",
  },
  { name: "Azure Cloud Integration", serviceType: "Access Consulting" },
  {
    name: "SQL Server Upsize and Backend Migration",
    serviceType: "Access Consulting",
  },
  {
    name: "Third-party API and Application Integration",
    serviceType: "Access Consulting",
  },
  {
    name: "ODBC and Linked Table Configuration",
    serviceType: "Access Consulting",
  },
  // Reporting and dashboards
  { name: "Access Report Automation", serviceType: "Access Consulting" },
  {
    name: "Custom Dashboard Development in Access",
    serviceType: "Access Consulting",
  },
  {
    name: "Scheduled and Automated Reporting",
    serviceType: "Access Consulting",
  },
  {
    name: "PDF and Word Report Generation from Access",
    serviceType: "Access Consulting",
  },
  // Support and maintenance
  {
    name: "Access Database Support and Troubleshooting",
    serviceType: "Access Consulting",
  },
  { name: "Access Performance Optimisation", serviceType: "Access Consulting" },
  {
    name: "Access Database Repair and Recovery",
    serviceType: "Access Consulting",
  },
  { name: "Access Version Upgrades", serviceType: "Access Consulting" },
  {
    name: "Access Security and User Permissions Setup",
    serviceType: "Access Consulting",
  },
  // Delivery
  {
    name: "Remote Access Database Consulting",
    serviceType: "Australia-wide Access Services",
  },
  {
    name: "On-site Access Database Consulting",
    serviceType: "Australia-wide Access Services",
  },
];

// Builds OfferCatalog item list from the SERVICES array
const buildOffers = () =>
  SERVICES.map((s) => ({
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name: s.name,
      serviceType: s.serviceType,
    },
  }));

// ProfessionalService schema — describes the Access Experts business entity
// areaServed and location are valid on LocalBusiness, which ProfessionalService extends
export const generateProfessionalServiceSchema = () => ({
  "@type": "ProfessionalService",
  "@id": "https://www.accessexperts.com.au#business",
  name: "Microsoft Access Consulting Services",
  url: "https://www.accessexperts.com.au",
  description:
    "Professional Microsoft Access database consulting, development and support services across Australia. Custom database solutions, VBA automation, SQL Server migration and integration.",
  priceRange: "$$",
  telephone: "1300 102 810",
  email: "consult@officeexperts.com.au",
  foundingDate: "2000",
  areaServed: SERVICE_AREAS,
  location: LOCATIONS,
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Microsoft Access Consulting Services",
    itemListElement: buildOffers(),
  },
});

// Organization schema — shared company identity across all 5 Office Experts Group sites
export const generateOrganizationSchema = () => ({
  "@type": "Organization",
  "@id": "https://www.accessexperts.com.au#organization",
  name: "Office Experts Group",
  url: "https://www.accessexperts.com.au",
  telephone: "1300 102 810",
  email: "consult@officeexperts.com.au",
  foundingDate: "2000",
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer service",
      telephone: "1300 102 810",
      email: "consult@officeexperts.com.au",
      availableLanguage: "en-AU",
      contactOption: "TollFree",
      hoursAvailable: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "17:00",
      },
    },
  ],
  logo: {
    "@type": "ImageObject",
    "@id": "https://www.accessexperts.com.au/logo.png",
    url: "https://www.accessexperts.com.au/logo.png",
    contentUrl: "https://www.accessexperts.com.au/logo.png",
    width: 1200,
    height: 630,
    caption: "Access Experts — Microsoft Access Consulting",
  },
  image: {
    "@id": "https://www.accessexperts.com.au/logo.png",
  },
  sameAs: [
    "https://www.facebook.com/MSOfficeExperts",
    "https://x.com/OfficeExpertsG1",
    "https://www.instagram.com/officeexpertsgroup",
    "https://www.linkedin.com/company/office-experts-group",
    "https://www.youtube.com/channel/UCw2Xf02ukEwvM6fQ2lVZxuw",
  ],
});

// WebSite schema — parameterised so it can be reused across all 5 sites
// domain:      full origin URL e.g. "https://www.accessexperts.com.au"
// name:        site brand name e.g. "Access Experts"
// description: short tagline for the description field
export const generateWebSiteSchema = (domain, name, description) => ({
  "@type": "WebSite",
  "@id": `${domain}#website`,
  url: domain,
  name,
  description,
  publisher: {
    // References the Organization node in the same @graph — avoids repeating org data
    "@id": `${domain}#organization`,
  },
  potentialAction: [
    {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${domain}?s={search_term_string}`,
      },
      // Plain string format required — PropertyValueSpecification object causes validation errors
      "query-input": "required name=search_term_string",
    },
  ],
  inLanguage: "en-AU",
});
