import Image from "next/image";
import Link from "next/link";
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
              Programs Preview — Four Core Disciplines
            </span>
          </div>
          <Link
            href="/programs"
            className="text-xs font-semibold uppercase tracking-[0.18em] text-forest hover:text-graphite transition-colors duration-200"
          >
            View All Programs &amp; Class Schedule →
          </Link>
        </div>

        {/* Section Intro */}
        <div className="mt-8 sm:mt-12 grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-end pb-8 sm:pb-10">
          <div className="md:col-span-7">
            <h2
              id="programs-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.025em] leading-[1.06] text-graphite"
            >
              Four disciplines that{" "}
              <span className="font-serif italic font-normal text-forest">
                work together.
              </span>
            </h2>
          </div>
          <div className="md:col-span-5">
            <p className="text-sm sm:text-base leading-relaxed text-graphite-soft">
              Instead of separating heavy lifting from conditioning or recovery,
              our four core programs complement one another throughout your
              training week.
            </p>
          </div>
        </div>

        {/* Concise 2x2 Editorial Preview Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 border border-stone bg-ivory divide-y md:divide-y-0 md:divide-x divide-stone">
          {PROGRAMS.map((program, idx) => (
            <article
              key={program.id}
              className={`p-5 sm:p-8 lg:p-10 flex flex-col justify-between bg-ivory ${
                idx >= 2 ? "md:border-t md:border-stone" : ""
              }`}
            >
              <div>
                {/* Image Plate */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-graphite border border-stone/80">
                  <Image
                    src={program.image.src}
                    alt={program.image.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 46vw"
                    className="object-cover object-center"
                  />
                </div>

                {/* Category & Index */}
                <div className="mt-5 flex items-center justify-between gap-3">
                  <div className="inline-flex items-center gap-2.5">
                    <span className="inline-flex items-center justify-center bg-graphite px-2.5 py-0.5 font-serif italic text-xs text-ivory">
                      {program.index}
                    </span>
                    <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-forest">
                      {program.categoryLabel}
                    </span>
                  </div>
                  <span className="text-[11px] uppercase tracking-[0.14em] text-graphite-soft">
                    {program.sampleDuration}
                  </span>
                </div>

                <h3 className="mt-3 text-xl sm:text-2xl font-bold tracking-[-0.015em] text-graphite">
                  {program.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-graphite-soft">
                  {program.shortSummary}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-stone flex flex-wrap items-center justify-between gap-3">
                <span className="text-xs text-graphite-soft">
                  {program.levelSummary}
                </span>
                <Link
                  href={`/programs#${program.id}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-graphite hover:text-forest transition-colors duration-200"
                >
                  <span>Program Details</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Route Bar */}
        <div className="mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border border-stone bg-ivory p-5 sm:p-6">
          <p className="text-xs sm:text-sm text-graphite-soft">
            Filter programs by experience level or browse our illustrative
            weekly class schedule on the Programs page.
          </p>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link
              href="/programs"
              className="inline-flex items-center justify-center bg-graphite px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-ivory transition-colors duration-200 hover:bg-forest"
            >
              Explore All Programs
            </Link>
            <Link
              href="/programs#weekly-schedule"
              className="inline-flex items-center justify-center border border-graphite px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-graphite transition-colors duration-200 hover:bg-graphite hover:text-ivory"
            >
              Weekly Schedule
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
