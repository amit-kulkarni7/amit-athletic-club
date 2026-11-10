import Link from "next/link";
import { SITE_META } from "@/data/siteContent";

export function FinalCtaSection() {
  return (
    <section
      id="final-cta"
      aria-labelledby="final-cta-heading"
      className="border-b border-stone bg-forest text-ivory py-12 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-12">
        <div className="border border-stone/40 bg-graphite p-7 sm:p-12 lg:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-end">
            <div className="lg:col-span-8 space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-stone">
                {SITE_META.conceptLocation} · {SITE_META.tagline}
              </p>

              <h2
                id="final-cta-heading"
                className="text-3xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-[-0.03em] leading-[0.98] text-ivory"
              >
                Begin With{" "}
                <span className="font-serif italic font-normal normal-case tracking-normal text-stone">
                  Intention.
                </span>
              </h2>

              <p className="max-w-2xl text-sm sm:text-base leading-relaxed text-stone">
                Explore our membership plans, browse the weekly training
                schedule, or test the interactive inquiry form for this
                portfolio concept.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3.5">
              <Link
                href="/memberships"
                className="inline-flex min-h-[48px] items-center justify-center bg-ivory px-7 text-xs font-semibold uppercase tracking-[0.2em] text-graphite transition-colors duration-200 hover:bg-stone"
              >
                Compare Memberships
              </Link>
              <Link
                href="/contact"
                className="inline-flex min-h-[48px] items-center justify-center border border-stone/60 bg-transparent px-7 text-xs font-semibold uppercase tracking-[0.2em] text-ivory transition-colors duration-200 hover:bg-forest hover:border-forest"
              >
                Inquire &amp; Contact
              </Link>
            </div>
          </div>

          <div className="mt-8 pt-5 border-t border-stone/25 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-stone">
            <span>
              Portfolio Concept Demonstration — Denver, Colorado
            </span>
            <a
              href="#top"
              className="inline-flex items-center gap-2 font-semibold uppercase tracking-[0.18em] text-ivory hover:text-stone transition-colors duration-200"
            >
              <span>Return to Top</span>
              <span aria-hidden="true">↑</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
