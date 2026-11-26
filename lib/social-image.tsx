import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const socialSize = { width: 1200, height: 630 };

export async function createSocialImage(title: string, description: string) {
  const [regular, bold] = await Promise.all([
    readFile(join(process.cwd(), "app/fonts/manrope-regular.ttf")),
    readFile(join(process.cwd(), "app/fonts/manrope-bold.ttf")),
  ]);
  return new ImageResponse(
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "60px 76px",
        background:
          "radial-gradient(circle at 52% 48%, #454545 0%, #292929 45%, #151515 100%)",
        color: "#f8f6f2",
        fontFamily: "Manrope",
      }}
    >
      <div
        style={{
          display: "flex",
          fontSize: 28,
          fontWeight: 700,
          letterSpacing: -1,
        }}
      >
        vikramaditya dhumal
      </div>
      <div
        style={{
          display: "flex",
          flex: 1,
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: title.length > 24 ? 57 : 68,
            fontWeight: 700,
            letterSpacing: -3,
            lineHeight: 1.12,
            maxWidth: 1000,
          }}
        >
          {title}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 26,
            color: "#d2d2d2",
            fontSize: 26,
            lineHeight: 1.4,
            maxWidth: 900,
          }}
        >
          {description}
        </div>
      </div>
    </div>,
    {
      ...socialSize,
      fonts: [
        { name: "Manrope", data: regular, weight: 400 },
        { name: "Manrope", data: bold, weight: 700 },
      ],
    },
  );
}
