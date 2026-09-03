export const siteConfig = {
  name: "SME Stack",
  description:
    "Independent, source-backed software comparisons for Malaysian small businesses.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://smestack.my",
  email: "hello@smestack.my",
};

export function absoluteUrl(path: string) {
  return new URL(path, siteConfig.url).toString();
}

export function formatDate(value: string) {
  return new Intl.DateTimeFormat("en-MY", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date(value));
}

export function latestIsoDate(...values: string[]) {
  return [...values].sort().at(-1) ?? values[0];
}
