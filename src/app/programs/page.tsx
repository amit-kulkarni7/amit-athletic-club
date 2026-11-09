import type { Metadata } from "next";
import Link from "next/link";
import { ProgramsExplorer } from "@/components/programs/ProgramsExplorer";
import { SITE_META } from "@/data/siteContent";

export const metadata: Metadata = {
  title: "Training Programs & Weekly Schedule",
  description:
    "Explore AMIT ATHLETIC CLUB's four core training disciplines—Strength & Conditioning, Functional Training, Mobility & Recovery, and Small-Group Training—plus our illustrative weekly schedule.",
};

export default function ProgramsPage() {
  return (
    <div className="bg-ivory text-graphite">
      {/* Page Header */}
      <section
        aria-labelledby="programs-hero-heading"
        className="border-b border-graphite/15 pt-12 pb-16 sm:pt-16 sm:pb-20"
      >
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-graphite/15 pb-4">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs font-semibold tracking-[0.2em] text-forest uppercase">
                01 / TRAINING DISCIPLINES & SCHEDULE
              </span>
              <span className="hidden h-1 w-1 rounded-full bg-forest sm:inline-block" />
              <span className="hidden font-mono text-xs tracking-[0.16em] text-graphite-muted uppercase sm:inline-block">
                {SITE_META.conceptLocation}
              </span>
            </div>
            <a
              href="#weekly-schedule"
              className="font-mono text-xs font-semibold tracking-[0.16em] text-forest uppercase transition-colors hover:text-graphite"
            >
              Jump to Weekly Schedule ↓
            </a>
          </div>

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end lg:gap-12">
            <div className="lg:col-span-8">
              <h1
                id="programs-hero-heading"
                className="text-4xl leading-[0.98] font-semibold tracking-[-0.03em] text-graphite uppercase sm:text-6xl lg:text-[4.25rem]"
              >
                Four disciplines built to work{" "}
                <span className="font-serif font-normal tracking-normal text-forest lowercase italic">
                  together.
                </span>
              </h1>
            </div>
            <div className="lg:col-span-4">
              <p className="text-base leading-relaxed text-graphite-muted sm:text-lg">
                Filter our programs by discipline or experience level, review
                what to expect in each session, and explore our sample weekly
                class schedule.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Filter, Program Entries & Weekly Schedule */}
      <ProgramsExplorer />

      {/* Bottom CTA */}
      <section
        aria-labelledby="programs-cta-heading"
        className="py-20 sm:py-24"
      >
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 gap-10 border border-graphite/15 bg-ivory-warm p-8 sm:p-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <span className="font-mono text-xs font-semibold tracking-[0.2em] text-forest uppercase">
                NOT SURE WHERE TO START?
              </span>
              <h2
                id="programs-cta-heading"
                className="mt-3 text-3xl leading-[1.08] font-semibold tracking-[-0.025em] text-graphite uppercase sm:text-4xl"
              >
                Every membership starts with a personal orientation.
              </h2>
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-graphite-muted">
                Compare our membership options or test our demo inquiry form to
                see how an orientation or program question works.
              </p>
            </div>
            <div className="flex flex-col gap-3.5 sm:flex-row lg:col-span-5 lg:justify-end">
              <Link
                href="/memberships"
                className="inline-flex h-12 items-center justify-center bg-forest px-7 text-xs font-semibold tracking-[0.18em] text-ivory uppercase transition-colors hover:bg-forest-light"
              >
                Compare Memberships
              </Link>
              <Link
                href="/contact?type=trial"
                className="inline-flex h-12 items-center justify-center border border-graphite px-7 text-xs font-semibold tracking-[0.18em] text-graphite uppercase transition-colors hover:bg-graphite hover:text-ivory"
              >
                Orientation Inquiry
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
