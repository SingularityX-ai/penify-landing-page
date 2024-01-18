const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    GA_MEASUREMENT_ID: "G-NQRNJW5NS7",
  },
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  output: 'export',
};

module.exports = withBundleAnalyzer(nextConfig);
