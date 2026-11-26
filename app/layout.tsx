import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { Navigation } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

const manrope = Manrope({ variable: "--font-geist-sans", subsets: ["latin"] });
export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL!),
  title: "Vikramaditya Dhumal — Independent Developer",
  description:
    "Vikramaditya Dhumal designs and builds thoughtful, useful digital products.",
  openGraph: {
    title: "Vikramaditya Dhumal — Independent Developer",
    description: "Thoughtful, useful digital products, built with care.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vikramaditya Dhumal — Independent Developer",
    description: "Thoughtful, useful digital products, built with care.",
  },
};
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${manrope.variable} h-full antialiased`}>
      <body className="min-h-full bg-[#171717] font-sans selection:bg-[#bc501e] selection:text-white">
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
