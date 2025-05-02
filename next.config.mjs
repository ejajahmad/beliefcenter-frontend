/** @type {import('next').NextConfig} */
const nextConfig = {
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
