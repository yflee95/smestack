import type { Metadata } from "next";
import { SoftwareDirectoryClient } from "@/components/software-directory-client";
import { Eyebrow, PageContainer } from "@/components/site-shell";
import { validateCatalog } from "@/lib/validate-data";

export const metadata: Metadata = {
  title: "Malaysia SME Software Directory",
  description:
    "Browse source-backed profiles of accounting, payroll, POS and e-Invoice software for Malaysian SMEs.",
  alternates: { canonical: "/software" },
};

export default function SoftwareDirectory() {
  validateCatalog();

  return (
    <PageContainer>
      <section className="py-16 sm:py-20">
        <Eyebrow>Independent directory</Eyebrow>
        <h1 className="max-w-4xl text-4xl font-bold tracking-[-0.04em] sm:text-5xl">
          Software for Malaysian small businesses
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">
          Each profile has a distinct job, source and review date. Use the
          filters to scan; Google should treat this as one directory, not five
          thin copies.
        </p>
        <SoftwareDirectoryClient />
      </section>
    </PageContainer>
  );
}
