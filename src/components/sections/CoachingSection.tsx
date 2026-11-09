import Image from "next/image";
import { COACHING_PRINCIPLES } from "@/data/siteContent";

export function CoachingSection() {
  return (
    <section
      id="coaching"
      aria-labelledby="coaching-heading"
      className="border-b border-stone bg-ivory-muted/50 py-9 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-12">
        {/* Section Index Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-5 border-b border-stone">
          <div className="flex items-baseline gap-3">
            <span className="font-serif italic text-xl text-forest">05</span>
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-graphite">
              Coaching Preview — Methodology &amp; Practice
            </span>
          </div>
          <span className="text-xs uppercase tracking-[0.18em] text-graphite-soft">
            Mechanics · Cueing · Autonomy
          </span>
        </div>

        {/* Main 12-Column Layout */}
        <div className="mt-7 sm:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-14 items-start">
          {/* Left Column: Visual Studies + Transparency Note (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <figure className="border border-stone bg-ivory p-3">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-graphite">
                <Image
                  src="/images/coaching-methodology.jpg"
                  alt="Close biomechanical study of an athlete gripping a loaded barbell in a hinge setup on rubber gym tiles"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center"
                />
              </div>
              <figcaption className="mt-2.5 flex items-center justify-between text-[10px] uppercase tracking-[0.16em] text-graphite-soft">
                <span>Study 05A — Hinge &amp; Grip Mechanics</span>
                <span>Barbell Floor</span>
              </figcaption>
            </figure>

            <div className="grid grid-cols-2 sm:grid-cols-12 gap-3 sm:gap-6 items-stretch">
              <figure className="sm:col-span-6 border border-stone bg-ivory p-2.5 sm:p-3 flex flex-col justify-between">
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-graphite">
                  <Image
                    src="/images/coaching-mobility-detail.jpg"
                    alt="Monochrome movement study of seated hamstring and spinal mobility work on studio mats in natural window light"
                    fill
                    sizes="(max-width: 1024px) 50vw, 20vw"
                    className="object-cover object-center"
                  />
                </div>
                <figcaption className="mt-2 text-[10px] uppercase tracking-[0.14em] text-graphite-soft">
                  Study 05B — End-Range Control
                </figcaption>
              </figure>

              <div className="sm:col-span-6 border border-stone bg-ivory p-3.5 sm:p-5 flex flex-col justify-between">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-forest">
                    Editorial Note
                  </p>
                  <p className="mt-2 font-serif italic text-base sm:text-xl leading-snug text-graphite">
                    Instruction defined by principles, not personalities.
                  </p>
                </div>
                <p className="mt-3 text-[11px] sm:text-xs leading-relaxed text-graphite-soft">
                  As a fictional portfolio concept, AAC presents its coaching
                  standard through movement methodology rather than fabricated
                  instructor biographies or stock-model rosters.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Coaching Philosophy & Principles (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <h2
                id="coaching-heading"
                className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.025em] leading-[1.06] text-graphite"
              >
                Attentive instruction that meets you{" "}
                <span className="font-serif italic font-normal text-forest">
                  where you are.
                </span>
              </h2>
              <p className="mt-5 text-base sm:text-lg leading-relaxed text-graphite-soft">
                Whether you are learning how to organize your spine under a
                barbell for the first time or refining tempo and bar speed after
                years of training, our coaching philosophy centers on calm,
                actionable feedback.
              </p>
            </div>

            {/* 3 Coaching Principles */}
            <div className="border-t border-stone divide-y divide-stone">
              {COACHING_PRINCIPLES.map((principle) => (
                <article key={principle.index} className="py-5 sm:py-8">
                  <div className="flex items-baseline gap-3.5 sm:gap-4">
                    <span className="font-serif italic text-xl sm:text-2xl text-forest shrink-0">
                      {principle.index}
                    </span>
                    <div className="space-y-1.5 sm:space-y-2.5">
                      <h3 className="text-base sm:text-xl font-bold text-graphite">
                        {principle.title}
                      </h3>
                      <p className="text-xs sm:text-sm font-medium text-graphite">
                        {principle.summary}
                      </p>
                      <p className="text-xs sm:text-sm leading-relaxed text-graphite-soft">
                        {principle.application}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Actionable Links */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#membership"
                className="inline-flex items-center justify-center bg-graphite px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-ivory transition-colors duration-200 hover:bg-forest"
              >
                Compare Coached Tiers
              </a>
              <a
                href="#programs"
                className="inline-flex items-center justify-center border border-graphite bg-transparent px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-graphite transition-colors duration-200 hover:bg-graphite hover:text-ivory"
              >
                Review Small-Group Format
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
