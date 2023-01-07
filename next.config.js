/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['media.graphassets.com'],
  },
  reactStrictMode: false,
  swcMinify: true,
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
    ];
  },
};

module.exports = nextConfig;
