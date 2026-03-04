import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        background: "#171717",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 36,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontSize: 90,
          fontWeight: 700,
          fontFamily: "system-ui, sans-serif",
        }}
      >
        S
      </div>
    </div>,
    {
      ...size,
    },
  );
}
