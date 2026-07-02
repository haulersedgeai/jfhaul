import type { MetadataRoute } from "next";
import { business, locationPages } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const base = business.siteUrl;

  const staticPaths: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${base}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
  ];

  const location: MetadataRoute.Sitemap = locationPages.map((p) => ({
    url: `${base}${p.path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticPaths, ...location];
}
