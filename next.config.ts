import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/valet-trash-birmingham-al",
        destination: "/services",
        statusCode: 301,
      },
      {
        source: "/book",
        destination: "/contact",
        statusCode: 301,
      },
      {
        source: "/estate-cleanouts-birmingham--al",
        destination: "/estate-cleanouts-birmingham-al",
        statusCode: 301,
      },
      {
        source: "/hot-tub-removal",
        destination: "/hot-tub-removal-birmingham--al",
        statusCode: 301,
      },
    ];
  },
};

export default nextConfig;
