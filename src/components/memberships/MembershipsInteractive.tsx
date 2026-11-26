"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ANNUAL_DISCOUNT_PERCENT,
  MEMBERSHIP_COMPARISON,
  MEMBERSHIP_TIERS,
  calculateAnnualDiscount,
  type MembershipComparisonRow,
} from "@/data/siteContent";

export type BillingCycle = "monthly" | "yearly";

type ComparisonFieldKey = keyof Pick<
  MembershipComparisonRow,
  "foundation" | "allRound" | "performance"
>;

const TIER_COMPARISON_KEY: Record<string, ComparisonFieldKey> = {
  foundation: "foundation",
  "all-round": "allRound",
  performance: "performance",
};

export function MembershipsInteractive() {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>("monthly");
  const isYearly = billingCycle === "yearly";

  const tierPricing = MEMBERSHIP_TIERS.map((tier) => {
    const annual = calculateAnnualDiscount(
      tier.monthlyPriceUsd,
      tier.annualDiscountPercent
    );
    const displayedMonthlyRate = isYearly
      ? annual.effectiveMonthlyRate
      : tier.monthlyPriceUsd;

    return {
      tier,
      annual,
      displayedMonthlyRate,
      comparisonKey: TIER_COMPARISON_KEY[tier.id] ?? "foundation",
    };
  });

  return (
    <div>
      <section
        aria-labelledby="plans-heading"
        className="border-b border-graphite/15 py-16 sm:py-24"
      >
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="mb-12 flex flex-col justify-between gap-6 border border-graphite/15 bg-ivory-muted p-6 sm:flex-row sm:items-center sm:p-8">
            <div>
              <h2
                id="plans-heading"
                className="text-xl font-semibold tracking-tight text-graphite sm:text-2xl"
              >
                Choose Your Billing Plan
              </h2>
              <p className="mt-1 text-sm text-graphite-soft">
                Switch between month-to-month flexibility and annual billing
                with a {ANNUAL_DISCOUNT_PERCENT}% savings across all three
                tiers.
              </p>
            </div>

            <div className="flex flex-col items-start gap-2.5 sm:items-end">
              <div
                role="group"
                aria-label="Billing period toggle"
                className="inline-flex w-full sm:w-auto border border-graphite/25 bg-ivory p-1"
              >
                <button
                  type="button"
                  aria-pressed={!isYearly}
                  onClick={() => setBillingCycle("monthly")}
                  className={`h-11 flex-1 sm:flex-initial px-4 sm:px-6 text-xs font-semibold tracking-[0.16em] uppercase transition-colors ${
                    !isYearly
                      ? "bg-graphite text-ivory"
                      : "text-graphite hover:bg-ivory-muted"
                  }`}
                >
                  Monthly Billing
                </button>
                <button
                  type="button"
                  aria-pressed={isYearly}
                  onClick={() => setBillingCycle("yearly")}
                  className={`inline-flex h-11 flex-1 sm:flex-initial items-center justify-center gap-2 px-4 sm:px-6 text-xs font-semibold tracking-[0.16em] uppercase transition-colors ${
                    isYearly
                      ? "bg-forest text-ivory"
                      : "text-graphite hover:bg-ivory-muted"
                  }`}
                >
                  <span>Yearly Billing</span>
                  <span
                    className={`px-1.5 py-0.5 font-mono text-[10px] font-semibold ${
                      isYearly
                        ? "bg-ivory text-forest"
                        : "bg-forest/15 text-forest"
                    }`}
                  >
                    SAVE {ANNUAL_DISCOUNT_PERCENT}%
                  </span>
                </button>
              </div>
              <span
                aria-live="polite"
                className="font-mono text-[11px] tracking-[0.14em] text-graphite-soft uppercase"
              >
                {isYearly
                  ? `Showing effective monthly rate billed annually (${ANNUAL_DISCOUNT_PERCENT}% discount applied)`
                  : "Showing standard month-to-month USD rate"}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-stretch">
            {tierPricing.map(({ tier, annual, displayedMonthlyRate }) => {
              const isFeatured = Boolean(tier.featured);

              return (
                <article
                  key={tier.id}
                  id={tier.id}
                  className={`flex flex-col justify-between border p-7 sm:p-9 ${
                    isFeatured
                      ? "border-forest bg-graphite text-ivory shadow-xl"
                      : "border-graphite/15 bg-ivory-muted text-graphite"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 border-b border-current/15 pb-4">
                      <span
                        className={`font-mono text-xs font-semibold tracking-[0.18em] uppercase ${
                          isFeatured ? "text-stone" : "text-forest"
                        }`}
                      >
                        {tier.index}
                      </span>
                      {tier.badge ? (
                        <span className="bg-forest px-2.5 py-1 font-mono text-[10px] font-semibold tracking-[0.18em] text-ivory uppercase">
                          {tier.badge}
                        </span>
                      ) : (
                        <span className="font-mono text-[10px] tracking-[0.16em] text-graphite-soft uppercase">
                          {isYearly ? "ANNUAL COMMITMENT" : "MONTH-TO-MONTH"}
                        </span>
                      )}
                    </div>

                    <div className="mt-6">
                      <h3 className="text-2xl font-semibold tracking-tight">
                        {tier.name}
                      </h3>
                      <p
                        className={`mt-1.5 text-sm leading-relaxed ${
                          isFeatured ? "text-stone" : "text-graphite-soft"
                        }`}
                      >
                        {tier.tagline}
                      </p>
                    </div>

                    <div className="mt-7 border-b border-current/15 pb-6">
                      <div className="flex items-baseline gap-2">
                        <span className="text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
                          ${displayedMonthlyRate}
                        </span>
                        <span
                          className={`font-mono text-xs tracking-[0.14em] uppercase ${
                            isFeatured ? "text-stone" : "text-graphite-soft"
                          }`}
                        >
                          USD / month
                        </span>
                        {isYearly && (
                          <span
                            className={`ml-1 font-mono text-xs line-through ${
                              isFeatured
                                ? "text-stone/60"
                                : "text-graphite-soft"
                            }`}
                          >
                            ${tier.monthlyPriceUsd}/mo
                          </span>
                        )}
                      </div>

                      {isYearly ? (
                        <div className="mt-2.5 flex flex-wrap items-center gap-2">
                          <span
                            className={`font-mono text-[11px] tracking-[0.12em] uppercase ${
                              isFeatured ? "text-stone" : "text-graphite-soft"
                            }`}
                          >
                            Billed ${annual.annualTotal.toLocaleString()} USD /
                            year
                          </span>
                          <span
                            className={`px-2 py-0.5 font-mono text-[10px] font-semibold tracking-[0.12em] uppercase ${
                              isFeatured
                                ? "bg-forest text-ivory"
                                : "bg-forest/15 text-forest"
                            }`}
                          >
                            Save ${annual.annualSavings}/yr
                          </span>
                        </div>
                      ) : (
                        <p
                          className={`mt-2.5 font-mono text-[11px] tracking-[0.12em] uppercase ${
                            isFeatured
                              ? "text-stone/80"
                              : "text-graphite-soft"
                          }`}
                        >
                          Or ${annual.effectiveMonthlyRate}/mo billed annually
                          (save ${annual.annualSavings}/yr)
                        </p>
                      )}
                    </div>

                    <p
                      className={`mt-6 text-sm leading-relaxed ${
                        isFeatured ? "text-ivory/90" : "text-graphite"
                      }`}
                    >
                      {tier.description}
                    </p>

                    <div className="mt-6">
                      <span
                        className={`font-mono text-[10px] font-semibold tracking-[0.18em] uppercase ${
                          isFeatured ? "text-stone" : "text-graphite-soft"
                        }`}
                      >
                        INCLUDED IN {tier.name.toUpperCase()}
                      </span>
                      <ul className="mt-3.5 space-y-3">
                        {tier.includes.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-3 text-sm leading-snug"
                          >
                            <span
                              aria-hidden="true"
                              className={`mt-1.5 h-1.5 w-1.5 shrink-0 ${
                                isFeatured ? "bg-stone" : "bg-forest"
                              }`}
                            />
                            <span
                              className={
                                isFeatured ? "text-ivory/90" : "text-graphite"
                              }
                            >
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 border-t border-current/15 pt-6">
                    <div className="mb-5">
                      <span
                        className={`block font-mono text-[10px] tracking-[0.16em] uppercase ${
                          isFeatured ? "text-stone/75" : "text-graphite-soft"
                        }`}
                      >
                        BEST FOR
                      </span>
                      <span className="mt-1 block text-xs font-medium">
                        {tier.idealFor}
                      </span>
                    </div>

                    <Link
                      href={`/contact?type=membership&interest=${tier.id}&billing=${billingCycle}`}
                      className={`inline-flex h-12 w-full items-center justify-center px-6 text-xs font-semibold tracking-[0.18em] uppercase transition-colors ${
                        isFeatured
                          ? "bg-forest text-ivory hover:bg-forest-deep"
                          : "bg-graphite text-ivory hover:bg-forest"
                      }`}
                    >
                      {tier.ctaLabel} ({isYearly ? "Yearly" : "Monthly"})
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-8 flex flex-col justify-between gap-3 border border-graphite/15 bg-ivory-muted px-5 py-4 sm:flex-row sm:items-center">
            <p className="text-xs leading-relaxed text-graphite-soft">
              <strong className="font-semibold text-graphite">
                Portfolio Demonstration Note:
              </strong>{" "}
              All membership tiers, USD rates, and amenities are illustrative
              and created for the AMIT ATHLETIC CLUB concept project. No real
              contracts or payments exist.
            </p>
            <span className="shrink-0 font-mono text-[11px] font-semibold tracking-[0.14em] text-forest uppercase">
              USD ($) · ILLUSTRATIVE PRICING
            </span>
          </div>
        </div>
      </section>

      <section
        id="comparison-table"
        aria-labelledby="comparison-heading"
        className="border-b border-graphite/15 bg-ivory-muted py-20 sm:py-28"
      >
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="mb-12 flex flex-col justify-between gap-4 border-b border-graphite/15 pb-6 sm:flex-row sm:items-end">
            <div>
              <span className="font-mono text-xs font-semibold tracking-[0.2em] text-forest uppercase">
                02 / PLAN-BY-PLAN COMPARISON
              </span>
              <h2
                id="comparison-heading"
                className="mt-2 text-3xl font-semibold tracking-[-0.02em] text-graphite uppercase sm:text-4xl"
              >
                Side-by-Side Feature Comparison
              </h2>
            </div>
            <p className="font-mono text-xs tracking-[0.14em] text-graphite-soft uppercase">
              Currently viewing:{" "}
              <strong className="text-forest">
                {isYearly
                  ? `Yearly Billing (Save ${ANNUAL_DISCOUNT_PERCENT}%)`
                  : "Monthly Billing"}
              </strong>
            </p>
          </div>

          <div className="hidden overflow-hidden border border-graphite/15 bg-ivory md:block">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="border-b border-graphite/15 bg-graphite text-ivory">
                  <th
                    scope="col"
                    className="py-5 pr-4 pl-6 font-mono text-xs font-semibold tracking-[0.16em] uppercase"
                  >
                    Feature / Access Area
                  </th>
                  {tierPricing.map(({ tier, displayedMonthlyRate }, idx) => {
                    const isFeatured = Boolean(tier.featured);
                    const isLast = idx === tierPricing.length - 1;
                    return (
                      <th
                        key={tier.id}
                        scope="col"
                        className={`py-5 font-mono text-xs font-semibold tracking-[0.16em] uppercase ${
                          isLast ? "pr-6 pl-4" : "px-4"
                        } ${isFeatured ? "bg-forest text-ivory" : ""}`}
                      >
                        <div>{tier.name}</div>
                        <div
                          className={`mt-1 ${
                            isFeatured ? "text-ivory/90" : "text-stone"
                          }`}
                        >
                          ${displayedMonthlyRate}/mo
                        </div>
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody className="divide-y divide-graphite/15 text-sm">
                {MEMBERSHIP_COMPARISON.map((row) => (
                  <tr
                    key={row.feature}
                    className="transition-colors hover:bg-ivory-muted/60"
                  >
                    <th
                      scope="row"
                      className="py-4 pr-4 pl-6 font-medium text-graphite"
                    >
                      <span className="block">{row.feature}</span>
                      <span className="font-mono text-[10px] tracking-[0.14em] text-graphite-soft uppercase">
                        {row.category}
                      </span>
                    </th>
                    {tierPricing.map(({ tier, comparisonKey }, idx) => {
                      const isFeatured = Boolean(tier.featured);
                      const isLast = idx === tierPricing.length - 1;
                      return (
                        <td
                          key={tier.id}
                          className={`py-4 ${isLast ? "pr-6 pl-4" : "px-4"} ${
                            isFeatured
                              ? "bg-forest/5 font-medium text-graphite"
                              : "text-graphite-soft"
                          }`}
                        >
                          {row[comparisonKey]}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div
            aria-label="Mobile membership feature comparison"
            className="space-y-4 md:hidden"
          >
            {MEMBERSHIP_COMPARISON.map((row) => (
              <div
                key={row.feature}
                className="border border-graphite/15 bg-ivory p-5"
              >
                <div className="border-b border-graphite/10 pb-3">
                  <span className="font-mono text-[10px] font-semibold tracking-[0.16em] text-forest uppercase">
                    {row.category}
                  </span>
                  <h3 className="mt-1 text-base font-semibold text-graphite">
                    {row.feature}
                  </h3>
                </div>
                <dl className="mt-3 space-y-2.5 text-xs">
                  {tierPricing.map(
                    ({ tier, displayedMonthlyRate, comparisonKey }) => {
                      const isFeatured = Boolean(tier.featured);
                      return (
                        <div
                          key={tier.id}
                          className={`flex items-center justify-between gap-2 ${
                            isFeatured ? "bg-forest/10 px-2.5 py-2" : ""
                          }`}
                        >
                          <dt
                            className={`font-mono tracking-[0.12em] uppercase ${
                              isFeatured
                                ? "font-semibold text-forest"
                                : "text-graphite-soft"
                            }`}
                          >
                            {tier.name} (${displayedMonthlyRate}/mo)
                          </dt>
                          <dd
                            className={`text-right text-graphite ${
                              isFeatured ? "font-semibold" : "font-medium"
                            }`}
                          >
                            {row[comparisonKey]}
                          </dd>
                        </div>
                      );
                    }
                  )}
                </dl>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
