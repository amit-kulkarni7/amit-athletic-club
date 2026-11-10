import { Suspense } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/contact/ContactForm";
import { SITE_META } from "@/data/siteContent";

export const metadata: Metadata = {
  title: "Contact & Demo Inquiry",
  description:
    "Test the interactive demo inquiry form for AMIT ATHLETIC CLUB — a fictional Denver fitness club portfolio project.",
};

export default function ContactPage() {
  return (
    <div className="bg-ivory text-graphite">
      {/* Page Header */}
      <section
        aria-labelledby="contact-hero-heading"
        className="border-b border-graphite/15 pt-12 pb-16 sm:pt-16 sm:pb-20"
      >
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-graphite/15 pb-4">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs font-semibold tracking-[0.2em] text-forest uppercase">
                01 / CLUB INQUIRY & CONTACT
              </span>
              <span className="hidden h-1 w-1 rounded-full bg-forest sm:inline-block" />
              <span className="hidden font-mono text-xs tracking-[0.16em] text-graphite-muted uppercase sm:inline-block">
                {SITE_META.conceptLocation}
              </span>
            </div>
            <span className="font-mono text-[11px] tracking-[0.16em] text-graphite-muted uppercase">
              Online Inquiry Form
            </span>
          </div>

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end lg:gap-12">
            <div className="lg:col-span-8">
              <h1
                id="contact-hero-heading"
                className="text-4xl leading-[0.98] font-semibold tracking-[-0.03em] text-graphite uppercase sm:text-6xl lg:text-[4.25rem]"
              >
                Start a conversation with{" "}
                <span className="font-serif font-normal tracking-normal text-forest lowercase italic">
                  the club.
                </span>
              </h1>
            </div>
            <div className="lg:col-span-4">
              <p className="text-base leading-relaxed text-graphite-muted sm:text-lg">
                Explore how prospective members inquire about memberships,
                welcome orientations, or training programs through our
                interactive demonstration form.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content: Concept Info Sidebar + Interactive Form */}
      <section
        aria-labelledby="contact-form-heading"
        className="border-b border-graphite/15 py-16 sm:py-24"
      >
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start">
            {/* Left Column: Club Concept Info & Sample Hours */}
            <div className="space-y-8 lg:col-span-4">
              <div className="border border-graphite/15 bg-ivory-warm p-6 sm:p-8">
                <span className="font-mono text-xs font-semibold tracking-[0.18em] text-forest uppercase">
                  CLUB LOCATION
                </span>
                <h2
                  id="contact-form-heading"
                  className="mt-2 text-2xl font-semibold tracking-tight text-graphite"
                >
                  {SITE_META.brandName}
                </h2>
                <p className="mt-2 font-mono text-xs tracking-[0.14em] text-forest uppercase">
                  {SITE_META.conceptLocation}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-graphite-muted">
                  AMIT ATHLETIC CLUB is a fictional fitness brand created as a
                  software-engineering portfolio project. To remain truthful, no
                  street address, telephone number, or live customer-service
                  inbox is listed.
                </p>
              </div>

              <div className="border border-graphite/15 bg-ivory-warm p-6 sm:p-8">
                <span className="font-mono text-xs font-semibold tracking-[0.18em] text-forest uppercase">
                  CLUB HOURS
                </span>
                <dl className="mt-4 space-y-3 border-t border-graphite/15 pt-4 text-sm">
                  {SITE_META.conceptHours.map((item) => (
                    <div
                      key={item.days}
                      className="flex items-center justify-between gap-2"
                    >
                      <dt className="font-medium text-graphite">{item.days}</dt>
                      <dd className="font-mono text-xs text-graphite-muted">
                        {item.hours}
                      </dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-4 border-t border-graphite/15 pt-3 font-mono text-[11px] tracking-[0.12em] text-graphite-muted uppercase">
                  Sample hours for concept demonstration
                </p>
              </div>

              <div className="border border-graphite/15 bg-graphite p-6 text-ivory sm:p-8">
                <span className="font-mono text-[11px] font-semibold tracking-[0.18em] text-stone uppercase">
                  QUICK PREFILL LINKS
                </span>
                <p className="mt-2 text-xs leading-relaxed text-stone/90">
                  Test how URL query parameters preselect form fields from
                  across the website:
                </p>
                <div className="mt-4 flex flex-col gap-2 font-mono text-xs">
                  <Link
                    href="/contact?type=membership&interest=all-round&billing=yearly"
                    className="border border-ivory/20 px-3.5 py-2.5 text-ivory transition-colors hover:border-stone hover:bg-ivory/10"
                  >
                    → Club All-Round (Yearly)
                  </Link>
                  <Link
                    href="/contact?type=trial"
                    className="border border-ivory/20 px-3.5 py-2.5 text-ivory transition-colors hover:border-stone hover:bg-ivory/10"
                  >
                    → Welcome Orientation Visit
                  </Link>
                  <Link
                    href="/contact?type=program&interest=small-group-training"
                    className="border border-ivory/20 px-3.5 py-2.5 text-ivory transition-colors hover:border-stone hover:bg-ivory/10"
                  >
                    → Small-Group Training Question
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Demo Form */}
            <div className="lg:col-span-8">
              <Suspense
                fallback={
                  <div className="border border-graphite/15 bg-ivory-warm p-10 text-sm text-graphite-muted">
                    Loading interactive inquiry form...
                  </div>
                }
              >
                <ContactForm />
              </Suspense>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
