export type KitBlock =
  | { type: "note"; text: string }
  | { type: "fields"; items: { label: string; hint?: string }[] }
  | { type: "table"; caption: string; headers: string[]; rows: string[][] }
  | { type: "copy"; label: string; text: string }
  | { type: "check"; items: string[] }
  | { type: "card"; title: string; lines: string[] };

export type KitSection = {
  id: string;
  title: string;
  blurb: string;
  blocks: KitBlock[];
};

export const kitSections: KitSection[] = [
  {
    id: "status",
    title: "Status sheet",
    blurb: "Fill this once. Email the photo to your accountant. Do not debate from memory.",
    blocks: [
      {
        type: "fields",
        items: [
          { label: "Legal name / SSM" },
          { label: "TIN" },
          { label: "Annual turnover we will use (year)" },
          { label: "Under RM3m?  Yes / No / Unsure" },
          { label: "Any related / holding company ≥ RM3m?  Yes / No / Unsure" },
          { label: "Who issues invoices today" },
          { label: "Who owns e-invoice inside the company" },
        ],
      },
      {
        type: "note",
        text: "From 1 Sep 2026 the general exemption is under RM3 million. A group carve-out can still pull you in. This sheet is not a LHDN ruling.",
      },
    ],
  },
  {
    id: "calendar",
    title: "14-day calendar",
    blurb: "Tick the date you actually did it. Skip days that do not apply. Do not add a 15th meeting.",
    blocks: [
      {
        type: "table",
        caption: "Print and pin. Owner writes the date, not the vendor.",
        headers: ["Day", "Job", "Done on", "Owner"],
        rows: [
          ["1", "Confirm RM3m test + group carve-out in writing", "", ""],
          ["2", "Map who invoices, from which tool, for which buyer type", "", ""],
          ["3", "Pull 20 invoices. Mark B2B / B2C and ≥ RM10,000", "", ""],
          ["4", "Pick one route: accountant / configure / POS / new software", "", ""],
          ["5", "Send the vendor scorecard. Refuse a brochure as an answer", "", ""],
          ["6–7", "Sandbox: one real-shaped invoice + one rejection", "", ""],
          ["8", "Master data: legal name, TIN, IDs, addresses, tax types", "", ""],
          ["9", "Cashier path: B2C receipt vs full e-invoice", "", ""],
          ["10", "Name who watches MyInvois errors for 30 days", "", ""],
          ["11–12", "One live or parallel full day", "", ""],
          ["13", "Accountant: SST, credit notes, month-end export", "", ""],
          ["14", "Freeze SOP. One PDF, one owner, one backup", "", ""],
        ],
      },
    ],
  },
  {
    id: "scorecard",
    title: "Vendor scorecard",
    blurb: "Score 0 / 1 / 2 in a live demo. 0 = they talked. 2 = you saw it on MyInvois.",
    blocks: [
      {
        type: "table",
        caption: "Use the same sheet for two vendors. Do not average the scores in your head.",
        headers: ["Must see in the demo", "Vendor A", "Vendor B"],
        rows: [
          ["Validated invoice in MyInvois (not a mock)", "", ""],
          ["Failed validation at 7pm — who is paged?", "", ""],
          ["Credit note / cancel against the original e-invoice", "", ""],
          ["Blocks consolidated e-invoice on RM10,000+ lines", "", ""],
          ["POS offline: queue, lock, or silent fail?", "", ""],
          ["3-year cost: licence, hardware, module, support", "", ""],
          ["A live customer in our industry we may call", "", ""],
        ],
      },
    ],
  },
  {
    id: "rm10k",
    title: "Cashier card · RM10,000",
    blurb: "Cut or print this page for the till. One rule, no memo.",
    blocks: [
      {
        type: "card",
        title: "If the bill is RM10,000 or more",
        lines: [
          "Do not dump it into the month-end consolidated file.",
          "Issue a full validated e-invoice — or call the owner before the customer leaves.",
          "A catering / wholesale / project invoice is not a coffee receipt.",
          "If the POS cannot do this, the POS is not ready.",
        ],
      },
    ],
  },
  {
    id: "accountant",
    title: "Email your accountant",
    blurb: "Copy, fill the brackets, send. Save the reply with the status sheet.",
    blocks: [
      {
        type: "copy",
        label: "Copy this",
        text: `Subject: e-Invoice status for [company] — please confirm in writing

Hi [name],

Please confirm, in writing:

1. Which turnover year LHDN will use for us, and whether we are under the RM3 million exemption from 1 Sep 2026.
2. Whether any holding company, related company, joint venture or corporate shareholder is at or above RM3 million (carve-out).
3. Which software you will actually support at month-end.

Facts from our side:
- We invoice via: [Excel / accounting / POS / you]
- Mix: [B2B / B2C / online]
- Typical ticket: [under / often over RM10,000]
- Owner of this inside the company: [name]

Please tell us what you need from us by [date], and flag self-billed, export, or agent arrangements if they apply.

Thank you.`,
      },
    ],
  },
  {
    id: "fields",
    title: "MyInvois field drill",
    blurb: "Tick only what you have tested, not what the salesperson named.",
    blocks: [
      {
        type: "check",
        items: [
          "Supplier: legal name, TIN, ID, address, SST no. if registered",
          "Buyer: legal name + TIN or allowed ID — we did not invent a TIN",
          "Invoice: unique number, date/time, currency, tax type, total",
          "Lines: description, qty, unit price, classification codes",
          "Credit / debit note points at the original e-invoice",
          "Rejected invoice: named person, resubmit path, what the customer sees",
        ],
      },
    ],
  },
  {
    id: "sources",
    title: "Limits",
    blurb: "If a date in this kit disagrees with current IRBM text, throw the kit line away.",
    blocks: [
      {
        type: "note",
        text: "Reviewed 4 Sep 2026. General exemption under RM3 million from 1 Sep 2026 (IRBM public statements / General Guideline v4.8). Group carve-outs can override. Not legal, tax, or accounting advice.",
      },
    ],
  },
];
