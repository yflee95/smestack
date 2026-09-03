import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Eyebrow, PageContainer } from "@/components/site-shell";
import { VendorCta } from "@/components/vendor-cta";
import {
  comparisons,
  getComparison,
  resolveComparison,
} from "@/data/comparisons";
import { comparisonEditorial } from "@/data/editorial";
import { JsonLd } from "@/lib/json-ld";
import { absoluteUrl, formatDate, latestIsoDate } from "@/lib/site";

export function generateStaticParams() {
  return comparisons.map((comparison) => ({ slug: comparison.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const comparison = getComparison((await params).slug);
  if (!comparison) return {};
  return {
    title: `${comparison.title}: Malaysia SME Comparison`,
    description: comparison.summary,
    alternates: { canonical: `/compare/${comparison.slug}` },
  };
}

export default async function ComparisonPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const comparison = getComparison((await params).slug);
  if (!comparison) notFound();
  const { left, right } = resolveComparison(comparison);
  const editorial = comparisonEditorial[comparison.slug];
  if (!editorial) notFound();

  const sharedCategories = left.categories.filter((category) =>
    right.categories.includes(category),
  );
  const reviewedThrough = latestIsoDate(left.verifiedAt, right.verifiedAt);
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        name: comparison.title,
        description: comparison.summary,
        url: absoluteUrl(`/compare/${comparison.slug}`),
        dateModified: reviewedThrough,
        about: [
          { "@type": "SoftwareApplication", name: left.name },
          { "@type": "SoftwareApplication", name: right.name },
        ],
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Comparisons",
            item: absoluteUrl("/compare"),
          },
          {
            "@type": "ListItem",
            position: 2,
            name: comparison.title,
            item: absoluteUrl(`/compare/${comparison.slug}`),
          },
        ],
      },
    ],
  };

  return (
    <PageContainer>
      <JsonLd data={jsonLd} />
      <article className="py-14 sm:py-20">
        <nav className="text-sm text-muted">
          <Link href="/compare" className="hover:text-brand">
            Comparisons
          </Link>{" "}
          / {comparison.title}
        </nav>
        <div className="mt-10 max-w-4xl">
          <Eyebrow>
            {sharedCategories.length > 0
              ? sharedCategories.join(" · ")
              : "Software comparison"}
          </Eyebrow>
          <h1 className="text-4xl font-bold tracking-[-0.05em] sm:text-6xl">
            {comparison.title}
          </h1>
          <p className="mt-6 text-xl leading-8 text-muted">
            {comparison.summary}
          </p>
          <p className="mt-4 text-sm text-muted">
            Sources reviewed through{" "}
            {formatDate(reviewedThrough)}
          </p>
        </div>

        <section className="mt-12 rounded-3xl border border-line bg-surface p-7 sm:p-10">
          <h2 className="text-2xl font-bold tracking-tight">
            The difference that should decide this
          </h2>
          <p className="mt-4 max-w-4xl text-lg leading-8 text-muted">
            {editorial.difference}
          </p>
        </section>

        <section className="mt-12 overflow-x-auto rounded-3xl border border-line bg-surface">
          <table className="w-full min-w-[640px] border-collapse text-left text-sm leading-6">
            <caption className="sr-only">
              {left.name} versus {right.name} decision factors
            </caption>
            <thead className="bg-background">
              <tr>
                <th scope="col" className="p-4 font-bold text-muted">
                  Decision factor
                </th>
                <th scope="col" className="border-l border-line p-4 font-bold">
                  {left.name}
                </th>
                <th scope="col" className="border-l border-line p-4 font-bold">
                  {right.name}
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Best for", left.bestFor, right.bestFor],
                ["Pricing", left.pricing.label, right.pricing.label],
                ["Deployment", left.deployment, right.deployment],
                [
                  "Business size",
                  left.businessSizes.join(", "),
                  right.businessSizes.join(", "),
                ],
                ["Categories", left.categories.join(", "), right.categories.join(", ")],
                ["e-Invoice", left.eInvoicePosition, right.eInvoicePosition],
              ].map(([factor, leftValue, rightValue]) => (
                <tr key={factor} className="border-t border-line">
                  <th scope="row" className="p-4 font-semibold">
                    {factor}
                  </th>
                  <td className="border-l border-line p-4 text-muted">{leftValue}</td>
                  <td className="border-l border-line p-4 text-muted">{rightValue}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section className="mt-12 rounded-3xl bg-brand-dark p-7 text-white sm:p-10">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-accent">
            Our verdict
          </p>
          <p className="mt-4 max-w-4xl text-xl leading-8">{comparison.verdict}</p>
        </section>

        <section className="mt-12 grid gap-6 md:grid-cols-2">
          {[
            { product: left, reasons: comparison.chooseLeft },
            { product: right, reasons: comparison.chooseRight },
          ].map(({ product, reasons }) => (
            <div
              key={product.slug}
              className="rounded-3xl border border-line bg-surface p-7"
            >
              <h2 className="text-2xl font-bold tracking-tight">
                Choose {product.name} if…
              </h2>
              <ul className="mt-5 grid gap-3 text-sm leading-6 text-muted">
                {reasons.map((reason) => (
                  <li key={reason} className="flex gap-3">
                    <span className="text-brand">✓</span> {reason}
                  </li>
                ))}
              </ul>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href={`/software/${product.slug}`}
                  className="rounded-full border border-line px-4 py-2 text-sm font-bold"
                >
                  Read profile
                </Link>
                <VendorCta
                  product={product}
                  placement={`comparison_${comparison.slug}`}
                  label="Visit vendor ↗"
                  className="rounded-full bg-brand px-4 py-2 text-sm font-bold text-white"
                />
              </div>
            </div>
          ))}
        </section>

        <section className="mt-14">
          <h2 className="text-2xl font-bold tracking-tight">
            Demo checks unique to this pair
          </h2>
          <ol className="mt-6 grid gap-3 sm:grid-cols-2">
            {editorial.demoChecks.map((item, index) => (
              <li
                key={item}
                className="rounded-2xl border border-line bg-surface p-4 text-sm text-muted"
              >
                <span className="mr-3 font-bold text-brand">0{index + 1}</span>
                {item}
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-14">
          <h2 className="text-2xl font-bold tracking-tight">Continue in this cluster</h2>
          <div className="mt-5 flex flex-wrap gap-3 text-sm font-semibold">
            <Link href={`/software/${left.slug}`} className="text-brand hover:underline">
              {left.name} profile →
            </Link>
            <Link href={`/software/${right.slug}`} className="text-brand hover:underline">
              {right.name} profile →
            </Link>
            {comparisons
              .filter(
                (item) =>
                  item.slug !== comparison.slug &&
                  (item.left === comparison.left ||
                    item.right === comparison.left ||
                    item.left === comparison.right ||
                    item.right === comparison.right),
              )
              .slice(0, 3)
              .map((item) => (
                <Link
                  key={item.slug}
                  href={`/compare/${item.slug}`}
                  className="text-brand hover:underline"
                >
                  {item.title} →
                </Link>
              ))}
          </div>
        </section>
      </article>
    </PageContainer>
  );
}
