import { WHY_PILLARS } from "@/data/siteContent";

export function WhyUsSection() {
  return (
    <section
      id="why-us"
      aria-labelledby="why-us-heading"
      className="border-b border-stone bg-graphite text-ivory py-12 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-12">
        {/* Section Index Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-6 border-b border-stone/30">
          <div className="flex items-baseline gap-3">
            <span className="font-serif italic text-xl text-stone">03</span>
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-ivory">
              Why Train With Us — The Club Standard
            </span>
          </div>
          <span className="text-xs uppercase tracking-[0.18em] text-stone">
            Principles Over Hype
          </span>
        </div>

        {/* Editorial Header */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-7">
            <h2
              id="why-us-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.025em] leading-[1.06] text-ivory"
            >
              Built on technical clarity,{" "}
              <span className="font-serif italic font-normal text-stone">
                not fitness clichés.
              </span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-sm sm:text-base leading-relaxed text-stone">
              We do not measure a session by noise or exhaustion. Every detail
              of the club is structured around four foundational commitments to
              how adults build and sustain physical capability.
            </p>
          </div>
        </div>

        {/* 4-Pillar Architectural Grid */}
        <div className="mt-8 sm:mt-16 grid grid-cols-1 md:grid-cols-2 border border-stone/30 divide-y md:divide-y-0 md:divide-x divide-stone/30">
          {WHY_PILLARS.map((pillar, idx) => (
            <article
              key={pillar.index}
              className={`p-5 sm:p-10 lg:p-12 flex flex-col justify-between bg-graphite ${
                idx >= 2 ? "md:border-t md:border-stone/30" : ""
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-4 pb-4 sm:pb-6 border-b border-stone/20">
                  <span className="font-serif italic text-xl sm:text-2xl text-stone">
                    Pillar {pillar.index}
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.18em] text-ivory/80 bg-forest px-2.5 py-1">
                    {pillar.emphasis}
                  </span>
                </div>

                <h3 className="mt-4 sm:mt-6 text-xl sm:text-2xl font-bold tracking-[-0.015em] text-ivory">
                  {pillar.title}
                </h3>

                <p className="mt-2.5 sm:mt-4 text-sm sm:text-base leading-relaxed text-stone">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-5 sm:mt-8 pt-3.5 sm:pt-4 border-t border-stone/20 flex items-center justify-between gap-4 text-xs text-ivory/90">
                <span className="uppercase tracking-[0.14em] text-stone">
                  Standard:
                </span>
                <span className="text-right font-medium">{pillar.detail}</span>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Action Bar */}
        <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row sm:items-center justify-between gap-6 border border-stone/30 bg-forest/30 p-6 sm:p-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone">
              Beginner &amp; Experienced Athlete Readiness
            </p>
            <p className="mt-1.5 text-sm sm:text-base text-ivory">
              Every membership begins with an equipment and movement orientation
              tailored to your current training background.
            </p>
          </div>
          <a
            href="#membership"
            className="shrink-0 inline-flex items-center justify-center bg-ivory px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-graphite transition-colors duration-200 hover:bg-stone"
          >
            View Membership Options
          </a>
        </div>
      </div>
    </section>
  );
}
