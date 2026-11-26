import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vikramaditya Dhumal — Independent Developer",
  description:
    "Vikramaditya Dhumal designs and builds thoughtful, useful digital products.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${manrope.variable} h-full antialiased`}>
      <body className="min-h-full bg-[#171513] font-sans selection:bg-[#bc501e] selection:text-white">
        {children}
      </body>
    </html>
  );
}
