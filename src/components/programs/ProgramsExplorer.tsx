"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  EXPERIENCE_LEVELS,
  PROGRAM_CATEGORIES,
  PROGRAMS,
  SCHEDULE_DAYS,
  WEEKLY_SCHEDULE,
  type ExperienceLevel,
  type ProgramCategory,
} from "@/data/siteContent";

export function ProgramsExplorer() {
  const [selectedCategory, setSelectedCategory] = useState<
    ProgramCategory | "All"
  >("All");
  const [selectedLevel, setSelectedLevel] = useState<ExperienceLevel | "All">(
    "All"
  );
  const [selectedDay, setSelectedDay] = useState<
    (typeof SCHEDULE_DAYS)[number] | "All"
  >("All");

  const filteredPrograms = PROGRAMS.filter((program) => {
    const matchesCategory =
      selectedCategory === "All" || program.category === selectedCategory;
    const matchesLevel =
      selectedLevel === "All" ||
      program.experienceLevels.includes(selectedLevel);
    return matchesCategory && matchesLevel;
  });

  const filteredSchedule = WEEKLY_SCHEDULE.filter((session) => {
    return selectedDay === "All" || session.day === selectedDay;
  });

  const hasActiveFilter =
    selectedCategory !== "All" || selectedLevel !== "All";

  const resetFilters = () => {
    setSelectedCategory("All");
    setSelectedLevel("All");
  };

  return (
    <div>
      {/* Filter Bar & Programs Catalog */}
      <section
        aria-labelledby="programs-catalog-heading"
        className="border-b border-graphite/15 py-16 sm:py-24"
      >
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          {/* Interactive Filter Controls */}
          <div
            role="region"
            aria-label="Filter training programs"
            className="mb-12 border border-graphite/15 bg-ivory-warm p-6 sm:p-8"
          >
            <div className="flex flex-col justify-between gap-6 border-b border-graphite/15 pb-6 lg:flex-row lg:items-center">
              <div>
                <h2
                  id="programs-catalog-heading"
                  className="text-xl font-semibold tracking-tight text-graphite sm:text-2xl"
                >
                  Filter Training Disciplines
                </h2>
                <p className="mt-1 text-sm text-graphite-muted">
                  Narrow programs by focus area or experience level.
                </p>
              </div>
              <div className="flex items-center gap-4">
                <span
                  aria-live="polite"
                  className="font-mono text-xs font-semibold tracking-[0.16em] text-forest uppercase"
                >
                  Showing {filteredPrograms.length} of {PROGRAMS.length}{" "}
                  {filteredPrograms.length === 1 ? "Program" : "Programs"}
                </span>
                {hasActiveFilter && (
                  <button
                    type="button"
                    onClick={resetFilters}
                    className="inline-flex h-9 items-center border border-graphite/30 bg-ivory px-3.5 font-mono text-[11px] font-semibold tracking-[0.14em] text-graphite uppercase transition-colors hover:border-graphite hover:bg-graphite hover:text-ivory"
                  >
                    Reset Filters
                  </button>
                )}
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-12">
              {/* Category Filter */}
              <div className="lg:col-span-7">
                <span className="mb-2.5 block font-mono text-[11px] font-semibold tracking-[0.16em] text-graphite-muted uppercase">
                  Discipline Category
                </span>
                <div
                  role="group"
                  aria-label="Filter by discipline category"
                  className="flex flex-wrap gap-2"
                >
                  <button
                    type="button"
                    aria-pressed={selectedCategory === "All"}
                    onClick={() => setSelectedCategory("All")}
                    className={`min-h-[40px] px-3.5 sm:px-4 text-[11px] sm:text-xs font-semibold tracking-[0.14em] uppercase transition-colors ${
                      selectedCategory === "All"
                        ? "bg-forest text-ivory"
                        : "border border-graphite/20 bg-ivory text-graphite hover:border-graphite"
                    }`}
                  >
                    All Disciplines
                  </button>
                  {PROGRAM_CATEGORIES.map((category) => {
                    const isActive = selectedCategory === category;
                    return (
                      <button
                        key={category}
                        type="button"
                        aria-pressed={isActive}
                        onClick={() => setSelectedCategory(category)}
                        className={`min-h-[40px] px-3.5 sm:px-4 text-[11px] sm:text-xs font-semibold tracking-[0.14em] uppercase transition-colors ${
                          isActive
                            ? "bg-forest text-ivory"
                            : "border border-graphite/20 bg-ivory text-graphite hover:border-graphite"
                        }`}
                      >
                        {category}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Experience Level Filter */}
              <div className="lg:col-span-5">
                <span className="mb-2.5 block font-mono text-[11px] font-semibold tracking-[0.16em] text-graphite-muted uppercase">
                  Experience Level
                </span>
                <div
                  role="group"
                  aria-label="Filter by experience level"
                  className="flex flex-wrap gap-2"
                >
                  <button
                    type="button"
                    aria-pressed={selectedLevel === "All"}
                    onClick={() => setSelectedLevel("All")}
                    className={`min-h-[40px] px-3.5 sm:px-4 text-[11px] sm:text-xs font-semibold tracking-[0.14em] uppercase transition-colors ${
                      selectedLevel === "All"
                        ? "bg-graphite text-ivory"
                        : "border border-graphite/20 bg-ivory text-graphite hover:border-graphite"
                    }`}
                  >
                    All Levels
                  </button>
                  {EXPERIENCE_LEVELS.map((level) => {
                    const isActive = selectedLevel === level;
                    return (
                      <button
                        key={level}
                        type="button"
                        aria-pressed={isActive}
                        onClick={() => setSelectedLevel(level)}
                        className={`min-h-[40px] px-3.5 sm:px-4 text-[11px] sm:text-xs font-semibold tracking-[0.14em] uppercase transition-colors ${
                          isActive
                            ? "bg-graphite text-ivory"
                            : "border border-graphite/20 bg-ivory text-graphite hover:border-graphite"
                        }`}
                      >
                        {level}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Empty State */}
          {filteredPrograms.length === 0 ? (
            <div
              role="status"
              className="border border-graphite/15 bg-ivory-warm p-10 text-center sm:p-16"
            >
              <span className="font-mono text-xs font-semibold tracking-[0.18em] text-forest uppercase">
                NO DIRECT MATCH
              </span>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-graphite">
                No programs match &ldquo;{selectedCategory}&rdquo; at the{" "}
                &ldquo;{selectedLevel}&rdquo; filter level.
              </h3>
              <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-graphite-muted sm:text-base">
                Our Mobility & Recovery sessions are designed as foundational,
                accessible restoration for Beginner and Intermediate levels
                rather than high-intensity advanced training. Reset the filters
                to explore all four club disciplines.
              </p>
              <div className="mt-7">
                <button
                  type="button"
                  onClick={resetFilters}
                  className="inline-flex h-11 items-center justify-center bg-forest px-7 text-xs font-semibold tracking-[0.18em] text-ivory uppercase transition-colors hover:bg-forest-light"
                >
                  Reset All Filters
                </button>
              </div>
            </div>
          ) : (
            /* Program Detail Entries */
            <div className="space-y-12">
              {filteredPrograms.map((program) => (
                <article
                  key={program.id}
                  id={program.id}
                  className="scroll-mt-24 border border-graphite/15 bg-ivory-warm p-6 sm:p-10 lg:p-12"
                >
                  <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-graphite/15 pb-4">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs font-semibold tracking-[0.18em] text-forest uppercase">
                        PROGRAM {program.index}
                      </span>
                      <span className="h-1 w-1 rounded-full bg-forest" />
                      <span className="font-mono text-xs tracking-[0.14em] text-graphite-muted uppercase">
                        {program.category}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {program.experienceLevels.map((lvl) => (
                        <span
                          key={lvl}
                          className="border border-graphite/20 bg-ivory px-2.5 py-0.5 font-mono text-[10px] font-semibold tracking-[0.14em] text-graphite uppercase"
                        >
                          {lvl}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start">
                    {/* Image Column */}
                    <div className="lg:col-span-5">
                      <figure>
                        <div className="relative aspect-[4/3] w-full overflow-hidden border border-graphite/15 bg-graphite">
                          <Image
                            src={program.image.src}
                            alt={program.image.alt}
                            fill
                            sizes="(max-width: 1024px) 100vw, 42vw"
                            className="object-cover object-center"
                          />
                        </div>
                        <figcaption className="mt-2.5 flex items-center justify-between font-mono text-[11px] tracking-[0.14em] text-graphite-muted uppercase">
                          <span>{program.image.caption}</span>
                          <span>{program.sampleDuration}</span>
                        </figcaption>
                      </figure>
                    </div>

                    {/* Details Column */}
                    <div className="flex flex-col justify-between lg:col-span-7">
                      <div>
                        <h3 className="text-3xl font-semibold tracking-[-0.02em] text-graphite sm:text-4xl">
                          {program.title}
                        </h3>
                        <p className="mt-2 font-serif text-xl text-forest italic">
                          {program.subtitle}
                        </p>
                        <p className="mt-4 text-base leading-relaxed text-graphite-muted">
                          {program.description}
                        </p>

                        {/* Benefits */}
                        <div className="mt-7 border-t border-graphite/15 pt-6">
                          <h4 className="font-mono text-[11px] font-semibold tracking-[0.18em] text-graphite uppercase">
                            KEY BENEFITS
                          </h4>
                          <ul className="mt-3 space-y-2.5">
                            {program.benefits.map((benefit) => (
                              <li
                                key={benefit}
                                className="flex items-start gap-2.5 text-sm leading-relaxed text-graphite"
                              >
                                <span
                                  aria-hidden="true"
                                  className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-forest"
                                />
                                <span>{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Metadata Specs */}
                        <dl className="mt-7 grid grid-cols-1 gap-4 border-t border-graphite/15 pt-6 sm:grid-cols-3">
                          <div>
                            <dt className="font-mono text-[10px] font-semibold tracking-[0.16em] text-graphite-muted uppercase">
                              EXPERIENCE LEVEL
                            </dt>
                            <dd className="mt-1 text-sm font-medium text-graphite">
                              {program.levelSummary}
                            </dd>
                          </div>
                          <div>
                            <dt className="font-mono text-[10px] font-semibold tracking-[0.16em] text-graphite-muted uppercase">
                              SAMPLE DURATION
                            </dt>
                            <dd className="mt-1 text-sm font-medium text-graphite">
                              {program.sampleDuration}
                            </dd>
                          </div>
                          <div>
                            <dt className="font-mono text-[10px] font-semibold tracking-[0.16em] text-graphite-muted uppercase">
                              TRAINING FOCUS
                            </dt>
                            <dd className="mt-1 text-sm font-medium text-graphite">
                              {program.trainingFocus}
                            </dd>
                          </div>
                        </dl>
                      </div>

                      <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-graphite/15 pt-6">
                        <p className="text-xs text-graphite-muted">
                          <span className="font-semibold text-graphite">
                            Setting:
                          </span>{" "}
                          {program.environment}
                        </p>
                        <Link
                          href={`/contact?type=program&interest=${program.id}`}
                          className="inline-flex min-h-[48px] items-center justify-center bg-forest px-6 text-xs font-semibold tracking-[0.16em] text-ivory uppercase transition-colors hover:bg-forest-light focus:outline-none focus:ring-2 focus:ring-forest"
                        >
                          Inquire About {program.title}
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Illustrative Weekly Schedule */}
      <section
        id="weekly-schedule"
        aria-labelledby="schedule-heading"
        className="scroll-mt-20 border-b border-graphite/15 bg-ivory-warm py-20 sm:py-28"
      >
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="mb-10 grid grid-cols-1 gap-8 border-b border-graphite/15 pb-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <span className="font-mono text-xs font-semibold tracking-[0.2em] text-forest uppercase">
                02 / SAMPLE TIMETABLE
              </span>
              <h2
                id="schedule-heading"
                className="mt-3 text-3xl leading-[1.06] font-semibold tracking-[-0.025em] text-graphite uppercase sm:text-5xl"
              >
                Weekly Class{" "}
                <span className="font-serif font-normal tracking-normal text-forest lowercase italic">
                  Schedule.
                </span>
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-sm leading-relaxed text-graphite-muted sm:text-base">
                This sample timetable demonstrates how Strength, Functional
                Conditioning, Small-Group cohorts, and Mobility classes balance
                across the week. Select any session to test a prefilled demo
                inquiry.
              </p>
            </div>
          </div>

          {/* Day Filter Tabs */}
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
            <div
              role="group"
              aria-label="Filter schedule by day of week"
              className="flex flex-wrap gap-1.5"
            >
              <button
                type="button"
                aria-pressed={selectedDay === "All"}
                onClick={() => setSelectedDay("All")}
                className={`min-h-[38px] px-3.5 sm:px-4 text-[11px] sm:text-xs font-semibold tracking-[0.14em] uppercase transition-colors ${
                  selectedDay === "All"
                    ? "bg-forest text-ivory"
                    : "border border-graphite/20 bg-ivory text-graphite hover:border-graphite"
                }`}
              >
                All Days ({WEEKLY_SCHEDULE.length})
              </button>
              {SCHEDULE_DAYS.map((day) => {
                const isActive = selectedDay === day;
                return (
                  <button
                    key={day}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => setSelectedDay(day)}
                    className={`min-h-[38px] px-3 sm:px-3.5 text-[11px] sm:text-xs font-semibold tracking-[0.14em] uppercase transition-colors ${
                      isActive
                        ? "bg-forest text-ivory"
                        : "border border-graphite/20 bg-ivory text-graphite hover:border-graphite"
                    }`}
                  >
                    {day}
                  </button>
                );
              })}
            </div>

            <span className="font-mono text-[11px] tracking-[0.14em] text-graphite-muted uppercase">
              Sample Timetable · Concept Schedule
            </span>
          </div>

          {/* Schedule Table (Desktop) / Cards (Mobile) */}
          <div className="border border-graphite/15 bg-ivory">
            <div className="hidden border-b border-graphite/15 bg-graphite px-6 py-3.5 font-mono text-[11px] font-semibold tracking-[0.16em] text-ivory uppercase md:grid md:grid-cols-12 md:gap-4">
              <div className="col-span-2">Day & Time</div>
              <div className="col-span-4">Session & Focus</div>
              <div className="col-span-2">Discipline</div>
              <div className="col-span-2">Coach & Level</div>
              <div className="col-span-2 text-right">Demo Inquiry</div>
            </div>

            <div className="divide-y divide-graphite/15">
              {filteredSchedule.map((item) => (
                <div
                  key={item.id}
                  className="grid grid-cols-1 gap-4 p-5 transition-colors hover:bg-ivory-warm/60 md:grid-cols-12 md:items-center md:px-6 md:py-5"
                >
                  <div className="md:col-span-2">
                    <span className="block font-mono text-xs font-semibold tracking-[0.14em] text-forest uppercase">
                      {item.day}
                    </span>
                    <span className="mt-0.5 block text-sm font-semibold text-graphite">
                      {item.time}{" "}
                      <span className="font-normal text-graphite-muted">
                        ({item.duration})
                      </span>
                    </span>
                  </div>

                  <div className="md:col-span-4">
                    <h3 className="text-base font-semibold text-graphite">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-xs leading-relaxed text-graphite-muted">
                      {item.focus}
                    </p>
                  </div>

                  <div className="md:col-span-2">
                    <span className="inline-block border border-graphite/20 bg-ivory-warm px-2.5 py-1 font-mono text-[10px] font-semibold tracking-[0.12em] text-graphite uppercase">
                      {item.programTitle}
                    </span>
                  </div>

                  <div className="md:col-span-2">
                    <span className="block text-sm font-medium text-graphite">
                      {item.coach}
                    </span>
                    <span className="block font-mono text-[11px] text-graphite-muted">
                      {item.level}
                    </span>
                  </div>

                  <div className="md:col-span-2 md:text-right">
                    <Link
                      href={`/contact?type=program&interest=${item.programId}&session=${encodeURIComponent(`${item.day} ${item.time} — ${item.title}`)}`}
                      className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold tracking-[0.14em] text-forest uppercase transition-colors hover:text-graphite"
                    >
                      <span>Inquire</span>
                      <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
