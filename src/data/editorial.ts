export type Faq = { q: string; a: string };

export const productEditorial: Record<
  string,
  { notFor: string; differentiators: string[]; faqs: Faq[] }
> = {
  autocount: {
    notFor:
      "A one-person service business that only needs to send a few invoices and does not want a reseller-led rollout.",
    differentiators: [
      "One local ecosystem that can expand from accounting into payroll, POS and e-Invoice.",
      "Partner implementation is part of how most SMEs actually buy and support the product.",
      "Cloud accounting is publicly priced from a low monthly entry point, while desktop and modules remain quote-led.",
    ],
    faqs: [
      {
        q: "Is AutoCount only desktop software?",
        a: "No. AutoCount sells both desktop accounting and cloud accounting. Confirm which product, modules and partner package you are being quoted.",
      },
      {
        q: "Can AutoCount cover e-Invoice without a separate tool?",
        a: "AutoCount markets MyInvois-connected workflows. Ask the reseller which module, version and submission path your invoice types require.",
      },
    ],
  },
  bukku: {
    notFor:
      "A multi-outlet manufacturer that needs deep desktop inventory customisation and a dealer on the factory floor.",
    differentiators: [
      "Published Malaysia cloud plans, including a free Launch tier with stated transaction guidance.",
      "Unlimited users are part of the current public plan story, so cost is less about seat count.",
      "Built around Malaysian accountant collaboration rather than a global app store.",
    ],
    faqs: [
      {
        q: "Is Bukku free for a real SME?",
        a: "Launch is free with tight usage guidance. Seed starts at RM35/month before SST. Check storage, email quota and recommended transactions against your volume.",
      },
      {
        q: "Does Bukku replace payroll software?",
        a: "No. Shortlist Bukku for bookkeeping and invoicing, then pair it with a Malaysian payroll product if you have employees.",
      },
    ],
  },
  payrollpanda: {
    notFor:
      "A business that wants one vendor for accounts, inventory, POS and payroll together.",
    differentiators: [
      "Payroll-only product with a publicly advertised free core plan for unlimited employees.",
      "Pro is seat-based rather than a full ERP quote, which keeps the buying motion simple.",
      "Statutory payroll is the job; HR suites and accounting ledgers stay out of the core story.",
    ],
    faqs: [
      {
        q: "Is PayrollPanda actually free?",
        a: "The vendor advertises a free forever core plan. Advanced leave, bulk tools and extra admins sit on Pro. Confirm the live comparison inside the account.",
      },
      {
        q: "Will it submit sales e-Invoices to LHDN?",
        a: "No. It is payroll software. Keep your invoicing or accounting system for MyInvois.",
      },
    ],
  },
  "sql-account": {
    notFor:
      "A fully remote micro agency that refuses desktop software and wants self-serve cloud pricing only.",
    differentiators: [
      "Long-running Malaysian suite with inventory, sales, purchase and dealer training as the default motion.",
      "Desktop-capable operations with SQL Cloud and mobile sales as add-on access paths.",
      "CTOS credit-check and WhatsApp document sending are distinctive local workflow claims to verify in a demo.",
    ],
    faqs: [
      {
        q: "Is SQL Account cloud-only now?",
        a: "No. The core product is still desktop-capable, with cloud and mobile options. Ask which deployment you are buying.",
      },
      {
        q: "Why do quotes vary so much?",
        a: "Edition, users, modules and reseller services change the total. There is no single public sticker price that covers every SME.",
      },
    ],
  },
  "qne-ai-cloud-accounting": {
    notFor:
      "A cafe group whose first problem is floor POS hardware, not a cloud general ledger.",
    differentiators: [
      "Positioned as cloud accounting with automation for SMEs and accounting practices.",
      "Certified accountant partner programme is a buying path, not only a direct self-serve checkout.",
      "e-Invoice support is marketed with possible middleware depending on volume—confirm before you assume a simple toggle.",
    ],
    faqs: [
      {
        q: "Can I see a public monthly price?",
        a: "Not as a complete SME total. Request subscription, onboarding, user and document limits in writing.",
      },
      {
        q: "Is QNE the same as AutoCount?",
        a: "No. Both are Malaysia-oriented ecosystems. QNE is the more cloud-automation shortlist; AutoCount is broader across desktop, POS and HRMS options.",
      },
    ],
  },
  xero: {
    notFor:
      "A Malaysian manufacturer whose accountant only supports local desktop suites and who needs native local payroll in the same file.",
    differentiators: [
      "Global cloud ledger with a large third-party app marketplace.",
      "Public USD plan ladder for Malaysia subscriptions, including a tightly limited Lite plan.",
      "Accountant familiarity outside Malaysia can matter more than local reseller density.",
    ],
    faqs: [
      {
        q: "Are the prices in ringgit?",
        a: "The Malaysia pricing page lists USD. Promotions and a November 2026 increase are stated on that page—verify the checkout currency and tax.",
      },
      {
        q: "Does Xero do Malaysian payroll?",
        a: "Payroll is not the core product. Plan for a local payroll app or a separate Malaysian payroll system.",
      },
    ],
  },
  storehub: {
    notFor:
      "An online-only brand with no physical checkout that mainly needs a marketplace storefront.",
    differentiators: [
      "Front-of-house POS platform for F&B and retail, not a general ledger.",
      "Public Starter price from RM122/month, with hardware and payments sitting outside that number.",
      "Multi-outlet, ordering and customer tools wrap the till rather than accounting reports.",
    ],
    faqs: [
      {
        q: "Does the RM122 plan include hardware?",
        a: "Treat it as software starting price. Hardware, payment rates, add-ons and contract length change the three-year cost.",
      },
      {
        q: "Can StoreHub replace Bukku or Xero?",
        a: "No. Map daily sales into an accounting system. Confirm how e-Invoice and month-end currently leave the POS.",
      },
    ],
  },
  easystore: {
    notFor:
      "A single kopitiam whose only software need is a fast offline till.",
    differentiators: [
      "Malaysia-founded commerce stack for website, social and marketplace selling.",
      "Standard plan is publicly listed at RM249/month before term discounts.",
      "POS exists as a channel, not as a full restaurant operations suite.",
    ],
    faqs: [
      {
        q: "Is EasyStore cheaper than StoreHub?",
        a: "Not by sticker alone. EasyStore Standard is listed higher than StoreHub Starter, but the jobs differ: commerce versus outlet POS. Compare the stack you actually need.",
      },
      {
        q: "Does it do company accounts?",
        a: "No. Keep separate accounting and payroll. Confirm how orders reach e-Invoice and the ledger.",
      },
    ],
  },
  kakitangan: {
    notFor:
      "A founder who only wants to run payroll once a month and does not want HR modules.",
    differentiators: [
      "Payroll plus leave, claims and employee records in one Malaysian HR product.",
      "Pricing is employee-count and module led, shown through the vendor estimator rather than a single SKU.",
      "Stronger shortlist when HR administration is as important as the payslip.",
    ],
    faqs: [
      {
        q: "How is this different from PayrollPanda?",
        a: "PayrollPanda is payroll-first with a free core plan. Kakitangan.com is the broader HR administration shortlist. Demo leave, claims and payroll together.",
      },
      {
        q: "Can it invoice customers?",
        a: "No. Use accounting software for sales documents and e-Invoice.",
      },
    ],
  },
  financio: {
    notFor:
      "A group accountant running 40 client files who needs practice-scale partner tooling and a global app marketplace.",
    differentiators: [
      "Published RM50/RM85 accounting plans with explicit invoice and LHDN e-Invoice quotas.",
      "Optional Financio Payroll is a separate paid product with its own employee caps.",
      "Aimed at a smaller team that wants a guided cloud setup rather than a dealer project.",
    ],
    faqs: [
      {
        q: "What do the e-Invoice limits mean?",
        a: "Essentials lists 25 LHDN e-Invoices; Premier lists 5,000. If you invoice heavily, the quota is a buying constraint, not a footnote.",
      },
      {
        q: "Is Financio a Xero alternative for every SME?",
        a: "Only if you do not need Xero’s app marketplace or cross-border accountant workflow. Verify bank feeds and Malaysia e-Invoice on both.",
      },
    ],
  },
};

export const comparisonEditorial: Record<
  string,
  { difference: string; demoChecks: string[] }
> = {
  "autocount-vs-sql-account": {
    difference:
      "Both can cover Malaysian accounting plus retail modules through resellers. AutoCount is the broader cloud-and-desktop ecosystem story; SQL Account is the desktop-inventory and dealer-training story. The useful difference is which partner can migrate your stock file and support month-end, not the brand name on the box.",
    demoChecks: [
      "Import your actual stock items, not the sample company.",
      "Post a POS or invoice document and watch it land in the ledger.",
      "Ask who answers the phone in the first 90 days after go-live.",
    ],
  },
  "bukku-vs-xero": {
    difference:
      "Bukku wins on Malaysia-first plans, local accountant workflow and clearer local e-Invoice packaging. Xero wins when your stack is apps, multi-currency and an accountant who already lives in Xero. Do not treat them as interchangeable cloud books.",
    demoChecks: [
      "Reconnect one real bank account and reconcile five live lines.",
      "Create the e-Invoice document type you actually issue.",
      "Ask your accountant which file they can support without extra fees.",
    ],
  },
  "payrollpanda-vs-kakitangan": {
    difference:
      "This is payroll-only simplicity versus payroll-plus-HR breadth. If leave, claims and employee files are half the work, Kakitangan.com belongs on the shortlist. If you just need Malaysian payslips and statutory forms, PayrollPanda’s free core plan is the cleaner test.",
    demoChecks: [
      "Recreate last month’s overtime, unpaid leave and a mid-month joiner.",
      "Generate EA/E forms and a bank payment file.",
      "Price Pro seats or HR modules against your headcount for 12 months.",
    ],
  },
  "storehub-vs-easystore": {
    difference:
      "StoreHub is built around the till, floor and outlets. EasyStore is built around the website, social and marketplaces. Choosing the wrong one usually means paying for the other stack six months later.",
    demoChecks: [
      "Run a peak-hour sale, refund and table or queue scenario.",
      "Sync one live SKU across the channels you already sell on.",
      "Export a day’s sales in the shape your accountant can book.",
    ],
  },
  "autocount-vs-bukku": {
    difference:
      "AutoCount is the expansion suite (inventory, POS, HRMS, partners). Bukku is the lighter Malaysia cloud ledger with public plans. Complexity and who implements the file should decide this, not a feature-count screenshot.",
    demoChecks: [
      "Count the modules you will pay for in year one, not year five.",
      "Time how long it takes to issue your real invoice layout.",
      "Compare a reseller statement of work against Bukku’s self-serve plan limits.",
    ],
  },
  "qne-vs-autocount": {
    difference:
      "Both are local ecosystems. QNE is the cloud-automation and practice-partner shortlist; AutoCount is the broader product family including desktop and POS. Identical marketing words around e-Invoice are not a reason to skip a side-by-side demo.",
    demoChecks: [
      "Process one messy purchase invoice, not a clean sample bill.",
      "Open the report your auditor actually asks for.",
      "Get both partners to quote migration, training and first-year support.",
    ],
  },
  "xero-vs-financio": {
    difference:
      "Xero is the integration and accountant-network choice with USD public plans. Financio is the smaller-team Malaysian cloud books choice with explicit e-Invoice quotas. App count versus quota and support model is the real fork.",
    demoChecks: [
      "Connect the one marketplace or payment app you cannot work without.",
      "Count e-Invoices you issue in a busy month against Financio’s plan caps.",
      "Ask both vendors what happens when a bank feed breaks on payroll week.",
    ],
  },
  "sql-account-vs-bukku": {
    difference:
      "SQL Account assumes inventory, custom documents and a dealer. Bukku assumes browser access, published plans and accountant collaboration. Remote service businesses and stock-heavy traders should not share a shortlist without this split.",
    demoChecks: [
      "Do a goods received note, transfer and stocktake in SQL Account.",
      "Do the same month of invoices in Bukku from another city.",
      "Compare staff training time: dealer classroom versus in-product onboarding.",
    ],
  },
};

export const needEditorial: Record<
  string,
  { context: string; relatedComparisonSlugs: string[] }
> = {
  "accounting-software-for-small-business": {
    context:
      "Most Malaysian small businesses outgrow spreadsheets when invoices, SST questions and an accountant’s export all hit in the same month. The shortlist below is for that transition—not for a 20-outlet inventory rollout. Prefer products that show a current Malaysia e-Invoice path and a file your bookkeeper can open without a conversion project.",
    relatedComparisonSlugs: ["bukku-vs-xero", "autocount-vs-bukku", "xero-vs-financio"],
  },
  "payroll-software-for-malaysia": {
    context:
      "Payroll software is a statutory workflow, not a content page about HR theory. You need calculations, corrections, forms and a payment file that match Malaysian rules. Do not buy a full accounting suite just to run 12 payslips unless you already need that suite for stock or POS.",
    relatedComparisonSlugs: ["payrollpanda-vs-kakitangan"],
  },
  "pos-software-for-restaurants": {
    context:
      "Restaurant POS fails at 8pm, not in a boardroom demo. Shortlist around offline behaviour, menu changes, payments and whether the night’s sales can be booked without a WhatsApp photo of the Z-tape. Accounting brands with a POS module are only relevant if the floor workflow is actually proven.",
    relatedComparisonSlugs: ["storehub-vs-easystore"],
  },
  "software-for-retail-shops": {
    context:
      "Retail software is a stock-and-checkout problem first. Barcode, returns, transfers and cashier permissions matter more than a pretty dashboard. If you also sell online, decide whether POS or commerce is the system of record—then make accounting follow that system.",
    relatedComparisonSlugs: ["storehub-vs-easystore", "autocount-vs-sql-account"],
  },
  "e-invoice-software-malaysia": {
    context:
      "e-Invoice software is a document workflow: create, validate, reject, cancel, consolidate. A badge on a homepage is not enough. From 1 September 2026 the mandatory threshold is generally RM3 million annual income or sales; still confirm your own position on IRBM sources because buyers and platforms may still demand a valid e-Invoice.",
    relatedComparisonSlugs: ["autocount-vs-bukku", "qne-vs-autocount"],
  },
  "accounting-software-for-ecommerce": {
    context:
      "E-commerce accounting dies in settlement files: fees, vouchers, shipping and refunds. If the tool cannot ingest a real marketplace payout, you will keep a shadow spreadsheet. Rank integrations and reconciliation ahead of invoice templates.",
    relatedComparisonSlugs: ["xero-vs-financio", "bukku-vs-xero"],
  },
};
