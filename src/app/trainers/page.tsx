import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  COACHING_PRINCIPLES,
  SITE_META,
  TRAINERS,
} from "@/data/siteContent";

export const metadata: Metadata = {
  title: "Coaching Team & Methodology",
  description:
    "Explore AMIT ATHLETIC CLUB's coaching philosophy and illustrative trainer profiles across Strength, Functional Conditioning, Mobility, and Small-Group Training.",
};

export default function TrainersPage() {
  return (
    <div className="bg-ivory text-graphite">
      {/* Page Header */}
      <section
        aria-labelledby="trainers-hero-heading"
        className="border-b border-graphite/15 pt-12 pb-16 sm:pt-16 sm:pb-20"
      >
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-graphite/15 pb-4">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs font-semibold tracking-[0.2em] text-forest uppercase">
                01 / COACHING METHODOLOGY & PROFILES
              </span>
              <span className="hidden h-1 w-1 rounded-full bg-forest sm:inline-block" />
              <span className="hidden font-mono text-xs tracking-[0.16em] text-graphite-muted uppercase sm:inline-block">
                {SITE_META.conceptLocation}
              </span>
            </div>
            <span className="font-mono text-[11px] tracking-[0.16em] text-graphite-muted uppercase">
              Meet the Coaching Team
            </span>
          </div>

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end lg:gap-12">
            <div className="lg:col-span-8">
              <h1
                id="trainers-hero-heading"
                className="text-4xl leading-[0.98] font-semibold tracking-[-0.03em] text-graphite uppercase sm:text-6xl lg:text-[4.25rem]"
              >
                Practical guidance grounded in{" "}
                <span className="font-serif font-normal tracking-normal text-forest lowercase italic">
                  how you move.
                </span>
              </h1>
            </div>
            <div className="lg:col-span-4">
              <p className="text-base leading-relaxed text-graphite-muted sm:text-lg">
                Our coaching model brings together four specialists—covering
                barbell strength, turf conditioning, restorative mobility, and
                small-group cohorts—so every member has clear, supportive
                instruction.
              </p>
            </div>
          </div>

          {/* Concept Coaching Notice */}
          <div className="mt-10 border border-graphite/15 bg-ivory-warm px-6 py-4">
            <p className="text-xs leading-relaxed text-graphite-muted sm:text-sm">
              <strong className="font-semibold text-graphite">
                Concept Coaching Roster:
              </strong>{" "}
              The coaching profiles below represent concept roles created to
              demonstrate how AMIT ATHLETIC CLUB structures instruction across
              its four core disciplines. Imagery showcases actual movement form
              and gym technique rather than staged modeling.
            </p>
          </div>
        </div>
      </section>

      {/* 4 Coaching Profiles */}
      <section
        aria-labelledby="trainers-roster-heading"
        className="border-b border-graphite/15 py-20 sm:py-28"
      >
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="mb-12 flex flex-col justify-between gap-4 border-b border-graphite/15 pb-6 sm:flex-row sm:items-end">
            <div>
              <span className="font-mono text-xs font-semibold tracking-[0.2em] text-forest uppercase">
                02 / COACHING TEAM
              </span>
              <h2
                id="trainers-roster-heading"
                className="mt-2 text-3xl font-semibold tracking-[-0.02em] text-graphite uppercase sm:text-4xl"
              >
                Meet the Coaching Team
              </h2>
            </div>
            <span className="font-mono text-xs tracking-[0.14em] text-graphite-muted uppercase">
              4 Core Disciplines · Coordinated Curriculum
            </span>
          </div>

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            {TRAINERS.map((trainer) => (
              <article
                key={trainer.id}
                id={trainer.id}
                className="flex flex-col justify-between border border-graphite/15 bg-ivory-warm p-6 sm:p-9"
              >
                <div>
                  {/* Profile Header */}
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-graphite/15 pb-4">
                    <span className="font-mono text-xs font-semibold tracking-[0.18em] text-forest uppercase">
                      {trainer.index} · {trainer.specialty}
                    </span>
                    <span className="font-mono text-xs tracking-[0.14em] text-graphite-muted uppercase">
                      {trainer.role}
                    </span>
                  </div>

                  {/* Discipline Movement Image */}
                  <figure className="mt-6">
                    <div className="relative aspect-[16/10] w-full overflow-hidden border border-graphite/15 bg-graphite">
                      <Image
                        src={trainer.image.src}
                        alt={trainer.image.alt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 46vw"
                        className="object-cover object-center"
                      />
                    </div>
                    <figcaption className="mt-2 flex items-center justify-between font-mono text-[10px] tracking-[0.14em] text-graphite-muted uppercase">
                      <span>{trainer.image.caption}</span>
                      <span>AAC Curriculum</span>
                    </figcaption>
                  </figure>

                  {/* Name, Role & Philosophy */}
                  <div className="mt-6">
                    <h3 className="text-2xl font-semibold tracking-tight text-graphite sm:text-3xl">
                      {trainer.name}
                    </h3>
                    <p className="mt-1 font-mono text-xs font-semibold tracking-[0.16em] text-forest uppercase">
                      {trainer.role}
                    </p>

                    <blockquote className="mt-5 border-l-2 border-forest pl-4 font-serif text-xl leading-snug text-graphite italic">
                      &ldquo;{trainer.philosophyQuote}&rdquo;
                    </blockquote>

                    <p className="mt-5 text-sm leading-relaxed text-graphite-muted sm:text-base">
                      {trainer.bio}
                    </p>
                  </div>

                  {/* Training Focus & Who They Coach */}
                  <div className="mt-6 grid grid-cols-1 gap-6 border-t border-graphite/15 pt-6 sm:grid-cols-2">
                    <div>
                      <h4 className="font-mono text-[10px] font-semibold tracking-[0.18em] text-graphite uppercase">
                        TRAINING FOCUS
                      </h4>
                      <ul className="mt-2.5 space-y-2">
                        {trainer.trainingFocus.map((focus) => (
                          <li
                            key={focus}
                            className="flex items-start gap-2 text-xs leading-relaxed text-graphite sm:text-sm"
                          >
                            <span
                              aria-hidden="true"
                              className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-forest"
                            />
                            <span>{focus}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-mono text-[10px] font-semibold tracking-[0.18em] text-graphite uppercase">
                        WHO THEY COACH BEST
                      </h4>
                      <p className="mt-2.5 text-xs leading-relaxed text-graphite-muted sm:text-sm">
                        {trainer.whoTheyCoach}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Action Footer */}
                <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-graphite/15 pt-6">
                  <Link
                    href={`/programs#${trainer.programId}`}
                    className="font-mono text-xs font-semibold tracking-[0.14em] text-graphite uppercase transition-colors hover:text-forest"
                  >
                    View {trainer.specialty} Program →
                  </Link>
                  <Link
                    href={`/contact?type=program&interest=${trainer.programId}`}
                    className="inline-flex min-h-[44px] items-center justify-center bg-forest px-6 text-xs font-semibold tracking-[0.16em] text-ivory uppercase transition-colors hover:bg-forest-light focus:outline-none focus:ring-2 focus:ring-forest"
                  >
                    Inquire About Coaching
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Coaching Principles */}
      <section
        aria-labelledby="coaching-principles-heading"
        className="border-b border-graphite/15 bg-graphite py-20 text-ivory sm:py-28"
      >
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="mb-14 grid grid-cols-1 gap-8 border-b border-ivory/15 pb-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <span className="font-mono text-xs font-semibold tracking-[0.2em] text-stone uppercase">
                03 / SHARED COACHING STANDARDS
              </span>
              <h2
                id="coaching-principles-heading"
                className="mt-3 text-3xl leading-[1.06] font-semibold tracking-[-0.025em] text-ivory uppercase sm:text-5xl"
              >
                How our coaches{" "}
                <span className="font-serif font-normal tracking-normal text-stone lowercase italic">
                  teach.
                </span>
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-base leading-relaxed text-stone">
                Across every discipline, our coaching standards prioritize calm
                communication, adaptable exercises, and helping you build
                independence on the floor.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-px border border-ivory/15 bg-ivory/15 lg:grid-cols-3">
            {COACHING_PRINCIPLES.map((principle) => (
              <article
                key={principle.index}
                className="flex flex-col justify-between bg-graphite p-8 sm:p-10"
              >
                <div>
                  <span className="font-mono text-xs font-semibold tracking-[0.18em] text-stone uppercase">
                    STANDARD {principle.index}
                  </span>
                  <h3 className="mt-5 text-2xl font-semibold tracking-tight text-ivory">
                    {principle.title}
                  </h3>
                  <p className="mt-2 font-serif text-lg text-stone italic">
                    {principle.summary}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-stone/90">
                    {principle.application}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section
        aria-labelledby="trainers-cta-heading"
        className="py-20 sm:py-24"
      >
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 gap-10 border border-graphite/15 bg-ivory-warm p-8 sm:p-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <span className="font-mono text-xs font-semibold tracking-[0.2em] text-forest uppercase">
                START WITH AN ORIENTATION
              </span>
              <h2
                id="trainers-cta-heading"
                className="mt-3 text-3xl leading-[1.08] font-semibold tracking-[-0.025em] text-graphite uppercase sm:text-4xl"
              >
                Experience our coaching approach firsthand.
              </h2>
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-graphite-muted">
                Test a demo orientation inquiry on our Contact page or review
                how coaching sessions are included in our membership tiers.
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
                href="/memberships"
                className="inline-flex h-12 items-center justify-center border border-graphite px-7 text-xs font-semibold tracking-[0.18em] text-graphite uppercase transition-colors hover:bg-graphite hover:text-ivory"
              >
                View Memberships
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
