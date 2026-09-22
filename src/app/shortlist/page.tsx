import type { Metadata } from "next";
import Link from "next/link";
import { ShortlistForm } from "@/components/shortlist-form";
import { Eyebrow, PageContainer } from "@/components/site-shell";
import { JsonLd } from "@/lib/json-ld";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Malaysia SME Software Decision Brief",
  description:
    "Pilot RM490 async decision brief: a scored shortlist, risk notes, demo questions and next-step plan for one Malaysian SME software decision.",
  alternates: { canonical: "/shortlist" },
};

export default function ShortlistPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: "SME Stack software review",
        provider: { "@type": "Organization", name: "SME Stack" },
        areaServed: "MY",
        offers: {
          "@type": "Offer",
          price: "490",
          priceCurrency: "MYR",
        },
        url: absoluteUrl("/shortlist"),
      },
    ],
  };

  return (
    <PageContainer>
      <JsonLd data={jsonLd} />
      <article className="py-14 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:items-start">
          <header className="max-w-xl">
            <Eyebrow>Pilot · RM490 · delivered in 5 business days</Eyebrow>
            <h1 className="text-4xl font-bold tracking-[-0.05em] sm:text-6xl">
              Make one software decision with less guesswork.
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted">
              The{" "}
              <Link href="/finder" className="font-semibold text-brand hover:underline">
                free finder
              </Link>{" "}
              and{" "}
              <Link href="/e-invoice" className="font-semibold text-brand hover:underline">
                e-Invoice pathfinder
              </Link>{" "}
              stay free. The Decision Brief is for an owner who wants one
              accounting, payroll, POS, e-Invoice or e-commerce decision checked
              against a real workflow — without a sales call.
            </p>
            <h2 className="mt-10 text-xl font-bold tracking-tight">
              What lands in your inbox
            </h2>
            <ul className="mt-4 grid gap-3 text-sm leading-6 text-muted">
              <li>A one-page summary of your workflow and non-negotiables.</li>
              <li>
                Two or three products from our current directory, scored against
                the same criteria.
              </li>
              <li>Cost and implementation risks the vendor quote must answer.</li>
              <li>A demo script and a written next-step recommendation.</li>
              <li>One clarification reply within seven days of delivery.</li>
            </ul>
            <Link
              href="/shortlist/sample"
              className="mt-6 inline-flex rounded-full border border-brand/25 bg-white px-5 py-2.5 text-sm font-bold text-brand transition hover:border-brand"
            >
              See an example deliverable →
            </Link>
            <h2 className="mt-8 text-xl font-bold tracking-tight">Not included</h2>
            <ul className="mt-4 grid gap-3 text-sm leading-6 text-muted">
              <li>Tax, SST, or LHDN filings. We are not your accountant.</li>
              <li>On-site installation, data migration or vendor negotiation.</li>
              <li>A paid ranking. Referral fees never buy a higher place. See{" "}
                <Link href="/disclosure" className="font-semibold text-brand hover:underline">
                  disclosure
                </Link>
                .
              </li>
            </ul>
            <p className="mt-6 text-sm leading-6 text-muted">
              Pilot price applies while we validate the delivery format. Send the
              form first. We confirm fit and scope before asking for payment.
            </p>
          </header>
          <div className="rounded-[2rem] border border-line bg-surface p-6 sm:p-8">
            <p className="text-sm font-bold">Pilot price: RM490 · one decision</p>
            <p className="mt-2 text-sm leading-6 text-muted">
              No payment now. Your request goes directly to the SME Stack inbox.
            </p>
            <div className="mt-6">
              <ShortlistForm />
            </div>
          </div>
        </div>
      </article>
    </PageContainer>
  );
}
