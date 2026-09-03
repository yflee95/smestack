import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import type { ReactNode } from "react";
import { SiteFooter, SiteHeader } from "@/components/site-shell";
import { JsonLd } from "@/lib/json-ld";
import { absoluteUrl, siteConfig } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  robots: { index: true, follow: true },
  title: {
    default: "SME Stack — Malaysia Software Finder",
    template: "%s | SME Stack",
  },
  description: siteConfig.description,
  openGraph: {
    type: "website",
    locale: "en_MY",
    siteName: siteConfig.name,
    url: siteConfig.url,
    title: "SME Stack — Malaysia Software Finder",
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "SME Stack — Malaysia Software Finder",
    description: siteConfig.description,
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en-MY"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-brand focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-white"
        >
          Skip to content
        </a>
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                name: siteConfig.name,
                url: siteConfig.url,
                email: siteConfig.email,
                description: siteConfig.description,
                logo: {
                  "@type": "ImageObject",
                  url: absoluteUrl("/icon"),
                  width: 192,
                  height: 192,
                },
              },
              {
                "@type": "WebSite",
                name: siteConfig.name,
                url: siteConfig.url,
                description: siteConfig.description,
                inLanguage: "en-MY",
                publisher: { "@type": "Organization", name: siteConfig.name },
              },
            ],
          }}
        />
        <SiteHeader />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <SiteFooter />
        {process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN && (
          <Script
            defer
            data-domain={process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN}
            src="https://plausible.io/js/script.js"
            strategy="afterInteractive"
          />
        )}
      </body>
    </html>
  );
}
