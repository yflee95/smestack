import Link from "next/link";
import type { ReactNode } from "react";
import { MobileNav } from "@/components/mobile-nav";
import { SiteLogo } from "@/components/site-logo";

const navigation = [
  { href: "/software", label: "Software" },
  { href: "/compare", label: "Comparisons" },
  { href: "/needs", label: "By need" },
  { href: "/finder", label: "Free finder" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-background/90 backdrop-blur">
      <div className="relative mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-2 font-bold tracking-tight"
        >
          <SiteLogo />
          SME Stack
        </Link>
        <nav className="hidden items-center gap-7 text-sm font-medium md:flex" aria-label="Primary">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-muted transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <MobileNav />
          <Link
            href="/finder"
            className="hidden rounded-full bg-brand px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-dark sm:inline-flex"
          >
            Find my software
          </Link>
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-line bg-brand-dark text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        <div>
          <p className="flex items-center gap-2 text-lg font-bold">
            <SiteLogo className="h-8 w-8 ring-1 ring-white/25" />
            SME Stack
          </p>
          <p className="mt-3 max-w-md text-sm leading-6 text-white/70">
            Source-backed software research for Malaysian SMEs. We may earn a
            referral fee, but placement is never sold.
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
              Request a shortlist
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

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-brand">
      {children}
    </p>
  );
}
