import type { NextConfig } from "next";

// cdn.dribbble.com

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
        hostname: 'images.pexels.com',
        port: '',
        // pathname: '/account123/**',
        search: '',
      },
    ],
  },

};

export default nextConfig;
