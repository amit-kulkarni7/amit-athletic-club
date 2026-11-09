"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ANNUAL_DISCOUNT_PERCENT,
  MEMBERSHIP_COMPARISON,
  MEMBERSHIP_TIERS,
} from "@/data/siteContent";

export type BillingCycle = "monthly" | "yearly";

export function MembershipsInteractive() {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>("monthly");
  const isYearly = billingCycle === "yearly";

  return (
    <div>
      {/* Billing Toggle & Plan Cards */}
      <section
        aria-labelledby="plans-heading"
        className="border-b border-graphite/15 py-16 sm:py-24"
      >
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          {/* Billing Cycle Control Bar */}
          <div className="mb-12 flex flex-col justify-between gap-6 border border-graphite/15 bg-ivory-warm p-6 sm:flex-row sm:items-center sm:p-8">
            <div>
              <h2
                id="plans-heading"
                className="text-xl font-semibold tracking-tight text-graphite sm:text-2xl"
              >
                Select Illustrative Billing Cadence
              </h2>
              <p className="mt-1 text-sm text-graphite-muted">
                Switch between month-to-month flexibility and annual billing
                with a {ANNUAL_DISCOUNT_PERCENT}% savings across all three
                tiers.
              </p>
            </div>

            <div className="flex flex-col items-start gap-2 sm:items-end">
              <div
                role="group"
                aria-label="Billing period toggle"
                className="inline-flex border border-graphite/25 bg-ivory p-1"
              >
                <button
                  type="button"
                  aria-pressed={!isYearly}
                  onClick={() => setBillingCycle("monthly")}
                  className={`h-10 px-5 text-xs font-semibold tracking-[0.16em] uppercase transition-colors ${
                    !isYearly
                      ? "bg-graphite text-ivory"
                      : "text-graphite hover:bg-ivory-warm"
                  }`}
                >
                  Monthly Billing
                </button>
                <button
                  type="button"
                  aria-pressed={isYearly}
                  onClick={() => setBillingCycle("yearly")}
                  className={`inline-flex h-10 items-center gap-2 px-5 text-xs font-semibold tracking-[0.16em] uppercase transition-colors ${
                    isYearly
                      ? "bg-forest text-ivory"
                      : "text-graphite hover:bg-ivory-warm"
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
                className="font-mono text-[11px] tracking-[0.14em] text-graphite-muted uppercase"
              >
                {isYearly
                  ? "Showing effective monthly rate billed annually (20% discount applied)"
                  : "Showing standard month-to-month USD rate"}
              </span>
            </div>
          </div>

          {/* 3 Membership Cards */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-stretch">
            {MEMBERSHIP_TIERS.map((tier) => {
              const isFeatured = Boolean(tier.featured);
              const displayedMonthlyRate = isYearly
                ? tier.effectiveAnnualMonthlyUsd
                : tier.monthlyPriceUsd;

              return (
                <article
                  key={tier.id}
                  id={tier.id}
                  className={`flex flex-col justify-between border p-7 sm:p-9 ${
                    isFeatured
                      ? "border-forest bg-graphite text-ivory shadow-xl"
                      : "border-graphite/15 bg-ivory-warm text-graphite"
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
                        <span className="font-mono text-[10px] tracking-[0.16em] text-graphite-muted uppercase">
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
                          isFeatured ? "text-stone" : "text-graphite-muted"
                        }`}
                      >
                        {tier.tagline}
                      </p>
                    </div>

                    {/* Dynamic Price Block */}
                    <div className="mt-7 border-b border-current/15 pb-6">
                      <div className="flex items-baseline gap-2">
                        <span className="text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
                          ${displayedMonthlyRate}
                        </span>
                        <span
                          className={`font-mono text-xs tracking-[0.14em] uppercase ${
                            isFeatured ? "text-stone" : "text-graphite-muted"
                          }`}
                        >
                          USD / month
                        </span>
                        {isYearly && (
                          <span
                            className={`ml-1 font-mono text-xs line-through ${
                              isFeatured
                                ? "text-stone/60"
                                : "text-graphite-muted"
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
                              isFeatured ? "text-stone" : "text-graphite-muted"
                            }`}
                          >
                            Billed ${tier.annualTotalUsd.toLocaleString()} USD /
                            year
                          </span>
                          <span
                            className={`px-2 py-0.5 font-mono text-[10px] font-semibold tracking-[0.12em] uppercase ${
                              isFeatured
                                ? "bg-forest text-ivory"
                                : "bg-forest/15 text-forest"
                            }`}
                          >
                            Save ${tier.annualSavingsUsd}/yr
                          </span>
                        </div>
                      ) : (
                        <p
                          className={`mt-2.5 font-mono text-[11px] tracking-[0.12em] uppercase ${
                            isFeatured
                              ? "text-stone/80"
                              : "text-graphite-muted"
                          }`}
                        >
                          Or ${tier.effectiveAnnualMonthlyUsd}/mo billed
                          annually (save ${tier.annualSavingsUsd}/yr)
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
                          isFeatured ? "text-stone" : "text-graphite-muted"
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
                          isFeatured ? "text-stone/75" : "text-graphite-muted"
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
                          ? "bg-forest text-ivory hover:bg-forest-light"
                          : "bg-graphite text-ivory hover:bg-forest"
                      }`}
                    >
                      {tier.ctaLabel} (
                      {isYearly ? "Yearly" : "Monthly"})
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Illustrative Disclosure Note */}
          <div className="mt-8 flex flex-col justify-between gap-3 border border-graphite/15 bg-ivory-warm px-5 py-4 sm:flex-row sm:items-center">
            <p className="text-xs leading-relaxed text-graphite-muted">
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

      {/* Feature Comparison Matrix */}
      <section
        id="comparison-table"
        aria-labelledby="comparison-heading"
        className="border-b border-graphite/15 bg-ivory-warm py-20 sm:py-28"
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
            <p className="font-mono text-xs tracking-[0.14em] text-graphite-muted uppercase">
              Currently viewing:{" "}
              <strong className="text-forest">
                {isYearly ? "Yearly Billing (Save 20%)" : "Monthly Billing"}
              </strong>
            </p>
          </div>

          {/* Desktop / Tablet Table (md and up) */}
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
                  <th
                    scope="col"
                    className="px-4 py-5 font-mono text-xs font-semibold tracking-[0.16em] uppercase"
                  >
                    <div>Foundation</div>
                    <div className="mt-1 text-stone">
                      ${isYearly ? "156" : "195"}/mo
                    </div>
                  </th>
                  <th
                    scope="col"
                    className="bg-forest px-4 py-5 font-mono text-xs font-semibold tracking-[0.16em] text-ivory uppercase"
                  >
                    <div>Club All-Round</div>
                    <div className="mt-1 text-ivory/90">
                      ${isYearly ? "212" : "265"}/mo
                    </div>
                  </th>
                  <th
                    scope="col"
                    className="py-5 pr-6 pl-4 font-mono text-xs font-semibold tracking-[0.16em] uppercase"
                  >
                    <div>Performance</div>
                    <div className="mt-1 text-stone">
                      ${isYearly ? "308" : "385"}/mo
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-graphite/15 text-sm">
                {MEMBERSHIP_COMPARISON.map((row) => (
                  <tr
                    key={row.feature}
                    className="transition-colors hover:bg-ivory-warm/60"
                  >
                    <th
                      scope="row"
                      className="py-4 pr-4 pl-6 font-medium text-graphite"
                    >
                      <span className="block">{row.feature}</span>
                      <span className="font-mono text-[10px] tracking-[0.14em] text-graphite-muted uppercase">
                        {row.category}
                      </span>
                    </th>
                    <td className="px-4 py-4 text-graphite-muted">
                      {row.foundation}
                    </td>
                    <td className="bg-forest/5 px-4 py-4 font-medium text-graphite">
                      {row.allRound}
                    </td>
                    <td className="py-4 pr-6 pl-4 text-graphite">
                      {row.performance}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Responsive Comparison Cards (below md) */}
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
                  <div className="flex items-center justify-between gap-2">
                    <dt className="font-mono tracking-[0.12em] text-graphite-muted uppercase">
                      Foundation (${isYearly ? "156" : "195"}/mo)
                    </dt>
                    <dd className="text-right font-medium text-graphite">
                      {row.foundation}
                    </dd>
                  </div>
                  <div className="flex items-center justify-between gap-2 bg-forest/10 px-2.5 py-2">
                    <dt className="font-mono font-semibold tracking-[0.12em] text-forest uppercase">
                      Club All-Round (${isYearly ? "212" : "265"}/mo)
                    </dt>
                    <dd className="text-right font-semibold text-graphite">
                      {row.allRound}
                    </dd>
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <dt className="font-mono tracking-[0.12em] text-graphite-muted uppercase">
                      Performance (${isYearly ? "308" : "385"}/mo)
                    </dt>
                    <dd className="text-right font-medium text-graphite">
                      {row.performance}
                    </dd>
                  </div>
                </dl>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
