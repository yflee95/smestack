import type { Metadata } from "next";
import Link from "next/link";
import { FinderClient } from "@/components/finder-client";
import { Eyebrow, PageContainer } from "@/components/site-shell";
import { software } from "@/data/software";

export const metadata: Metadata = {
  title: "Free Malaysia SME Software Finder",
  description:
    "Answer four questions to build a transparent shortlist of accounting, payroll, POS or e-Invoice software.",
  alternates: { canonical: "/finder" },
};

export default function FinderPage() {
  return (
    <PageContainer>
      <section className="py-14 sm:py-20">
        <header className="mx-auto max-w-3xl text-center">
          <Eyebrow>Free · no email required</Eyebrow>
          <h1 className="text-4xl font-bold tracking-[-0.05em] sm:text-6xl">
            Build your software shortlist
          </h1>
          <p className="mt-5 text-lg leading-8 text-muted">
            Four questions, transparent matching rules and no vendor pay-to-play.
            Your answers stay in your browser.
          </p>
        </header>
        <div className="mt-12">
          <FinderClient products={software} />
        </div>
        <aside className="mx-auto mt-16 max-w-3xl rounded-3xl border border-line bg-surface p-6 sm:p-8">
          <h2 className="text-xl font-bold tracking-tight">
            How the shortlist is scored
          </h2>
          <p className="mt-3 leading-7 text-muted">
            Matching is a published rule set, not a paid ranking. Category fit
            scores highest, then business size and industry, then whether you
            asked for cloud-only or a flexible desktop/partner setup. Only the
            top three matches are shown. If nothing scores, browse the full
            directory instead of treating an empty result as a recommendation.
          </p>
          <p className="mt-4 text-sm leading-6 text-muted">
            Want a person to sanity-check the result against your workflow?{" "}
            <Link href="/shortlist" className="font-bold text-brand hover:underline">
              Request a shortlist
            </Link>
            .
          </p>
        </aside>
      </section>
    </PageContainer>
  );
}
