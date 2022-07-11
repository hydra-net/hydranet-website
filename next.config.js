/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    NEXT_STORYBLOK_ACCESS_TOKEN: process.env.NEXT_STORYBLOK_ACCESS_TOKEN,
    NEXT_STORYBLOK_ACCESS_TOKEN_DEV:
      process.env.NEXT_STORYBLOK_ACCESS_TOKEN_DEV,
  },
};

module.exports = nextConfig;
