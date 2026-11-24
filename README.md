# AMIT ATHLETIC CLUB

**AMIT ATHLETIC CLUB** is a fictional fitness club concept set in Denver, Colorado, built as an editorial, accessible, and responsive multi-page software-engineering portfolio website using Next.js, TypeScript, and Tailwind CSS.

> **Portfolio Disclosure:** AMIT ATHLETIC CLUB is a fictional brand created strictly for software engineering and design demonstration purposes. No physical club, memberships, paid services, or commercial operations exist. All pricing is illustrative USD (`$`), all schedules and coaching profiles are conceptual, and all form submissions run client-side simulations without transmitting or saving user data.

---

## Overview & Visual Identity

The site combines architectural, editorial typography with restrained luxury-minimalist layout composition:

- **Brand:** AMIT ATHLETIC CLUB (`AAC`)
- **Tagline:** *Strength. Movement. Intention.*
- **Concept Location:** Denver, Colorado
- **Palette:** Warm Ivory (`#F7F6F2`), Warm Stone (`#E8E6DF`), Deep Graphite (`#1A1A1A`), Muted Graphite (`#5A5A58`), and Heritage Forest Green (`#1E3A2F`)
- **Typography:** `Manrope` (sans-serif UI and body hierarchy) paired with `Instrument Serif` (editorial italic accents and headings)

---

## Major Features & Multi-Page Architecture

The application implements six dedicated routes under the Next.js App Router with synchronized editorial route numbering (`01`–`06`):

| Route | Page Title | Key Features & Responsibilities |
| :--- | :--- | :--- |
| `/` | **Homepage** | Editorial hero (`MOVE WITH intention.`), club introduction, 2×2 discipline overview, four club pillars, compact membership preview, coaching teaser, and closing inquiry CTA. |
| `/about` | **About the Club & Philosophy** | Brand philosophy, beginner and experienced-athlete pathways, four architectural facility zones, and core club values. |
| `/programs` | **Training Programs & Weekly Schedule** | Deep dive into four training disciplines, interactive client-side category and experience-level filters with active counts and reset, and a filterable weekly class schedule. |
| `/memberships` | **Memberships & Pricing** | Three illustrative tiers (*Foundation Access* `$195/mo`, *Club All-Round* `$265/mo`, *Performance & Coaching* `$385/mo`), Monthly/Yearly billing toggle with 20% annual savings, desktop comparison matrix, mobile feature cards, and prefilled inquiry links. |
| `/trainers` | **Coaching Team & Methodology** | Four illustrative coaching profiles paired with non-identifying training photography, coaching principles, and direct program inquiry links. |
| `/contact` | **Contact & Demo Inquiry** | Concept club overview, sample hours, URL query-parameter prefilling, international phone-number validation across 245 countries/regions (defaulting to US `+1`), client-side field validation, and a resettable simulated submission state. |

---

## Technology Stack

- **Framework:** Next.js 16.4.5 (App Router, Turbopack, Cache Components & Partial Prefetching)
- **Language:** TypeScript 5 (strict mode)
- **UI & Styling:** React 19.3, Tailwind CSS v4
- **Phone Validation:** `libphonenumber-js` (`libphonenumber-js/max` metadata for international validation and E.164 normalization)
- **Typography & Media:** `next/font/google` (`Manrope`, `Instrument Serif`) and `next/image` with static responsive dimensions and inline custom SVG icons
- **Testing:** Automated unit and regression suite executed via `tsx` (`npm test`)

---

## Project Structure

```text
amit-athletic-club/
├── src/
│   ├── app/                                # Next.js App Router routes, metadata & icons
│   │   ├── about/page.tsx                  # 02 — About & Philosophy
│   │   ├── contact/page.tsx                # 06 — Contact & Inquiry Form
│   │   ├── memberships/page.tsx            # 04 — Memberships & Pricing
│   │   ├── programs/page.tsx               # 03 — Programs & Weekly Schedule
│   │   ├── trainers/page.tsx               # 05 — Coaching Team & Methodology
│   │   ├── apple-icon.png                  # 180×180 Apple touch icon
│   │   ├── favicon.ico                     # Custom AAC multi-res favicon
│   │   ├── globals.css                     # Tailwind CSS v4 tokens & theme
│   │   ├── icon.png                        # 32×32 PNG application icon
│   │   ├── icon.svg                        # Scalable vector AAC monogram icon
│   │   ├── layout.tsx                      # Root layout, fonts, metadata, skip link
│   │   ├── opengraph-image.png             # 1200×630 OpenGraph preview card
│   │   ├── page.tsx                        # 01 — Club Homepage
│   │   ├── robots.ts                       # Dynamic robots.txt metadata route
│   │   ├── sitemap.ts                      # Dynamic sitemap.xml covering 6 routes
│   │   └── twitter-image.png               # 1200×630 Twitter summary card image
│   ├── components/
│   │   ├── contact/
│   │   │   ├── ContactForm.tsx             # Inquiry form, prefill & simulation state
│   │   │   ├── countries.ts                # 245-country list & dynamic placeholders
│   │   │   ├── phoneValidation.ts          # International phone parsing & E.164 logic
│   │   │   └── validation.test.ts          # Automated validation & route test suite
│   │   ├── layout/
│   │   │   ├── Footer.tsx                  # Global footer & fictional brand disclosure
│   │   │   └── Navbar.tsx                  # Sticky header & accessible mobile drawer
│   │   ├── memberships/
│   │   │   └── MembershipsInteractive.tsx  # Billing toggle, annual savings & matrix
│   │   ├── programs/
│   │   │   └── ProgramsExplorer.tsx        # Program filters & weekly schedule matrix
│   │   └── sections/                       # Modular homepage section components
│   └── data/
│       └── siteContent.ts                  # Typed content catalog & ROUTE_EDITORIAL_MAP
├── public/
│   ├── apple-icon.png
│   ├── favicon.ico
│   ├── icon.png
│   ├── icon.svg
│   └── images/                             # 13 Unsplash photography files + og-aac-preview.png
├── IMAGE_CREDITS.md                        # Complete image licensing & provenance log
├── eslint.config.mjs                       # ESLint 9 flat configuration
├── next.config.ts                          # Next.js & Turbopack CSS loader config
├── package.json                            # Project manifest & scripts
├── package-lock.json                       # Locked npm dependency graph
└── tsconfig.json                           # Strict TypeScript compiler configuration
```

---

## Local Installation & Development

### Prerequisites

- Node.js 20 LTS or newer (verified with Node v26.4.0)
- npm 10+ (verified with npm 11.17.0)

### Installation & Local Server

```bash
git clone <repository-url>
cd amit-athletic-club
npm install
npm run dev
```

Open `http://localhost:3000` in your browser.

### Available Scripts

| Script | Command | Description |
| :--- | :--- | :--- |
| `npm run dev` | `next dev` | Starts the local development server. |
| `npm run build` | `next build` | Runs TypeScript checks and builds optimized production output. |
| `npm start` | `next start` | Serves the production build locally. |
| `npm run lint` | `eslint` | Runs ESLint across source files. |
| `npm test` | `npx tsx src/components/contact/validation.test.ts` | Executes automated validation, pricing math, query-prefill, and route-mapping tests. |

### Production Build & Verification

```bash
npm test
npm run lint
npx tsc --noEmit
npm run build
npm start
```

---

## Application Architecture, Accessibility & Responsive Design

### Centralized Typed Data & Editorial Route Numbering
All club copy, navigation links, programs, weekly schedules, membership tiers, coaching profiles, and route numbers (`ROUTE_EDITORIAL_MAP`) reside in `src/data/siteContent.ts`. Consistent TypeScript types ensure updates propagate safely across pages and interactive components.

### Simulated Inquiry Form & URL Query Prefilling
Call-to-action links across the site prefill the `/contact` inquiry form via search parameters:
- Membership tiers: `/contact?type=membership&interest=foundation&billing=yearly`
- Training programs & schedule sessions: `/contact?type=program&interest=strength-conditioning&session=...`
- Orientation & trial inquiries: `/contact?type=trial`

Client-side validation covers:
- **Full Name:** Required, 2–100 characters, supporting Unicode letters, spaces, hyphens, and apostrophes.
- **Email:** Required, standard email syntax validation.
- **Phone Number:** Required, validated via `libphonenumber-js/max` with an accessible country/region selector (`United States (+1)` default, 245 territories total) and automatic `+` international code detection.
- **Message:** Optional, up to 1,000 characters with a live character counter.

No backend API, database, authentication, or email dispatch is connected. Submitted entries remain strictly in browser memory for demonstration and reset cleanly via **Submit Another Inquiry**.

### Accessibility & Responsive Engineering
- Skip-to-content link (`#main-content`) and semantic landmark regions (`header`, `nav`, `main`, `footer`).
- Keyboard-accessible mobile navigation drawer with `Escape` handling, focus trapping, and scroll lock.
- Inline error summaries (`role="alert"`), per-field error messages, `aria-invalid`, `aria-describedby`, and automatic focus management to the first invalid control on submit.
- Responsive multi-column layouts engineered for viewports from `390px` mobile up to `1440px` desktop.

---

## Image Credits & Licensing Status

- **Image Provenance:** All 13 photographic assets stored in `public/images/` are genuine camera photographs sourced from [Unsplash](https://unsplash.com) under the [Unsplash License](https://unsplash.com/license), which permits free commercial and non-commercial use without prior permission. Full photo IDs, creator names, and source URLs are documented in [`IMAGE_CREDITS.md`](./IMAGE_CREDITS.md).
- **Repository Licensing:** The package manifest (`package.json`) marks this project `"private": true`, and no separate open-source software license has been assigned to the application source code. Third-party npm dependencies and Unsplash photographs remain governed by their respective licenses.

---

## Vercel Deployment Notes

- **Framework Preset:** Next.js
- **Build Command:** `npm run build`
- **Output Directory:** `.next`
- **Environment Variables:** None required for core functionality. Once deployed to a final custom domain, canonical metadata, OpenGraph URLs, `robots.txt`, and `sitemap.xml` automatically resolve from Vercel's `VERCEL_PROJECT_PRODUCTION_URL` or an optional `NEXT_PUBLIC_SITE_URL` environment variable.
