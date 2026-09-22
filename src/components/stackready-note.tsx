import Link from "next/link";

export function StackReadyNote({ compact = false }: { compact?: boolean }) {
  return (
    <aside className="rounded-3xl border border-line bg-warm/60 p-6">
      <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand">
        After you pick software
      </p>
      <p className={compact ? "mt-2 text-sm leading-6 text-muted" : "mt-3 leading-7 text-muted"}>
        Check the RM3 million exemption (and group carve-outs) in the free
        pathfinder. Worksheets are free. The pilot Decision Brief is RM490 if
        you want one software decision checked by a person.
      </p>
      <div className="mt-4 flex flex-wrap gap-4 text-sm font-bold">
        <Link href="/e-invoice" className="text-brand hover:underline">
          e-Invoice pathfinder
        </Link>
        <Link href="/kit" className="text-brand hover:underline">
          Free worksheets
        </Link>
      </div>
    </aside>
  );
}
