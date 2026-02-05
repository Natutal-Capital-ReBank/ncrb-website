import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  // Check if this is a production deployment
  const isProduction =
    process.env.VERCEL_ENV === "production" ||
    (process.env.NODE_ENV === "production" &&
      !process.env.VERCEL_URL?.includes("dev") &&
      !process.env.VERCEL_URL?.includes("development"));

  // Block all crawlers on non-production deployments
  if (!isProduction) {
    return {
      rules: {
        userAgent: "*",
        disallow: "/",
      },
    };
  }

  // Production: allow all crawlers
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://ncrb.world/sitemap.xml",
  };
}
