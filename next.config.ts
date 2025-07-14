import type { NextConfig } from "next";

const url = 'images.pexels.com';

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
        hostname: 'cdn.dribbble.com',
        port: '',
        // pathname: '/account123/**',
        search: '',
      },
    ],
  },

};

export default nextConfig;
