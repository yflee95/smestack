"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { siteConfig } from "@/lib/site";

const jobs = ["Accounting", "Payroll", "POS", "E-Invoice", "E-commerce"] as const;
const sizes = ["1–5 people", "6–20 people", "21–50 people", "51+ or multi-outlet"] as const;
const industries = [
  "Services / professional",
  "Retail shop",
  "F&B / cafe",
  "Wholesale",
  "Online store",
  "Other",
] as const;

type FormState = {
  name: string;
  email: string;
  company: string;
  industry: string;
  size: string;
  jobs: string[];
  notes: string;
  website: string;
};

const empty: FormState = {
  name: "",
  email: "",
  company: "",
  industry: "",
  size: "",
  jobs: [],
  notes: "",
  website: "",
};

export function ShortlistForm() {
  const [form, setForm] = useState<FormState>(empty);
  const [error, setError] = useState("");

  function toggleJob(job: string) {
    setForm((current) => ({
      ...current,
      jobs: current.jobs.includes(job)
        ? current.jobs.filter((item) => item !== job)
        : [...current.jobs, job],
    }));
  }

  function submit(event: FormEvent) {
    event.preventDefault();
    setError("");
    if (form.website.trim()) return;

    if (!form.name.trim() || !form.email.trim() || !form.industry || !form.size) {
      setError("Name, email, industry and team size are required.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      setError("Enter a valid email so we can reply.");
      return;
    }
    if (form.jobs.length === 0) {
      setError("Pick at least one job the software must cover.");
      return;
    }

    const body = [
      `Name: ${form.name.trim()}`,
      `Email: ${form.email.trim()}`,
      `Company: ${form.company.trim() || "—"}`,
      `Industry: ${form.industry}`,
      `Team size: ${form.size}`,
      `Jobs: ${form.jobs.join(", ")}`,
      "",
      form.notes.trim() || "No extra notes.",
    ].join("\n");

    const mailto = `mailto:${siteConfig.leadInbox}?subject=${encodeURIComponent(
      `SME Stack shortlist: ${form.industry} / ${form.size}`,
    )}&body=${encodeURIComponent(body)}`;

    const analyticsWindow = window as Window & {
      plausible?: (event: string, options?: unknown) => void;
    };
    analyticsWindow.plausible?.("Shortlist requested", {
      props: { industry: form.industry, size: form.size },
    });

    window.location.href = mailto;
  }

  return (
    <form onSubmit={submit} className="grid gap-6" noValidate>
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="hp_url"
          value={form.website}
          onChange={(event) =>
            setForm((current) => ({ ...current, website: event.target.value }))
          }
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Your name" htmlFor="lead-name">
          <input
            id="lead-name"
            className="field"
            value={form.name}
            onChange={(event) =>
              setForm((current) => ({ ...current, name: event.target.value }))
            }
            autoComplete="name"
            required
            maxLength={80}
          />
        </Field>
        <Field label="Work email" htmlFor="lead-email">
          <input
            id="lead-email"
            type="email"
            className="field"
            value={form.email}
            onChange={(event) =>
              setForm((current) => ({ ...current, email: event.target.value }))
            }
            autoComplete="email"
            required
            maxLength={120}
          />
        </Field>
      </div>

      <Field label="Company (optional)" htmlFor="lead-company">
        <input
          id="lead-company"
          className="field"
          value={form.company}
          onChange={(event) =>
            setForm((current) => ({ ...current, company: event.target.value }))
          }
          autoComplete="organization"
        />
      </Field>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Industry" htmlFor="lead-industry">
          <select
            id="lead-industry"
            className="field"
            value={form.industry}
            onChange={(event) =>
              setForm((current) => ({ ...current, industry: event.target.value }))
            }
            required
          >
            <option value="">Select one</option>
            {industries.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Team size" htmlFor="lead-size">
          <select
            id="lead-size"
            className="field"
            value={form.size}
            onChange={(event) =>
              setForm((current) => ({ ...current, size: event.target.value }))
            }
            required
          >
            <option value="">Select one</option>
            {sizes.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <fieldset>
        <legend className="text-sm font-semibold">What must the software cover?</legend>
        <div className="mt-3 flex flex-wrap gap-2">
          {jobs.map((job) => {
            const selected = form.jobs.includes(job);
            return (
              <label
                key={job}
                className={`cursor-pointer rounded-full px-4 py-2 text-sm font-semibold ${
                  selected
                    ? "bg-brand text-white"
                    : "border border-line bg-white text-muted"
                }`}
              >
                <input
                  type="checkbox"
                  className="sr-only"
                  checked={selected}
                  onChange={() => toggleJob(job)}
                />
                {job}
              </label>
            );
          })}
        </div>
      </fieldset>

      <Field label="Anything we should not miss (optional)" htmlFor="lead-notes">
        <textarea
          id="lead-notes"
          className="field min-h-32"
          value={form.notes}
          onChange={(event) =>
            setForm((current) => ({ ...current, notes: event.target.value }))
          }
          maxLength={800}
        />
      </Field>

      {error ? (
        <p className="text-sm font-semibold text-red-700" role="alert">
          {error}
        </p>
      ) : null}

      <button
        type="submit"
        className="rounded-full bg-brand px-6 py-3.5 text-sm font-bold text-white hover:bg-brand-dark"
      >
        Open email to request a shortlist
      </button>
      <p className="text-sm leading-6 text-muted">
        This opens your email app with the details filled in. Nothing is stored
        on this website. We reply from the inbox we actually monitor.
      </p>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: ReactNode;
}) {
  return (
    <div className="grid gap-2">
      <label htmlFor={htmlFor} className="text-sm font-semibold">
        {label}
      </label>
      {children}
    </div>
  );
}
