import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow, PageContainer } from "@/components/site-shell";

export const metadata: Metadata = {
  title: "Sample Software Decision Brief",
  description:
    "See the structure of an SME Stack software decision brief before requesting the RM490 pilot service.",
  alternates: { canonical: "/shortlist/sample" },
};

const scores = [
  ["Malaysia e-Invoice path", "Strong", "Strong", "Confirm connector"],
  ["Service-business workflow", "Good", "Good", "Good"],
  ["Accountant collaboration", "Strong", "Strong", "Confirm partner"],
  ["Published entry pricing", "Clear", "Clear", "Quote required"],
  ["Implementation risk", "Low–medium", "Low", "Medium"],
];

export default function SampleBriefPage() {
  return (
    <PageContainer>
      <article className="mx-auto max-w-4xl py-14 sm:py-20">
        <Eyebrow>Example · fictional company · not a recommendation</Eyebrow>
        <h1 className="text-4xl font-bold tracking-[-0.05em] sm:text-6xl">
          Sample Decision Brief
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">
          This shows the level and structure of the paid deliverable. Product
          facts still require a current source check at the time of purchase.
        </p>

        <section className="mt-12 rounded-[2rem] border border-line bg-surface p-6 elevated sm:p-9">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand">
            Example client
          </p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight">
            A 7-person professional-services firm leaving spreadsheets
          </h2>
          <dl className="mt-6 grid gap-5 text-sm sm:grid-cols-3">
            <div>
              <dt className="text-muted">Must handle</dt>
              <dd className="mt-1 font-semibold">Books + e-Invoice</dd>
            </div>
            <div>
              <dt className="text-muted">Main constraint</dt>
              <dd className="mt-1 font-semibold">External accountant access</dd>
            </div>
            <div>
              <dt className="text-muted">Avoid</dt>
              <dd className="mt-1 font-semibold">Desktop-only setup</dd>
            </div>
          </dl>
        </section>

        <section className="mt-8 overflow-hidden rounded-[2rem] border border-line bg-white">
          <div className="border-b border-line bg-background px-6 py-5">
            <h2 className="text-xl font-bold">Shortlist scorecard</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[42rem] text-left text-sm">
              <thead>
                <tr className="border-b border-line">
                  <th className="px-5 py-3">Decision factor</th>
                  <th className="px-5 py-3">Bukku</th>
                  <th className="px-5 py-3">Xero</th>
                  <th className="px-5 py-3">QNE</th>
                </tr>
              </thead>
              <tbody>
                {scores.map((row) => (
                  <tr key={row[0]} className="border-b border-line last:border-0">
                    {row.map((cell, index) => (
                      <td
                        key={`${row[0]}-${index}`}
                        className={`px-5 py-4 ${index === 0 ? "font-semibold" : "text-muted"}`}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <section className="rounded-3xl border border-line bg-surface p-6">
            <h2 className="text-xl font-bold">Provisional conclusion</h2>
            <p className="mt-3 text-sm leading-7 text-muted">
              Test Bukku first when Malaysia-first setup and published local
              plans matter most. Test Xero alongside it only if the accountant
              already works in Xero or app integrations are a real requirement.
              QNE stays on the list when a local implementation partner and
              broader workflow matter more than self-service.
            </p>
          </section>
          <section className="rounded-3xl border border-line bg-surface p-6">
            <h2 className="text-xl font-bold">Demo proof required</h2>
            <ul className="mt-3 grid gap-2 text-sm leading-6 text-muted">
              <li>1. Import one month of real transactions.</li>
              <li>2. Issue and correct one MyInvois-shaped invoice.</li>
              <li>3. Give the accountant access and export month-end files.</li>
              <li>4. Get a written three-year total cost.</li>
            </ul>
          </section>
        </div>

        <section className="mt-8 rounded-[2rem] bg-brand-dark p-7 text-white sm:p-9">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-accent">
            What the paid version adds
          </p>
          <p className="mt-4 max-w-2xl leading-7 text-white/75">
            Your actual constraints, current source checks, cost watchouts,
            product links, explicit exclusions and one clarification reply.
            It does not pretend to replace a demo or your accountant.
          </p>
          <Link
            href="/shortlist"
            className="mt-6 inline-flex rounded-full bg-white px-5 py-3 text-sm font-bold text-brand-dark"
          >
            Request a pilot brief · RM490
          </Link>
        </section>
      </article>
    </PageContainer>
  );
}
