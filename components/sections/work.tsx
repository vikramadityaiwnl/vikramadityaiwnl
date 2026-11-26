import { projects } from "@/data/projects";
import { ProjectCard } from "./project-card";

const years = [
  ...new Set(projects.map((project) => project.date.slice(0, 4))),
].sort((a, b) => b.localeCompare(a));

export function Work() {
  return (
    <section className="relative min-h-screen overflow-hidden px-6 pb-24 pt-36 sm:px-10 sm:pb-32 sm:pt-44 lg:px-[9%] 2xl:px-[14%]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[14%] top-40 hidden size-40 rounded-full border border-[#a34218]/15 lg:block motion-safe:animate-[gentle-drift_9s_ease-in-out_infinite]"
      >
        <div className="absolute inset-8 rounded-full border border-[#a34218]/20" />
        <div className="absolute left-1/2 top-1/2 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#bc501e]/60" />
      </div>
      <div className="relative mx-auto max-w-[1400px]">
        <h1 className="max-w-2xl text-4xl leading-[1.13] font-bold tracking-[-0.055em] sm:text-5xl lg:text-6xl">
          ideas made
          <br />
          into something real.
        </h1>
        <p className="mt-6 max-w-lg text-base leading-[1.8] text-[#55504b]">
          a collection of projects, experiments, and collaborations built with
          curiosity and care.
        </p>
        <div className="mt-20 space-y-24 sm:mt-24 sm:space-y-28">
          {years.map((year) => (
            <section key={year} aria-label={`projects from ${year}`}>
              <div className="flex items-center gap-5">
                <h2 className="text-sm font-bold tracking-[-0.02em] text-[#a34218]">
                  {year}
                </h2>
                <span
                  aria-hidden="true"
                  className="h-px flex-1 bg-[#292521]/15"
                />
              </div>
              <div className="mt-8 grid gap-x-8 gap-y-16 md:grid-cols-2 lg:gap-x-12 lg:gap-y-20">
                {projects
                  .filter((project) => project.date.startsWith(year))
                  .sort((a, b) => b.date.localeCompare(a.date))
                  .map((project) => (
                    <ProjectCard key={project.slug} project={project} />
                  ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
