import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeftIcon, GlobeAltIcon } from "@heroicons/react/24/outline";
import { projects } from "@/data/projects";
import { siDevpost, siGithub, siYoutube } from "simple-icons";

function ResourceIcon({ label }: { label: string }) {
  const icon =
    label === "github"
      ? siGithub
      : label === "youtube"
        ? siYoutube
        : label === "devpost"
          ? siDevpost
          : label === "demo"
            ? siGithub
            : null;
  return icon ? (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="size-4 fill-current">
      <path d={icon.path} />
    </svg>
  ) : (
    <GlobeAltIcon aria-hidden="true" className="size-4" />
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) return {};
  return {
    title: `${project.name} — vikramaditya dhumal`,
    description: project.description,
    openGraph: {
      title: `${project.name} — vikramaditya dhumal`,
      description: project.description,
    },
    twitter: {
      card: "summary_large_image" as const,
      title: `${project.name} — vikramaditya dhumal`,
      description: project.description,
    },
  };
}

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();
  return (
    <main className="min-h-screen bg-[#f8f6f2] px-6 pb-24 pt-36 text-[#292521] sm:px-10 sm:pb-32 sm:pt-44 lg:px-[9%] 2xl:px-[14%]">
      <article className="mx-auto max-w-[1200px]">
        <Link
          href="/work"
          className="group inline-flex items-center gap-2 text-sm font-bold text-[#a34218] hover:text-[#57270e]"
        >
          <ArrowLeftIcon
            aria-hidden="true"
            className="size-4 transition-transform group-hover:-translate-x-1 motion-reduce:transition-none"
          />{" "}
          all work
        </Link>
        <div className="mt-12 grid gap-8 lg:grid-cols-[2fr_1fr] lg:items-end">
          <h1 className="text-[clamp(2.8rem,6vw,5.5rem)] leading-[1.05] font-bold tracking-[-0.06em]">
            {project.name}
          </h1>
          <p className="max-w-md text-base leading-[1.8] text-[#55504b]">
            {project.description}
          </p>
        </div>
        <div
          style={{ backgroundColor: project.color }}
          className="relative mt-12 flex aspect-[1.55] items-center justify-center overflow-hidden rounded-sm sm:mt-16"
        >
          {project.image ? (
            <Image
              src={project.image}
              alt={`artwork for ${project.name}`}
              fill
              sizes="(min-width: 1280px) 1200px, 90vw"
              className="object-cover"
              priority
            />
          ) : (
            <div
              aria-hidden="true"
              className="h-[40%] aspect-square rounded-full bg-[#bc501e]/70 shadow-[0_15px_50px_rgba(114,54,25,0.2)]"
            />
          )}
        </div>
        {project.links.length > 0 && (
          <div className="border-b border-[#292521]/15 py-9 sm:py-10">
            <h2 className="text-sm font-bold tracking-[-0.02em]">
              explore the project
            </h2>
            <div className="mt-5 flex flex-wrap gap-x-8 gap-y-4">
              {project.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-sm font-semibold text-[#a34218] hover:text-[#57270e] hover:underline underline-offset-4"
                >
                  <ResourceIcon label={link.label} />
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
        <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_2fr] lg:gap-20">
          <div>
            <h2 className="text-sm font-bold tracking-[-0.02em]">
              the toolkit
            </h2>
            <ul className="mt-5 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-[#292521]/15 px-3 py-1.5 text-xs font-semibold text-[#625b54]"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-3xl font-bold tracking-[-0.05em]">
              the story.
            </h2>
            <div className="mt-6 space-y-5 text-base leading-[1.85] text-[#55504b]">
              {project.story.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
