import type { ComponentProps } from "react";

type ButtonLinkProps = ComponentProps<"a">;

export function ButtonLink({ className = "", ...props }: ButtonLinkProps) {
  return (
    <a
      className={`inline-flex items-center justify-center gap-3 rounded-full bg-[#bc501e] px-6 py-3.5 text-sm font-bold text-white transition-colors duration-300 hover:bg-[#f8f6f2] hover:text-[#25201c] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e57a42] motion-reduce:transition-none sm:text-base ${className}`}
      {...props}
    />
  );
}
