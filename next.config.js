/** @type {import('next').NextConfig} */

const { routeMaps } = require("./utils/router");

function generateRewrites() {
  const rewrites = [];

  // Generate rewrites for each locale
  Object.keys(routeMaps).forEach((locale) => {
    Object.entries(routeMaps[locale]).forEach(([source, destination]) => {
      // Chỉ thêm rewrite cho các route khác ngôn ngữ mặc định (vi ở đây)
      if (locale === "en") {
        rewrites.push({
          source: destination, // Thêm prefix locale vào source
          destination: source, // Thêm prefix locale vào destination
          locale: false,
        });
      }
    });
  });

  return rewrites;
}

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
  async rewrites() {
    return generateRewrites();
    // return [
    //   {
    //     source: "/en/about-company",
    //     destination: "/ve-cong-ty",
    //     locale: false,
    //   },
    // ];
  },
  experimental: {
    esmExternals: false,
  },
};

module.exports = nextConfig;
