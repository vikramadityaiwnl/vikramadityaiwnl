import { SectionLink } from "@/components/ui/section-link";

import { CommandLineIcon } from "@heroicons/react/24/outline";
import {
  siJavascript,
  siTypescript,
  siPython,
  siOpenjdk,
  siKotlin,
  siHtml5,
  siCss,
  siReact,
  siNextdotjs,
  siExpo,
  siTailwindcss,
  siNodedotjs,
  siExpress,
  siBun,
  siPostgresql,
  siMongodb,
  siFirebase,
  siGooglecloud,
  siGooglegemini,
  siMeta,
  siThreedotjs,
  siGooglemaps,
  siUnity,
  siGodotengine,
  siAndroidstudio,
  siGit,
  siGithub,
  siDocker,
  siClaude,
} from "simple-icons";

const skills = [
  {
    title: "programming languages",
    tools: [
      ["javascript", siJavascript],
      ["typescript", siTypescript],
      ["python", siPython],
      ["java", siOpenjdk],
      ["kotlin", siKotlin],
    ],
  },
  {
    title: "frontend",
    tools: [
      ["html", siHtml5],
      ["css", siCss],
      ["react", siReact],
      ["next.js", siNextdotjs],
      ["tailwind css", siTailwindcss],
    ],
  },
  {
    title: "mobile",
    tools: [
      ["react native", siReact],
      ["expo", siExpo],
      ["android studio", siAndroidstudio],
    ],
  },
  {
    title: "backend",
    tools: [
      ["bun", siBun],
      ["node.js", siNodedotjs],
      ["express", siExpress],
    ],
  },
  {
    title: "data",
    tools: [
      ["firestore", siFirebase],
      ["postgresql", siPostgresql],
      ["mongodb", siMongodb],
    ],
  },
  {
    title: "cloud",
    tools: [
      ["firebase", siFirebase],
      ["google cloud", siGooglecloud],
    ],
  },
  {
    title: "ai",
    tools: [
      ["gemini", siGooglegemini],
      ["genkit", siFirebase],
      ["firebase ai logic", siFirebase],
      ["meta ai", siMeta],
    ],
  },
  {
    title: "interactive & games",
    tools: [
      ["three.js", siThreedotjs],
      ["google maps", siGooglemaps],
      ["unity", siUnity],
      ["godot", siGodotengine],
    ],
  },
  {
    title: "tools",
    tools: [
      ["git", siGit],
      ["github", siGithub],
      ["docker", siDocker],
      ["muse code", null],
      ["claude code", siClaude],
      ["codex", null],
    ],
  },
] as const;

export function About() {
  return (
    <section className="relative overflow-hidden px-6 py-24 sm:px-10 sm:py-32 lg:px-[9%] 2xl:px-[14%]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[10%] top-32 hidden size-40 rounded-full border border-[#a34218]/15 lg:block motion-safe:animate-[gentle-drift_9s_ease-in-out_infinite]"
      >
        <div className="absolute inset-8 rounded-full border border-[#a34218]/20" />
        <div className="absolute left-1/2 top-1/2 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#bc501e]/60" />
      </div>
      <div className="relative mx-auto max-w-[1400px]">
        <h1 className="max-w-3xl text-4xl leading-[1.13] font-bold tracking-[-0.055em] sm:text-5xl lg:text-6xl">
          curious by nature.
          <br />a builder at heart.
        </h1>
        <div className="mt-8 max-w-2xl space-y-4 text-base leading-[1.8] text-[#55504b] sm:mt-10">
          <p>
            i’m vikramaditya, an independent developer who enjoys turning ideas
            into thoughtful digital products.
          </p>
          <p>
            i’ve been freelancing since 2020, exploring the space between design
            and development and learning by making things for people to use.
          </p>
        </div>
        <div className="mt-20 border-t border-[#292521]/15 pt-12 sm:mt-24">
          <h2 className="text-3xl font-bold tracking-[-0.05em] sm:text-4xl">
            what i work with.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-[1.8] text-[#55504b]">
            the tools and ideas i’ve used across apps, experiments, and
            collaborations.
          </p>
          <div className="mt-10 grid gap-x-12 gap-y-10 md:grid-cols-2">
            {skills.map((skill) => (
              <div key={skill.title}>
                <h3 className="text-lg font-bold tracking-[-0.04em]">
                  {skill.title}
                </h3>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {skill.tools.map(([label, icon]) => (
                    <li
                      key={label}
                      className="inline-flex items-center gap-2 rounded-full border border-[#292521]/15 px-3 py-1 text-[11px] font-semibold text-[#625b54]"
                    >
                      {icon ? (
                        <svg
                          aria-hidden="true"
                          viewBox="0 0 24 24"
                          className="size-4 fill-[#a34218]"
                        >
                          <path d={icon.path} />
                        </svg>
                      ) : (
                        <CommandLineIcon
                          aria-hidden="true"
                          className="size-4 text-[#a34218]"
                        />
                      )}
                      {label}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-20 border-t border-[#292521]/15 pt-12 sm:mt-24">
          <h2 className="text-3xl font-bold tracking-[-0.05em] sm:text-4xl">
            the learning path.
          </h2>
          <div className="mt-10 max-w-3xl space-y-8">
            <div className="grid gap-2 sm:grid-cols-[10rem_1fr]">
              <p className="text-sm font-semibold text-[#a34218]">
                2024 — 2027
              </p>
              <div>
                <h3 className="text-lg font-bold tracking-[-0.03em]">
                  degree in computer science
                </h3>
                <p className="mt-1 text-sm leading-7 text-[#69615b]">
                  currently pursuing
                </p>
              </div>
            </div>
            <div className="grid gap-2 sm:grid-cols-[10rem_1fr]">
              <p className="text-sm font-semibold text-[#a34218]">
                2021 — 2024
              </p>
              <div>
                <h3 className="text-lg font-bold tracking-[-0.03em]">
                  diploma in information technology
                </h3>
                <p className="mt-1 text-sm leading-7 text-[#69615b]">
                  sou. venutai chavan polytechnic, pune
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-20 border-t border-[#292521]/15 pt-12 sm:mt-24">
          <h2 className="text-3xl font-bold tracking-[-0.05em] sm:text-4xl">
            games i’ve played.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-[1.8] text-[#55504b]">
            games are another way i enjoy exploring how experiences feel, flow,
            and bring people together.
          </p>
          <ul className="mt-8 flex flex-wrap gap-2">
            {["cs 1.6", "cs:go", "cs2", "valorant", "gta v"].map((game) => (
              <li
                key={game}
                className="rounded-full border border-[#292521]/15 px-3 py-1 text-[11px] font-semibold text-[#625b54]"
              >
                {game}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-14">
          <SectionLink href="/contact">let’s connect</SectionLink>
        </div>
      </div>
    </section>
  );
}
