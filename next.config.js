/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {      
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

module.exports = nextConfig;