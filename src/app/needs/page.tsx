import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow, PageContainer } from "@/components/site-shell";
import { needGuides } from "@/data/needs";

export const metadata: Metadata = {
  title: "Software Guides by Business Need",
  description:
    "Malaysia SME software shortlists for accounting, payroll, retail, restaurants, e-commerce and e-Invoice workflows.",
  alternates: { canonical: "/needs" },
};

export default function NeedsPage() {
  return (
    <PageContainer>
      <section className="py-16 sm:py-20">
        <Eyebrow>Start with the job</Eyebrow>
        <h1 className="text-4xl font-bold tracking-[-0.04em] sm:text-5xl">
          Software guides by business need
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">
          A useful shortlist begins with your transactions, team and operating
          constraints—not a vendor feature count.
        </p>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {needGuides.map((guide, index) => (
            <Link
              key={guide.slug}
              href={`/needs/${guide.slug}`}
              className="group rounded-3xl border border-line bg-surface p-6 transition hover:border-brand/40"
            >
              <span className="text-xs font-bold text-brand">0{index + 1}</span>
              <h2 className="mt-8 text-xl font-bold tracking-tight">
                {guide.title}
              </h2>
              <p className="mt-3 text-sm leading-6 text-muted">
                {guide.description}
              </p>
              <span className="mt-6 block text-sm font-bold text-brand group-hover:underline">
                Build a shortlist →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </PageContainer>
  );
}
