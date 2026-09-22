import type { Metadata } from "next";
import Link from "next/link";
import { KitWorkbook } from "@/components/kit-workbook";
import { PageContainer } from "@/components/site-shell";

export const metadata: Metadata = {
  title: "Free Malaysia e-Invoice worksheets",
  description:
    "Printable status sheet, 14-day table, vendor scorecard, RM10,000 till card and accountant email. Free. Not tax advice.",
  alternates: { canonical: "/kit" },
};

export default function KitPage() {
  return (
    <PageContainer>
      <div className="py-14 sm:py-20">
        <p className="mb-8 text-sm text-muted print:hidden">
          Start with the{" "}
          <Link href="/e-invoice" className="font-bold text-brand hover:underline">
            pathfinder
          </Link>{" "}
          if you have not checked the RM3 million line yet.
        </p>
        <KitWorkbook />
      </div>
    </PageContainer>
  );
}
