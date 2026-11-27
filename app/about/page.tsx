import { About } from "@/components/sections/about";

export const metadata = {
  title: "about — vikramaditya dhumal",
  description: "skills, education, and interests of vikramaditya dhumal.",
  openGraph: {
    title: "about — vikramaditya dhumal",
    description: "skills, education, and interests of vikramaditya dhumal.",
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#f8f6f2] pt-20 text-[#292521]">
      <About />
    </main>
  );
}
