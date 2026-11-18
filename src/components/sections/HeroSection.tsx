import Image from "next/image";
import Link from "next/link";
import { HERO_LEDGER, SITE_META } from "@/data/siteContent";

export function HeroSection() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative border-b border-stone bg-ivory overflow-hidden"
    >
      <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-12 pt-5 pb-10 sm:pt-12 sm:pb-16 lg:py-20">
        {/* Top Metadata Row */}
        <div className="flex flex-wrap items-center justify-between gap-2 sm:gap-4 pb-4 sm:pb-8 mb-5 sm:mb-10 border-b border-stone">
          <div className="inline-flex items-center gap-2.5 sm:gap-3">
            <span
              aria-hidden="true"
              className="inline-block h-2 w-2 bg-forest"
            />
            <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-forest">
              {SITE_META.tagline}
            </span>
          </div>
          <p className="hidden sm:block text-xs uppercase tracking-[0.18em] text-graphite-soft">
            All-Round Athletic Club
          </p>
        </div>

        {/* Main 12-Column Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 sm:gap-10 lg:gap-12 items-start">
          {/* Left Editorial Column (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-graphite-soft mb-2.5 sm:mb-4">
                All-Round Athletic Club · Beginners to Experienced Athletes
              </p>

              <h1
                id="hero-heading"
                className="text-[2.5rem] sm:text-6xl xl:text-[4.5rem] font-bold uppercase tracking-[-0.03em] leading-[0.95] text-graphite"
              >
                Move With{" "}
                <span className="font-serif italic font-normal normal-case tracking-normal text-forest block sm:inline">
                  Intention.
                </span>
              </h1>

              <p className="mt-4 sm:mt-8 max-w-xl text-sm sm:text-lg leading-relaxed text-graphite-soft">
                A calm, thoughtfully equipped fitness club concept designed for
                both first-time lifters and experienced athletes. Bringing
                together barbell strength, functional conditioning, guided
                mobility, and small-group coaching under one roof.
              </p>
            </div>

            {/* Actionable Route CTAs */}
            <div className="mt-5 sm:mt-10 grid grid-cols-2 sm:flex sm:flex-row sm:items-center gap-2.5 sm:gap-4">
              <Link
                href="/memberships"
                className="inline-flex min-h-[48px] items-center justify-center bg-graphite px-4 sm:px-7 py-3 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-ivory text-center transition-colors duration-200 hover:bg-forest"
              >
                Explore Memberships
              </Link>
              <Link
                href="/programs"
                className="inline-flex min-h-[48px] items-center justify-center border border-graphite bg-transparent px-4 sm:px-7 py-3 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-graphite text-center transition-colors duration-200 hover:bg-graphite hover:text-ivory"
              >
                Explore Programs
              </Link>
            </div>

            {/* Editorial Pull-Notes */}
            <div className="hidden sm:grid mt-10 sm:mt-12 pt-6 border-t border-stone grid-cols-2 gap-6">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-forest">
                  01 / Unhurried Environment
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-graphite-soft">
                  Spacious lifting platforms, open turf, and natural daylight—free
                  from overcrowded gym clutter.
                </p>
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-forest">
                  02 / Supportive Progression
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-graphite-soft">
                  Welcoming starting points for beginners alongside structured
                  programming for seasoned lifters.
                </p>
              </div>
            </div>
          </div>

          {/* Right Photography Column (5 cols) */}
          <div className="lg:col-span-5">
            <figure className="border border-stone bg-ivory-muted p-2.5 sm:p-4">
              <div className="relative aspect-[16/10] sm:aspect-[16/11] lg:aspect-[5/6] w-full overflow-hidden bg-graphite">
                <Image
                  src="/images/hero-barbell-intent.jpg"
                  alt="Athlete setting hands on a loaded barbell over dark rubber gym flooring in natural directional light"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover object-center"
                />
              </div>
              <figcaption className="mt-2.5 sm:mt-3 pt-2 sm:pt-2.5 border-t border-stone flex items-center justify-between gap-4 text-[10px] sm:text-[11px] uppercase tracking-[0.15em] text-graphite-soft">
                <span>Strength &amp; Free-Weight Floor</span>
                <span className="font-serif italic normal-case tracking-normal text-xs sm:text-sm text-graphite">
                  Focus &amp; Form
                </span>
              </figcaption>
            </figure>
          </div>
        </div>

        {/* Bottom Club Highlights Ledger */}
        <dl className="mt-7 sm:mt-16 grid grid-cols-2 lg:grid-cols-4 border border-stone bg-ivory-muted/60 divide-y sm:divide-y-0 divide-x divide-stone">
          {HERO_LEDGER.map((item) => (
            <div key={item.label} className="p-3.5 sm:p-6">
              <dt className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.18em] text-forest">
                {item.label}
              </dt>
              <dd className="mt-1.5 text-xs sm:text-sm font-medium text-graphite leading-snug">
                {item.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
