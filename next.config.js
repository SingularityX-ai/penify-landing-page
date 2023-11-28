/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    GA_MEASUREMENT_ID: "",
  },
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  output: "export",
};

module.exports = nextConfig;
