# AMIT ATHLETIC CLUB — Premium Fitness Club Portfolio Website

**AMIT ATHLETIC CLUB** is a fictional luxury-minimalist fitness club concept set in Denver, Colorado, engineered as an editorial, accessible, and responsive multi-page software engineering portfolio website.

> **Portfolio Disclosure:** AMIT ATHLETIC CLUB is a fictional brand created strictly for software engineering and design demonstration purposes. No physical club, memberships, paid services, or commercial operations exist. All pricing is illustrative USD (`$`), all schedules and coaching profiles are conceptual, and all form submissions run client-side simulations without collecting or transmitting private user data.

---

## Table of Contents

1. [Overview & Visual Identity](#overview--visual-identity)
2. [Multi-Page Architecture](#multi-page-architecture)
3. [Technology Stack](#technology-stack)
4. [Project Structure](#project-structure)
5. [Local Development & Verification](#local-development--verification)
6. [Key Engineering Highlights](#key-engineering-highlights)
7. [Asset Licensing & Provenance](#asset-licensing--provenance)
8. [Deployment Readiness (Vercel)](#deployment-readiness-vercel)
9. [Limitations & Truthful Disclosures](#limitations--truthful-disclosures)

---

## Overview & Visual Identity

The project embodies an architectural, editorial fitness aesthetic that balances luxury minimalism with high-performance sportswear branding.

- **Brand:** AMIT ATHLETIC CLUB (AAC)
- **Tagline:** *Strength. Movement. Intention.*
- **Concept Location:** Denver, Colorado
- **Design System:**
  - **Color Palette:** Warm Ivory (`#F7F6F2`), Warm Stone (`#E8E6DF`), Deep Graphite (`#1A1A1A`), Muted Graphite (`#5A5A58`), and Heritage Forest Green (`#1E3A2F`).
  - **Typography:** `Manrope` (clean, contemporary sans-serif for UI, navigation, and data hierarchy) paired with `Instrument Serif` (editorial italic serif for intentional accents and headings).
  - **Composition:** Hairline borders (`border-graphite/15`), generous whitespace, restrained typographic hierarchy, and authentic athletic photography.

---

## Multi-Page Architecture

The application comprises six dedicated Next.js App Router pages:

| Route | Page Title | Key Features & Responsibilities |
| :--- | :--- | :--- |
| `/` | **Homepage** | Editorial hero composition (`MOVE WITH INTENTION.`), concise club introduction, 2×2 program preview, four club pillars, compact membership preview, coaching philosophy teaser, and closing inquiry call-to-action. |
| `/about` | **About the Club & Philosophy** | Brand narrative, dual pathways for beginners and experienced lifters, four dedicated facility zones (Strength Floor, Movement Studio, Recovery Lounge, Consultation Suite), and core club principles. |
| `/programs` | **Training Programs & Weekly Schedule** | In-depth exploration of the four training disciplines, interactive client-side category and experience level filters with active state management and reset, and an interactive weekly schedule matrix. |
| `/memberships` | **Memberships & Illustrative Pricing** | Three illustrative tiers (*Foundation Access* `$195/mo`, *Club All-Round* `$265/mo`, *Performance & Coaching* `$385/mo`), interactive Monthly/Yearly toggle computing a 20% annual savings, side-by-side desktop comparison table, responsive mobile feature cards, and CTA inquiry parameter prefills. |
| `/trainers` | **Coaching Team & Methodology** | Four illustrative coaching profiles (*Marcus Vance*, *Elena Rostova*, *Soren Lindqvist*, *Maya Lin*) paired with non-identifying movement photography, coaching standards, and specialized disciplines. |
| `/contact` | **Contact & Demo Inquiry** | Concept location information, sample club hours, and an accessible interactive inquiry form supporting prefill parameters (`?type=...&interest=...&billing=...&session=...`), strict North American Numbering Plan (NANP) phone validation, and a privacy-preserving simulated success state. |

---

## Technology Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router, Turbopack, Partial Prerendering architecture)
- **Language:** [TypeScript 5](https://www.typescriptlang.org/) (Strict mode, zero `any` types)
- **UI & Styling:** [React 19](https://react.dev/), [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/) (Accessible SVG icons)
- **Typography:** `next/font/google` (`Manrope` and `Instrument Serif` with zero layout shift)
- **Image Optimization:** `next/image` (WebP/AVIF automatic optimization, explicit responsive aspect ratios, priority LCP loading)
- **Testing:** Automated Node/tsx unit test suite verifying phone validation, contact field logic, billing calculations, and URL parameter handling.

---

## Project Structure

```text
amit-athletic-club/
├── src/
│   ├── app/                                # Next.js App Router routes & layouts
│   │   ├── about/page.tsx                  # About & philosophy page
│   │   ├── contact/page.tsx                # Contact & inquiry form page
│   │   ├── memberships/page.tsx            # Memberships & pricing page
│   │   ├── programs/page.tsx               # Programs & schedule page
│   │   ├── trainers/page.tsx               # Coaching & methodology page
│   │   ├── apple-icon.png                  # 180×180 Apple touch icon
│   │   ├── favicon.ico                     # Multi-res (16/32/48px) custom AAC favicon
│   │   ├── globals.css                     # Tailwind CSS v4 design tokens & theme
│   │   ├── icon.png                        # 32×32 PNG application icon
│   │   ├── icon.svg                        # Scalable vector AAC brand icon
│   │   ├── layout.tsx                      # Root layout, fonts, metadata, icons
│   │   ├── opengraph-image.png             # 1200×630 branded OpenGraph preview card
│   │   ├── page.tsx                        # Club homepage
│   │   ├── robots.ts                       # Dynamic robots.txt metadata route
│   │   ├── sitemap.ts                      # Dynamic sitemap.xml indexing 6 public routes
│   │   └── twitter-image.png               # Twitter card summary large image
│   ├── components/
│   │   ├── contact/
│   │   │   ├── ContactForm.tsx             # Interactive inquiry form & simulation state
│   │   │   └── validation.test.ts          # Automated validation test suite
│   │   ├── layout/
│   │   │   ├── Footer.tsx                  # Simplified semantic footer with disclosure
│   │   │   └── Navbar.tsx                  # Clean header without top utility bar
│   │   ├── memberships/
│   │   │   └── MembershipsInteractive.tsx  # Billing toggle, calculations & comparison
│   │   ├── programs/
│   │   │   └── ProgramsExplorer.tsx        # Filterable programs list & weekly schedule
│   │   └── sections/                       # Reusable homepage sections
│   │       ├── ClubIntroSection.tsx
│   │       ├── CoachingSection.tsx
│   │       ├── FinalCtaSection.tsx
│   │       ├── HeroSection.tsx
│   │       ├── MembershipSection.tsx
│   │       ├── ProgramsSection.tsx
│   │       └── WhyUsSection.tsx
│   └── data/
│       └── siteContent.ts                  # Centralized, strongly-typed content data source
├── public/
│   ├── apple-icon.png                      # Direct static Apple touch icon
│   ├── favicon.ico                         # Direct static AAC favicon
│   ├── icon.png                            # Direct static 32×32 icon
│   ├── icon.svg                            # Direct static vector icon
│   └── images/                             # 13 authentic photos + og-aac-preview.png
├── IMAGE_CREDITS.md                        # Complete photographic licensing & attribution log
├── eslint.config.mjs                       # Flat ESLint 9 configuration
├── next.config.ts                          # Next.js configuration & Turbopack CSS rules
├── package.json                            # Project dependencies & npm scripts
└── tsconfig.json                           # Strict TypeScript compiler options
```

---

## Local Development & Verification

### Prerequisites

- Node.js 18.18+ or 20+ (recommended: Node 20 or 22 LTS)
- npm 9+ or 10+

### Setup

```bash
# Clone the repository and navigate into the project
cd amit-athletic-club

# Install dependencies cleanly
npm install

# Start the local development server with Turbopack
npm run dev
```

Visit [`http://localhost:3000`](http://localhost:3000) in your browser.

### Quality Verification Pipeline

The codebase enforces a four-stage local engineering verification pipeline:

```bash
# 1. Run automated unit and regression tests
npm test

# 2. Run ESLint code quality audit
npm run lint

# 3. Perform strict TypeScript compiler checks
npx tsc --noEmit

# 4. Generate optimized production build
npm run build

# 5. (Optional) Run the local production server
npm start
```

---

## Key Engineering Highlights

### 1. Robust Form Validation & Client Simulation
The contact inquiry form implements rigorous client-side validation:
- **Full Name:** Minimum 2 characters, maximum 80 characters.
- **Email:** RFC-compliant regex validation.
- **US Phone Number:** Strict North American Numbering Plan (NANP) validation (`(NXX) NXX-XXXX` where area code and central office exchange cannot start with 0 or 1) with automated phone formatting.
- **Message:** Minimum 10 characters, maximum 1,000 characters.
- **Privacy & Security:** Form submissions run an asynchronous client simulation without transmitting data to external servers. The confirmation state does not mirror sensitive personal inputs into the DOM.
- **Accessibility:** Live ARIA alert regions (`role="alert"`), `aria-invalid` bindings, explicit `aria-describedby` error associations, and automated first-field error focus.

### 2. URL Query Parameter Prefilling
Call-to-action buttons across the site pre-populate the inquiry form seamlessly via URL search params:
- Tier prefill: `/contact?type=membership&interest=Foundation+Access&billing=yearly`
- Session prefill: `/contact?type=orientation&session=Small-Group+Strength`
- Custom interest: `/contact?type=general&interest=Facility+Tour`

The form safely resolves and validates these parameters against known options with fallback to defaults.

### 3. Centralized Strongly-Typed Content
All site copy, navigation links, program details, schedules, pricing tiers, and coaching metadata reside in `src/data/siteContent.ts`, enforcing strict TypeScript interfaces. Changes to pricing, copy, or navigation propagate uniformly throughout the application.

### 4. Zero-Vulnerability Dependency Chain
The project dependencies are completely audited with `npm audit` and `npm audit --omit=dev`, reporting **0 vulnerabilities**.

### 5. Branded Identity, Social Sharing & SEO Infrastructure
- **Custom AAC Browser Favicon:** Designed with brand Graphite (`#1C211E`) background and Ivory (`#F5F3EE`) serif monogram, replacing the default Next.js logo with multi-res `favicon.ico` (16, 32, 48px), vector `icon.svg`, and 180×180 `apple-icon.png`.
- **Branded OpenGraph Preview Image:** 1200×630 editorial graphic showcasing the AAC monogram, wordmark, tagline, and four training disciplines in Next.js App Router metadata format.
- **Dynamic SEO Metadata:** Native `src/app/robots.ts` and `src/app/sitemap.ts` metadata routes dynamically indexing all six public pages with weekly change frequency and prioritization.
- **Vercel Production Domain Readiness:** Centralized `NEXT_PUBLIC_SITE_URL` and `VERCEL_PROJECT_PRODUCTION_URL` configuration for automatic canonical and sitemap URL resolution upon deployment.

---

## Asset Licensing & Provenance

All imagery used in this project is authentic, high-resolution photography sourced from [Unsplash](https://unsplash.com) under the [Unsplash License](https://unsplash.com/license):
- Permitted for free commercial and personal use without prior permission.
- Completely free of AI-generated portraits, synthetic equipment renders, and stock watermarks.
- All 13 image files are locally hosted in `public/images/` and served via `next/image` with responsive dimensions.
- Full photographer credits, direct image URLs, and Unsplash photo IDs are documented in [`IMAGE_CREDITS.md`](./IMAGE_CREDITS.md).

---

## Deployment Readiness (Vercel)

The project is pre-configured for automated, zero-configuration deployment to [Vercel](https://vercel.com):
- **Framework Preset:** Next.js
- **Build Command:** `next build` (or `npm run build`)
- **Output Directory:** `.next`
- **Environment Variables:** None required (fully self-contained without third-party databases, auth providers, or payment gateways).
- **Static Prerendering:** All six routes prerender as static HTML (`○ (Static)`), enabling instant global CDN delivery and maximum Core Web Vitals performance.

---

## Limitations & Truthful Disclosures

- **Fictional Concept:** AMIT ATHLETIC CLUB is not a real business. No physical location exists at the conceptual Denver, Colorado setting.
- **Illustrative Pricing:** Pricing figures ($195, $265, $385) and annual discounts are illustrative models and do not constitute commercial offers.
- **Conceptual Schedule & Coaching:** All schedule times and coaching biographies are illustrative representations of a club program.
- **Client-Side Simulation:** Inquiry submissions do not persist to a backend database or dispatch actual emails.
