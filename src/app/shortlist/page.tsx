import type { Metadata } from "next";
import Link from "next/link";
import { ShortlistForm } from "@/components/shortlist-form";
import { Eyebrow, PageContainer } from "@/components/site-shell";
import { JsonLd } from "@/lib/json-ld";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Request a Malaysia SME Software Shortlist",
  description:
    "A human second pass after the free finder: industry, team size and workflow in, a small source-backed shortlist out. Not a paid ranking.",
  alternates: { canonical: "/shortlist" },
};

export default function ShortlistPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        name: "Request a Malaysia SME software shortlist",
        description:
          "Human-reviewed shortlist request for Malaysian accounting, payroll, POS and e-Invoice software.",
        url: absoluteUrl("/shortlist"),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: absoluteUrl("/"),
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Request a shortlist",
            item: absoluteUrl("/shortlist"),
          },
        ],
      },
    ],
  };

  return (
    <PageContainer>
      <JsonLd data={jsonLd} />
      <article className="py-14 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:items-start">
          <header className="max-w-xl">
            <Eyebrow>Free · human reply</Eyebrow>
            <h1 className="text-4xl font-bold tracking-[-0.05em] sm:text-6xl">
              Request a software shortlist
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted">
              The{" "}
              <Link href="/finder" className="font-semibold text-brand hover:underline">
                free finder
              </Link>{" "}
              is a published rule set you can run without giving us an email.
              This page is the slower path: you describe the job, we reply with
              two or three products already reviewed on SME Stack.
            </p>
            <h2 className="mt-10 text-xl font-bold tracking-tight">
              What you get back
            </h2>
            <ul className="mt-4 grid gap-3 text-sm leading-6 text-muted">
              <li>
                Only software already in the{" "}
                <Link href="/software" className="font-semibold text-brand hover:underline">
                  directory
                </Link>
                , with the same watchouts as the public profiles.
              </li>
              <li>
                A fit note tied to your workflow (payroll run, outlet checkout,
                or Malaysia e-Invoice), not a longer vendor brochure.
              </li>
              <li>
                No paid ranking. A later referral fee does not buy a higher
                place. See the{" "}
                <Link href="/disclosure" className="font-semibold text-brand hover:underline">
                  affiliate disclosure
                </Link>
                .
              </li>
            </ul>
            <p className="mt-6 text-sm leading-6 text-muted">
              This is not tax, accounting or implementation advice. Confirm
              current vendor terms and IRBM rules yourself, or with a qualified
              adviser. Research method:{" "}
              <Link href="/methodology" className="font-semibold text-brand hover:underline">
                how we review
              </Link>
              .
            </p>
          </header>
          <div className="rounded-[2rem] border border-line bg-surface p-6 sm:p-8">
            <ShortlistForm />
          </div>
        </div>
      </article>
    </PageContainer>
  );
}
