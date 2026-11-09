import Image from "next/image";
import Link from "next/link";

export function ClubIntroSection() {
  return (
    <section
      id="club"
      aria-labelledby="club-intro-heading"
      className="border-b border-stone bg-ivory py-12 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-12">
        {/* Section Index Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-5 border-b border-stone">
          <div className="flex items-baseline gap-3">
            <span className="font-serif italic text-xl text-forest">01</span>
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-graphite">
              The Club &amp; Philosophy
            </span>
          </div>
          <span className="text-xs uppercase tracking-[0.18em] text-graphite-soft">
            Thoughtful Space · Approachable Training
          </span>
        </div>

        {/* Asymmetric Editorial Layout */}
        <div className="mt-8 sm:mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-14 items-center">
          {/* Narrative Column (6 cols) */}
          <div className="lg:col-span-6 space-y-5 sm:space-y-6">
            <h2
              id="club-intro-heading"
              className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-[-0.025em] leading-[1.08] text-graphite"
            >
              A training space designed for{" "}
              <span className="font-serif italic font-normal text-forest">
                focus, progress,
              </span>{" "}
              and long-term health.
            </h2>

            <p className="text-base sm:text-lg leading-relaxed text-graphite">
              Many fitness clubs ask you to choose between an overcrowded weight
              room and high-pressure group classes that value sweat over good
              technique. AMIT ATHLETIC CLUB was created as a calmer, more
              welcoming alternative.
            </p>

            <p className="text-sm sm:text-base leading-relaxed text-graphite-soft">
              Whether you are learning your first barbell squat or following a
              structured strength program, our floor gives you room to breathe,
              dependable equipment, and coaches who take the time to help you
              move well.
            </p>

            {/* Three Core Zones Summary */}
            <div className="border-t border-stone pt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              <div className="border-l-2 border-forest pl-3.5">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-graphite">
                  Strength Floor
                </p>
                <p className="mt-1 text-xs leading-relaxed text-graphite-soft">
                  Power racks, platforms, and free weights with generous space.
                </p>
              </div>

              <div className="border-l-2 border-stone pl-3.5">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-graphite">
                  Turf Lane
                </p>
                <p className="mt-1 text-xs leading-relaxed text-graphite-soft">
                  Open turf for kettlebells, sleds, carries, and conditioning.
                </p>
              </div>

              <div className="border-l-2 border-stone pl-3.5">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-graphite">
                  Recovery Studio
                </p>
                <p className="mt-1 text-xs leading-relaxed text-graphite-soft">
                  A quiet, sunlit room for guided stretching and mobility.
                </p>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-6">
              <Link
                href="/about"
                className="inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-graphite border-b border-graphite pb-1.5 transition-colors duration-200 hover:text-forest hover:border-forest"
              >
                <span>Explore the Club &amp; Facilities</span>
                <span aria-hidden="true">→</span>
              </Link>
              <Link
                href="/programs"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-graphite-soft transition-colors duration-200 hover:text-graphite"
              >
                <span>View Programs</span>
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          {/* Dual Photography Composition (6 cols) */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-6 items-end">
            <figure className="sm:col-span-8 border border-stone bg-ivory-muted p-2.5 sm:p-3">
              <div className="relative aspect-[16/10] sm:aspect-[4/5] w-full overflow-hidden bg-graphite">
                <Image
                  src="/images/club-architecture-weights.jpg"
                  alt="Rows of aligned black dumbbells in a spacious, naturally lit athletic club strength floor"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 66vw, 35vw"
                  className="object-cover object-center"
                />
              </div>
              <figcaption className="mt-2.5 flex items-center justify-between text-[11px] uppercase tracking-[0.15em] text-graphite-soft">
                <span>Free-Weight Floor</span>
                <span>Natural Daylight</span>
              </figcaption>
            </figure>

            <div className="sm:col-span-4 grid grid-cols-2 sm:flex sm:flex-col gap-3 sm:gap-6">
              <div className="border border-stone bg-ivory-muted p-4 sm:p-5 flex flex-col justify-between">
                <p className="font-serif italic text-lg sm:text-2xl leading-snug text-graphite">
                  &ldquo;Nothing ornamental. Everything required to move well.&rdquo;
                </p>
                <p className="mt-3 text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-forest">
                  Club Ethos
                </p>
              </div>

              <figure className="border border-stone bg-ivory-muted p-2.5 sm:p-3 flex flex-col justify-between">
                <div className="relative aspect-square w-full overflow-hidden bg-graphite">
                  <Image
                    src="/images/club-detail-plates.jpg"
                    alt="Close-up of calibrated black bumper plates and a steel barbell resting on rubber flooring"
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 18vw"
                    className="object-cover object-center"
                  />
                </div>
                <figcaption className="mt-2 text-[10px] uppercase tracking-[0.14em] text-graphite-soft">
                  Barbell &amp; Plates
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
