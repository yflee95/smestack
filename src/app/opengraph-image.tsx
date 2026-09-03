import { ImageResponse } from "next/og";

export const alt = "SME Stack — Malaysia Software Finder";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#14261f",
          color: "#f7f8f3",
          padding: 72,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: 28,
            fontWeight: 700,
            letterSpacing: -0.5,
          }}
        >
          SME Stack
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              fontSize: 68,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: -1.8,
              maxWidth: 980,
            }}
          >
            Pick Malaysia SME software with evidence, not sales noise.
          </div>
          <div style={{ fontSize: 28, color: "#d8f16f" }}>
            Accounting · Payroll · POS · e-Invoice
          </div>
        </div>
      </div>
    ),
    size,
  );
}
