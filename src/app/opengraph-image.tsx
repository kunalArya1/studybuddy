import { ImageResponse } from "next/og";

export const alt = "StudyBuddy - Learn Skills That Matter";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#fafafa",
          position: "relative",
        }}
      >
        {/* Background pattern */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage:
              "radial-gradient(circle at 25px 25px, #e5e5e5 2%, transparent 0%)",
            backgroundSize: "50px 50px",
          }}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 10,
          }}
        >
          {/* Logo */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              marginBottom: 40,
            }}
          >
            <div
              style={{
                width: 64,
                height: 64,
                backgroundColor: "#171717",
                borderRadius: 16,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
              </svg>
            </div>
            <span
              style={{
                fontSize: 48,
                fontWeight: 600,
                color: "#171717",
                letterSpacing: -1,
              }}
            >
              study
              <span style={{ color: "#a3a3a3" }}>buddy</span>
            </span>
          </div>

          {/* Tagline */}
          <h1
            style={{
              fontSize: 72,
              fontWeight: 600,
              color: "#171717",
              textAlign: "center",
              lineHeight: 1.1,
              margin: 0,
              letterSpacing: -2,
            }}
          >
            Learn skills that matter
          </h1>
          <p
            style={{
              fontSize: 28,
              color: "#737373",
              textAlign: "center",
              marginTop: 24,
              maxWidth: 700,
            }}
          >
            Master in-demand skills with expert-led courses
          </p>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
