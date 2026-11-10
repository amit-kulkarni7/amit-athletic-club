import Image from "next/image";
import Link from "next/link";
import { COACHING_PRINCIPLES, TRAINERS } from "@/data/siteContent";

export function CoachingSection() {
  return (
    <section
      id="coaching"
      aria-labelledby="coaching-heading"
      className="border-b border-stone bg-ivory-muted/50 py-12 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-12">
        {/* Section Index Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-5 border-b border-stone">
          <div className="flex items-baseline gap-3">
            <span className="font-serif italic text-xl text-forest">05</span>
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-graphite">
              Coaching &amp; Trainers Preview
            </span>
          </div>
          <Link
            href="/trainers"
            className="text-xs font-semibold uppercase tracking-[0.18em] text-forest hover:text-graphite transition-colors duration-200"
          >
            Meet the Coaching Team →
          </Link>
        </div>

        {/* Main 12-Column Layout */}
        <div className="mt-8 sm:mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-start">
          {/* Left Column: Visual Studies + Team Directory Preview (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <figure className="border border-stone bg-ivory p-3">
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-graphite">
                <Image
                  src="/images/coaching-methodology.jpg"
                  alt="Close study of an athlete gripping a loaded barbell in a hinge setup on rubber gym tiles"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center"
                />
              </div>
              <figcaption className="mt-2.5 flex items-center justify-between text-[10px] uppercase tracking-[0.16em] text-graphite-soft">
                <span>Hinge &amp; Grip Setup</span>
                <span>Strength Floor</span>
              </figcaption>
            </figure>

            {/* Compact Trainer Specialties Directory */}
            <div className="border border-stone bg-ivory p-5">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-forest">
                Coaching Specialties
              </p>
              <ul className="mt-3 divide-y divide-stone/70 text-xs">
                {TRAINERS.map((trainer) => (
                  <li
                    key={trainer.id}
                    className="py-2.5 flex items-center justify-between gap-2"
                  >
                    <div>
                      <span className="font-bold text-graphite">
                        {trainer.name}
                      </span>
                      <span className="text-graphite-soft">
                        {" "}
                        · {trainer.specialty}
                      </span>
                    </div>
                    <Link
                      href={`/trainers#${trainer.id}`}
                      className="text-[11px] font-semibold uppercase tracking-[0.14em] text-forest hover:text-graphite"
                    >
                      Profile →
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Coaching Philosophy & Principles (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <h2
                id="coaching-heading"
                className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.025em] leading-[1.06] text-graphite"
              >
                Personal instruction that meets you{" "}
                <span className="font-serif italic font-normal text-forest">
                  where you are.
                </span>
              </h2>
              <p className="mt-4 text-base sm:text-lg leading-relaxed text-graphite-soft">
                Whether you are setting up under a barbell for the first time or
                refining years of training, our coaching approach centers on
                calm, practical feedback.
              </p>
            </div>

            {/* 3 Coaching Principles */}
            <div className="border-t border-stone divide-y divide-stone">
              {COACHING_PRINCIPLES.map((principle) => (
                <article key={principle.index} className="py-4 sm:py-6">
                  <div className="flex items-baseline gap-3.5 sm:gap-4">
                    <span className="font-serif italic text-xl sm:text-2xl text-forest shrink-0">
                      {principle.index}
                    </span>
                    <div className="space-y-1.5">
                      <h3 className="text-base sm:text-lg font-bold text-graphite">
                        {principle.title}
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed text-graphite-soft">
                        {principle.application}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Actionable Route Links */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href="/trainers"
                className="inline-flex min-h-[48px] items-center justify-center bg-graphite px-7 text-xs font-semibold uppercase tracking-[0.18em] text-ivory transition-colors duration-200 hover:bg-forest"
              >
                Meet Our Coaches
              </Link>
              <Link
                href="/contact?type=trial"
                className="inline-flex min-h-[48px] items-center justify-center border border-graphite bg-transparent px-7 text-xs font-semibold uppercase tracking-[0.18em] text-graphite transition-colors duration-200 hover:bg-graphite hover:text-ivory"
              >
                Inquire About an Orientation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
