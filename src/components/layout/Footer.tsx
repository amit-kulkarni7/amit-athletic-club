import Link from "next/link";
import { NAV_ITEMS, PROGRAMS, SITE_META } from "@/data/siteContent";

export function Footer() {
  return (
    <footer className="bg-graphite text-ivory border-t border-stone/30">
      <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-12 py-12 sm:py-16">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-10 sm:pb-12 border-b border-stone/20">
          {/* Brand Identity Column (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
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

            <p className="text-xs sm:text-sm leading-relaxed text-stone max-w-md">
              A contemporary athletic club concept uniting progressive barbell
              strength, functional conditioning, guided recovery, and attentive
              small-group coaching.
            </p>

            {/* Single subtle concept location reference */}
            <p className="pt-1 text-xs uppercase tracking-[0.16em] text-stone">
              Denver, Colorado — Concept Location
            </p>
          </div>

          {/* Club Pages Navigation (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-stone">
              Club Directory
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

          {/* Disciplines Quick Links (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-stone">
              Training Disciplines
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
        </div>

        {/* Fictional Business Disclosure Note */}
        <div
          role="note"
          aria-label="Fictional brand disclosure"
          className="mt-8 border border-stone/25 bg-forest/20 p-4 sm:p-5"
        >
          <p className="text-xs leading-relaxed text-ivory/95">
            AMIT ATHLETIC CLUB is a fictional fitness brand created as a
            portfolio demonstration. No physical club or services are offered.
          </p>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-stone">
          <p>© 2026 {SITE_META.brandName}. All rights reserved.</p>
          <p className="font-serif italic text-xs normal-case tracking-normal text-stone">
            {SITE_META.tagline}
          </p>
        </div>
      </div>
    </footer>
  );
}
