/** @type {import('next').NextConfig} */

const nextConfig = {
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern',
      },
    },
  },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'seva-foodies-user-images.s3.eu-central-1.amazonaws.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
