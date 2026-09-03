"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";

const links = [
  { href: "/software", label: "Software" },
  { href: "/compare", label: "Comparisons" },
  { href: "/needs", label: "By need" },
  { href: "/finder", label: "Free finder" },
];

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const panelId = useId();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        className="rounded-full border border-line bg-white px-3 py-2 text-sm font-semibold"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? "Close" : "Menu"}
      </button>
      {open && (
        <nav
          id={panelId}
          className="absolute inset-x-0 top-16 border-b border-line bg-background px-5 py-4"
          aria-label="Mobile"
        >
          <div className="grid gap-2">
            {links.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-2xl px-4 py-3 text-sm font-semibold hover:bg-white"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </div>
  );
}
