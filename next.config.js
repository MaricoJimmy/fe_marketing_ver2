/** @type {import('next').NextConfig} */

const { routeMaps } = require("./utils/router");

const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true, // tự cập nhật app khi có bản mới
});

function generateRewrites() {
  const rewrites = [];

  // Generate rewrites for each locale
  Object.keys(routeMaps).forEach((locale) => {
    Object.entries(routeMaps[locale]).forEach(([source, destination]) => {
      // Chỉ thêm rewrite cho các route khác ngôn ngữ mặc định (vi ở đây)
      if (["en", "jp", "th"].includes(locale)) {
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

const nextConfig = withPWA({
  images: {
    domains: ["pambu-cms.org"],
  },
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["vi", "en", "jp", "th"],
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
});

module.exports = nextConfig;
