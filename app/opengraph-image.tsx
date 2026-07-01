import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Satori doesn't run the Unicode bidi algorithm, so RTL strings render
// character-order (mirrored). Pre-reversing gives the correct visual order.
const HEBREW_NAME = "מוחמד יוסף".split("").reverse().join("");

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#0A0E1A",
          padding: "80px 90px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 24,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#E8A33D",
            fontFamily: "monospace",
          }}
        >
          Haifa, Israel — Full-Stack Engineer &amp; Founder
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 96,
            fontWeight: 700,
            color: "#F5F2EA",
          }}
        >
          Mohammad Yosef
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 8,
            fontSize: 34,
            color: "#8A93A6",
          }}
        >
          {HEBREW_NAME}
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 40,
            fontSize: 32,
            maxWidth: 900,
            color: "#F5F2EAE0",
          }}
        >
          Full-stack engineer &amp; founder who ships production software to
          paying customers.
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 48,
            fontSize: 22,
            fontFamily: "monospace",
            color: "#C9822A",
          }}
        >
          Founder, PyMaster · pymaster.mryosef.com
        </div>
      </div>
    ),
    { ...size }
  );
}
