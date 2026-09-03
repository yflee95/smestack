import type { CSSProperties } from "react";

type Props = {
  box?: number;
  bar?: number;
  gap?: number;
};

/** ImageResponse-safe stacked mark. Keep in sync with SiteLogo. */
export function BrandMarkGraphic({ box = 32, bar = 4, gap = 2 }: Props) {
  const inner = Math.round(box * 0.56);
  const radius = Math.round(box * 0.28);
  const barRadius = Math.max(2, Math.round(bar / 2));
  const column: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap,
    width: inner,
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: box,
        height: box,
        borderRadius: radius,
        background: "#166534",
      }}
    >
      <div style={column}>
        <div
          style={{
            height: bar,
            width: inner,
            borderRadius: barRadius,
            background: "#d8f16f",
          }}
        />
        <div
          style={{
            height: bar,
            width: Math.round(inner * 0.78),
            borderRadius: barRadius,
            background: "#f7f8f3",
          }}
        />
        <div
          style={{
            height: bar,
            width: Math.round(inner * 0.56),
            borderRadius: barRadius,
            background: "#c5d4cb",
          }}
        />
      </div>
    </div>
  );
}
