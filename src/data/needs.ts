import type { SoftwareCategory } from "./software";

export type NeedGuide = {
  slug: string;
  title: string;
  description: string;
  category?: SoftwareCategory;
  industries?: string[];
  priorities: string[];
  checklist: string[];
  recommendedSlugs: string[];
};

export const needGuides: NeedGuide[] = [
  {
    slug: "accounting-software-for-small-business",
    title: "Accounting software for Malaysian small businesses",
    description:
      "A practical shortlist for owners moving away from spreadsheets or an entry-level bookkeeping setup.",
    category: "Accounting",
    priorities: [
      "Malaysia-ready invoicing and tax workflows",
      "An accountant can access or export the records",
      "Bank, inventory and commerce integrations match your actual stack",
    ],
    checklist: [
      "Import one month of real transactions during the trial",
      "Ask for a complete three-year cost including setup and support",
      "Confirm the current e-Invoice process against official LHDN guidance",
    ],
    recommendedSlugs: ["bukku", "autocount", "qne-ai-cloud-accounting", "xero"],
  },
  {
    slug: "payroll-software-for-malaysia",
    title: "Payroll software for Malaysian SMEs",
    description:
      "Compare focused payroll tools and wider HR suites for statutory calculations, employee records and monthly admin.",
    category: "Payroll",
    priorities: [
      "Current Malaysian statutory calculations",
      "A clear correction and off-cycle payroll workflow",
      "Employee count and add-on pricing remain predictable",
    ],
    checklist: [
      "Recreate a completed payroll run in the demo",
      "Test allowances, overtime and unpaid leave",
      "Confirm what support covers during payroll deadlines",
    ],
    recommendedSlugs: ["payrollpanda", "kakitangan", "autocount", "sql-account"],
  },
  {
    slug: "pos-software-for-restaurants",
    title: "POS software for Malaysian restaurants and cafes",
    description:
      "Shortlist POS systems around outlet operations, hardware, ordering, payments and finance integration.",
    category: "POS",
    industries: ["F&B", "Cafes"],
    priorities: [
      "Fast service during peak hours and offline resilience",
      "Menu, kitchen and multi-outlet workflows",
      "Clear hardware, payment and subscription costs",
    ],
    checklist: [
      "Run an on-site demo during a real service scenario",
      "Ask what happens when the internet fails",
      "Map daily sales into accounting and e-Invoice workflows",
    ],
    recommendedSlugs: ["storehub", "autocount", "sql-account"],
  },
  {
    slug: "software-for-retail-shops",
    title: "Software stack for Malaysian retail shops",
    description:
      "Choose a retail stack that keeps checkout, stock, e-commerce and accounting data aligned.",
    industries: ["Retail"],
    priorities: [
      "Accurate stock across outlets and channels",
      "Reliable barcode, return and promotion workflows",
      "Clean export or sync into accounting",
    ],
    checklist: [
      "Test receiving, transfer, return and stocktake",
      "Price hardware and payment fees separately",
      "Check user permissions for cashier and manager roles",
    ],
    recommendedSlugs: ["storehub", "easystore", "autocount", "sql-account"],
  },
  {
    slug: "e-invoice-software-malaysia",
    title: "Malaysia e-Invoice software selection guide",
    description:
      "Evaluate e-Invoice software by transaction workflow, integration and support—not by a compliance badge alone.",
    category: "E-Invoice",
    priorities: [
      "The workflow matches your transaction and buyer types",
      "Error handling and reconciliation are visible",
      "The vendor keeps pace with current IRBM documentation",
    ],
    checklist: [
      "Verify whether the RM3 million threshold applies to you using current official guidance",
      "Walk through rejected, cancelled and consolidated documents",
      "Confirm who owns support when an integration fails",
    ],
    recommendedSlugs: ["autocount", "bukku", "qne-ai-cloud-accounting", "sql-account"],
  },
  {
    slug: "accounting-software-for-ecommerce",
    title: "Accounting software for Malaysian e-commerce sellers",
    description:
      "Shortlist software around settlement reconciliation, fees, inventory and multi-channel order data.",
    category: "Accounting",
    industries: ["E-commerce"],
    priorities: [
      "Marketplace fees and settlements reconcile cleanly",
      "Inventory and returns stay traceable",
      "The connection does not depend on fragile manual exports",
    ],
    checklist: [
      "Import a real marketplace settlement report",
      "Test refunds, fees, vouchers and shipping adjustments",
      "Confirm integration cost and sync frequency",
    ],
    recommendedSlugs: ["xero", "bukku", "autocount", "financio"],
  },
];

export function getNeedGuide(slug: string) {
  return needGuides.find((guide) => guide.slug === slug);
}
