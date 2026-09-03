import { softwareBySlug } from "./software";

export type Comparison = {
  slug: string;
  left: string;
  right: string;
  title: string;
  summary: string;
  verdict: string;
  chooseLeft: string[];
  chooseRight: string[];
};

export const comparisons: Comparison[] = [
  {
    slug: "autocount-vs-sql-account",
    left: "autocount",
    right: "sql-account",
    title: "AutoCount vs SQL Account",
    summary:
      "Two established Malaysian suites compared for accounting depth, deployment, retail modules and partner support.",
    verdict:
      "Shortlist both if you need local inventory or POS depth. The deciding factor is usually the exact workflow demonstrated by the reseller, total implementation cost and support quality.",
    chooseLeft: [
      "You want cloud and desktop options within one broad ecosystem",
      "You plan to add HRMS or retail modules over time",
      "A nearby AutoCount partner understands your industry",
    ],
    chooseRight: [
      "Your priority is desktop-capable accounting and inventory",
      "Your team already knows SQL Account workflows",
      "A SQL Account dealer offers the stronger migration package",
    ],
  },
  {
    slug: "bukku-vs-xero",
    left: "bukku",
    right: "xero",
    title: "Bukku vs Xero",
    summary:
      "Malaysia-first cloud accounting versus a global platform with a large integration marketplace.",
    verdict:
      "Bukku is the more local-first shortlist; Xero is stronger when international app integrations and cross-border accountant familiarity matter more.",
    chooseLeft: [
      "You prefer Malaysia-first workflows and support",
      "Local e-Invoice setup is a central requirement",
      "Your accountant already works with Bukku",
    ],
    chooseRight: [
      "You need a large global app marketplace",
      "You work across several countries or currencies",
      "Your accountant or finance team already uses Xero",
    ],
  },
  {
    slug: "payrollpanda-vs-kakitangan",
    left: "payrollpanda",
    right: "kakitangan",
    title: "PayrollPanda vs Kakitangan.com",
    summary:
      "Two Malaysian payroll choices compared for focused payroll and broader HR administration.",
    verdict:
      "PayrollPanda suits teams prioritising a focused payroll flow. Kakitangan.com belongs on the shortlist when leave, claims and employee administration carry equal weight.",
    chooseLeft: [
      "You mainly want to simplify Malaysian payroll",
      "A focused payroll interface is preferable",
      "The affiliate or advisor ecosystem is useful to your firm",
    ],
    chooseRight: [
      "You want payroll together with leave and claims",
      "HR administration is as important as payroll",
      "You prefer one vendor for several HR modules",
    ],
  },
  {
    slug: "storehub-vs-easystore",
    left: "storehub",
    right: "easystore",
    title: "StoreHub vs EasyStore",
    summary:
      "A retail and F&B POS platform compared with an omnichannel commerce platform.",
    verdict:
      "StoreHub is the clearer fit for physical F&B and retail operations; EasyStore is the more natural starting point for online-first and social-commerce sellers.",
    chooseLeft: [
      "Physical checkout and outlet operations come first",
      "You run a cafe, restaurant or multi-outlet retail business",
      "You want customer and ordering tools around the POS",
    ],
    chooseRight: [
      "Your own online store and marketplace channels come first",
      "You sell heavily through social commerce",
      "You want online and physical inventory in one commerce stack",
    ],
  },
  {
    slug: "autocount-vs-bukku",
    left: "autocount",
    right: "bukku",
    title: "AutoCount vs Bukku",
    summary:
      "A broad, partner-led business suite compared with cloud-native Malaysia-first accounting.",
    verdict:
      "Choose based on operational complexity: AutoCount for broader modules and partner implementation; Bukku for a simpler cloud accounting starting point.",
    chooseLeft: [
      "You need inventory, POS or HRMS options",
      "Implementation support from a reseller is valuable",
      "Your operation is growing beyond basic bookkeeping",
    ],
    chooseRight: [
      "You want browser-based accounting with a lighter setup",
      "You are a micro or small service business",
      "Accountant collaboration is the main workflow",
    ],
  },
  {
    slug: "qne-vs-autocount",
    left: "qne-ai-cloud-accounting",
    right: "autocount",
    title: "QNE vs AutoCount",
    summary:
      "Two Malaysia-oriented accounting ecosystems compared for cloud automation, module breadth and implementation support.",
    verdict:
      "Run the same five real transactions in both demos. Product labels matter less than migration quality, reporting fit and the partner who will support your rollout.",
    chooseLeft: [
      "Cloud accounting and automation are the priority",
      "A QNE implementation partner fits your accounting practice",
      "You prefer QNE's reporting and workflow in a live demo",
    ],
    chooseRight: [
      "You may add POS, payroll or desktop workflows",
      "You have access to a strong AutoCount reseller",
      "A broad local product ecosystem matters",
    ],
  },
  {
    slug: "xero-vs-financio",
    left: "xero",
    right: "financio",
    title: "Xero vs Financio",
    summary:
      "A global accounting platform compared with a streamlined regional small-business option.",
    verdict:
      "Xero is the integration-led choice; Financio may suit a smaller team that values a simpler regional workflow. Verify Malaysia e-Invoice handling for both.",
    chooseLeft: [
      "Third-party integrations drive the decision",
      "You collaborate with Xero-trained accountants",
      "Cross-border workflows are likely",
    ],
    chooseRight: [
      "You want a streamlined small-business product",
      "The live demo covers your workflow without extra apps",
      "Its local support package is more practical for your team",
    ],
  },
  {
    slug: "sql-account-vs-bukku",
    left: "sql-account",
    right: "bukku",
    title: "SQL Account vs Bukku",
    summary:
      "Desktop-capable inventory depth versus cloud-native bookkeeping and collaboration.",
    verdict:
      "SQL Account is more natural for inventory-heavy, established operations; Bukku is easier to shortlist for cloud-first service businesses.",
    chooseLeft: [
      "Inventory and desktop operations are central",
      "You need dealer-led migration and setup",
      "Your staff already understands traditional accounting software",
    ],
    chooseRight: [
      "Remote browser access is essential",
      "Your workflow is service-led rather than inventory-heavy",
      "You want a lighter initial rollout",
    ],
  },
];

export function getComparison(slug: string) {
  return comparisons.find((comparison) => comparison.slug === slug);
}

export function resolveComparison(comparison: Comparison) {
  const left = softwareBySlug.get(comparison.left);
  const right = softwareBySlug.get(comparison.right);
  if (!left || !right) {
    throw new Error(`Invalid comparison data: ${comparison.slug}`);
  }
  return { left, right };
}
