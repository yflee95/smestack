# SME Stack

An English software comparison and selection site for Malaysian SMEs. The MVP
contains source-backed product profiles, direct comparisons, need-based buying
guides and a rules-based finder.

## Local development

Copy `.env.example` to `.env.local`, then set the final public URL when known.

```bash
npm run dev
```

Open `http://localhost:3000`.

## Content model and quality gate

- `src/data/software.ts` holds vendor facts, sources and review dates.
- `src/data/comparisons.ts` holds curated head-to-head conclusions.
- `src/data/needs.ts` holds intent-led shortlists.
- `src/lib/validate-data.ts` runs during static generation. It rejects missing
  sources, stale records, thin profiles and broken cross-references.

Do not create keyword-swap city pages. Add a route only when its records contain
real, page-specific data and a distinct user task.

## Monetisation

Free: directory, comparisons, finder, e-Invoice pathfinder (`/e-invoice`), printable
worksheets (`/kit`).

Paid: pilot Software Decision Brief at RM490 (`/shortlist`), capped at four per
month. Scope is confirmed before bank-transfer details are sent. Not tax advice.

`referralUrl` is added only after a partner programme is approved. EasyStore
currently has a tracked referral URL; other vendors still use official links.
Sponsored buttons automatically use `rel="sponsored nofollow"`.

Outbound CTA and finder completion events are exposed to Plausible when
`NEXT_PUBLIC_PLAUSIBLE_DOMAIN` is configured.

## Launch checklist

1. Domain purchased: `smestack.my`.
2. Set `NEXT_PUBLIC_SITE_URL=https://smestack.my` in Vercel project settings (and locally in `.env.local`).
3. Deploy on Vercel, attach the domain, then verify `/sitemap.xml` and `/robots.txt`.
4. Add `smestack.my` in Google Search Console and submit `https://smestack.my/sitemap.xml`.
5. Apply to partner programmes personally; add approved referral URLs.
6. Review product sources at least annually and whenever pricing or regulation
   changes.

### Attach smestack.my on Vercel

1. Import the `malaysia-sme-software-finder` folder as a Vercel project (Node 20+).
2. Environment variable: `NEXT_PUBLIC_SITE_URL` = `https://smestack.my`.
3. Project → Settings → Domains → add `smestack.my` and `www.smestack.my`.
4. In Exabytes DNS, follow Vercel’s records (usually an A record to `10.0.1.2` for the apex, and a CNAME for `www`). Wait for Vercel to show a valid SSL certificate before submitting Search Console.
