import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheHandler: require.resolve('./cache.js'),
  cacheMaxMemorySize: 0,
  experimental: {
    viewTransition: true,
  },
  images: {
    // domains: ['t4.ftcdn.net'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
        port: '',
        search: '',
      },
      {
        protocol: 'https',
        hostname: 'boldfactory.pt/**',
        port: '',
        search: '',
      },
      {
        protocol: 'https',
        hostname: 'franka.pt/**',
        port: '',
        search: '',
      },
      {
        protocol: 'https',
        hostname: 'amq-mcq.dam.kering.com/**',
        port: '',
        search: '',
      },
      {
        protocol: 'https',
        hostname: 'cdn.shopify.com/**',
        port: '',
        search: '',
      },


      {
        protocol: 'https',
        hostname: 't4.ftcdn.net/**',
        port: '',
        search: '',
      },
      {
        protocol: 'https',
        hostname: 'img.icons8.com/**',
        port: '',
        search: '',
      },
      {
        protocol: 'https',
        hostname: 't3.ftcdn.net/**',
        port: '',
        search: '',
      },
      {
        protocol: 'https',
        hostname: 'as2.ftcdn.net/**',
        port: '',
        search: '',
      },
      {
        protocol: 'https',
        hostname: 'as1.ftcdn.net/**',
        port: '',
        search: '',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com/**',
        port: '',
        search: '',
      },
      {
        protocol: 'https',
        hostname: 'preview.free3d.com/**',
        port: '',
        search: '',
      },
      {
        protocol: 'https',
        hostname: 'cdn.dribbble.com/**',
        port: '',
        search: '',
      },
      {
        protocol: 'https',
        hostname: 'media.istockphoto.com/**',
        port: '',
        search: '',
      },
      // {
      //   protocol: 'https',
      //   hostname: 'cdn.dribbble.com',
      //   port: '',
      //   search: '',
      // },
      // {
      //   protocol: 'https',
      //   hostname: 'images.stockcake.com',
      //   port: '',
      //   search: '',
      // },
      // {
      //   protocol: 'https',
      //   hostname: 'avataaars.io/**',
      //   port: '',
      //   search: '',
      // },
      // {
      //   protocol: 'https',
      //   hostname: 'img.icons8.com/**',
      //   port: '',
      //   search: '',
      // },
    ],
  },

};

export default nextConfig;
