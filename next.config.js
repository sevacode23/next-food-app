/** @type {import('next').NextConfig} */

const nextConfig = {
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern',
      },
    },
  },
};

module.exports = nextConfig;
