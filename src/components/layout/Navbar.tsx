"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS, SITE_META } from "@/data/siteContent";

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const toggleButtonRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setIsOpen(false);
        toggleButtonRef.current?.focus();
        return;
      }

      if (event.key === "Tab" && drawerRef.current) {
        const focusable = drawerRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          toggleButtonRef.current?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          toggleButtonRef.current?.focus();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen]);

  const closeMenu = () => {
    setIsOpen(false);
  };

  const isRouteActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-ivory/95 backdrop-blur-md border-b border-stone">
      {/* Top micro-bar with concept location and portfolio disclosure badge */}
      <div className="border-b border-stone/60 bg-ivory-muted/70 px-4 sm:px-6 lg:px-12 py-1.5">
        <div className="mx-auto max-w-[1360px] flex items-center justify-between text-[11px] tracking-[0.16em] uppercase text-graphite-soft">
          <span>{SITE_META.conceptLocation}</span>
          <span className="hidden sm:inline">
            Portfolio Concept — Strength · Movement · Intention
          </span>
          <span className="sm:hidden">Portfolio Concept</span>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-6 xl:px-12">
        <div className="flex h-16 sm:h-20 items-center justify-between gap-3">
          {/* Brand Monogram + Wordmark */}
          <Link
            href="/"
            onClick={closeMenu}
            className="group inline-flex shrink-0 items-center gap-3 py-1 text-graphite"
            aria-label="AMIT ATHLETIC CLUB — Home"
          >
            <span
              aria-hidden="true"
              className="inline-flex h-10 w-10 items-center justify-center border border-graphite bg-graphite text-ivory font-serif text-lg tracking-wider transition-colors duration-200 group-hover:bg-forest group-hover:border-forest"
            >
              {SITE_META.monogram}
            </span>
            <span className="flex flex-col">
              <span className="text-xs xl:text-sm font-bold tracking-[0.18em] xl:tracking-[0.22em] uppercase leading-none">
                {SITE_META.brandName}
              </span>
              <span className="mt-1 text-[10px] tracking-[0.16em] xl:tracking-[0.18em] uppercase text-graphite-soft leading-none">
                Denver · Athletic Club
              </span>
            </span>
          </Link>

          {/* Desktop Route Navigation */}
          <nav
            aria-label="Primary navigation"
            className="hidden lg:flex items-center gap-4 xl:gap-8"
          >
            {NAV_ITEMS.map((item) => {
              const active = isRouteActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`group relative whitespace-nowrap py-2 text-[11px] xl:text-xs font-semibold uppercase tracking-[0.12em] xl:tracking-[0.16em] transition-colors duration-200 ${
                    active
                      ? "text-forest"
                      : "text-graphite hover:text-forest"
                  }`}
                >
                  <span
                    className={`mr-1 xl:mr-1.5 font-serif italic text-[12px] xl:text-[13px] transition-colors duration-200 ${
                      active
                        ? "text-forest"
                        : "text-graphite-soft group-hover:text-forest"
                    }`}
                  >
                    {item.index}
                  </span>
                  <span>{item.label}</span>
                  <span
                    aria-hidden="true"
                    className={`absolute bottom-0 left-0 h-[2px] bg-forest transition-all duration-200 ${
                      active ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Desktop Prominent Membership CTA + Mobile Menu Toggle */}
          <div className="flex shrink-0 items-center gap-3">
            <Link
              href="/memberships"
              className="hidden lg:inline-flex items-center justify-center whitespace-nowrap bg-graphite px-4 xl:px-5 py-3 text-[11px] xl:text-xs font-semibold uppercase tracking-[0.14em] xl:tracking-[0.18em] text-ivory transition-colors duration-200 hover:bg-forest"
            >
              Explore Memberships
            </Link>

            <button
              ref={toggleButtonRef}
              type="button"
              onClick={() => setIsOpen((prev) => !prev)}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation-drawer"
              aria-label={
                isOpen ? "Close navigation menu" : "Open navigation menu"
              }
              className="lg:hidden inline-flex items-center gap-2.5 border border-graphite px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-graphite transition-colors duration-200 hover:bg-graphite hover:text-ivory"
            >
              <span>{isOpen ? "Close" : "Menu"}</span>
              <span
                aria-hidden="true"
                className="relative flex h-3.5 w-4 flex-col justify-between"
              >
                <span
                  className={`block h-[1.5px] w-full bg-current transition-transform duration-200 ${
                    isOpen ? "translate-y-[6px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`block h-[1.5px] w-full bg-current transition-opacity duration-200 ${
                    isOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`block h-[1.5px] w-full bg-current transition-transform duration-200 ${
                    isOpen ? "-translate-y-[6px] -rotate-45" : ""
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Responsive Mobile Navigation Drawer */}
      <div
        id="mobile-navigation-drawer"
        ref={drawerRef}
        role="region"
        aria-label="Mobile navigation menu"
        hidden={!isOpen}
        className={`lg:hidden border-t border-stone bg-ivory ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 py-6 flex flex-col justify-between min-h-[calc(100dvh-6.25rem)] overflow-y-auto">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-forest mb-3">
              Club Directory — Pages
            </p>
            <nav aria-label="Mobile navigation">
              <ul className="divide-y divide-stone border-y border-stone">
                {NAV_ITEMS.map((item) => {
                  const active = isRouteActive(item.href);
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={closeMenu}
                        aria-current={active ? "page" : undefined}
                        className={`group flex items-baseline justify-between py-3.5 transition-colors duration-150 ${
                          active
                            ? "text-forest"
                            : "text-graphite hover:text-forest"
                        }`}
                      >
                        <span className="flex items-baseline gap-4">
                          <span
                            className={`font-serif italic text-lg ${
                              active
                                ? "text-forest"
                                : "text-graphite-soft group-hover:text-forest"
                            }`}
                          >
                            {item.index}
                          </span>
                          <span className="text-lg font-semibold uppercase tracking-[0.12em]">
                            {item.label}
                          </span>
                        </span>
                        <span className="text-xs uppercase tracking-[0.18em] text-graphite-soft group-hover:text-forest">
                          {active ? "Current" : "Visit →"}
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>

          <div className="mt-6 pt-5 border-t border-stone space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link
                href="/memberships"
                onClick={closeMenu}
                className="inline-flex items-center justify-center bg-forest px-5 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-ivory transition-colors duration-200 hover:bg-graphite"
              >
                Explore Memberships
              </Link>
              <Link
                href="/contact"
                onClick={closeMenu}
                className="inline-flex items-center justify-center border border-graphite px-5 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-graphite transition-colors duration-200 hover:bg-graphite hover:text-ivory"
              >
                Demo Inquiry Form
              </Link>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1.5 text-xs text-graphite-soft">
              <span className="font-medium uppercase tracking-[0.14em]">
                {SITE_META.conceptLocation}
              </span>
              <span className="font-serif italic text-sm text-graphite">
                {SITE_META.tagline}
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
