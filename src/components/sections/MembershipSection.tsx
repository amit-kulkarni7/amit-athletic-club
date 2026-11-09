import { MEMBERSHIP_COMPARISON, MEMBERSHIP_TIERS } from "@/data/siteContent";

export function MembershipSection() {
  return (
    <section
      id="membership"
      aria-labelledby="membership-heading"
      className="border-b border-stone bg-ivory py-12 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-12">
        {/* Section Index Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-6 border-b border-stone">
          <div className="flex items-baseline gap-3">
            <span className="font-serif italic text-xl text-forest">04</span>
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-graphite">
              Membership Preview — Illustrative USD Tiers
            </span>
          </div>
          <span className="text-xs uppercase tracking-[0.18em] text-graphite-soft">
            Concept Pricing · M2 Comparison Ready
          </span>
        </div>

        {/* Section Heading + Illustrative Disclosure */}
        <div className="mt-8 sm:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-end">
          <div className="lg:col-span-7">
            <h2
              id="membership-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.025em] leading-[1.06] text-graphite"
            >
              Transparent access structured around{" "}
              <span className="font-serif italic font-normal text-forest">
                how you train.
              </span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-sm sm:text-base leading-relaxed text-graphite-soft">
              Three membership structures designed to match your desired level
              of coaching and cohort participation. All figures below represent
              illustrative USD concept pricing for this portfolio demonstration.
            </p>
          </div>
        </div>

        {/* 3-Tier Architectural Grid */}
        <div className="mt-8 sm:mt-16 grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-0 border border-stone bg-ivory lg:divide-x lg:divide-stone">
          {MEMBERSHIP_TIERS.map((tier) => (
            <article
              key={tier.id}
              className={`flex flex-col justify-between p-6 sm:p-8 xl:p-10 ${
                tier.featured
                  ? "bg-ivory-muted border-y lg:border-y-0 border-stone relative"
                  : "bg-ivory"
              }`}
            >
              <div>
                {/* Tier Index + Badge */}
                <div className="flex items-center justify-between gap-2 pb-5 border-b border-stone">
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-forest">
                    {tier.index}
                  </span>
                  {tier.badge ? (
                    <span className="bg-forest px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-ivory">
                      {tier.badge}
                    </span>
                  ) : (
                    <span className="text-[11px] uppercase tracking-[0.16em] text-graphite-soft">
                      Denver Concept
                    </span>
                  )}
                </div>

                {/* Tier Title & Tagline */}
                <div className="mt-4 sm:mt-6">
                  <h3 className="text-xl sm:text-2xl font-bold tracking-[-0.015em] text-graphite">
                    {tier.name}
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm text-graphite-soft leading-relaxed">
                    {tier.tagline}
                  </p>
                </div>

                {/* Illustrative USD Price Block */}
                <div className="mt-4 pt-4 sm:mt-6 sm:pt-6 border-t border-stone">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl sm:text-5xl font-bold tracking-[-0.03em] text-graphite">
                      ${tier.monthlyPriceUsd}
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-[0.16em] text-graphite-soft">
                      USD / Month
                    </span>
                  </div>
                  <p className="mt-1.5 text-[11px] uppercase tracking-[0.14em] text-forest">
                    {tier.billingNote}
                  </p>
                </div>

                <p className="mt-4 sm:mt-6 text-xs sm:text-sm leading-relaxed text-graphite-soft">
                  {tier.description}
                </p>

                {/* Included Access List */}
                <div className="mt-4 pt-4 sm:mt-6 sm:pt-6 border-t border-stone">
                  <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-graphite mb-2.5 sm:mb-3.5">
                    Included Access &amp; Support
                  </p>
                  <ul className="space-y-2">
                    {tier.includes.map((inc) => (
                      <li
                        key={inc}
                        className="flex items-start gap-2.5 text-xs sm:text-sm leading-relaxed text-graphite"
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
              </div>

              {/* Ideal For + Actionable Anchor Link */}
              <div className="mt-5 pt-4 sm:mt-8 sm:pt-6 border-t border-stone space-y-4">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-graphite-soft">
                    Recommended For
                  </p>
                  <p className="mt-1 text-xs text-graphite">{tier.idealFor}</p>
                </div>

                <a
                  href={tier.ctaHref}
                  className={`w-full inline-flex items-center justify-center px-5 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] transition-colors duration-200 ${
                    tier.featured
                      ? "bg-forest text-ivory hover:bg-graphite"
                      : "border border-graphite bg-transparent text-graphite hover:bg-graphite hover:text-ivory"
                  }`}
                >
                  {tier.ctaLabel}
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* M2-Ready Access Matrix Preview */}
        <div className="mt-12 sm:mt-16 border border-stone bg-ivory-muted/50">
          <div className="p-6 sm:p-8 border-b border-stone flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-forest">
                Specification Matrix — M1 Baseline
              </p>
              <h3 className="mt-1 text-lg sm:text-xl font-bold text-graphite">
                Tier Access Across Facilities &amp; Disciplines
              </h3>
            </div>
            <p className="text-xs text-graphite-soft max-w-sm">
              Structured to expand into interactive tier comparison and schedule
              filtering in Milestone 2.
            </p>
          </div>

          {/* Desktop / Tablet Matrix Table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-stone bg-ivory text-[11px] font-bold uppercase tracking-[0.18em] text-graphite">
                  <th scope="col" className="py-4 px-6">
                    Discipline / Access Feature
                  </th>
                  <th scope="col" className="py-4 px-6">
                    Category
                  </th>
                  <th scope="col" className="py-4 px-6">
                    Foundation ($195)
                  </th>
                  <th
                    scope="col"
                    className="py-4 px-6 bg-ivory-muted text-forest"
                  >
                    Club All-Round ($265)
                  </th>
                  <th scope="col" className="py-4 px-6">
                    Performance ($385)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone text-xs sm:text-sm">
                {MEMBERSHIP_COMPARISON.map((row) => (
                  <tr key={row.feature} className="bg-ivory/60">
                    <th
                      scope="row"
                      className="py-4 px-6 font-semibold text-graphite"
                    >
                      {row.feature}
                    </th>
                    <td className="py-4 px-6 text-xs uppercase tracking-[0.14em] text-graphite-soft">
                      {row.category}
                    </td>
                    <td className="py-4 px-6 text-graphite-soft">
                      {row.foundation}
                    </td>
                    <td className="py-4 px-6 bg-ivory-muted font-semibold text-graphite">
                      {row.allRound}
                    </td>
                    <td className="py-4 px-6 text-graphite">
                      {row.performance}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Stacked Specification List (prevents horizontal overflow at 375px/390px) */}
          <div className="md:hidden divide-y divide-stone bg-ivory">
            {MEMBERSHIP_COMPARISON.map((row) => (
              <div key={row.feature} className="p-3 sm:p-5 space-y-1.5">
                <div className="flex items-baseline justify-between gap-2">
                  <p className="text-xs font-bold text-graphite">
                    {row.feature}
                  </p>
                  <span className="text-[10px] uppercase tracking-[0.16em] text-forest">
                    {row.category}
                  </span>
                </div>
                <dl className="grid grid-cols-3 gap-2 pt-1.5 border-t border-stone/60 text-[11px]">
                  <div>
                    <dt className="text-graphite-soft uppercase tracking-wider">
                      Foundation
                    </dt>
                    <dd className="mt-0.5 font-medium text-graphite">
                      {row.foundation}
                    </dd>
                  </div>
                  <div className="bg-ivory-muted px-2 py-0.5 -my-0.5">
                    <dt className="text-forest font-semibold uppercase tracking-wider">
                      All-Round
                    </dt>
                    <dd className="mt-0.5 font-bold text-graphite">
                      {row.allRound}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-graphite-soft uppercase tracking-wider">
                      Performance
                    </dt>
                    <dd className="mt-0.5 font-medium text-graphite">
                      {row.performance}
                    </dd>
                  </div>
                </dl>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
