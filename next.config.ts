import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheHandler: require.resolve('./cache.js'),
  cacheMaxMemorySize: 0,
  experimental: {
    viewTransition: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.klipfolio.com',
        port: '',
        // pathname: '/account123/**',
        search: '',
      },
    ],
  },

};

export default nextConfig;
