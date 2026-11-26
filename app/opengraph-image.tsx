import { ImageResponse } from "next/og";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Vikramaditya Dhumal — independent developer";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ display: "flex", width: "100%", height: "100%", flexDirection: "column", alignItems: "center", background: "radial-gradient(circle at center, #4a4a4a 0%, #2d2d2d 48%, #121212 100%)", color: "#f8f6f2", fontFamily: "sans-serif" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 24, marginTop: 28, padding: "14px 24px", borderRadius: 50, background: "rgba(36, 36, 36, 0.35)", color: "#fff", fontSize: 18, fontWeight: 600 }}>
        <span style={{ fontSize: 25, fontWeight: 800, letterSpacing: -2 }}>vd</span><span style={{ color: "#8b8b8b" }}>|</span><span>work</span><span>about</span><span>contact</span>
      </div>
      <div style={{ display: "flex", flex: 1, flexDirection: "column", alignItems: "center", justifyContent: "center", paddingBottom: 68, textAlign: "center" }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", fontSize: 68, fontWeight: 800, letterSpacing: -4, lineHeight: 1.04 }}><div style={{ display: "flex" }}>building things</div><div style={{ display: "flex" }}>that feel right.</div></div>
        <div style={{ display: "flex", marginTop: 28, flexDirection: "column", alignItems: "center", color: "#e1e1e1", fontSize: 21, lineHeight: 1.5 }}><div style={{ display: "flex" }}>i’m&nbsp;<span style={{ color: "#d9682d", fontWeight: 700 }}>vikramaditya dhumal</span>, an independent developer</div><div style={{ display: "flex" }}>who designs and builds thoughtful, useful digital products.</div></div>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 34, padding: "14px 24px", borderRadius: 50, background: "#bc501e", fontSize: 18, fontWeight: 700 }}>see my work <ArrowRightIcon width={20} height={20} /></div>
      </div>
    </div>, size,
  );
}
