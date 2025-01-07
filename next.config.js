/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["0.0.0.0"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
