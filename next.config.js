/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    GA_MEASUREMENT_ID: "G-3GEHMSCW5M",
  },
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  output: "export",
};

module.exports = nextConfig;
