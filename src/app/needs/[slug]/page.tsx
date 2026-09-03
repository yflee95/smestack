import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Eyebrow, PageContainer } from "@/components/site-shell";
import { SoftwareCard } from "@/components/software-card";
import { getComparison } from "@/data/comparisons";
import { needEditorial } from "@/data/editorial";
import { getNeedGuide, needGuides } from "@/data/needs";
import { softwareBySlug } from "@/data/software";
import { JsonLd } from "@/lib/json-ld";
import { absoluteUrl } from "@/lib/site";

export function generateStaticParams() {
  return needGuides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const guide = getNeedGuide((await params).slug);
  if (!guide) return {};
  return {
    title: guide.title,
    description: guide.description,
    alternates: { canonical: `/needs/${guide.slug}` },
  };
}

export default async function NeedGuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const guide = getNeedGuide((await params).slug);
  if (!guide) notFound();
  const editorial = needEditorial[guide.slug];
  if (!editorial) notFound();
  const products = guide.recommendedSlugs
    .map((slug) => softwareBySlug.get(slug))
    .filter((item) => item !== undefined);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ItemList",
        itemListOrder: "https://schema.org/ItemListUnordered",
        name: guide.title,
        description: guide.description,
        url: absoluteUrl(`/needs/${guide.slug}`),
        itemListElement: products.map((product, index) => ({
          "@type": "ListItem",
          position: index + 1,
          url: absoluteUrl(`/software/${product.slug}`),
          name: product.name,
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "By need",
            item: absoluteUrl("/needs"),
          },
          {
            "@type": "ListItem",
            position: 2,
            name: guide.title,
            item: absoluteUrl(`/needs/${guide.slug}`),
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
          <Link href="/needs" className="hover:text-brand">
            By need
          </Link>{" "}
          / {guide.title}
        </nav>
        <header className="mt-10 max-w-4xl">
          <Eyebrow>Malaysia SME buying guide</Eyebrow>
          <h1 className="text-4xl font-bold tracking-[-0.05em] sm:text-6xl">
            {guide.title}
          </h1>
          <p className="mt-6 text-xl leading-8 text-muted">{guide.description}</p>
          <p className="mt-5 max-w-4xl leading-8 text-muted">{editorial.context}</p>
        </header>

        <section className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl bg-brand-dark p-7 text-white">
            <h2 className="text-xl font-bold">Prioritise these capabilities</h2>
            <ul className="mt-5 grid gap-3 text-sm leading-6 text-white/75">
              {guide.priorities.map((priority) => (
                <li key={priority} className="flex gap-3">
                  <span className="text-accent">✓</span> {priority}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-line bg-warm p-7">
            <h2 className="text-xl font-bold">Before you buy</h2>
            <ul className="mt-5 grid gap-3 text-sm leading-6 text-muted">
              {guide.checklist.map((item) => (
                <li key={item} className="flex gap-3">
                  <span>—</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mt-16">
          <div className="max-w-3xl">
            <Eyebrow>Starting shortlist</Eyebrow>
            <h2 className="text-3xl font-bold tracking-tight">
              Products worth a closer look
            </h2>
            <p className="mt-4 leading-7 text-muted">
              This order is editorial, not a universal ranking. Open each
              profile and test the listed workflow with your own transactions.
            </p>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <SoftwareCard key={product.slug} product={product} />
            ))}
          </div>
        </section>

        {editorial.relatedComparisonSlugs.length > 0 && (
          <section className="mt-14">
            <h2 className="text-2xl font-bold tracking-tight">
              Comparisons that belong with this job
            </h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {editorial.relatedComparisonSlugs.map((slug) => {
                const item = getComparison(slug);
                if (!item) return null;
                return (
                  <Link
                    key={slug}
                    href={`/compare/${slug}`}
                    className="rounded-2xl border border-line bg-surface px-4 py-4 text-sm font-semibold hover:border-brand"
                  >
                    {item.title} →
                  </Link>
                );
              })}
            </div>
          </section>
        )}

        {guide.slug === "e-invoice-software-malaysia" && (
          <section className="mt-14 rounded-3xl border border-line bg-surface p-7">
            <h2 className="text-xl font-bold">Important September 2026 update</h2>
            <p className="mt-3 max-w-4xl leading-7 text-muted">
              Malaysia raised the mandatory e-Invoice threshold to RM3 million
              annual income or sales effective 1 September 2026. Businesses
              below that threshold are generally exempt, though voluntary use
              remains possible. Check the latest IRBM guidance because rules
              and transition arrangements can change.
            </p>
            <a
              href="https://www.hasil.gov.my/e-invois/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-sm font-bold text-brand hover:underline"
            >
              Read current IRBM guidance ↗
            </a>
          </section>
        )}
      </article>
    </PageContainer>
  );
}
