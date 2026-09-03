"use client";

import { useMemo, useState } from "react";
import { SoftwareCard } from "@/components/software-card";
import { software, type SoftwareCategory } from "@/data/software";

const categories: Array<SoftwareCategory | "All"> = [
  "All",
  "Accounting",
  "Payroll",
  "POS",
  "E-Invoice",
  "E-commerce",
];

export function SoftwareDirectoryClient() {
  const [selected, setSelected] = useState<(typeof categories)[number]>("All");
  const products = useMemo(
    () =>
      selected === "All"
        ? software
        : software.filter((product) => product.categories.includes(selected)),
    [selected],
  );

  return (
    <>
      <div className="mt-8 flex flex-wrap gap-2">
        {categories.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setSelected(item)}
            className={`rounded-full px-4 py-2 text-sm font-semibold ${
              selected === item
                ? "bg-brand text-white"
                : "border border-line bg-white text-muted"
            }`}
          >
            {item}
          </button>
        ))}
      </div>
      <p className="mt-8 text-sm text-muted">
        Showing {products.length}{" "}
        {selected === "All" ? "" : `${selected.toLowerCase()} `}
        products. Filters stay on this page so search engines index one directory
        URL.
      </p>
      <div className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <SoftwareCard key={product.slug} product={product} />
        ))}
      </div>
    </>
  );
}
