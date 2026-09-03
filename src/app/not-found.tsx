import Link from "next/link";
import { PageContainer } from "@/components/site-shell";

export default function NotFound() {
  return (
    <PageContainer>
      <section className="py-24 text-center">
        <p className="text-sm font-bold text-brand">404</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight">
          This shortlist went missing.
        </h1>
        <p className="mt-4 text-muted">
          The page may have moved or the software record no longer meets our
          publishing standard.
        </p>
        <Link
          href="/software"
          className="mt-8 inline-block rounded-full bg-brand px-6 py-3 text-sm font-bold text-white"
        >
          Browse verified profiles
        </Link>
      </section>
    </PageContainer>
  );
}
