import Link from "next/link";
import { ANNUAL_DISCOUNT_PERCENT, MEMBERSHIP_TIERS } from "@/data/siteContent";

export function MembershipSection() {
  return (
    <section
      id="membership"
      aria-labelledby="membership-heading"
      className="border-b border-stone bg-ivory py-12 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-12">
        {/* Section Index Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-5 border-b border-stone">
          <div className="flex items-baseline gap-3">
            <span className="font-serif italic text-xl text-forest">04</span>
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-graphite">
              Membership Options
            </span>
          </div>
          <Link
            href="/memberships"
            className="text-xs font-semibold uppercase tracking-[0.18em] text-forest hover:text-graphite transition-colors duration-200"
          >
            Compare All Features &amp; Annual Savings →
          </Link>
        </div>

        {/* Section Heading */}
        <div className="mt-8 sm:mt-12 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-end">
          <div className="lg:col-span-7">
            <h2
              id="membership-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.025em] leading-[1.06] text-graphite"
            >
              Straightforward plans built around{" "}
              <span className="font-serif italic font-normal text-forest">
                how you like to train.
              </span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-sm sm:text-base leading-relaxed text-graphite-soft">
              Choose from open-gym access, small-group classes, or personal
              coaching support. Save {ANNUAL_DISCOUNT_PERCENT}% with annual
              billing on the Memberships page. All prices are illustrative USD.
            </p>
          </div>
        </div>

        {/* Compact 3-Card Preview Grid */}
        <div className="mt-8 sm:mt-12 grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-0 border border-stone bg-ivory lg:divide-x lg:divide-stone">
          {MEMBERSHIP_TIERS.map((tier) => (
            <article
              key={tier.id}
              className={`flex flex-col justify-between p-5 sm:p-8 ${
                tier.featured
                  ? "bg-ivory-muted border-y lg:border-y-0 border-stone"
                  : "bg-ivory"
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 pb-4 border-b border-stone">
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-forest">
                    {tier.index}
                  </span>
                  {tier.badge ? (
                    <span className="bg-forest px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-ivory">
                      {tier.badge}
                    </span>
                  ) : (
                    <span className="text-[11px] uppercase tracking-[0.16em] text-graphite-soft">
                      Monthly or Annual
                    </span>
                  )}
                </div>

                <div className="mt-4">
                  <h3 className="text-xl sm:text-2xl font-bold tracking-[-0.015em] text-graphite">
                    {tier.name}
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm text-graphite-soft">
                    {tier.tagline}
                  </p>
                </div>

                <div className="mt-4 pt-4 border-t border-stone">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl sm:text-4xl font-bold tracking-[-0.03em] text-graphite">
                      ${tier.monthlyPriceUsd}
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-[0.16em] text-graphite-soft">
                      USD / Month
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-forest">
                    Or ${tier.effectiveAnnualMonthlyUsd}/mo billed annually
                    (save ${tier.annualSavingsUsd}/yr)
                  </p>
                </div>

                <p className="mt-4 text-xs sm:text-sm leading-relaxed text-graphite-soft">
                  {tier.shortDescription}
                </p>

                <ul className="mt-4 pt-4 border-t border-stone space-y-2">
                  {tier.includes.slice(0, 3).map((inc) => (
                    <li
                      key={inc}
                      className="flex items-start gap-2.5 text-xs leading-relaxed text-graphite"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 bg-forest"
                      />
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-stone flex flex-col gap-2.5">
                <Link
                  href={`/contact?type=membership&interest=${tier.id}&billing=monthly`}
                  className={`w-full inline-flex min-h-[48px] items-center justify-center px-5 text-xs font-semibold uppercase tracking-[0.18em] transition-colors duration-200 ${
                    tier.featured
                      ? "bg-forest text-ivory hover:bg-graphite"
                      : "border border-graphite bg-transparent text-graphite hover:bg-graphite hover:text-ivory"
                  }`}
                >
                  {tier.ctaLabel}
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Compact Route Callout to Full Comparison Page */}
        <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border border-stone bg-ivory-muted/60 p-5 sm:p-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-graphite">
              Looking for the full side-by-side plan comparison or annual
              billing calculator?
            </p>
            <p className="mt-1 text-xs text-graphite-soft">
              Compare every club amenity, class allowance, and coaching perk on
              our dedicated Memberships page.
            </p>
          </div>
          <Link
            href="/memberships"
            className="shrink-0 inline-flex min-h-[48px] items-center justify-center bg-graphite px-6 text-xs font-semibold uppercase tracking-[0.18em] text-ivory transition-colors duration-200 hover:bg-forest"
          >
            Full Membership Comparison →
          </Link>
        </div>
      </div>
    </section>
  );
}
