import type { Metadata } from "next";
import { Eyebrow, PageContainer } from "@/components/site-shell";

export const metadata: Metadata = {
  title: "How We Research Software",
  description:
    "The SME Stack editorial method for sources, product selection, comparisons, updates and corrections.",
  alternates: { canonical: "/methodology" },
};

export default function MethodologyPage() {
  return (
    <PageContainer>
      <article className="prose-copy mx-auto max-w-3xl py-16 sm:py-20">
        <Eyebrow>Editorial methodology</Eyebrow>
        <h1 className="text-4xl font-bold tracking-[-0.04em] sm:text-5xl">
          How we research software
        </h1>
        <p>
          SME Stack helps Malaysian business owners make a useful starting
          shortlist. We do not certify products, provide tax advice or replace a
          workflow demo.
        </p>
        <h2>Sources first</h2>
        <p>
          Product claims come primarily from official vendor product, pricing
          and partner documentation. Every product record stores a source URL
          and review date. Volatile prices are described as published or quoted
          rather than copied into stale tables.
        </p>
        <h2>Fit, not a universal score</h2>
        <p>
          Software is evaluated around business size, category, deployment,
          industry fit and operational trade-offs. Comparison verdicts explain
          which conditions favour each product instead of assigning an opaque
          star rating.
        </p>
        <h2>Programmatic quality controls</h2>
        <p>
          A page cannot build if its source is missing, a product profile lacks
          meaningful features and watch-outs, or a guide has fewer than three
          valid recommendations. We do not publish city-name swaps or empty
          template pages.
        </p>
        <h2>Corrections and updates</h2>
        <p>
          Product records must be reviewed at least annually and more often for
          pricing or regulatory changes. Vendors may request a factual
          correction, but cannot purchase a ranking or verdict.
        </p>
      </article>
    </PageContainer>
  );
}
