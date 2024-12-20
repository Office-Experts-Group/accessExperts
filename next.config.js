/** @type {import('next').NextConfig} */
const path = require("path");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ["image/webp"],
  },
  productionBrowserSourceMaps: false,
  poweredByHeader: false,

  webpack: (config, { dev, isServer }) => {
    if (!dev) {
      // Consolidate framework chunks
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          chunks: "all",
          cacheGroups: {
            default: false,
            vendors: false,
            // Combine React framework chunks
            framework: {
              name: "framework",
              chunks: "all",
              test: /[\\/]node_modules[\\/](react|react-dom|scheduler|next)[\\/]/,
              priority: 40,
              enforce: true,
              reuseExistingChunk: true,
            },
            // Group common code
            commons: {
              name: "commons",
              minChunks: 2,
              priority: 20,
              reuseExistingChunk: true,
            },
            // Vendor chunks
            lib: {
              test(module) {
                return (
                  module.size() > 80000 &&
                  /node_modules[/\\]/.test(module.identifier())
                );
              },
              name(module) {
                const moduleFileName = module
                  .identifier()
                  .split(/[/\\]/)
                  .reduceRight((item) => item);
                return `vendor-${moduleFileName.replace(/\.[^/.]+$/, "")}`;
              },
              priority: 30,
              minChunks: 1,
              reuseExistingChunk: true,
            },
          },
          maxInitialRequests: 25,
          minSize: 20000,
        },
      };
    }

    return config;
  },

  // Production only experimental features
  experimental:
    !process.env.NODE_ENV === "development"
      ? {
          // Enable modern JavaScript optimizations
          optimizePackageImports: ["date-fns", "lodash"],

          // Improve production performance
          turbotrace: {
            logLevel: "error",
            contextDirectory: __dirname,
            processCwd: __dirname,
          },

          // Optimize page load
          optimizeCss: true,

          // Reduce bundle size
          modularizeImports: {
            lodash: {
              transform: "lodash/{{member}}",
            },
            "date-fns": {
              transform: "date-fns/{{member}}",
            },
          },
        }
      : {},
};

module.exports = withBundleAnalyzer(nextConfig);
