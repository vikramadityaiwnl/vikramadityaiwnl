import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export function Contact() {
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
          have something
          <br />
          in mind?
        </h1>
        <p className="mt-7 max-w-lg text-base leading-[1.8] text-[#55504b]">
          whether it’s a project, an idea, or just a hello, i’d love to hear
          from you.
        </p>
        <div className="mt-10 flex flex-col items-start gap-5">
          <a
            href="mailto:dhumalvikramaditya287@gmail.com"
            className="inline-flex max-w-full items-center gap-3 text-base font-semibold tracking-[-0.02em] text-[#292521] transition-colors hover:text-[#a34218] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#a34218] sm:text-lg"
          >
            <EnvelopeIcon aria-hidden="true" className="size-6 shrink-0" />
            <span className="break-all">dhumalvikramaditya287@gmail.com</span>
          </a>
          <a
            href="https://wa.me/918899968330?text=Hi%20Vikram%2C%20I%20came%20across%20your%20portfolio%20and%20would%20love%20to%20connect%21"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex max-w-full items-center gap-3 text-base font-semibold tracking-[-0.02em] text-[#292521] transition-colors hover:text-[#a34218] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#a34218] sm:text-lg"
          >
            <svg
              aria-hidden="true"
              viewBox={`0 0 ${faWhatsapp.icon[0]} ${faWhatsapp.icon[1]}`}
              className="size-6 shrink-0 fill-current"
            >
              <path d={faWhatsapp.icon[4] as string} />
            </svg>
            +91 88999 68330
          </a>
          <a
            href="https://www.linkedin.com/in/vikramaditya-dhumal-322a60358/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex max-w-full items-center gap-3 text-base font-semibold tracking-[-0.02em] text-[#292521] transition-colors hover:text-[#a34218] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#a34218] sm:text-lg"
          >
            <svg
              aria-hidden="true"
              viewBox={`0 0 ${faLinkedin.icon[0]} ${faLinkedin.icon[1]}`}
              className="size-6 shrink-0 fill-current"
            >
              <path d={faLinkedin.icon[4] as string} />
            </svg>
            linkedin
          </a>
        </div>
      </div>
    </section>
  );
}
