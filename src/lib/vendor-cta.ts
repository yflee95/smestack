import type { SoftwareProduct } from "@/data/software";

const referralEnvBySlug: Record<string, string | undefined> = {
  autocount: process.env.NEXT_PUBLIC_REFERRAL_AUTOCOUNT,
  bukku: process.env.NEXT_PUBLIC_REFERRAL_BUKKU,
  payrollpanda: process.env.NEXT_PUBLIC_REFERRAL_PAYROLLPANDA,
  "sql-account": process.env.NEXT_PUBLIC_REFERRAL_SQL_ACCOUNT,
  "qne-ai-cloud-accounting": process.env.NEXT_PUBLIC_REFERRAL_QNE,
  xero: process.env.NEXT_PUBLIC_REFERRAL_XERO,
  storehub: process.env.NEXT_PUBLIC_REFERRAL_STOREHUB,
  easystore: process.env.NEXT_PUBLIC_REFERRAL_EASYSTORE,
  kakitangan: process.env.NEXT_PUBLIC_REFERRAL_KAKITANGAN,
  financio: process.env.NEXT_PUBLIC_REFERRAL_FINANCIO,
};

function nonEmpty(value?: string) {
  const trimmed = value?.trim();
  return trimmed ? trimmed : undefined;
}

export function referralOverride(slug: string) {
  return nonEmpty(referralEnvBySlug[slug]);
}

export function vendorCta(product: SoftwareProduct) {
  const href =
    referralOverride(product.slug) ??
    nonEmpty(product.referralUrl) ??
    product.officialUrl;
  const isReferral = href !== product.officialUrl;

  return { href, isReferral };
}
