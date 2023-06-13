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
  async rewrites() {
    return [
      {
        source: "/pambu-oee/:path*",
        destination: "/so-tay-huong-dan/pambu-oee/:path*",
      },
      {
        source: "/pambu-pms/:path*",
        destination: "/so-tay-huong-dan/pambu-pms/:path*",
      },
      {
        source: "/news",
        destination: "/tin-tuc",
      },
      {
        source: "/news/:path*",
        destination: "/tin-tuc/:path*",
        // locale: false,
      },
    ];
  },
};

module.exports = nextConfig;
