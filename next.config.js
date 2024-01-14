/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    GA_MEASUREMENT_ID: "G-NQRNJW5NS7",
  },
  images: {
    unoptimized: false,
  },
  reactStrictMode: true,
  output: 'export',
};

module.exports = nextConfig;
