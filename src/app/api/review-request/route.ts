import { NextResponse } from "next/server";

const allowedJobs = new Set([
  "Accounting",
  "Payroll",
  "POS",
  "E-Invoice",
  "E-commerce",
]);

type ReviewRequest = {
  name?: string;
  email?: string;
  company?: string;
  industry?: string;
  size?: string;
  jobs?: string[];
  notes?: string;
  website?: string;
};

function clean(value: unknown, max: number) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export async function POST(request: Request) {
  const body = (await request.json()) as ReviewRequest;

  // Quietly accept bots so the honeypot does not teach them how to bypass it.
  if (clean(body.website, 200)) {
    return NextResponse.json({ ok: true });
  }

  const lead = {
    name: clean(body.name, 80),
    email: clean(body.email, 120),
    company: clean(body.company, 120),
    industry: clean(body.industry, 80),
    size: clean(body.size, 80),
    jobs: Array.isArray(body.jobs)
      ? body.jobs.filter((job) => allowedJobs.has(job)).slice(0, 5)
      : [],
    notes: clean(body.notes, 1200),
  };

  if (
    !lead.name ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lead.email) ||
    !lead.industry ||
    !lead.size ||
    lead.jobs.length === 0
  ) {
    return NextResponse.json(
      { error: "Complete the required fields and use a valid email." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const inbox = process.env.REVIEW_INBOX ?? process.env.NEXT_PUBLIC_LEAD_INBOX;
  const from = process.env.REVIEW_FROM_EMAIL;

  if (!apiKey || !inbox || !from) {
    return NextResponse.json(
      {
        error:
          "Review requests are not open yet. Please try again after launch.",
      },
      { status: 503 },
    );
  }

  const text = [
    `Name: ${lead.name}`,
    `Email: ${lead.email}`,
    `Company: ${lead.company || "—"}`,
    `Industry: ${lead.industry}`,
    `Team size: ${lead.size}`,
    `Jobs: ${lead.jobs.join(", ")}`,
    "",
    lead.notes || "No extra notes.",
  ].join("\n");

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [inbox],
      reply_to: lead.email,
      subject: `Pilot review request · ${lead.industry} · ${lead.size}`,
      text,
    }),
  });

  if (!response.ok) {
    return NextResponse.json(
      { error: "We could not send this request. Please try again." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
