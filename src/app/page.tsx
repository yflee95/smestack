import Link from "next/link";
import type { Metadata } from "next";
import { Eyebrow, PageContainer } from "@/components/site-shell";
import { SoftwareCard } from "@/components/software-card";
import { comparisons } from "@/data/comparisons";
import { needGuides } from "@/data/needs";
import { software } from "@/data/software";
import { validateCatalog } from "@/lib/validate-data";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
    languages: { "en-MY": "/", "x-default": "/" },
  },
};

export default function Home() {
  validateCatalog();
  const featured = software.filter((item) => item.featured);

  return (
    <>
      <section className="mesh overflow-hidden border-b border-line">
        <PageContainer>
          <div className="grid items-center gap-14 py-12 sm:py-20 lg:min-h-[640px] lg:grid-cols-[1.08fr_.92fr]">
            <div>
              <Eyebrow>Malaysia SME software, made simpler</Eyebrow>
              <h1 className="max-w-3xl text-5xl font-bold leading-[1.03] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
                Pick software with evidence,{" "}
                <span className="text-brand">not sales noise.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
                Compare accounting, payroll, POS and e-Invoice software for
                Malaysian businesses. Every profile shows sources, trade-offs
                and the date we checked it.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/finder"
                  className="rounded-full bg-brand px-6 py-3.5 text-sm font-bold text-white transition hover:bg-brand-dark"
                >
                  Start the free finder
                </Link>
                <Link
                  href="/software"
                  className="rounded-full border border-line bg-white px-6 py-3.5 text-sm font-bold transition hover:border-brand"
                >
                  Browse all software
                </Link>
                <Link
                  href="/shortlist"
                  className="rounded-full px-6 py-3.5 text-sm font-bold text-brand hover:underline"
                >
                  Request a human shortlist
                </Link>
              </div>
              <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-muted">
                <span>10 researched products</span>
                <span>8 direct comparisons</span>
                <span>No pay-to-rank lists</span>
              </div>
            </div>

            <div className="dot-grid rounded-[2rem] border border-line bg-surface p-5 sm:p-8">
              <div className="rounded-3xl border border-line bg-white p-6">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand">
                  Quick shortlist
                </p>
                <h2 className="mt-3 text-2xl font-bold tracking-tight">
                  What does your business need?
                </h2>
                <div className="mt-6 grid gap-3">
                  {[
                    ["Pay my team correctly", "/needs/payroll-software-for-malaysia"],
                    ["Keep clean accounts", "/needs/accounting-software-for-small-business"],
                    ["Run a shop or cafe", "/needs/pos-software-for-restaurants"],
                    ["Handle Malaysia e-Invoice", "/needs/e-invoice-software-malaysia"],
                  ].map(([label, href]) => (
                    <Link
                      key={href}
                      href={href}
                      className="flex items-center justify-between rounded-2xl border border-line bg-background px-4 py-3 text-sm font-semibold transition hover:border-brand hover:bg-white"
                    >
                      {label}
                      <span className="text-brand">→</span>
                    </Link>
                  ))}
                </div>
                <Link
                  href="/finder"
                  className="mt-5 block text-center text-sm font-bold text-brand hover:underline"
                >
                  Not sure? Answer four questions
                </Link>
              </div>
            </div>
          </div>
        </PageContainer>
      </section>

      <PageContainer>
        <section className="py-20">
          <div className="flex items-end justify-between gap-6">
            <div>
              <Eyebrow>Starting shortlists</Eyebrow>
              <h2 className="text-3xl font-bold tracking-tight">
                Popular with Malaysian SMEs
              </h2>
            </div>
            <Link href="/software" className="hidden text-sm font-bold text-brand sm:block">
              View all software →
            </Link>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {featured.map((product) => (
              <SoftwareCard key={product.slug} product={product} />
            ))}
          </div>
        </section>

        <section className="rounded-[2rem] bg-brand-dark px-6 py-12 text-white sm:px-10 lg:px-14">
          <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
            <div>
              <Eyebrow>Comparison, not promotion</Eyebrow>
              <h2 className="text-3xl font-bold tracking-tight">
                Start with your real workflow.
              </h2>
              <p className="mt-4 max-w-md leading-7 text-white/70">
                We show where each tool fits, what to verify in a demo and the
                trade-offs vendors tend to leave out.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {comparisons.slice(0, 6).map((comparison) => (
                <Link
                  key={comparison.slug}
                  href={`/compare/${comparison.slug}`}
                  className="rounded-2xl border border-white/15 bg-white/5 px-4 py-4 text-sm font-semibold transition hover:bg-white/10"
                >
                  {comparison.title} <span className="float-right">→</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <Eyebrow>Choose by job</Eyebrow>
          <h2 className="text-3xl font-bold tracking-tight">
            Guides built around business needs
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {needGuides.map((guide, index) => (
              <Link
                key={guide.slug}
                href={`/needs/${guide.slug}`}
                className="group rounded-3xl border border-line bg-surface p-6 transition hover:border-brand/40"
              >
                <span className="text-xs font-bold text-brand">
                  0{index + 1}
                </span>
                <h3 className="mt-8 text-xl font-bold tracking-tight">
                  {guide.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted">
                  {guide.description}
                </p>
                <span className="mt-6 block text-sm font-bold text-brand group-hover:underline">
                  Open guide →
                </span>
              </Link>
            ))}
          </div>
        </section>
      </PageContainer>
    </>
  );
}
