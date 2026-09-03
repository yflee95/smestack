"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";

const links = [
  { href: "/software", label: "Software" },
  { href: "/compare", label: "Comparisons" },
  { href: "/needs", label: "By need" },
  { href: "/finder", label: "Free finder" },
  { href: "/shortlist", label: "Request a shortlist" },
];

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const panelId = useId();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    document.body.style.overflow = open ? "hidden" : "";
    if (open) window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        className="rounded-full border border-line bg-white px-3.5 py-2 text-sm font-semibold elevated"
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? "Close" : "Menu"}
      </button>
      {open && (
        <>
          <button
            type="button"
            className="fixed inset-0 top-16 z-40 cursor-default bg-brand-dark/15 backdrop-blur-[2px]"
            aria-label="Close navigation menu"
            onClick={() => setOpen(false)}
          />
          <nav
            id={panelId}
            className="absolute inset-x-0 top-16 z-50 border-b border-line bg-background px-5 py-4 elevated-lg"
            aria-label="Mobile"
          >
            <div className="grid gap-1">
              {links.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-semibold transition hover:bg-white"
                >
                  {item.label}
                  <span className="text-brand" aria-hidden="true">
                    →
                  </span>
                </Link>
              ))}
            </div>
          </nav>
        </>
      )}
    </div>
  );
}
