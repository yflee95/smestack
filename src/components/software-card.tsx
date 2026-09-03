import Link from "next/link";
import type { SoftwareProduct } from "@/data/software";

export function SoftwareCard({ product }: { product: SoftwareProduct }) {
  return (
    <Link
      href={`/software/${product.slug}`}
      className="group flex h-full flex-col rounded-3xl border border-line bg-surface p-6 elevated transition duration-200 hover:-translate-y-1 hover:border-brand/40 hover:shadow-lg"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="grid h-11 w-11 place-items-center rounded-2xl border border-brand/10 bg-brand/10 text-lg font-bold text-brand transition group-hover:bg-brand group-hover:text-white">
          {product.name.slice(0, 1)}
        </div>
        <span className="rounded-full bg-background px-3 py-1 text-xs font-semibold text-muted">
          {product.pricing.label}
        </span>
      </div>
      <h3 className="mt-5 text-xl font-bold tracking-tight">{product.name}</h3>
      <p className="mt-2 flex-1 text-sm leading-6 text-muted">{product.summary}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {product.categories.slice(0, 3).map((category) => (
          <span
            key={category}
            className="rounded-full border border-line px-2.5 py-1 text-xs text-muted"
          >
            {category}
          </span>
        ))}
      </div>
      <span className="mt-6 flex items-center justify-between text-sm font-bold text-brand">
        Read independent profile
        <span className="transition-transform group-hover:translate-x-1">→</span>
      </span>
    </Link>
  );
}
