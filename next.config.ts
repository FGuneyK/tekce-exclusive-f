import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Prototype imagery is served from Unsplash rather than committed to the repo.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "crm.tekceexclusive.com",
        pathname: "/api/v2/files/download/media/public/**",
      },
    ],
  },
};

export default nextConfig;
