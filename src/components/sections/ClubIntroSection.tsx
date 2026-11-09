import Image from "next/image";

export function ClubIntroSection() {
  return (
    <section
      id="club"
      aria-labelledby="club-intro-heading"
      className="border-b border-stone bg-ivory py-10 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-12">
        {/* Section Index Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-5 border-b border-stone">
          <div className="flex items-baseline gap-3">
            <span className="font-serif italic text-xl text-forest">01</span>
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-graphite">
              The Club &amp; Training Philosophy
            </span>
          </div>
          <span className="text-xs uppercase tracking-[0.18em] text-graphite-soft">
            Architectural Space · Deliberate Practice
          </span>
        </div>

        {/* Asymmetric Editorial Layout */}
        <div className="mt-8 sm:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-14 items-start">
          {/* Narrative Column (6 cols) */}
          <div className="lg:col-span-6 space-y-5 sm:space-y-8">
            <h2
              id="club-intro-heading"
              className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-[-0.025em] leading-[1.08] text-graphite"
            >
              A training environment designed for{" "}
              <span className="font-serif italic font-normal text-forest">
                clarity, progression,
              </span>{" "}
              and longevity.
            </h2>

            <p className="text-base sm:text-lg leading-relaxed text-graphite">
              Most fitness spaces force a compromise: overcrowded commercial
              floors built around distraction, or high-tempo classes that
              prioritize exhaustion over mechanics. AMIT ATHLETIC CLUB was
              conceived as a calmer, more intentional third option.
            </p>

            <p className="text-sm sm:text-base leading-relaxed text-graphite-soft">
              Set within an industrial-minimalist footprint in Denver, the club
              organizes strength, conditioning, and recovery into distinct
              architectural zones. Whether you are learning to hinge and brace
              with your first barbell or working through a structured peaking
              cycle, the floor gives you the space, equipment, and coaching
              context to train well.
            </p>

            {/* Architectural Spatial Breakdown */}
            <div className="border-t border-stone pt-8 space-y-6">
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-forest">
                Spatial Zoning — Three Integrated Environments
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="border-l-2 border-forest pl-4">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-graphite">
                    Zone I · Strength
                  </p>
                  <p className="mt-1.5 text-xs leading-relaxed text-graphite-soft">
                    Calibrated barbells, power racks, and precision free weights
                    with generous platform spacing.
                  </p>
                </div>

                <div className="border-l-2 border-stone pl-4">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-graphite">
                    Zone II · Turf Lane
                  </p>
                  <p className="mt-1.5 text-xs leading-relaxed text-graphite-soft">
                    Dedicated functional lane for kettlebells, sled work, heavy
                    ropes, and athletic footwork.
                  </p>
                </div>

                <div className="border-l-2 border-stone pl-4">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-graphite">
                    Zone III · Recovery
                  </p>
                  <p className="mt-1.5 text-xs leading-relaxed text-graphite-soft">
                    Acoustically separated daylit studio for joint mobility,
                    breathwork, and tissue restoration.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="#programs"
                className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-graphite border-b border-graphite pb-1.5 transition-colors duration-200 hover:text-forest hover:border-forest"
              >
                <span>Examine the Four Training Disciplines</span>
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>

          {/* Dual Photography Composition (6 cols) */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-6 items-end">
            {/* Primary Architectural Image */}
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
                <span>Fig. 01A — Free-Weight Bay</span>
                <span>Daylight Floor</span>
              </figcaption>
            </figure>

            {/* Secondary Detail Image + Editorial Callout */}
            <div className="sm:col-span-4 grid grid-cols-2 sm:flex sm:flex-col gap-3 sm:gap-6">
              <div className="border border-stone bg-ivory-muted p-4 sm:p-5 flex flex-col justify-between">
                <p className="font-serif italic text-lg sm:text-2xl leading-snug text-graphite">
                  &ldquo;Nothing ornamental. Everything required to move well.&rdquo;
                </p>
                <p className="mt-3 text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-forest">
                  Design Ethos
                </p>
              </div>

              <figure className="border border-stone bg-ivory-muted p-2.5 sm:p-3 flex flex-col justify-between">
                <div className="relative aspect-square w-full overflow-hidden bg-graphite">
                  <Image
                    src="/images/club-detail-plates.jpg"
                    alt="Monochrome close-up of calibrated black bumper plates and a steel barbell resting on rubber flooring"
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 18vw"
                    className="object-cover object-center"
                  />
                </div>
                <figcaption className="mt-2 text-[10px] uppercase tracking-[0.14em] text-graphite-soft">
                  Fig. 01B — Calibrated Plates
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
