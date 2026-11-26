import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { ButtonLink } from "@/components/ui/button-link";
import { SpotlightBackground } from "./spotlight-background";

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-[#171717] text-[#f8f6f2]">
      <SpotlightBackground />

      <div className="relative z-10 flex min-h-[100svh] flex-1 items-center justify-center px-6 py-28 text-center sm:px-10 lg:px-[9%] 2xl:px-[14%]">
        <div className="flex max-w-[720px] flex-col items-center">
          <h1 className="text-[clamp(2.7rem,5vw,5rem)] leading-[1.04] font-bold tracking-[-0.065em]">
            building things
            <br />
            that feel right.
          </h1>
          <p className="mt-7 max-w-[600px] text-base leading-[1.65] tracking-[-0.025em] text-[#f8f6f2]/85 sm:mt-8 sm:text-lg">
            i’m{" "}
            <span className="font-semibold text-[#d9682d]">
              vikramaditya dhumal
            </span>
            , an independent developer who designs and builds thoughtful, useful
            digital products.
          </p>
          <ButtonLink
            href="/work"
            className="group mt-9 tracking-[-0.025em] sm:mt-10"
          >
            see my work
            <ArrowRightIcon
              aria-hidden="true"
              className="size-5 transition-transform duration-300 group-hover:translate-x-1.5 motion-reduce:transition-none"
            />
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
