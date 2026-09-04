export type SoftwareCategory =
  | "Accounting"
  | "Payroll"
  | "POS"
  | "E-Invoice"
  | "E-commerce";

export type BusinessSize = "Micro" | "Small" | "Growing" | "Multi-outlet";

export type SoftwareProduct = {
  slug: string;
  name: string;
  summary: string;
  categories: SoftwareCategory[];
  bestFor: string;
  businessSizes: BusinessSize[];
  industries: string[];
  pricing: {
    label: string;
    note: string;
  };
  deployment: string;
  features: string[];
  watchouts: string[];
  officialUrl: string;
  referralUrl?: string;
  partnerUrl?: string;
  sourceUrl: string;
  sourceLabel: string;
  verifiedAt: string;
  eInvoicePosition: string;
  featured?: boolean;
};

const verifiedAt = "2026-09-03";

export const software: SoftwareProduct[] = [
  {
    slug: "autocount",
    name: "AutoCount",
    summary:
      "A broad Malaysian accounting ecosystem with cloud accounting, payroll, POS and e-Invoice options.",
    categories: ["Accounting", "Payroll", "POS", "E-Invoice"],
    bestFor:
      "Established SMEs that want local implementation partners and room to expand across finance, HR and retail.",
    businessSizes: ["Small", "Growing", "Multi-outlet"],
    industries: ["Retail", "F&B", "Wholesale", "Services"],
    pricing: {
      label: "Cloud from RM28/month*",
      note: "The official site advertises a one-year cloud offer from RM28/month. Desktop, modules and implementation vary; request a written total-cost quote.",
    },
    deployment: "Cloud and desktop options",
    features: [
      "Accounting and financial reporting",
      "Payroll and HRMS options",
      "Retail POS modules",
      "Local reseller and support ecosystem",
      "Multi-currency workflows",
    ],
    watchouts: [
      "Total cost depends on modules and partner services",
      "Confirm migration and training scope before signing",
    ],
    officialUrl: "https://www.autocountsoft.com/",
    partnerUrl: "https://autocountsystem.com/dealer-enquiry/",
    sourceUrl: "https://www.autocountsoft.com/pro-cloud-acc.html",
    sourceLabel: "AutoCount Cloud Accounting product page",
    verifiedAt,
    eInvoicePosition:
      "AutoCount markets e-Invoice-ready accounting and POS workflows. Confirm the exact module and implementation scope with the vendor.",
    featured: true,
  },
  {
    slug: "bukku",
    name: "Bukku",
    summary:
      "Cloud accounting built for Malaysian businesses and accounting practices, with local workflows and advisor support.",
    categories: ["Accounting", "E-Invoice"],
    bestFor:
      "Micro and small businesses that prefer a browser-based accounting product with a Malaysia-first experience.",
    businessSizes: ["Micro", "Small", "Growing"],
    industries: ["Services", "Agencies", "Retail", "Professional firms"],
    pricing: {
      label: "Free; paid from RM35/month",
      note: "Launch is free; Seed starts at RM35/month before SST. Transaction guidance, storage and add-ons vary by plan.",
    },
    deployment: "Cloud",
    features: [
      "Cloud bookkeeping and invoicing",
      "Bank reconciliation",
      "Inventory workflows",
      "Accountant collaboration",
      "Local support resources",
    ],
    watchouts: [
      "Check plan limits for users and document volume",
      "Validate required integrations before migration",
    ],
    officialUrl: "https://bukku.my/",
    partnerUrl: "https://bukku.my/partner-program",
    sourceUrl: "https://bukku.my/pricing",
    sourceLabel: "Bukku pricing and product pages",
    verifiedAt,
    eInvoicePosition:
      "Bukku provides Malaysia e-Invoice features. Verify whether your workflow needs direct submission, consolidation or accountant access.",
    featured: true,
  },
  {
    slug: "payrollpanda",
    name: "PayrollPanda",
    summary:
      "Malaysia-focused cloud payroll for calculating payroll and managing statutory contribution workflows.",
    categories: ["Payroll"],
    bestFor:
      "Small teams that want a focused payroll product rather than a full accounting or ERP suite.",
    businessSizes: ["Micro", "Small", "Growing"],
    industries: ["Services", "Startups", "Agencies", "Professional firms"],
    pricing: {
      label: "Free; Pro by employee seats",
      note: "The core plan is advertised as free. Pro is billed by company and employee seats; view current rates inside the account before upgrading.",
    },
    deployment: "Cloud",
    features: [
      "Malaysia payroll calculations",
      "Employee self-service",
      "Leave and attendance options",
      "Statutory forms and contribution workflows",
      "Payroll reports",
    ],
    watchouts: [
      "It is payroll-first, not a general ledger",
      "Confirm add-on cost for attendance or HR workflows",
    ],
    officialUrl: "https://www.payrollpanda.my/",
    partnerUrl: "https://www.payrollpanda.my/become-a-payroll-partner/",
    sourceUrl: "https://www.payrollpanda.my/upgrade-plans/",
    sourceLabel: "PayrollPanda official plan comparison",
    verifiedAt,
    eInvoicePosition:
      "Not an accounting e-Invoice platform; pair it with the accounting or invoicing system used by your business.",
    featured: true,
  },
  {
    slug: "sql-account",
    name: "SQL Account",
    summary:
      "A long-running Malaysian business software suite covering accounting, payroll, inventory and POS use cases.",
    categories: ["Accounting", "Payroll", "POS", "E-Invoice"],
    bestFor:
      "SMEs that value desktop-capable operations, inventory depth and access to a local dealer network.",
    businessSizes: ["Small", "Growing", "Multi-outlet"],
    industries: ["Wholesale", "Retail", "Manufacturing", "F&B"],
    pricing: {
      label: "Request a quote",
      note: "Licensing and implementation vary by edition, users, modules and reseller.",
    },
    deployment: "Desktop and connected services",
    features: [
      "Accounting and inventory",
      "Payroll modules",
      "POS options",
      "Multi-company workflows",
      "Local dealer support",
    ],
    watchouts: [
      "Ask whether upgrades and support are included",
      "Compare remote access needs with cloud-native alternatives",
    ],
    officialUrl: "https://www.sql.com.my/",
    sourceUrl: "https://www.sql.com.my/accounting-software/",
    sourceLabel: "SQL Account official product page",
    verifiedAt,
    eInvoicePosition:
      "SQL Account promotes Malaysia e-Invoice capabilities. Confirm the connector, version and onboarding required.",
  },
  {
    slug: "qne-ai-cloud-accounting",
    name: "QNE AI Cloud Accounting",
    summary:
      "Cloud accounting from a regional business software vendor, positioned around automation and Malaysian compliance.",
    categories: ["Accounting", "E-Invoice"],
    bestFor:
      "Growing SMEs and accounting practices that want cloud access with local implementation options.",
    businessSizes: ["Small", "Growing"],
    industries: ["Services", "Wholesale", "Professional firms", "Retail"],
    pricing: {
      label: "Request a quote",
      note: "Confirm current subscription, onboarding, user and document limits directly with QNE.",
    },
    deployment: "Cloud",
    features: [
      "Cloud general ledger",
      "Sales and purchase workflows",
      "Automation features",
      "Accountant partner ecosystem",
      "Reporting",
    ],
    watchouts: [
      "Request a complete implementation quote",
      "Test required bank and commerce integrations",
    ],
    officialUrl: "https://qne.cloud/my/",
    partnerUrl: "https://qne.cloud/my/be-qca-partner/",
    sourceUrl: "https://qne.cloud/my/accounting-software-malaysia/",
    sourceLabel: "QNE Malaysia product page",
    verifiedAt,
    eInvoicePosition:
      "QNE markets LHDN e-Invoice support. Confirm which plan and middleware, if any, your transaction volume requires.",
  },
  {
    slug: "xero",
    name: "Xero",
    summary:
      "Global cloud accounting with a large app marketplace and strong accountant collaboration workflows.",
    categories: ["Accounting"],
    bestFor:
      "Service businesses with international operations or a strong need for third-party app integrations.",
    businessSizes: ["Micro", "Small", "Growing"],
    industries: ["Agencies", "Consulting", "E-commerce", "Professional firms"],
    pricing: {
      label: "From USD7/month standard",
      note: "The Lite standard price is USD7/month with strict invoice limits. A 2026 promotion and a November 2026 price change affect displayed prices; verify the checkout total.",
    },
    deployment: "Cloud",
    features: [
      "Cloud accounting",
      "Bank feeds and reconciliation",
      "Large app marketplace",
      "Accountant collaboration",
      "Multi-currency on selected plans",
    ],
    watchouts: [
      "Malaysia payroll is not its core product",
      "Local e-Invoice workflow may require an app or advisor setup",
    ],
    officialUrl: "https://www.xero.com/my/",
    sourceUrl: "https://www.xero.com/my/pricing-plans/",
    sourceLabel: "Xero Malaysia pricing",
    verifiedAt,
    eInvoicePosition:
      "Confirm the current Malaysia e-Invoice workflow and any connector cost before choosing Xero for compliance.",
  },
  {
    slug: "storehub",
    name: "StoreHub",
    summary:
      "A cloud retail and F&B platform combining POS with customer, order and operational tools.",
    categories: ["POS", "E-Invoice"],
    bestFor:
      "Retail and F&B operators that want an integrated front-of-house platform and multi-outlet visibility.",
    businessSizes: ["Small", "Growing", "Multi-outlet"],
    industries: ["F&B", "Retail", "Cafes", "Multi-outlet"],
    pricing: {
      label: "From RM122/month",
      note: "The official Starter plan begins at RM122/month. Hardware, payments, add-ons and contract length affect total cost.",
    },
    deployment: "Cloud POS with hardware",
    features: [
      "Point of sale",
      "Inventory and reporting",
      "Customer engagement tools",
      "Online ordering options",
      "Multi-outlet management",
    ],
    watchouts: [
      "Request an itemised hardware and subscription quote",
      "Review payment processing and contract terms",
    ],
    officialUrl: "https://www.storehub.com/my/",
    sourceUrl: "https://www.storehub.com/my/pricing",
    sourceLabel: "StoreHub Malaysia product and pricing pages",
    verifiedAt,
    eInvoicePosition:
      "StoreHub promotes e-Invoice support for merchants. Confirm rollout status and accounting integration for each outlet.",
    featured: true,
  },
  {
    slug: "easystore",
    name: "EasyStore",
    summary:
      "Malaysia-founded commerce software for online stores, social selling, marketplaces and connected retail.",
    categories: ["E-commerce", "POS"],
    bestFor:
      "Retailers selling across their own website, social channels and marketplaces.",
    businessSizes: ["Micro", "Small", "Growing"],
    industries: ["E-commerce", "Retail", "D2C brands", "Social commerce"],
    pricing: {
      label: "Standard listed at RM249/month",
      note: "The official page lists Standard at RM249/month before longer-term discounts. Compare staff, channel, location and integration limits.",
    },
    deployment: "Cloud",
    features: [
      "Online storefront",
      "Marketplace and social commerce tools",
      "Order management",
      "POS options",
      "Marketing integrations",
    ],
    watchouts: [
      "Accounting and payroll require separate systems",
      "Compare payment and app costs, not subscription alone",
    ],
    officialUrl: "https://www.easystore.co/en-my",
    referralUrl: "https://www.easystore.co?ref=b4c266cd",
    sourceUrl: "https://www.easystore.co/en-my/pricing",
    sourceLabel: "EasyStore Malaysia pricing",
    verifiedAt,
    eInvoicePosition:
      "Commerce platform first. Confirm how sales data reaches your e-Invoice and accounting workflow.",
  },
  {
    slug: "kakitangan",
    name: "Kakitangan.com",
    summary:
      "Malaysian HR and payroll software covering payroll, leave, claims and employee administration.",
    categories: ["Payroll"],
    bestFor:
      "Malaysian teams that want payroll together with broader HR administration.",
    businessSizes: ["Micro", "Small", "Growing"],
    industries: ["Services", "Retail", "F&B", "Professional firms"],
    pricing: {
      label: "Published or quoted plans",
      note: "Modules and employee count affect cost. Verify the current package directly.",
    },
    deployment: "Cloud",
    features: [
      "Malaysia payroll",
      "Leave management",
      "Claims workflows",
      "Employee records",
      "HR reporting",
    ],
    watchouts: [
      "Module bundles may affect total cost",
      "Confirm attendance hardware or integration needs",
    ],
    officialUrl: "https://www.kakitangan.com/",
    sourceUrl: "https://www.kakitangan.com/pricing",
    sourceLabel: "Kakitangan.com product and pricing pages",
    verifiedAt,
    eInvoicePosition:
      "Payroll and HR product; use a separate accounting or invoicing system for sales e-Invoices.",
  },
  {
    slug: "financio",
    name: "Financio",
    summary:
      "Cloud accounting aimed at small businesses, with invoicing, expense and bookkeeping workflows.",
    categories: ["Accounting", "E-Invoice"],
    bestFor:
      "Small businesses seeking a relatively streamlined cloud accounting experience.",
    businessSizes: ["Micro", "Small"],
    industries: ["Services", "Freelancers", "Retail", "E-commerce"],
    pricing: {
      label: "From RM50/month",
      note: "Accounting Essentials is listed at RM50/month and Premier at RM85/month before promotions. Invoice and e-Invoice limits apply.",
    },
    deployment: "Cloud",
    features: [
      "Cloud bookkeeping",
      "Invoices and expenses",
      "Dashboard reporting",
      "Inventory features",
      "Mobile access",
    ],
    watchouts: [
      "Check accountant and migration support",
      "Validate bank feeds and local integrations",
    ],
    officialUrl: "https://financio.co/my/",
    sourceUrl: "https://financio.co/my/pricing/",
    sourceLabel: "Financio Malaysia pricing",
    verifiedAt,
    eInvoicePosition:
      "Verify current MyInvois features, submission workflow and plan eligibility directly with Financio.",
  },
];

export function getSoftware(slug: string) {
  return software.find((product) => product.slug === slug);
}

export const softwareBySlug = new Map(
  software.map((product) => [product.slug, product]),
);
