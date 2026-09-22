import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { OutboundLink } from "@/components/outbound-link";
import { VendorCta } from "@/components/vendor-cta";
import { Eyebrow, PageContainer } from "@/components/site-shell";
import { SoftwareCard } from "@/components/software-card";
import { comparisons } from "@/data/comparisons";
import { productEditorial } from "@/data/editorial";
import { getSoftware, software } from "@/data/software";
import { FaqList, faqJsonLd } from "@/components/faq-list";
import { JsonLd } from "@/lib/json-ld";
import { needsForProduct } from "@/lib/related";
import { absoluteUrl, formatDate } from "@/lib/site";

export function generateStaticParams() {
  return software.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const product = getSoftware((await params).slug);
  if (!product) return {};
  return {
    title:
      product.metaTitle ??
      `${product.name} for Malaysian SMEs: fit, pricing and trade-offs`,
    description: product.metaDescription ?? product.summary,
    alternates: { canonical: `/software/${product.slug}` },
    other: { "article:modified_time": product.verifiedAt },
  };
}

export default async function SoftwareProfile({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const product = getSoftware((await params).slug);
  if (!product) notFound();
  const editorial = productEditorial[product.slug];
  if (!editorial) notFound();

  const relatedComparisons = comparisons.filter(
    (item) => item.left === product.slug || item.right === product.slug,
  );
  const relatedNeeds = needsForProduct(product);
  const related = software
    .filter(
      (item) =>
        item.slug !== product.slug &&
        item.categories.some((category) => product.categories.includes(category)),
    )
    .slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        name: product.name,
        applicationCategory: "BusinessApplication",
        operatingSystem: "See vendor requirements",
        description: product.summary,
        url: absoluteUrl(`/software/${product.slug}`),
        sameAs: product.officialUrl,
        dateModified: product.verifiedAt,
      },
      faqJsonLd(editorial.faqs),
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Software",
            item: absoluteUrl("/software"),
          },
          {
            "@type": "ListItem",
            position: 2,
            name: product.name,
            item: absoluteUrl(`/software/${product.slug}`),
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
          <Link href="/software" className="hover:text-brand">
            Software
          </Link>{" "}
          / {product.name}
        </nav>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_340px]">
          <div>
            <Eyebrow>{product.categories.join(" · ")}</Eyebrow>
            <h1 className="text-4xl font-bold tracking-[-0.045em] sm:text-6xl">
              {product.name}: {product.bestFor.replace(/\.$/, "")}
            </h1>
            <p className="mt-6 max-w-3xl text-xl leading-8 text-muted">
              {product.summary}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <VendorCta
                product={product}
                placement="profile_hero"
                className="rounded-full bg-brand px-6 py-3 text-sm font-bold text-white hover:bg-brand-dark"
              />
              <Link
                href="/finder"
                className="rounded-full border border-line bg-white px-6 py-3 text-sm font-bold"
              >
                Check my fit
              </Link>
            </div>
          </div>

          <aside className="rounded-3xl border border-line bg-surface p-6">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand">
              At a glance
            </p>
            <dl className="mt-5 grid gap-5 text-sm">
              <div>
                <dt className="text-muted">Pricing</dt>
                <dd className="mt-1 font-semibold">{product.pricing.label}</dd>
              </div>
              <div>
                <dt className="text-muted">Deployment</dt>
                <dd className="mt-1 font-semibold">{product.deployment}</dd>
              </div>
              <div>
                <dt className="text-muted">Business size</dt>
                <dd className="mt-1 font-semibold">
                  {product.businessSizes.join(", ")}
                </dd>
              </div>
              <div>
                <dt className="text-muted">Source reviewed</dt>
                <dd className="mt-1 font-semibold">
                  {formatDate(product.verifiedAt)}
                </dd>
              </div>
            </dl>
          </aside>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_340px]">
          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold tracking-tight">Best fit</h2>
              <p className="mt-4 text-lg leading-8 text-muted">{product.bestFor}</p>
              <p className="mt-4 leading-7 text-muted">
                Skip {product.name} if {editorial.notFor.charAt(0).toLowerCase()}
                {editorial.notFor.slice(1)}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {product.industries.map((industry) => (
                  <span
                    key={industry}
                    className="rounded-full bg-brand/10 px-3 py-1.5 text-sm font-medium text-brand"
                  >
                    {industry}
                  </span>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-tight">
                What is actually different
              </h2>
              <ul className="mt-4 grid gap-3 text-sm leading-6 text-muted">
                {editorial.differentiators.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="text-brand">✓</span> {item}
                  </li>
                ))}
              </ul>
            </section>

            <section className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-3xl border border-line bg-surface p-6">
                <h2 className="text-xl font-bold">What stands out</h2>
                <ul className="mt-5 grid gap-3 text-sm leading-6 text-muted">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex gap-3">
                      <span className="text-brand">✓</span> {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-3xl border border-line bg-warm p-6">
                <h2 className="text-xl font-bold">What to verify</h2>
                <ul className="mt-5 grid gap-3 text-sm leading-6 text-muted">
                  {product.watchouts.map((watchout) => (
                    <li key={watchout} className="flex gap-3">
                      <span>—</span> {watchout}
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-tight">
                Malaysia e-Invoice position
              </h2>
              <p className="mt-4 leading-7 text-muted">
                {product.eInvoicePosition}
              </p>
              <p className="mt-3 text-sm leading-6 text-muted">
                Rules changed on 1 September 2026: businesses below RM3 million
                annual income or sales are generally exempt from mandatory
                implementation. Always confirm your position with current IRBM
                guidance or a qualified adviser.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-tight">Pricing note</h2>
              <p className="mt-4 leading-7 text-muted">{product.pricing.note}</p>
            </section>

            <FaqList items={editorial.faqs} />
          </div>

          <aside>
            <div className="rounded-3xl border border-line bg-surface p-6">
              <h2 className="font-bold">Primary source</h2>
              <p className="mt-2 text-sm leading-6 text-muted">
                Facts on this page were checked against the vendor source below.
                Features and prices can change.
              </p>
              <OutboundLink
                href={product.sourceUrl}
                vendor={product.name}
                placement="source"
                rel="noopener noreferrer"
                className="mt-4 block break-words text-sm font-semibold text-brand hover:underline"
              >
                {product.sourceLabel} ↗
              </OutboundLink>
              <p className="mt-3 text-xs text-muted">
                Reviewed {formatDate(product.verifiedAt)}
              </p>
            </div>
            {relatedComparisons.length > 0 && (
              <div className="mt-6 rounded-3xl bg-brand-dark p-6 text-white">
                <h2 className="font-bold">Compare {product.name}</h2>
                <div className="mt-4 grid gap-3 text-sm">
                  {relatedComparisons.map((item) => (
                    <Link
                      key={item.slug}
                      href={`/compare/${item.slug}`}
                      className="text-white/75 hover:text-white"
                    >
                      {item.title} →
                    </Link>
                  ))}
                </div>
              </div>
            )}
            {relatedNeeds.length > 0 && (
              <div className="mt-6 rounded-3xl border border-line bg-surface p-6">
                <h2 className="font-bold">Guides this product appears in</h2>
                <div className="mt-4 grid gap-3 text-sm">
                  {relatedNeeds.map((guide) => (
                    <Link
                      key={guide.slug}
                      href={`/needs/${guide.slug}`}
                      className="font-semibold text-brand hover:underline"
                    >
                      {guide.title} →
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>

        {related.length > 0 && (
          <section className="mt-20 border-t border-line pt-14">
            <h2 className="text-2xl font-bold tracking-tight">
              Similar software to consider
            </h2>
            <div className="mt-7 grid gap-5 md:grid-cols-3">
              {related.map((item) => (
                <SoftwareCard key={item.slug} product={item} />
              ))}
            </div>
          </section>
        )}
      </article>
    </PageContainer>
  );
}
