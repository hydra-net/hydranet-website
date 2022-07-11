/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    NEXT_DEFAULT_APP_LANGUAGE: process.env.NEXT_DEFAULT_APP_LANGUAGE || 'en',
    NEXT_PUBLIC_GOOGLE_ANALYTICS_ID:
      process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID,
    NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID:
      process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID,
    NEXT_STORYBLOK_ACCESS_TOKEN: process.env.NEXT_STORYBLOK_ACCESS_TOKEN,
    NEXT_STORYBLOK_ACCESS_TOKEN_DEV:
      process.env.NEXT_STORYBLOK_ACCESS_TOKEN_DEV,
  },
};

module.exports = nextConfig;
