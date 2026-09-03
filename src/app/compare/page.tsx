import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow, PageContainer } from "@/components/site-shell";
import { comparisons, resolveComparison } from "@/data/comparisons";

export const metadata: Metadata = {
  title: "Malaysia SME Software Comparisons",
  description:
    "Direct, source-backed comparisons of accounting, payroll and POS software available to Malaysian SMEs.",
  alternates: { canonical: "/compare" },
};

export default function ComparisonsPage() {
  return (
    <PageContainer>
      <section className="py-16 sm:py-20">
        <Eyebrow>Head-to-head</Eyebrow>
        <h1 className="text-4xl font-bold tracking-[-0.04em] sm:text-5xl">
          Software comparisons
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">
          Compare fit, deployment, modules and trade-offs. We do not crown a
          universal winner because the best choice depends on your workflow and
          implementation partner.
        </p>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {comparisons.map((comparison) => {
            const { left, right } = resolveComparison(comparison);
            return (
              <Link
                key={comparison.slug}
                href={`/compare/${comparison.slug}`}
                className="group rounded-3xl border border-line bg-surface p-6 transition hover:border-brand/40"
              >
                <div className="flex items-center gap-3 text-sm font-bold text-brand">
                  <span>{left.name}</span>
                  <span className="text-muted">vs</span>
                  <span>{right.name}</span>
                </div>
                <h2 className="mt-5 text-2xl font-bold tracking-tight">
                  {comparison.title}
                </h2>
                <p className="mt-3 leading-7 text-muted">{comparison.summary}</p>
                <span className="mt-6 block text-sm font-bold text-brand group-hover:underline">
                  Open comparison →
                </span>
              </Link>
            );
          })}
        </div>
      </section>
    </PageContainer>
  );
}
