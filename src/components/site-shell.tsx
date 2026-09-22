import Link from "next/link";
import type { ReactNode } from "react";
import { MobileNav } from "@/components/mobile-nav";
import { SiteLogo } from "@/components/site-logo";

const navigation = [
  { href: "/software", label: "Software" },
  { href: "/e-invoice", label: "e-Invoice" },
  { href: "/finder", label: "Free finder" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-background/85 backdrop-blur-xl">
      <div className="relative mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-2.5 font-bold tracking-[-0.02em]"
        >
          <SiteLogo className="h-8 w-8 transition-transform duration-200 hover:scale-105" />
          SME Stack
        </Link>
        <nav
          className="hidden items-center gap-1 rounded-full border border-line/80 bg-white/70 p-1 text-sm font-medium elevated md:flex"
          aria-label="Primary"
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-muted transition hover:bg-background hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <MobileNav />
          <Link
            href="/shortlist"
            className="hidden rounded-full bg-brand px-4 py-2 text-sm font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-brand-dark hover:shadow-lg sm:inline-flex"
          >
            Paid review
          </Link>
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-white/10 bg-brand-dark text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-14 md:grid-cols-[1.5fr_1fr_1fr] lg:px-8">
        <div>
          <p className="flex items-center gap-2 text-lg font-bold">
            <SiteLogo className="h-8 w-8 ring-1 ring-white/25" />
            SME Stack
          </p>
          <p className="mt-3 max-w-md text-sm leading-6 text-white/70">
            Source-backed software research for Malaysian SMEs. We may earn a
            referral fee, but placement is never sold.
          </p>
          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-accent">
            Evidence over sales noise
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold">Explore</p>
          <div className="mt-3 grid gap-2 text-sm text-white/70">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-white">
                {item.label}
              </Link>
            ))}
            <Link href="/compare" className="hover:text-white">
              Comparisons
            </Link>
            <Link href="/needs" className="hover:text-white">
              Guides by need
            </Link>
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold">Editorial</p>
          <div className="mt-3 grid gap-2 text-sm text-white/70">
            <Link href="/methodology" className="hover:text-white">
              How we review
            </Link>
            <Link href="/disclosure" className="hover:text-white">
              Affiliate disclosure
            </Link>
            <Link href="/privacy" className="hover:text-white">
              Privacy
            </Link>
            <Link href="/shortlist" className="hover:text-white">
              Paid software review
            </Link>
            <Link href="/e-invoice" className="hover:text-white">
              e-Invoice pathfinder
            </Link>
            <Link href="/kit" className="hover:text-white">
              Free worksheets
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function PageContainer({ children }: { children: ReactNode }) {
  return <div className="mx-auto w-full max-w-7xl px-5 lg:px-8">{children}</div>;
}

export function Eyebrow({
  children,
  className = "text-brand",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={`mb-3 text-xs font-bold uppercase tracking-[0.18em] ${className}`}
    >
      {children}
    </p>
  );
}
