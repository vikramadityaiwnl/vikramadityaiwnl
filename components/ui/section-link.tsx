import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export function SectionLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-4 rounded-full bg-[#292521] px-5 py-3 text-sm font-semibold text-[#f8f6f2] transition-colors duration-300 hover:bg-[#a34218] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#a34218] motion-reduce:transition-none"
    >
      {children}
      <ArrowRightIcon
        aria-hidden="true"
        className="size-4 transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none"
      />
    </Link>
  );
}
