import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Block search engine indexing on non-production deployments
  async headers() {
    // Only add noindex headers for non-production environments
    const isProduction = process.env.VERCEL_ENV === "production" ||
                         process.env.NODE_ENV === "production" &&
                         !process.env.VERCEL_URL?.includes("dev") &&
                         !process.env.VERCEL_URL?.includes("development");

    if (isProduction) {
      return [];
    }

    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex, nofollow",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
