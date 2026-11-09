import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ABOUT_FACILITIES,
  ABOUT_VALUES,
  SITE_META,
} from "@/data/siteContent";

export const metadata: Metadata = {
  title: "About the Club & Philosophy",
  description:
    "Explore the training philosophy, calm club environment, and core values behind AMIT ATHLETIC CLUB — a fictional Denver fitness club concept.",
};

export default function AboutPage() {
  return (
    <div className="bg-ivory text-graphite">
      {/* Page Header */}
      <section
        aria-labelledby="about-hero-heading"
        className="border-b border-graphite/15 pt-12 pb-16 sm:pt-16 sm:pb-24"
      >
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-graphite/15 pb-4">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs font-semibold tracking-[0.2em] text-forest uppercase">
                01 / THE CLUB & PHILOSOPHY
              </span>
              <span className="hidden h-1 w-1 rounded-full bg-forest sm:inline-block" />
              <span className="hidden font-mono text-xs tracking-[0.16em] text-graphite-muted uppercase sm:inline-block">
                {SITE_META.conceptLocation}
              </span>
            </div>
            <span className="font-mono text-[11px] tracking-[0.16em] text-graphite-muted uppercase">
              STRENGTH · MOVEMENT · INTENTION
            </span>
          </div>

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end lg:gap-12">
            <div className="lg:col-span-8">
              <h1
                id="about-hero-heading"
                className="text-4xl leading-[0.98] font-semibold tracking-[-0.03em] text-graphite uppercase sm:text-6xl lg:text-[4.25rem]"
              >
                A calmer place to build{" "}
                <span className="font-serif font-normal tracking-normal text-forest lowercase italic">
                  lasting
                </span>{" "}
                strength.
              </h1>
            </div>
            <div className="lg:col-span-4">
              <p className="text-base leading-relaxed text-graphite-muted sm:text-lg">
                AMIT ATHLETIC CLUB was imagined around a simple idea: serious
                strength training, athletic conditioning, and restorative
                mobility belong under one roof—in a space that feels welcoming
                on day one and rewarding in year ten.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Story & Dual Photography */}
      <section
        aria-labelledby="about-story-heading"
        className="border-b border-graphite/15 py-20 sm:py-28"
      >
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-12">
            <div className="flex flex-col justify-between lg:col-span-5">
              <div>
                <p className="mb-3 font-mono text-xs font-semibold tracking-[0.18em] text-forest uppercase">
                  OUR TRAINING PHILOSOPHY
                </p>
                <h2
                  id="about-story-heading"
                  className="text-2xl leading-[1.12] font-semibold tracking-[-0.02em] text-graphite sm:text-3xl"
                >
                  Built for both first-time lifters and experienced gym-goers.
                </h2>

                <div className="mt-6 space-y-5 text-base leading-relaxed text-graphite-muted">
                  <p>
                    Most gyms ask you to choose between two extremes: crowded,
                    high-noise studios focused on daily exhaustion, or
                    intimidating weight rooms with little guidance. We designed
                    AMIT ATHLETIC CLUB to bridge that divide.
                  </p>
                  <p>
                    Here, foundational barbell lifting shares the floor with
                    functional turf conditioning and a quiet, sunlit recovery
                    studio. Whether you are learning how to set up a squat rack
                    for the first time or following a multi-month strength
                    cycle, the environment gives you room to breathe, focus, and
                    progress at a sustainable pace.
                  </p>
                </div>
              </div>

              <div className="mt-10 border-t border-graphite/15 pt-8">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <span className="font-mono text-[11px] font-semibold tracking-[0.18em] text-forest uppercase">
                      FOR NEWCOMERS
                    </span>
                    <p className="mt-2 text-sm leading-relaxed text-graphite-muted">
                      Every membership begins with a complimentary 45-minute
                      welcome orientation so you feel comfortable with the
                      racks, weights, and class formats from your first visit.
                    </p>
                  </div>
                  <div>
                    <span className="font-mono text-[11px] font-semibold tracking-[0.18em] text-forest uppercase">
                      FOR EXPERIENCED LIFTERS
                    </span>
                    <p className="mt-2 text-sm leading-relaxed text-graphite-muted">
                      Calibrated plates, dedicated lifting platforms, open turf
                      lanes, and coaches who understand structured progression
                      and recovery.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-12">
                <figure className="sm:col-span-7">
                  <div className="relative aspect-[4/5] w-full overflow-hidden border border-graphite/15 bg-graphite">
                    <Image
                      src="/images/club-architecture-weights.jpg"
                      alt="Spacious strength floor at AMIT ATHLETIC CLUB with natural light and organized free weights"
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 58vw, 40vw"
                      className="object-cover object-center"
                    />
                  </div>
                  <figcaption className="mt-2.5 flex items-center justify-between font-mono text-[11px] tracking-[0.14em] text-graphite-muted uppercase">
                    <span>Main Strength Floor</span>
                    <span>Natural Daylight & Open Walkways</span>
                  </figcaption>
                </figure>

                <div className="flex flex-col justify-between gap-6 sm:col-span-5">
                  <figure>
                    <div className="relative aspect-[4/3] w-full overflow-hidden border border-graphite/15 bg-graphite">
                      <Image
                        src="/images/about-rack-studio.jpg"
                        alt="Power racks and lifting platforms arranged in a calm studio setting"
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 42vw, 28vw"
                        className="object-cover object-center"
                      />
                    </div>
                    <figcaption className="mt-2.5 font-mono text-[11px] tracking-[0.14em] text-graphite-muted uppercase">
                      Dedicated Power Racks & Platforms
                    </figcaption>
                  </figure>

                  <div className="border border-graphite/15 bg-ivory-warm p-6">
                    <span className="font-mono text-[10px] font-semibold tracking-[0.18em] text-forest uppercase">
                      CONCEPT NOTE
                    </span>
                    <p className="mt-2.5 font-serif text-xl leading-snug text-graphite italic">
                      &ldquo;Training is not a test you have to pass every day.
                      It is a practice that supports the rest of your
                      life.&rdquo;
                    </p>
                    <p className="mt-3 font-mono text-[11px] tracking-[0.14em] text-graphite-muted uppercase">
                      — AAC Founding Principle
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facility Spaces */}
      <section
        aria-labelledby="about-facilities-heading"
        className="border-b border-graphite/15 bg-ivory-warm py-20 sm:py-28"
      >
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="mb-14 grid grid-cols-1 gap-8 border-b border-graphite/15 pb-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <span className="font-mono text-xs font-semibold tracking-[0.2em] text-forest uppercase">
                02 / THE TRAINING ENVIRONMENT
              </span>
              <h2
                id="about-facilities-heading"
                className="mt-3 text-3xl leading-[1.06] font-semibold tracking-[-0.025em] text-graphite uppercase sm:text-5xl"
              >
                Four distinct spaces under{" "}
                <span className="font-serif font-normal tracking-normal text-forest lowercase italic">
                  one roof.
                </span>
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-base leading-relaxed text-graphite-muted">
                Every zone of the club is arranged so heavy lifting, dynamic
                conditioning, coached small groups, and quiet stretching each
                have their own dedicated floor space.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-px border border-graphite/15 bg-graphite/15 md:grid-cols-2">
            {ABOUT_FACILITIES.map((area) => (
              <article
                key={area.index}
                className="flex flex-col justify-between bg-ivory p-7 sm:p-10"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-graphite/15 pb-4">
                    <span className="font-mono text-xs font-semibold tracking-[0.18em] text-forest uppercase">
                      {area.index}
                    </span>
                    <span className="font-mono text-[11px] tracking-[0.14em] text-graphite-muted uppercase">
                      DEDICATED ZONE
                    </span>
                  </div>

                  <h3 className="mt-6 text-2xl font-semibold tracking-[-0.02em] text-graphite">
                    {area.name}
                  </h3>
                  <p className="mt-2 font-serif text-lg text-forest italic">
                    {area.summary}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-graphite-muted sm:text-base">
                    {area.description}
                  </p>
                </div>

                <div className="mt-8 border-t border-graphite/10 pt-5">
                  <span className="font-mono text-[10px] font-semibold tracking-[0.18em] text-graphite-muted uppercase">
                    SPACE HIGHLIGHTS
                  </span>
                  <ul className="mt-3 space-y-2">
                    {area.highlights.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-sm text-graphite"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-forest"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section
        aria-labelledby="about-values-heading"
        className="border-b border-graphite/15 bg-graphite py-20 text-ivory sm:py-28"
      >
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="mb-14 grid grid-cols-1 gap-8 border-b border-ivory/15 pb-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <span className="font-mono text-xs font-semibold tracking-[0.2em] text-stone uppercase">
                03 / CORE VALUES
              </span>
              <h2
                id="about-values-heading"
                className="mt-3 text-3xl leading-[1.06] font-semibold tracking-[-0.025em] text-ivory uppercase sm:text-5xl"
              >
                What guides every{" "}
                <span className="font-serif font-normal tracking-normal text-stone lowercase italic">
                  session.
                </span>
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-base leading-relaxed text-stone">
                Our standards are simple: treat members with respect, keep the
                floor organized, and prioritize long-term capability over
                short-term gimmicks.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-px border border-ivory/15 bg-ivory/15 sm:grid-cols-2 lg:grid-cols-4">
            {ABOUT_VALUES.map((val) => (
              <article
                key={val.index}
                className="flex flex-col justify-between bg-graphite p-7 sm:p-8"
              >
                <div>
                  <span className="font-mono text-xs font-semibold tracking-[0.18em] text-stone uppercase">
                    VALUE {val.index}
                  </span>
                  <h3 className="mt-5 text-xl font-semibold tracking-tight text-ivory">
                    {val.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-stone/90">
                    {val.description}
                  </p>
                </div>
                <div className="mt-8 border-t border-ivory/10 pt-4">
                  <span className="font-mono text-[10px] tracking-[0.16em] text-stone/70 uppercase">
                    AMIT ATHLETIC CLUB
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section
        aria-labelledby="about-cta-heading"
        className="py-20 sm:py-24"
      >
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 gap-10 border border-graphite/15 bg-ivory-warm p-8 sm:p-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <span className="font-mono text-xs font-semibold tracking-[0.2em] text-forest uppercase">
                NEXT STEP
              </span>
              <h2
                id="about-cta-heading"
                className="mt-3 text-3xl leading-[1.08] font-semibold tracking-[-0.025em] text-graphite uppercase sm:text-4xl"
              >
                Explore our training programs or compare membership plans.
              </h2>
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-graphite-muted">
                See how our four core disciplines fit together across the week,
                or review our illustrative monthly and annual membership tiers.
              </p>
            </div>
            <div className="flex flex-col gap-3.5 sm:flex-row lg:col-span-5 lg:justify-end">
              <Link
                href="/programs"
                className="inline-flex h-12 items-center justify-center bg-forest px-7 text-xs font-semibold tracking-[0.18em] text-ivory uppercase transition-colors hover:bg-forest-light"
              >
                Explore Programs
              </Link>
              <Link
                href="/memberships"
                className="inline-flex h-12 items-center justify-center border border-graphite px-7 text-xs font-semibold tracking-[0.18em] text-graphite uppercase transition-colors hover:bg-graphite hover:text-ivory"
              >
                View Memberships
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
