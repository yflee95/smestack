import { comparisons } from "@/data/comparisons";
import { needGuides } from "@/data/needs";
import type { SoftwareProduct } from "@/data/software";

export function needsForProduct(product: SoftwareProduct) {
  return needGuides.filter((guide) =>
    guide.recommendedSlugs.includes(product.slug),
  );
}

export function comparisonsForNeed(recommendedSlugs: string[]) {
  return comparisons.filter(
    (comparison) =>
      recommendedSlugs.includes(comparison.left) &&
      recommendedSlugs.includes(comparison.right),
  );
}
