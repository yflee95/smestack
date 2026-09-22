"use client";

import { kitSections, type KitBlock } from "@/lib/kit-content";

function Block({ block }: { block: KitBlock }) {
  if (block.type === "note") {
    return <p className="text-sm leading-7 text-muted">{block.text}</p>;
  }
  if (block.type === "fields") {
    return (
      <div className="grid gap-3">
        {block.items.map((item) => (
          <label key={item.label} className="grid gap-1 text-sm">
            <span className="font-semibold">{item.label}</span>
            <span className="block min-h-10 rounded-xl border border-dashed border-line-strong bg-background px-3 py-2" />
          </label>
        ))}
      </div>
    );
  }
  if (block.type === "table") {
    return (
      <div className="overflow-x-auto">
        <p className="mb-3 text-xs text-muted">{block.caption}</p>
        <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
          <thead>
            <tr>
              {block.headers.map((header) => (
                <th key={header} className="border-b border-line px-3 py-2 font-semibold">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {block.rows.map((row) => (
              <tr key={row.join("-")}>
                {row.map((cell, index) => (
                  <td key={`${row[0]}-${index}`} className="border-b border-line px-3 py-3 align-top">
                    {cell || (
                      <span className="inline-block min-h-6 min-w-16 rounded-md border border-dashed border-line" />
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  if (block.type === "copy") {
    return (
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand">{block.label}</p>
        <pre className="mt-3 overflow-x-auto whitespace-pre-wrap rounded-2xl border border-line bg-background p-4 font-sans text-sm leading-7">
          {block.text}
        </pre>
      </div>
    );
  }
  if (block.type === "check") {
    return (
      <ul className="grid gap-2">
        {block.items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-6">
            <span className="mt-0.5 h-4 w-4 shrink-0 rounded border border-line-strong" />
            {item}
          </li>
        ))}
      </ul>
    );
  }
  return (
    <div className="rounded-[1.5rem] bg-brand-dark px-6 py-8 text-white">
      <p className="text-2xl font-bold tracking-tight">{block.title}</p>
      <ul className="mt-5 space-y-3 text-sm leading-6 text-white/80">
        {block.lines.map((line) => (
          <li key={line}>{line}</li>
        ))}
      </ul>
    </div>
  );
}

export function KitWorkbook() {
  return (
    <article className="rounded-[2rem] border border-line bg-surface px-6 py-10 elevated sm:px-12 sm:py-14">
      <div className="mb-8 flex flex-wrap items-center justify-between gap-3 print:hidden">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand">Free · printable</p>
        <button
          type="button"
          onClick={() => window.print()}
          className="rounded-full bg-brand px-4 py-2 text-sm font-bold text-white hover:bg-brand-dark"
        >
          Print / save PDF
        </button>
      </div>
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">e-Invoice worksheets</h1>
      <p className="mt-4 max-w-2xl text-sm leading-7 text-muted">
        Fill the blanks with your accountant. Not a LHDN ruling. Not a paid ranking.
      </p>
      <div className="mt-12 space-y-14">
        {kitSections.map((section, index) => (
          <section key={section.id}>
            <h2 className="text-2xl font-bold tracking-tight">
              {index + 1}. {section.title}
            </h2>
            <p className="mt-2 text-sm leading-6 text-muted">{section.blurb}</p>
            <div className="mt-6 space-y-6">
              {section.blocks.map((block, blockIndex) => (
                <Block key={`${section.id}-${blockIndex}`} block={block} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </article>
  );
}
