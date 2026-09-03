function publicSiteUrl() {
  const raw = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.smestack.my";
  const url = new URL(raw);
  if (url.hostname === "localhost" || url.hostname === "127.0.0.1") {
    return url.origin;
  }
  if (url.protocol !== "https:") {
    throw new Error("NEXT_PUBLIC_SITE_URL must use HTTPS");
  }
  if (url.hostname === "smestack.my") {
    url.hostname = "www.smestack.my";
  }
  return url.origin;
}

export const siteConfig = {
  name: "SME Stack",
  description:
    "Independent, source-backed software comparisons for Malaysian small businesses.",
  url: publicSiteUrl(),
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
