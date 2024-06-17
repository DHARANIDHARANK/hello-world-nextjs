// next.config.js

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Custom webpack configuration
  webpack: (config, { isServer }) => {
    // Example of custom Webpack configuration
    if (!isServer) {
      config.resolve.fallback = { ...config.resolve.fallback, fs: false };
    }
    return config;
  },
  // Additional Next.js specific configurations can be added here
  // such as images, redirects, rewrites, etc.
};

export default nextConfig;
