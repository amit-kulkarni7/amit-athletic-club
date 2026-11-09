import Image from "next/image";
import { PROGRAMS } from "@/data/siteContent";

export function ProgramsSection() {
  return (
    <section
      id="programs"
      aria-labelledby="programs-heading"
      className="border-b border-stone bg-ivory-muted/50 py-12 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-12">
        {/* Section Index Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-5 border-b border-stone">
          <div className="flex items-baseline gap-3">
            <span className="font-serif italic text-xl text-forest">02</span>
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-graphite">
              Training Disciplines — Curriculum Preview
            </span>
          </div>
          <span className="text-xs uppercase tracking-[0.18em] text-graphite-soft">
            Four Integrated Pillars
          </span>
        </div>

        {/* Section Intro */}
        <div className="mt-8 sm:mt-12 grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-end pb-8 sm:pb-10 border-b border-stone">
          <div className="md:col-span-7">
            <h2
              id="programs-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.025em] leading-[1.06] text-graphite"
            >
              Four disciplines built to{" "}
              <span className="font-serif italic font-normal text-forest">
                reinforce one another.
              </span>
            </h2>
          </div>
          <div className="md:col-span-5">
            <p className="text-sm sm:text-base leading-relaxed text-graphite-soft">
              Rather than isolating heavy lifting from conditioning or mobility,
              our programming connects all four modalities into a balanced
              weekly rhythm.
            </p>
          </div>
        </div>

        {/* Quick-Jump Discipline Directory */}
        <div
          aria-label="Program discipline directory"
          className="grid grid-cols-2 md:grid-cols-4 border-b border-x border-stone bg-ivory divide-y md:divide-y-0 divide-x divide-stone"
        >
          {PROGRAMS.map((program) => (
            <a
              key={program.id}
              href={`#${program.id}`}
              className="group p-3.5 sm:p-5 flex flex-col justify-between transition-colors duration-200 hover:bg-ivory-muted"
            >
              <div className="flex items-center justify-between text-xs text-graphite-soft">
                <span className="font-serif italic text-base text-forest">
                  {program.index}
                </span>
                <span
                  aria-hidden="true"
                  className="transition-transform duration-200 group-hover:translate-x-0.5"
                >
                  ↓
                </span>
              </div>
              <p className="mt-1.5 text-xs sm:text-sm font-bold uppercase tracking-[0.1em] text-graphite group-hover:text-forest">
                {program.title}
              </p>
            </a>
          ))}
        </div>

        {/* Staggered Editorial Monograph Rows */}
        <div className="divide-y divide-stone border-b border-x border-stone bg-ivory">
          {PROGRAMS.map((program, idx) => {
            const isEven = idx % 2 === 1;
            return (
              <article
                key={program.id}
                id={program.id}
                className="p-5 sm:p-8 lg:p-12 scroll-mt-24"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 lg:gap-12 items-center">
                  {/* Text & Specification Column */}
                  <div
                    className={`md:col-span-7 space-y-4 sm:space-y-5 ${
                      isEven ? "md:order-2" : "md:order-1"
                    }`}
                  >
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="inline-flex items-center justify-center bg-graphite px-2.5 py-0.5 font-serif italic text-sm text-ivory">
                        {program.index}
                      </span>
                      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-forest">
                        {program.category}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold tracking-[-0.02em] text-graphite">
                        {program.title}
                      </h3>
                      <p className="mt-1 font-serif italic text-base sm:text-xl text-graphite-soft">
                        {program.subtitle}
                      </p>
                    </div>

                    <p className="text-sm sm:text-base leading-relaxed text-graphite-soft max-w-2xl">
                      {program.description}
                    </p>

                    {/* Technical Specification Ledger */}
                    <dl className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 pt-3 sm:pt-4 border-t border-stone">
                      <div className="bg-ivory-muted/70 px-3 py-2 sm:p-3 border border-stone/70">
                        <dt className="text-[10px] font-bold uppercase tracking-[0.18em] text-forest">
                          Environment
                        </dt>
                        <dd className="mt-0.5 sm:mt-1 text-[11px] sm:text-xs leading-snug sm:leading-relaxed text-graphite">
                          {program.environment}
                        </dd>
                      </div>

                      <div className="bg-ivory-muted/70 px-3 py-2 sm:p-3 border border-stone/70">
                        <dt className="text-[10px] font-bold uppercase tracking-[0.18em] text-forest">
                          Progression
                        </dt>
                        <dd className="mt-0.5 sm:mt-1 text-[11px] sm:text-xs leading-snug sm:leading-relaxed text-graphite">
                          {program.progression}
                        </dd>
                      </div>

                      <div className="bg-ivory-muted/70 px-3 py-2 sm:p-3 border border-stone/70">
                        <dt className="text-[10px] font-bold uppercase tracking-[0.18em] text-forest">
                          Cadence
                        </dt>
                        <dd className="mt-0.5 sm:mt-1 text-[11px] sm:text-xs leading-snug sm:leading-relaxed text-graphite">
                          {program.cadence}
                        </dd>
                      </div>
                    </dl>

                    <div className="pt-1 flex flex-wrap items-center gap-6">
                      <a
                        href="#membership"
                        className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-graphite border-b border-graphite pb-1 transition-colors duration-200 hover:text-forest hover:border-forest"
                      >
                        <span>Check Membership Access</span>
                        <span aria-hidden="true">→</span>
                      </a>
                      <a
                        href="#coaching"
                        className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-graphite-soft transition-colors duration-200 hover:text-graphite"
                      >
                        <span>Coaching Standards</span>
                        <span aria-hidden="true">→</span>
                      </a>
                    </div>
                  </div>

                  {/* Photography Plate Column */}
                  <div
                    className={`md:col-span-5 ${
                      isEven ? "md:order-1" : "md:order-2"
                    }`}
                  >
                    <figure className="border border-stone bg-ivory-muted p-2.5 sm:p-3">
                      <div
                        className={`relative w-full overflow-hidden bg-graphite ${
                          program.image.aspect === "portrait"
                            ? "aspect-[16/10] md:aspect-[4/4]"
                            : "aspect-[16/10]"
                        }`}
                      >
                        <Image
                          src={program.image.src}
                          alt={program.image.alt}
                          fill
                          sizes="(max-width: 768px) 100vw, 40vw"
                          className="object-cover object-center"
                        />
                      </div>
                      <figcaption className="mt-2 flex items-center justify-between text-[10px] uppercase tracking-[0.16em] text-graphite-soft">
                        <span>{program.image.caption}</span>
                        <span>AAC Curriculum</span>
                      </figcaption>
                    </figure>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
