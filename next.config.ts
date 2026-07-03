import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/valet-trash-birmingham-al",
        destination: "/services",
        statusCode: 301,
      },
    ];
  },
};

export default nextConfig;
