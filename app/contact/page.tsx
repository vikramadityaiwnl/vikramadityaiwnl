import { Contact } from "@/components/sections/contact";

export const metadata = {
  title: "contact — vikramaditya dhumal",
  description: "get in touch with vikramaditya dhumal.",
  openGraph: {
    title: "contact — vikramaditya dhumal",
    description: "get in touch with vikramaditya dhumal.",
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#f8f6f2] pt-20 text-[#292521]">
      <Contact />
    </main>
  );
}
