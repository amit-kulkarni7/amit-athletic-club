import Link from "next/link";
import { NAV_ITEMS, PROGRAMS, SITE_META } from "@/data/siteContent";

export function Footer() {
  return (
    <footer className="bg-graphite text-ivory border-t border-stone/30">
      <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-12 py-12 sm:py-16 lg:py-20">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-8 pb-10 sm:pb-12 border-b border-stone/25">
          {/* Brand Identity Column (4 cols) */}
          <div className="col-span-2 lg:col-span-4 space-y-4 sm:space-y-5">
            <Link
              href="/"
              className="inline-flex items-center gap-3.5 text-ivory group"
              aria-label="AMIT ATHLETIC CLUB — Home"
            >
              <span
                aria-hidden="true"
                className="inline-flex h-10 w-10 items-center justify-center border border-stone/60 bg-forest text-ivory font-serif text-lg tracking-wider transition-colors duration-200 group-hover:bg-ivory group-hover:text-graphite"
              >
                {SITE_META.monogram}
              </span>
              <span className="flex flex-col">
                <span className="text-sm font-bold tracking-[0.22em] uppercase leading-none">
                  {SITE_META.brandName}
                </span>
                <span className="mt-1 text-[10px] tracking-[0.18em] uppercase text-stone leading-none">
                  {SITE_META.tagline}
                </span>
              </span>
            </Link>

            <p className="text-xs sm:text-sm leading-relaxed text-stone max-w-sm">
              A contemporary athletic club concept uniting progressive barbell
              strength, functional conditioning, guided recovery, and attentive
              small-group coaching.
            </p>
          </div>

          {/* Club Pages Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-3.5">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-stone">
              Pages
            </h2>
            <ul className="space-y-2 text-xs">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-flex items-baseline gap-2 text-ivory/90 hover:text-stone transition-colors duration-150"
                  >
                    <span className="font-serif italic text-stone">
                      {item.index}
                    </span>
                    <span className="uppercase tracking-[0.14em]">
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Disciplines Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3.5">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-stone">
              Training Programs
            </h2>
            <ul className="space-y-2 text-xs">
              {PROGRAMS.map((program) => (
                <li key={program.id}>
                  <Link
                    href={`/programs#${program.id}`}
                    className="text-ivory/90 hover:text-stone transition-colors duration-150 uppercase tracking-[0.12em]"
                  >
                    {program.title}
                  </Link>
                </li>
              ))}
              <li className="pt-1">
                <Link
                  href="/programs#weekly-schedule"
                  className="text-stone hover:text-ivory transition-colors duration-150 uppercase tracking-[0.12em]"
                >
                  Weekly Class Schedule →
                </Link>
              </li>
            </ul>
          </div>

          {/* Concept Location & Hours (3 cols) */}
          <div className="col-span-2 lg:col-span-3 space-y-3.5">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-stone">
              Concept Location
            </h2>
            <div className="space-y-1 text-xs text-ivory/90">
              <p className="font-semibold uppercase tracking-[0.14em]">
                {SITE_META.conceptLocation}
              </p>
              <p className="text-stone">{SITE_META.conceptMarketNote}</p>
            </div>

            <div className="pt-2 space-y-1.5 text-xs">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-stone">
                Illustrative Sample Hours
              </p>
              {SITE_META.conceptHours.map((slot) => (
                <p
                  key={slot.days}
                  className="flex items-center justify-between gap-2 text-ivory/85"
                >
                  <span>{slot.days}</span>
                  <span className="text-stone">{slot.hours}</span>
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Portfolio Demonstration Disclosure Box */}
        <div
          role="note"
          aria-label="Portfolio demonstration disclosure"
          className="mt-8 border border-stone/30 bg-forest/25 p-5 sm:p-6 flex flex-col lg:flex-row lg:items-center justify-between gap-4"
        >
          <div className="space-y-1">
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-stone">
              Portfolio Demonstration Disclosure
            </p>
            <p className="text-xs sm:text-sm leading-relaxed text-ivory">
              {SITE_META.disclosure}
            </p>
          </div>
          <span className="shrink-0 text-[11px] uppercase tracking-[0.18em] text-stone border border-stone/40 px-3 py-1.5 self-start lg:self-center">
            GYM-M3 · Polished Edition
          </span>
        </div>

        {/* Bottom Copyright & Meta Line */}
        <div className="mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-stone">
          <p>
            © 2026 {SITE_META.brandName}. Software Engineering Portfolio
            Project.
          </p>
          <p className="uppercase tracking-[0.16em]">
            All Pricing Illustrative USD ($) · Photography via Unsplash License
          </p>
        </div>
      </div>
    </footer>
  );
}
