import type { Metadata } from "next";
import { Eyebrow, PageContainer } from "@/components/site-shell";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy",
  description: "How SME Stack handles analytics, cookies and contact data.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <PageContainer>
      <article className="prose-copy mx-auto max-w-3xl py-16 sm:py-20">
        <Eyebrow>Privacy</Eyebrow>
        <h1 className="text-4xl font-bold tracking-[-0.04em] sm:text-5xl">
          Privacy notice
        </h1>
        <p>
          SME Stack is an editorial website. We do not operate user accounts and
          we do not sell personal information.
        </p>
        <h2>What we collect</h2>
        <p>
          If privacy-friendly analytics is enabled, we receive aggregated page
          views and named events such as finder completions and outbound vendor
          clicks. These events do not include a login, payment card or national
          ID.
        </p>
        <p>
          If you email {siteConfig.email} or submit the paid-review request
          form, we receive the contact and business details you typed so we can
          assess the request and reply. The message is delivered through our
          transactional email provider. Do not submit national IDs, invoice
          files or confidential customer data in the first request.
        </p>
        <h2>Cookies</h2>
        <p>
          The site itself does not set advertising cookies. Third-party
          analytics, if configured, may set a first-party cookie as described by
          that provider.
        </p>
        <h2>Requests</h2>
        <p>
          To ask a question about this notice, email {siteConfig.email}. This
          page is a launch notice, not legal advice.
        </p>
      </article>
    </PageContainer>
  );
}
