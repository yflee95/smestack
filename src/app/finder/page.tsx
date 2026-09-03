import type { Metadata } from "next";
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
      </section>
    </PageContainer>
  );
}
