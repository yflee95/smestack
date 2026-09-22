import type { MetadataRoute } from "next";
import { comparisons } from "@/data/comparisons";
import { needGuides } from "@/data/needs";
import { software } from "@/data/software";
import { absoluteUrl } from "@/lib/site";
import { validateCatalog } from "@/lib/validate-data";

export default function sitemap(): MetadataRoute.Sitemap {
  validateCatalog();
  const newestReview = software
    .map((product) => product.verifiedAt)
    .sort()
    .at(-1);
  const lastModified = new Date(newestReview ?? "2026-09-03");

  const fixedPages = [
    { path: "/", priority: 1, changeFrequency: "weekly" as const },
    { path: "/software", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/compare", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/needs", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/finder", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/e-invoice", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/kit", priority: 0.5, changeFrequency: "monthly" as const },
    { path: "/shortlist", priority: 0.6, changeFrequency: "yearly" as const },
    { path: "/shortlist/sample", priority: 0.4, changeFrequency: "yearly" as const },
    { path: "/methodology", priority: 0.4, changeFrequency: "yearly" as const },
    { path: "/disclosure", priority: 0.3, changeFrequency: "yearly" as const },
    { path: "/privacy", priority: 0.3, changeFrequency: "yearly" as const },
  ].map((page) => ({
    url: absoluteUrl(page.path),
    lastModified,
    priority: page.priority,
    changeFrequency: page.changeFrequency,
  }));

  return [
    ...fixedPages,
    ...software.map((product) => ({
      url: absoluteUrl(`/software/${product.slug}`),
      lastModified: new Date(product.verifiedAt),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...comparisons.map((comparison) => ({
      url: absoluteUrl(`/compare/${comparison.slug}`),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),
    ...needGuides.map((guide) => ({
      url: absoluteUrl(`/needs/${guide.slug}`),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),
  ];
}
