import type { Metadata } from "next";
import Link from "next/link";
import { MembershipsInteractive } from "@/components/memberships/MembershipsInteractive";
import { SITE_META } from "@/data/siteContent";

export const metadata: Metadata = {
  title: "Memberships & Pricing",
  description:
    "Compare AMIT ATHLETIC CLUB's three illustrative membership tiers in USD, toggle between monthly and annual billing, and explore side-by-side plan features.",
  openGraph: {
    title: "Memberships & Pricing | AMIT ATHLETIC CLUB",
    description:
      "Compare AMIT ATHLETIC CLUB's three illustrative membership tiers in USD, toggle between monthly and annual billing, and explore side-by-side plan features.",
  },
};

export default function MembershipsPage() {
  return (
    <div className="bg-ivory text-graphite">
      {/* Page Header */}
      <section
        aria-labelledby="memberships-hero-heading"
        className="border-b border-graphite/15 pt-12 pb-16 sm:pt-16 sm:pb-20"
      >
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-graphite/15 pb-4">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs font-semibold tracking-[0.2em] text-forest uppercase">
                01 / MEMBERSHIP PLANS & ACCESS
              </span>
              <span className="hidden h-1 w-1 rounded-full bg-forest sm:inline-block" />
              <span className="hidden font-mono text-xs tracking-[0.16em] text-graphite-muted uppercase sm:inline-block">
                {SITE_META.conceptLocation}
              </span>
            </div>
            <span className="font-mono text-[11px] tracking-[0.16em] text-graphite-muted uppercase">
              USD ($) Pricing · Portfolio Concept
            </span>
          </div>

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end lg:gap-12">
            <div className="lg:col-span-8">
              <h1
                id="memberships-hero-heading"
                className="text-4xl leading-[0.98] font-semibold tracking-[-0.03em] text-graphite uppercase sm:text-6xl lg:text-[4.25rem]"
              >
                Transparent plans built around{" "}
                <span className="font-serif font-normal tracking-normal text-forest lowercase italic">
                  how you train.
                </span>
              </h1>
            </div>
            <div className="lg:col-span-4">
              <p className="text-base leading-relaxed text-graphite-muted sm:text-lg">
                Every membership includes full access to our Strength Floor,
                Functional Turf Lane, and Mobility Studio, plus a personal
                45-minute welcome orientation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Pricing Toggle, Cards & Feature Comparison */}
      <MembershipsInteractive />

      {/* Bottom Orientation & Questions CTA */}
      <section
        aria-labelledby="memberships-cta-heading"
        className="py-20 sm:py-24"
      >
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 gap-10 border border-graphite/15 bg-ivory-warm p-8 sm:p-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <span className="font-mono text-xs font-semibold tracking-[0.2em] text-forest uppercase">
                WELCOME ORIENTATION
              </span>
              <h2
                id="memberships-cta-heading"
                className="mt-3 text-3xl leading-[1.08] font-semibold tracking-[-0.025em] text-graphite uppercase sm:text-4xl"
              >
                Have questions or want to explore an orientation visit?
              </h2>
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-graphite-muted">
                Use our online inquiry form to ask about a membership tier or
                orientation visit, or meet our coaching team.
              </p>
            </div>
            <div className="flex flex-col gap-3.5 sm:flex-row lg:col-span-5 lg:justify-end">
              <Link
                href="/contact?type=trial"
                className="inline-flex h-12 items-center justify-center bg-forest px-7 text-xs font-semibold tracking-[0.18em] text-ivory uppercase transition-colors hover:bg-forest-light"
              >
                Orientation Inquiry
              </Link>
              <Link
                href="/trainers"
                className="inline-flex h-12 items-center justify-center border border-graphite px-7 text-xs font-semibold tracking-[0.18em] text-graphite uppercase transition-colors hover:bg-graphite hover:text-ivory"
              >
                Meet Coaching Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
