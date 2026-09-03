import { ImageResponse } from "next/og";
import { BrandMarkGraphic } from "@/lib/brand-mark";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#166534",
        }}
      >
        <BrandMarkGraphic box={180} bar={20} gap={9} />
      </div>
    ),
    size,
  );
}
