import { projects } from "@/data/projects";
import { SectionLink } from "@/components/ui/section-link";
import { ProjectCard } from "./project-card";

const featured = ["heyenso", "walklog"].flatMap((slug) => {
  const project = projects.find((item) => item.slug === slug);
  return project ? [project] : [];
});

export function HomeContent() {
  return (
    <div className="relative z-10 bg-[#f8f6f2] text-[#292521]">
      <section className="px-6 py-24 sm:px-10 sm:py-32 lg:px-[9%] 2xl:px-[14%]">
        <div className="mx-auto max-w-[1400px]">
          <h2 className="max-w-2xl text-4xl leading-[1.13] font-bold tracking-[-0.055em] sm:text-5xl lg:text-6xl">
            ideas made
            <br />
            into something real.
          </h2>
          <p className="mt-6 max-w-lg text-base leading-[1.8] text-[#55504b]">
            a few things i’ve built, explored, and brought to life with others.
          </p>
          <div className="mt-14 grid gap-x-8 gap-y-16 sm:mt-20 md:grid-cols-2 lg:gap-x-12">
            {featured.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
          <div className="mt-12 sm:mt-14">
            <SectionLink href="/work">see all work</SectionLink>
          </div>
        </div>
      </section>
      <section className="relative overflow-hidden border-t border-[#292521]/10 px-6 py-24 sm:px-10 sm:py-32 lg:px-[9%] 2xl:px-[14%]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[12%] top-1/2 hidden size-48 -translate-y-1/2 items-center justify-center rounded-full border border-[#a34218]/15 lg:flex motion-safe:animate-[float_8s_ease-in-out_infinite]"
        >
          <div className="flex size-32 items-center justify-center rounded-full border border-[#a34218]/20">
            <div className="size-3 rounded-full bg-[#bc501e]/60" />
          </div>
        </div>
        <div className="relative mx-auto max-w-[1400px]">
          <h2 className="max-w-3xl text-4xl leading-[1.13] font-bold tracking-[-0.055em] sm:text-5xl lg:text-6xl">
            curious by nature.
            <br />a builder at heart.
          </h2>
          <p className="mt-8 max-w-2xl text-base leading-[1.8] text-[#55504b]">
            i enjoy bringing design and development together, exploring new
            technology, and turning ideas into useful experiences for the people
            behind the screen.
          </p>
          <div className="mt-9">
            <SectionLink href="/about">more about me</SectionLink>
          </div>
        </div>
      </section>
      <section className="border-t border-[#292521]/10 px-6 py-24 sm:px-10 sm:py-32 lg:px-[9%] 2xl:px-[14%]">
        <div className="mx-auto max-w-[1400px]">
          <h2 className="text-4xl leading-[1.13] font-bold tracking-[-0.055em] sm:text-5xl">
            have something in mind?
          </h2>
          <p className="mt-6 max-w-lg text-base leading-[1.8] text-[#55504b]">
            whether it’s a project, an idea, or just a hello, i’d love to hear
            from you.
          </p>
          <div className="mt-9">
            <SectionLink href="/contact">let’s connect</SectionLink>
          </div>
        </div>
      </section>
    </div>
  );
}
