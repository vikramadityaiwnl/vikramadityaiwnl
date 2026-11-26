import { Work } from "@/components/sections/work";

export const metadata = {
  title: "work — Vikramaditya Dhumal",
  description: "selected projects and collaborations by vikramaditya dhumal.",
  openGraph: {
    title: "work — Vikramaditya Dhumal",
    description: "selected projects and collaborations by vikramaditya dhumal.",
  },
};

export default function WorkPage() {
  return (
    <main className="bg-[#f8f6f2] text-[#292521]">
      <Work />
    </main>
  );
}
