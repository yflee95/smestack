import type { Faq } from "@/data/editorial";

export function FaqList({ items }: { items: Faq[] }) {
  if (items.length === 0) return null;

  return (
    <section>
      <h2 className="text-2xl font-bold tracking-tight">Questions buyers actually ask</h2>
      <dl className="mt-6 grid gap-4">
        {items.map((item) => (
          <div
            key={item.q}
            className="rounded-3xl border border-line bg-surface p-6"
          >
            <dt className="font-bold">{item.q}</dt>
            <dd className="mt-3 leading-7 text-muted">{item.a}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

export function faqJsonLd(items: Faq[]) {
  return {
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}
