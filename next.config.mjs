/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/news",
        permanent: true, // 301 redirect for SEO
      },
    ];
  },
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: "cms.beliefcentre.com",
      },
    ],
  },
};

export default nextConfig;
