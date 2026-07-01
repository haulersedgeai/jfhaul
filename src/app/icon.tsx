import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
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
          background: "#0f5d6b",
          color: "white",
          fontSize: 20,
          fontWeight: 800,
          letterSpacing: -1,
          borderRadius: 6,
        }}
      >
        J&#38;F
      </div>
    ),
    size,
  );
}
