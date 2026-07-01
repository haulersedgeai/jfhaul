import { ImageResponse } from "next/og";

export const alt = "J&F Haul and Deliver — Same-day junk removal in Birmingham, AL";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "linear-gradient(135deg, #0f5d6b 0%, #124656 60%, #0d3441 100%)",
          color: "white",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 80,
              height: 80,
              borderRadius: 20,
              background: "#e12d24",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 42,
              fontWeight: 900,
              letterSpacing: -2,
            }}
          >
            J&#38;F
          </div>
          <div style={{ fontSize: 32, fontWeight: 700, opacity: 0.9 }}>
            J&#38;F Haul and Deliver
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <div
            style={{
              fontSize: 80,
              fontWeight: 900,
              lineHeight: 1,
              letterSpacing: -3,
              maxWidth: 900,
            }}
          >
            Same-day junk removal in Birmingham, AL.
          </div>
          <div style={{ fontSize: 32, opacity: 0.9 }}>
            Family + woman-owned · Licensed &amp; insured · 205-624-0731
          </div>
        </div>
      </div>
    ),
    size,
  );
}
