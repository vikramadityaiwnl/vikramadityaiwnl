import { SpotlightBackground } from "@/components/hero/spotlight-background";

export function Footer() {
  return (
    <footer className="sticky bottom-0 z-0 flex min-h-[100svh] items-center justify-center overflow-hidden bg-[#171717] px-6 text-center text-[#f8f6f2]">
      <SpotlightBackground />

      <div className="relative z-10">
        <p className="text-[clamp(2.5rem,5vw,5rem)] leading-[1.1] font-bold tracking-[-0.06em]">
          made with care.
        </p>
        <p className="mt-8 text-sm text-white/60">© <a href="https://www.linkedin.com/in/vikramaditya-dhumal-322a60358/" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">vikramaditya dhumal</a></p>
      </div>
    </footer>
  );
}
