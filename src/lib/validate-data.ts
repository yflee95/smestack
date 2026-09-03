import { comparisons, resolveComparison } from "@/data/comparisons";
import {
  comparisonEditorial,
  needEditorial,
  productEditorial,
} from "@/data/editorial";
import { needGuides } from "@/data/needs";
import { software, softwareBySlug } from "@/data/software";
import { referralOverride } from "@/lib/vendor-cta";

let validated = false;

export function validateCatalog() {
  if (validated) return;

  const slugs = new Set<string>();
  const unique = uniqueTracker();

  for (const product of software) {
    if (slugs.has(product.slug)) {
      throw new Error(`Duplicate software slug: ${product.slug}`);
    }
    slugs.add(product.slug);

    if (
      !product.name ||
      !product.summary ||
      !product.bestFor ||
      product.features.length < 4 ||
      product.watchouts.length < 2
    ) {
      throw new Error(`Thin product record: ${product.slug}`);
    }

    unique.claim(`summary:${product.summary}`, product.slug);
    unique.claim(`bestFor:${product.bestFor}`, product.slug);

    const editorial = productEditorial[product.slug];
    if (!editorial) {
      throw new Error(`Missing editorial record for ${product.slug}`);
    }
    if (editorial.differentiators.length < 3 || editorial.faqs.length < 2) {
      throw new Error(`Thin editorial record for ${product.slug}`);
    }
    unique.claim(`notFor:${editorial.notFor}`, product.slug);
    for (const faq of editorial.faqs) {
      unique.claim(`faq:${faq.q}`, product.slug);
    }

    for (const [field, value] of [
      ["officialUrl", product.officialUrl],
      ["sourceUrl", product.sourceUrl],
      ["referralUrl", product.referralUrl],
      ["partnerUrl", product.partnerUrl],
    ] as const) {
      if (!value) continue;
      assertHttpsUrl(`${product.slug}.${field}`, value);
    }

    const envReferral = referralOverride(product.slug);
    if (envReferral) {
      assertHttpsUrl(`${product.slug}.envReferral`, envReferral);
    }

    const ageInDays =
      (Date.now() - new Date(product.verifiedAt).getTime()) / 86_400_000;
    if (!Number.isFinite(ageInDays) || ageInDays > 365) {
      throw new Error(`Stale source review for ${product.slug}`);
    }
  }

  if (Object.keys(productEditorial).length !== software.length) {
    throw new Error("Editorial map does not match software catalogue size");
  }

  for (const comparison of comparisons) {
    resolveComparison(comparison);
    if (
      comparison.left === comparison.right ||
      comparison.chooseLeft.length < 3 ||
      comparison.chooseRight.length < 3
    ) {
      throw new Error(`Thin comparison record: ${comparison.slug}`);
    }
    unique.claim(`verdict:${comparison.verdict}`, comparison.slug);
    unique.claim(`csummary:${comparison.summary}`, comparison.slug);

    const editorial = comparisonEditorial[comparison.slug];
    if (!editorial || editorial.demoChecks.length < 3) {
      throw new Error(`Missing comparison editorial: ${comparison.slug}`);
    }
    unique.claim(`difference:${editorial.difference}`, comparison.slug);
    for (const check of editorial.demoChecks) {
      unique.claim(`demo:${check}`, comparison.slug);
    }
  }

  for (const guide of needGuides) {
    if (guide.recommendedSlugs.length < 3) {
      throw new Error(`Need guide has too few recommendations: ${guide.slug}`);
    }
    for (const slug of guide.recommendedSlugs) {
      if (!softwareBySlug.has(slug)) {
        throw new Error(`Unknown product ${slug} in guide ${guide.slug}`);
      }
    }
    const editorial = needEditorial[guide.slug];
    if (!editorial || editorial.context.length < 120) {
      throw new Error(`Thin need editorial: ${guide.slug}`);
    }
    unique.claim(`need:${editorial.context}`, guide.slug);
    for (const slug of editorial.relatedComparisonSlugs) {
      if (!comparisons.some((item) => item.slug === slug)) {
        throw new Error(`Unknown comparison ${slug} in need ${guide.slug}`);
      }
    }
  }

  validated = true;
}

function uniqueTracker() {
  const seen = new Map<string, string>();
  return {
    claim(value: string, owner: string) {
      const key = value.trim().toLowerCase();
      const existing = seen.get(key);
      if (existing) {
        throw new Error(`Duplicate copy shared by ${existing} and ${owner}`);
      }
      seen.set(key, owner);
    },
  };
}

function assertHttpsUrl(label: string, value: string) {
  let url: URL;
  try {
    url = new URL(value);
  } catch {
    throw new Error(`${label} is not a valid URL`);
  }
  if (url.protocol !== "https:") {
    throw new Error(`${label} must use HTTPS`);
  }
  if (url.username || url.password) {
    throw new Error(`${label} must not include credentials`);
  }
}
