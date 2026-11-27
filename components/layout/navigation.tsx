"use client";

import Link from "next/link";
import { useLayoutEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

export function Navigation() {
  const pathname = usePathname();
  const router = useRouter();

  useLayoutEffect(() => {
    if (pathname !== "/") return;

    const previousScrollRestoration = window.history.scrollRestoration;
    window.history.scrollRestoration = "manual";
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });

    return () => {
      window.history.scrollRestoration = previousScrollRestoration;
    };
  }, [pathname]);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-5 sm:pt-7">
      <nav
        aria-label="main navigation"
        className="pointer-events-auto flex items-center gap-1 rounded-full bg-[#24211f]/35 p-1.5 text-white shadow-[0_8px_32px_rgba(0,0,0,0.15)] backdrop-blur-xl sm:gap-3"
      >
        <button
          type="button"
          aria-label="return home"
          onClick={() => {
            if (pathname === "/")
              window.scrollTo({
                top: 0,
                behavior: window.matchMedia("(prefers-reduced-motion: reduce)")
                  .matches
                  ? "instant"
                  : "smooth",
              });
            else router.push("/");
          }}
          className="cursor-pointer rounded-full px-4 py-2 text-xl leading-none font-extrabold tracking-[-0.08em] [text-shadow:0_1px_6px_rgba(0,0,0,0.65)] transition-colors hover:bg-white/15 focus-visible:outline-none focus-visible:bg-white/25"
        >
          vd
        </button>
        <span aria-hidden="true" className="h-5 w-px bg-white/25" />
        {[
          ["work", "/work"],
          ["about", "/about"],
          ["contact", "/contact"],
        ].map(([label, href]) => (
          <Link
            key={href}
            href={href}
            aria-current={
              pathname === href || pathname.startsWith(`${href}/`)
                ? "page"
                : undefined
            }
            className="rounded-full px-3 py-2 text-xs font-bold tracking-[-0.02em] [text-shadow:0_1px_6px_rgba(0,0,0,0.65)] transition-colors hover:bg-white/15 aria-[current=page]:bg-white/15 focus-visible:outline-none focus-visible:bg-white/25 sm:px-4 sm:text-sm"
          >
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
