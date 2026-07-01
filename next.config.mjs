/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  devIndicators: false,
  output: 'standalone',
  allowedDevOrigins: ['192.168.1.138'],
  async redirects() {
    return [
      {
        source: '/ve-cong-ty',
        destination: '/about-us',
        permanent: true, // Trả về mã 308 (Tốt cho SEO - Google sẽ tự cập nhật link)
      },
      {
        source: '/tuyen-dung',
        destination: '/careers',
        permanent: true,
      }
    ];
  },
};

export default nextConfig;
