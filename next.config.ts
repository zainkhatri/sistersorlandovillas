import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.zyrosite.com",
      },
      {
        protocol: "https",
        hostname: "www.luxurysolterravillas.com",
      },
      {
        protocol: "https",
        hostname: "www.brightwatervilla.co.uk",
      },
      {
        protocol: "https",
        hostname: "storage.googleapis.com",
      },
    ],
  },
};

export default nextConfig;
