/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["ikzttp.mypinata.cloud"],
  },
};

module.exports = nextConfig;
