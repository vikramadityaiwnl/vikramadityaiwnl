import { Hero } from "@/components/hero/hero";
import { HomeContent } from "@/components/sections/home-content";

export default function Home() {
  return (
    <main>
      <div className="sticky top-0 z-0">
        <Hero />
      </div>
      <HomeContent />
    </main>
  );
}
