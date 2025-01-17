/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["pambu-cms.org"],
  },
  reactStrictMode: false,
  swcMinify: true,
  i18n: {
    locales: ["vi", "en"],
    defaultLocale: "vi",
    localeDetection: false,
  },
};

module.exports = nextConfig;
