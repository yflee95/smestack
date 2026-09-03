import { ImageResponse } from "next/og";
import { BrandMarkGraphic } from "@/lib/brand-mark";

export const size = { width: 192, height: 192 };
export const contentType = "image/png";

export default function Icon() {
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
        <BrandMarkGraphic box={192} bar={22} gap={10} />
      </div>
    ),
    size,
  );
}
