import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  images: {
    formats: ["image/webp"],
  },

  webpack(config) {
    config.module.rules.push(
      {
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url (client-components only)
        type: 'asset/resource', // import files as base64 URIs
      },
      {
        test: /\.svg$/i,
        resourceQuery: { not: [/url/] }, // import files as SVG-components (XML)
        use: ['@svgr/webpack'],
      },
    );
    return config;
  },
};

export default nextConfig;
