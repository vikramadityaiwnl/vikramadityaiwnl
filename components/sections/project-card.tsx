import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="min-w-0">
      <Link
        href={`/work/${project.slug}`}
        className="group block rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#bc501e]"
      >
        <div
          style={{ backgroundColor: project.color }}
          className="relative flex aspect-[1.55] items-center justify-center overflow-hidden rounded-sm"
        >
          {project.image ? (
            <Image
              src={project.image}
              alt=""
              fill
              sizes="(min-width: 768px) 45vw, 100vw"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.05] motion-reduce:transition-none"
            />
          ) : (
            <div
              aria-hidden="true"
              className="h-[42%] aspect-square rounded-full bg-[#bc501e]/70"
            />
          )}
        </div>
        <div className="mt-6 flex items-center justify-between gap-4">
          <h3 className="text-2xl font-bold tracking-[-0.05em] transition-colors group-hover:text-[#a34218]">
            {project.name}
          </h3>
          <ArrowUpRightIcon
            aria-hidden="true"
            className="size-5 shrink-0 text-[#a34218] opacity-0 transition-[opacity,transform] duration-300 group-hover:opacity-100 group-focus-visible:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 motion-reduce:transition-none"
          />
        </div>
        <p className="mt-3 max-w-lg text-sm leading-[1.75] text-[#615b55]">
          {project.description}
        </p>
        <ul
          aria-label="Project category and technologies"
          className="mt-5 flex flex-wrap gap-2"
        >
          <li className="rounded-full bg-[#bc501e]/10 px-3 py-1 text-[11px] font-bold text-[#a34218]">
            {project.category}
          </li>
          {project.tags.slice(0, 2).map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-[#292521]/15 px-3 py-1 text-[11px] font-semibold text-[#625b54]"
            >
              {tag}
            </li>
          ))}
        </ul>
      </Link>
    </article>
  );
}
