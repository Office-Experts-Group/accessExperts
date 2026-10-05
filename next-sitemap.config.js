// next-sitemap.config.js
// Access Experts sitemap configuration

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.accessexperts.com.au",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  trailingSlash: false,
  autoLastmod: false, // Without this, every URL gets the build time as its lastmod
  exclude: ["/api/*"],
};
