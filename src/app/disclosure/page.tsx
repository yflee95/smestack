import type { Metadata } from "next";
import { Eyebrow, PageContainer } from "@/components/site-shell";

export const metadata: Metadata = {
  title: "Affiliate Disclosure",
  description: "How SME Stack may earn money and protect editorial independence.",
  alternates: { canonical: "/disclosure" },
};

export default function DisclosurePage() {
  return (
    <PageContainer>
      <article className="prose-copy mx-auto max-w-3xl py-16 sm:py-20">
        <Eyebrow>Commercial transparency</Eyebrow>
        <h1 className="text-4xl font-bold tracking-[-0.04em] sm:text-5xl">
          Affiliate disclosure
        </h1>
        <p>
          SME Stack may earn a referral fee when a reader follows an eligible
          link and becomes a customer. This does not increase the reader&apos;s
          price unless the vendor explicitly states otherwise.
        </p>
        <h2>What money cannot buy</h2>
        <p>
          Vendors cannot pay for a higher position, a favourable verdict, the
          removal of a limitation or inclusion in the finder. Sponsored content,
          if introduced, will be labelled separately.
        </p>
        <h2>Current launch status</h2>
        <p>
          Vendor buttons go to the official site until a partner programme
          gives SME Stack a tracking link. Those links are added through
          environment variables, not by selling a higher ranking.
        </p>
        <h2>Use your own judgement</h2>
        <p>
          Prices, product capabilities and Malaysian regulatory requirements can
          change. Verify the current offer with the vendor and obtain qualified
          accounting or tax advice where needed.
        </p>
      </article>
    </PageContainer>
  );
}
