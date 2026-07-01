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
          background: "#E8A33D",
          borderRadius: 6,
          color: "#0A0E1A",
          fontSize: 15,
          fontWeight: 700,
          fontFamily: "monospace",
          letterSpacing: -0.5,
        }}
      >
        MY
      </div>
    ),
    { ...size }
  );
}
