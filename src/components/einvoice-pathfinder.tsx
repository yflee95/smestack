"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  buildBrief,
  emptyAnswers,
  isComplete,
  pathQuestions,
  pathfinderSources,
  type Answers,
} from "@/lib/pathfinder";

const urgencyTone = {
  exempt: "bg-accent/80 text-brand-dark",
  prepare: "bg-warm text-foreground",
  grace: "bg-warm text-foreground",
  live: "bg-brand/10 text-brand-dark",
};

export function EinvoicePathfinder() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>(emptyAnswers());
  const question = pathQuestions[step];
  const complete = isComplete(answers);
  const brief = useMemo(() => (complete ? buildBrief(answers) : null), [answers, complete]);
  const progress = complete ? 100 : Math.round((step / pathQuestions.length) * 100);

  function choose(value: string) {
    const next = { ...answers, [question.id]: value };
    setAnswers(next);
    if (step < pathQuestions.length - 1) setStep(step + 1);
  }

  if (brief) {
    const inScope = brief.urgency !== "exempt";
    return (
      <article className="overflow-hidden rounded-[2rem] border border-line bg-surface elevated-lg">
        <div className="border-b border-line bg-background px-6 py-6 sm:px-10">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand">Your brief</p>
            <span className={`rounded-full px-3 py-1 text-xs font-semibold ${urgencyTone[brief.urgency]}`}>
              {brief.urgencyLabel}
            </span>
          </div>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">{brief.headline}</h2>
          <p className="mt-4 max-w-2xl leading-7 text-muted">{brief.summary}</p>
        </div>
        <div className="grid lg:grid-cols-2">
          <dl className="grid gap-6 border-b border-line p-6 sm:p-10 lg:border-b-0 lg:border-r">
            <div>
              <dt className="text-xs font-bold uppercase tracking-[0.16em] text-muted">Status</dt>
              <dd className="mt-2 text-2xl font-bold tracking-tight">{brief.phaseLabel}</dd>
            </div>
            <div>
              <dt className="text-xs font-bold uppercase tracking-[0.16em] text-muted">What to confirm</dt>
              <dd className="mt-2 text-sm leading-6">{brief.mandateDate}</dd>
            </div>
            <div>
              <dt className="text-xs font-bold uppercase tracking-[0.16em] text-muted">Route</dt>
              <dd className="mt-2 font-semibold">{brief.routeLabel}</dd>
            </div>
            <p className="text-sm leading-7 text-muted">{brief.relaxationNote}</p>
          </dl>
          <div className="p-6 sm:p-10">
            <h3 className="text-2xl font-bold tracking-tight">This week</h3>
            <ol className="mt-5 space-y-3">
              {brief.thisWeek.map((item, index) => (
                <li key={item} className="flex gap-3 text-sm leading-6">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand text-[0.7rem] font-bold text-white">
                    {index + 1}
                  </span>
                  {item}
                </li>
              ))}
            </ol>
          </div>
        </div>
        <div className="border-t border-line px-6 py-8 sm:px-10">
          <h3 className="text-xl font-bold">Watchouts</h3>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {brief.watchouts.map((item) => (
              <li key={item} className="rounded-2xl border border-line bg-background px-4 py-3 text-sm leading-6 text-muted">
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <Link
              href="/kit"
              className="rounded-3xl bg-brand-dark px-6 py-5 text-white transition hover:bg-brand"
            >
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-accent">Free</p>
              <p className="mt-2 text-2xl font-bold tracking-tight">Print the worksheets</p>
              <p className="mt-2 text-sm leading-6 text-white/70">{brief.kitReason}</p>
            </Link>
            {inScope ? (
              <Link
                href="/shortlist"
                className="rounded-3xl border border-line bg-white px-6 py-5 transition hover:border-brand"
              >
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand">Pilot RM490 · async</p>
                <p className="mt-2 text-2xl font-bold tracking-tight">Software Decision Brief</p>
                <p className="mt-2 text-sm leading-6 text-muted">
                  A scored shortlist, cost risks, demo script and next step.
                  No sales call. Not tax advice.
                </p>
              </Link>
            ) : (
              <Link
                href={brief.smeStackHref}
                className="rounded-3xl border border-line bg-white px-6 py-5 transition hover:border-brand"
              >
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand">If you still need software</p>
                <p className="mt-2 text-2xl font-bold tracking-tight">e-Invoice buying guide</p>
                <p className="mt-2 text-sm leading-6 text-muted">
                  You may be exempt. Only buy a stack if buyers or your accountant still need the workflow.
                </p>
              </Link>
            )}
          </div>
          {inScope ? (
            <p className="mt-6 text-sm text-muted">
              Compare products first:{" "}
              <Link href={brief.smeStackHref} className="font-bold text-brand hover:underline">
                e-Invoice software guide
              </Link>
              .
            </p>
          ) : null}
          <p className="mt-6 text-xs leading-5 text-muted">
            Logic reviewed {pathfinderSources.reviewedOn}. {pathfinderSources.notes[3]}
          </p>
          <button
            type="button"
            className="mt-4 text-sm font-semibold text-muted hover:text-foreground"
            onClick={() => {
              setAnswers(emptyAnswers());
              setStep(0);
            }}
          >
            Start over
          </button>
        </div>
      </article>
    );
  }

  return (
    <div className="overflow-hidden rounded-[2rem] border border-line bg-surface elevated-lg">
      <div className="h-2 bg-line">
        <div className="h-full bg-brand transition-all" style={{ width: `${progress}%` }} />
      </div>
      <div className="px-6 py-8 sm:px-10 sm:py-12">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand">
          Question {step + 1} of {pathQuestions.length}
        </p>
        <h2 className="mt-4 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">{question.title}</h2>
        <p className="mt-4 max-w-xl text-sm leading-7 text-muted">{question.hint}</p>
        <div className="mt-8 grid gap-3">
          {question.options.map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => choose(option.value)}
              className="group flex items-start justify-between gap-6 rounded-2xl border border-line bg-background px-5 py-4 text-left transition hover:border-brand hover:bg-white"
            >
              <span>
                <span className="block font-semibold">{option.label}</span>
                {"detail" in option && option.detail ? (
                  <span className="mt-1 block text-sm text-muted">{option.detail}</span>
                ) : null}
              </span>
              <span className="mt-1 text-brand opacity-0 group-hover:opacity-100">→</span>
            </button>
          ))}
        </div>
        {step > 0 ? (
          <button type="button" className="mt-8 text-sm font-semibold text-muted hover:text-foreground" onClick={() => setStep(step - 1)}>
            ← Previous
          </button>
        ) : null}
      </div>
    </div>
  );
}
