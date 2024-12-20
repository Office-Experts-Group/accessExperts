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
  // Disable source maps in production
  productionBrowserSourceMaps: false,
  poweredByHeader: false,
  // Enable compression
  compress: true,

  webpack: (config, { dev, isServer }) => {
    if (!dev) {
      // Production optimizations
      config.optimization = {
        ...config.optimization,
        moduleIds: "deterministic",
        runtimeChunk: "single",
        flagIncludedChunks: true,
        sideEffects: true,
        usedExports: true,
        providedExports: true,
        mangleExports: true,
        minimize: true,
        splitChunks: {
          chunks: "all",
          maxInitialRequests: 20,
          minSize: 20000,
          maxSize: 60000, // Reduced from previous
          cacheGroups: {
            framework: {
              test: /[\\/]node_modules[\\/](react|react-dom|scheduler|next)[\\/]/,
              name: "framework",
              priority: 40,
              enforce: true,
              reuseExistingChunk: true,
            },
            vendors: {
              test: /[\\/]node_modules[\\/]/,
              name(module) {
                // Get the package name
                const packageName = module.context.match(
                  /[\\/]node_modules[\\/](.*?)([\\/]|$)/
                )[1];
                return `npm.${packageName.replace("@", "")}`;
              },
              priority: 20,
              reuseExistingChunk: true,
            },
            commons: {
              minChunks: 2,
              priority: 10,
              reuseExistingChunk: true,
              enforce: true,
            },
          },
        },
      };

      // Add terser configuration for better minification
      config.optimization.minimizer = config.optimization.minimizer || [];
      config.optimization.minimizer.push(
        require("terser-webpack-plugin")({
          terserOptions: {
            compress: {
              drop_console: true,
              drop_debugger: true,
              pure_funcs: [
                "console.log",
                "console.info",
                "console.debug",
                "console.warn",
              ],
            },
            mangle: true,
            toplevel: true,
            keep_classnames: false,
            keep_fnames: false,
          },
        })
      );
    }

    return config;
  },

  // Experimental features for production
  experimental: {
    // Optimize CSS
    optimizeCss: true,

    // Optimize package imports
    optimizePackageImports: ["react", "react-dom", "scheduler"],
  },

  // Headers to improve performance
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

module.exports = withBundleAnalyzer(nextConfig);
