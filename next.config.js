/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "sweettoothbucket.s3.ap-south-1.amazonaws.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  serverExternalPackages: [], // Ensure relevant packages aren't bundled incorrectly
  experimental: {
    serverSourceMaps: true, // Enable for better server-side traces
  },
};

module.exports = nextConfig;
