export const pathQuestions = [
  {
    id: "turnover",
    title: "What is your annual turnover band?",
    hint: "Use the year LHDN used for your phase (often YA 2022). If you are unsure, pick the closest guess — the brief will tell you what to confirm.",
    options: [
      { value: "under_3m", label: "Under RM3 million", detail: "Generally exempt from 1 Sep 2026 — unless a group carve-out applies." },
      { value: "3_to_5m", label: "RM3 million – RM5 million", detail: "Still in the mandate for most firms." },
      { value: "5_to_25m", label: "RM5 million – RM25 million", detail: "Phase 3. Mandatory since 1 Jul 2025." },
      { value: "25_to_100m", label: "RM25 million – RM100 million", detail: "Phase 2. Mandatory since 1 Jan 2025." },
      { value: "over_100m", label: "Above RM100 million", detail: "Phase 1. Mandatory since 1 Aug 2024." },
      { value: "unsure", label: "I am not sure", detail: "We will treat this conservatively." },
    ],
  },
  {
    id: "group",
    title: "Does any related company, holding company or corporate shareholder make RM3 million or more?",
    hint: "From guideline v4.8, a small company can still be pulled into the mandate by its group. If you are a single shop with only individual owners, pick No.",
    options: [
      { value: "no", label: "No", detail: "Standalone, or the whole group is under RM3 million." },
      { value: "yes", label: "Yes", detail: "Exemption may not apply even if this entity is small." },
      { value: "unsure", label: "Not sure", detail: "Ask the accountant before you celebrate the exemption." },
    ],
  },
  {
    id: "started",
    title: "When did the business start?",
    hint: "New businesses can sit on a different clock than older ones in the same revenue band.",
    options: [
      { value: "before_2023", label: "Before 2023" },
      { value: "2023_2025", label: "2023 – 2025" },
      { value: "2026", label: "2026 or later" },
      { value: "unsure", label: "Not sure" },
    ],
  },
  {
    id: "invoicing",
    title: "How do you issue invoices today?",
    hint: "This decides whether you configure software, change the till, or brief an accountant.",
    options: [
      { value: "spreadsheet", label: "Excel / Word / WhatsApp", detail: "Highest friction to MyInvois." },
      { value: "accounting", label: "Accounting software", detail: "Usually a setup and mapping job." },
      { value: "pos", label: "POS / till system", detail: "Retail and F&B path." },
      { value: "accountant", label: "My accountant issues them", detail: "External-owner path." },
      { value: "mix", label: "A mix of the above" },
    ],
  },
  {
    id: "sales",
    title: "Who do you mainly sell to?",
    hint: "B2C can use consolidated e-invoices in some cases. B2B usually cannot hide behind a till roll.",
    options: [
      { value: "b2b", label: "Other businesses (B2B)" },
      { value: "b2c", label: "Consumers in-store (B2C)" },
      { value: "online", label: "Online / marketplaces" },
      { value: "mixed", label: "A mix" },
    ],
  },
  {
    id: "ticket",
    title: "How large is a typical invoice?",
    hint: "If you are in the mandate, a large B2B ticket often cannot hide in a month-end consolidated e-invoice.",
    options: [
      { value: "under_10k", label: "Almost always under RM10,000" },
      { value: "often_10k", label: "Often RM10,000 or more" },
      { value: "mix", label: "A mix" },
    ],
  },
  {
    id: "owner",
    title: "Who will actually own this inside the company?",
    hint: "A kit without an owner becomes a PDF in a drawer.",
    options: [
      { value: "owner", label: "Me, the owner" },
      { value: "clerk", label: "An accounts / admin person" },
      { value: "accountant", label: "External accountant or firm" },
    ],
  },
] as const;

export type QuestionId = (typeof pathQuestions)[number]["id"];
export type Answers = Record<QuestionId, string>;

export type Urgency = "exempt" | "prepare" | "grace" | "live";
export type Route = "watch" | "accountant" | "software" | "pos" | "configure";

export type Brief = {
  phaseLabel: string;
  mandateDate: string;
  relaxationNote: string;
  urgency: Urgency;
  urgencyLabel: string;
  route: Route;
  routeLabel: string;
  headline: string;
  summary: string;
  thisWeek: string[];
  watchouts: string[];
  smeStackHref: string;
  kitReason: string;
};

const SOURCES = {
  reviewedOn: "2026-09-04",
  notes: [
    "From 1 September 2026 the general exemption threshold is annual turnover or revenue under RM3 million (IRBM / LHDN public statements and General Guideline v4.8).",
    "Group, holding-company and related-entity carve-outs can keep a smaller company inside the mandate. Confirm in writing.",
    "RM10,000 individual e-invoice rule for in-scope transactions is treated as in force from 1 Jan 2026 unless your tax agent shows a current exception.",
    "This is not tax advice. Re-read the current IRBM e-Invoice guidelines before you spend money.",
  ],
};

export const pathfinderSources = SOURCES;

function phaseFromTurnover(turnover: string, started: string, group: string) {
  if (turnover === "under_3m" && group === "yes") {
    return {
      phaseLabel: "Under RM3m · group carve-out likely applies",
      mandateDate: "Treat as in-scope until a tax agent says otherwise",
      relaxationNote:
        "The RM3 million exemption is not a free pass if a holding company, related company or corporate shareholder is at or above RM3 million. Get that in writing before you switch MyInvois off.",
      urgency: "prepare" as Urgency,
    };
  }
  if (turnover === "under_3m" && group === "unsure") {
    return {
      phaseLabel: "Under RM3m · group status unconfirmed",
      mandateDate: "Confirm related-entity rules this week",
      relaxationNote:
        "You may be exempt as of 1 September 2026. You may not. The expensive mistake is assuming exemption because this company alone is small.",
      urgency: "prepare" as Urgency,
    };
  }
  if (turnover === "under_3m") {
    return {
      phaseLabel: "Generally exempt (under RM3m, from 1 Sep 2026)",
      mandateDate: "No mandatory start on the current public threshold",
      relaxationNote:
        "LHDN still encourages voluntary e-invoice. Recheck turnover each year. Buyers and platforms may still ask for a valid e-invoice even when you are exempt.",
      urgency: "exempt" as Urgency,
    };
  }
  if (turnover === "3_to_5m") {
    const newBiz = started === "2023_2025" || started === "2026";
    return {
      phaseLabel: newBiz ? "In mandate · confirm new-business clock" : "In mandate (RM3m–RM5m)",
      mandateDate: newBiz ? "Confirm with LHDN / tax agent" : "Already in the live phases for this band",
      relaxationNote:
        "The September 2026 threshold lift removed many smaller firms. This band is still in. Do not use old Phase 4 relaxation rumours as a reason to stop issuing.",
      urgency: "live" as Urgency,
    };
  }
  if (turnover === "5_to_25m") {
    return {
      phaseLabel: "Phase 3",
      mandateDate: "1 July 2025",
      relaxationNote: "This band is already past its original relaxation window. Treat MyInvois as live operations, not a future project.",
      urgency: "live" as Urgency,
    };
  }
  if (turnover === "25_to_100m") {
    return {
      phaseLabel: "Phase 2",
      mandateDate: "1 January 2025",
      relaxationNote: "Enforcement is treated as active. Gaps here are operational risk, not planning.",
      urgency: "live" as Urgency,
    };
  }
  if (turnover === "over_100m") {
    return {
      phaseLabel: "Phase 1",
      mandateDate: "1 August 2024",
      relaxationNote: "You should already be issuing validated e-invoices. This brief is a gap check, not a beginner guide.",
      urgency: "live" as Urgency,
    };
  }
  return {
    phaseLabel: "Unconfirmed · confirm against the RM3 million test",
    mandateDate: "Confirm FY / YA turnover and group structure this week",
    relaxationNote:
      "Until the band and related entities are confirmed, do not switch anything off. Under-preparing is more expensive than two extra weeks of MyInvois.",
    urgency: "prepare" as Urgency,
  };
}

function pickRoute(answers: Answers, urgency: Urgency): { route: Route; routeLabel: string } {
  if (urgency === "exempt") {
    return { route: "watch", routeLabel: "Watch-and-prepare" };
  }
  if (answers.invoicing === "pos" && (answers.sales === "b2c" || answers.sales === "mixed")) {
    return { route: "pos", routeLabel: "POS-first" };
  }
  if (answers.invoicing === "accountant" || answers.owner === "accountant") {
    return { route: "accountant", routeLabel: "Accountant-led" };
  }
  if (answers.invoicing === "accounting") {
    return { route: "configure", routeLabel: "Configure what you already pay for" };
  }
  return { route: "software", routeLabel: "Software-led" };
}

function thisWeek(answers: Answers, route: Route, urgency: Urgency) {
  const steps: string[] = [];
  if (urgency === "exempt") {
    steps.push("Ask your accountant to confirm the turnover figure LHDN will use — in writing.");
    steps.push("Keep invoice records in one folder so you are not starting from WhatsApp screenshots later.");
    steps.push("Do not buy a full stack 'just in case'. Re-run this path if you approach RM3 million or the group changes.");
  } else {
    steps.push("Write down who issues invoices, from which tool, and who files SST / tax — one page, names not software logos.");
    steps.push("Ask your tax agent: 'Are we in the mandate after the 1 Sep 2026 RM3 million threshold, including group carve-outs?'");
  }
  if (answers.ticket !== "under_10k" && urgency !== "exempt") {
    steps.push("Flag every invoice of RM10,000 or more. Those should not hide inside a consolidated e-invoice.");
  }
  if (route === "pos") {
    steps.push("Call your POS vendor and ask: MyInvois, consolidated e-invoice, and what happens when the internet drops.");
  }
  if (route === "accountant") {
    steps.push("Send your accountant a single briefing: volume, ticket size, B2B vs B2C, and who keys data today.");
  }
  if (route === "software" || route === "configure") {
    steps.push("In a trial, issue one real invoice end-to-end through MyInvois (or the vendor's sandbox) before you pay annual fees.");
  }
  if (answers.sales === "online") {
    steps.push("List marketplaces separately. Platform invoices and your own invoices are easy to double-count or miss.");
  }
  return steps.slice(0, 5);
}

function watchouts(answers: Answers, urgency: Urgency) {
  const items = [
    "This tool is a briefing, not a LHDN ruling. Thresholds, FAQs and relaxation windows change.",
    "A longer grace period is not permission to ignore MyInvois if you are already in a live phase.",
  ];
  if (answers.group === "yes" || answers.group === "unsure") {
    items.push("Group carve-outs are how small companies accidentally stay in the mandate after the RM3 million lift.");
  }
  if (answers.ticket === "often_10k" || answers.ticket === "mix") {
    items.push("The RM10,000 rule is the trap for shops that think 'we will just do one consolidated file at month end'.");
  }
  if (answers.invoicing === "spreadsheet") {
    items.push("Spreadsheets plus WhatsApp will not survive validation errors. Budget time for master data (TIN, ID, addresses).");
  }
  if (urgency === "live") {
    items.push("If you are already past your start date, treat this week as operations: reject, resubmit, and backup — not research.");
  }
  return items;
}

function headline(routeLabel: string, phaseLabel: string, urgency: Urgency) {
  if (urgency === "exempt") return "You are probably not in the mandate yet. Do not overbuy.";
  if (urgency === "live") return `${phaseLabel} is already live. Your job is a clean operating path, not another article.`;
  if (urgency === "grace") return `You are in ${phaseLabel}. The calendar is kinder than the work.`;
  return `Confirm your phase, then run a ${routeLabel.toLowerCase()} path.`;
}

function summary(answers: Answers, route: Route, urgency: Urgency) {
  if (urgency === "exempt") {
    return "On current public thresholds, firms under RM3 million are generally not forced onto MyInvois from 1 September 2026 — if no group carve-out applies. Use the kit if buyers still demand e-invoices, or if you are approaching the line.";
  }
  if (route === "pos") {
    return "Your bottleneck is the till, not a 40-page tax memo. Get the POS vendor to show a validated e-invoice — including what cashiers do for B2B buyers who need a full invoice.";
  }
  if (route === "accountant") {
    return "Do not pick software in a vacuum. Your accountant already has a stack they can support at month-end. Brief them once, then buy whatever they can actually operate.";
  }
  if (route === "configure") {
    return "You likely already pay for a system that claims e-invoice. The work is fields, TIN, tax types, and a failed-invoice workflow — not a new logo.";
  }
  if (answers.invoicing === "spreadsheet") {
    return "You need a system of record before MyInvois. Pick one accounting or invoicing tool your accountant will open, then map a week of real invoices through it.";
  }
  return "A short software shortlist plus a 14-day implementation calendar beats a year of half-setup.";
}

function kitReason(urgency: Urgency, route: Route) {
  if (urgency === "exempt") {
    return "Optional free worksheets if buyers still ask for e-invoices, or for the year you cross the line.";
  }
  if (route === "accountant") {
    return "Free worksheets: the briefing you send so the firm cannot say they were not told about ticket size or the RM10,000 rule.";
  }
  return "Free worksheets: 14-day table, vendor scorecard, till card — then pick software on this site.";
}

function smeStackHref(route: Route) {
  if (route === "pos") return "/needs/pos-software-for-restaurants";
  if (route === "watch") return "/needs/e-invoice-software-malaysia";
  return "/needs/e-invoice-software-malaysia";
}

const urgencyLabel: Record<Urgency, string> = {
  exempt: "Not in the current mandate",
  prepare: "Confirm, then prepare",
  grace: "In mandate · relaxation window",
  live: "Already live",
};

export function emptyAnswers(): Answers {
  return {
    turnover: "",
    group: "",
    started: "",
    invoicing: "",
    sales: "",
    ticket: "",
    owner: "",
  };
}

export function isComplete(answers: Answers) {
  return pathQuestions.every((question) => Boolean(answers[question.id]));
}

export function buildBrief(answers: Answers): Brief {
  const phase = phaseFromTurnover(answers.turnover, answers.started, answers.group);
  const { route, routeLabel } = pickRoute(answers, phase.urgency);
  return {
    phaseLabel: phase.phaseLabel,
    mandateDate: phase.mandateDate,
    relaxationNote: phase.relaxationNote,
    urgency: phase.urgency,
    urgencyLabel: urgencyLabel[phase.urgency],
    route,
    routeLabel,
    headline: headline(routeLabel, phase.phaseLabel, phase.urgency),
    summary: summary(answers, route, phase.urgency),
    thisWeek: thisWeek(answers, route, phase.urgency),
    watchouts: watchouts(answers, phase.urgency),
    smeStackHref: smeStackHref(route),
    kitReason: kitReason(phase.urgency, route),
  };
}

function toBase64Url(value: string) {
  const bytes = new TextEncoder().encode(value);
  let binary = "";
  bytes.forEach((byte) => {
    binary += String.fromCharCode(byte);
  });
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}

function fromBase64Url(value: string) {
  const padded = value.replace(/-/g, "+").replace(/_/g, "/");
  const binary = atob(padded);
  const bytes = Uint8Array.from(binary, (char) => char.charCodeAt(0));
  return new TextDecoder().decode(bytes);
}

export function encodeAnswers(answers: Answers) {
  return toBase64Url(JSON.stringify(answers));
}

export function decodeAnswers(raw: string | null): Answers | null {
  if (!raw) return null;
  try {
    const parsed = JSON.parse(fromBase64Url(raw)) as Answers;
    if (!isComplete(parsed)) return null;
    return parsed;
  } catch {
    return null;
  }
}
