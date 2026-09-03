"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type {
  BusinessSize,
  SoftwareCategory,
  SoftwareProduct,
} from "@/data/software";

type Answers = {
  category?: SoftwareCategory;
  size?: BusinessSize;
  industry?: string;
  deployment?: "Cloud" | "Flexible";
};

const questions = [
  {
    key: "category" as const,
    title: "What is the main job?",
    options: ["Accounting", "Payroll", "POS", "E-Invoice", "E-commerce"],
  },
  {
    key: "size" as const,
    title: "How large is the operation?",
    options: ["Micro", "Small", "Growing", "Multi-outlet"],
  },
  {
    key: "industry" as const,
    title: "Which description is closest?",
    options: ["Services", "Retail", "F&B", "E-commerce", "Professional firms"],
  },
  {
    key: "deployment" as const,
    title: "How do you want to work?",
    options: ["Cloud", "Flexible"],
    help: "Flexible includes desktop, cloud or a partner-led setup.",
  },
] satisfies Array<{
  key: keyof Answers;
  title: string;
  options: string[];
  help?: string;
}>;

function scoreProduct(product: SoftwareProduct, answers: Answers) {
  let score = 0;
  const reasons: string[] = [];
  if (answers.category && product.categories.includes(answers.category)) {
    score += 5;
    reasons.push(`covers ${answers.category.toLowerCase()}`);
  }
  if (answers.size && product.businessSizes.includes(answers.size)) {
    score += 3;
    reasons.push(`fits a ${answers.size.toLowerCase()} operation`);
  }
  if (answers.industry && product.industries.includes(answers.industry)) {
    score += 3;
    reasons.push(`built for ${answers.industry.toLowerCase()}`);
  }
  if (answers.deployment === "Cloud" && product.deployment.includes("Cloud")) {
    score += 2;
    reasons.push("supports cloud access");
  }
  if (answers.deployment === "Flexible") {
    const supportsDesktop = /desktop/i.test(product.deployment);
    score += supportsDesktop ? 2 : 1;
    if (supportsDesktop) {
      reasons.push("supports desktop or partner-led setups");
    }
  }
  return { product, score, reasons };
}

export function FinderClient({ products }: { products: SoftwareProduct[] }) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const completed = step >= questions.length;
  const question = questions[step];

  const results = useMemo(
    () =>
      products
        .map((product) => scoreProduct(product, answers))
        .filter((result) => result.score > 0)
        .sort((a, b) => b.score - a.score)
        .slice(0, 3),
    [answers, products],
  );

  function choose(value: string) {
    if (!question) return;
    const nextAnswers = { ...answers, [question.key]: value } as Answers;
    setAnswers(nextAnswers);
    const nextStep = step + 1;
    setStep(nextStep);

    if (nextStep === questions.length) {
      window.dispatchEvent(
        new CustomEvent("sme-stack:finder-complete", {
          detail: nextAnswers,
        }),
      );
      const analyticsWindow = window as Window & {
        plausible?: (event: string, options?: unknown) => void;
      };
      analyticsWindow.plausible?.("Finder completed", {
        props: nextAnswers,
      });
    }
  }

  function restart() {
    setAnswers({});
    setStep(0);
  }

  return (
    <div className="mx-auto max-w-4xl">
      <div className="mb-6 flex items-center justify-between text-sm">
        <span className="font-semibold">
          {completed ? "Your shortlist" : `Question ${step + 1} of 4`}
        </span>
        <span className="text-muted">
          {Object.values(answers).filter(Boolean).length}/4 answered
        </span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-line">
        <div
          className="h-full rounded-full bg-brand transition-all"
          style={{
            width: `${(Math.min(step, questions.length) / questions.length) * 100}%`,
          }}
        />
      </div>

      {!completed && question ? (
        <div className="mt-8 rounded-[2rem] border border-line bg-surface p-6 sm:p-10">
          <h2 className="text-3xl font-bold tracking-tight">{question.title}</h2>
          {question.help && (
            <p className="mt-3 text-sm text-muted">{question.help}</p>
          )}
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {question.options.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => choose(option)}
                className="rounded-2xl border border-line bg-background p-5 text-left font-semibold transition hover:border-brand hover:bg-white"
              >
                {option}
                <span className="float-right text-brand">→</span>
              </button>
            ))}
          </div>
          {step > 0 && (
            <button
              type="button"
              onClick={() => setStep(step - 1)}
              className="mt-6 text-sm font-semibold text-muted hover:text-foreground"
            >
              ← Previous question
            </button>
          )}
        </div>
      ) : (
        <div className="mt-8">
          <div className="rounded-[2rem] bg-brand-dark p-7 text-white sm:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-accent">
              Based on your answers
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight">
              Start with these {results.length} products
            </h2>
            <p className="mt-3 max-w-2xl leading-7 text-white/70">
              This is a rules-based shortlist, not a paid ranking. Verify each
              choice with your own transactions and current vendor terms.
            </p>
          </div>
          <div className="-mt-3 grid gap-4 px-3 sm:px-6">
            {results.length === 0 ? (
              <p className="rounded-3xl border border-line bg-surface p-6 text-muted">
                No confident match. Browse the{" "}
                <Link href="/software" className="font-bold text-brand">
                  full directory
                </Link>{" "}
                or start again with a broader job.
              </p>
            ) : (
              results.map(({ product, reasons }, index) => (
                <article
                  key={product.slug}
                  className="rounded-3xl border border-line bg-surface p-6"
                >
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-brand">
                        Match {index + 1}
                      </p>
                      <h3 className="mt-2 text-2xl font-bold">{product.name}</h3>
                    </div>
                    <span className="rounded-full bg-background px-3 py-1 text-xs font-semibold text-muted">
                      {product.pricing.label}
                    </span>
                  </div>
                  <p className="mt-3 leading-7 text-muted">{product.summary}</p>
                  <p className="mt-4 text-sm font-semibold">
                    Why it matched: {reasons.join(", ")}.
                  </p>
                  <Link
                    href={`/software/${product.slug}`}
                    className="mt-5 inline-block text-sm font-bold text-brand hover:underline"
                  >
                    Review the evidence →
                  </Link>
                </article>
              ))
            )}
          </div>
          <div className="mt-7 text-center">
            <button
              type="button"
              onClick={restart}
              className="rounded-full border border-line bg-white px-5 py-2.5 text-sm font-bold"
            >
              Start again
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
