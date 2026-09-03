"use client";

import type { ReactNode } from "react";

type Props = {
  href: string;
  vendor: string;
  placement: string;
  className?: string;
  children: ReactNode;
  rel?: string;
};

export function OutboundLink({
  href,
  vendor,
  placement,
  className,
  children,
  rel = "sponsored nofollow noopener",
}: Props) {
  function trackClick() {
    window.dispatchEvent(
      new CustomEvent("sme-stack:outbound", {
        detail: { vendor, placement, href },
      }),
    );

    const analyticsWindow = window as Window & {
      plausible?: (event: string, options?: unknown) => void;
    };
    analyticsWindow.plausible?.("Vendor outbound", {
      props: { vendor, placement },
    });
  }

  return (
    <a
      href={href}
      target="_blank"
      rel={rel}
      className={className}
      onClick={trackClick}
    >
      {children}
    </a>
  );
}
