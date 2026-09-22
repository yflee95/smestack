import type { Metadata } from "next";
import { EinvoicePathfinder } from "@/components/einvoice-pathfinder";
import { Eyebrow, PageContainer } from "@/components/site-shell";

export const metadata: Metadata = {
  title: "Malaysia e-Invoice pathfinder",
  description:
    "Free questions to check the RM3 million e-Invoice exemption, group carve-outs, and whether to configure software, lead with POS, or brief an accountant.",
  alternates: { canonical: "/e-invoice" },
};

export default function EinvoicePage() {
  return (
    <PageContainer>
      <section className="mx-auto max-w-4xl py-14 sm:py-20">
        <Eyebrow>Free · no email</Eyebrow>
        <h1 className="text-4xl font-bold tracking-[-0.05em] sm:text-6xl">
          Do you still need e-Invoice?
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">
          From 1 September 2026 the general exemption is under RM3 million — unless a related company pulls you in. Answer honestly. Then print the free worksheets or, if you are still in the mandate, request a paid software review.
        </p>
        <div className="mt-12">
          <EinvoicePathfinder />
        </div>
      </section>
    </PageContainer>
  );
}
