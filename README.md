# AMIT ATHLETIC CLUB

**AMIT ATHLETIC CLUB** is a fictional fitness club concept set in Denver, Colorado, built as an accessible, responsive multi-page portfolio website using Next.js, TypeScript, and Tailwind CSS.

- **Live Website:** [https://amitathleticclub.vercel.app/](https://amitathleticclub.vercel.app/)
- **Source Repository:** [https://github.com/amit-kulkarni7/amit-athletic-club](https://github.com/amit-kulkarni7/amit-athletic-club)

> **Portfolio Disclosure:** AMIT ATHLETIC CLUB is a fictional brand created for software-engineering and UI demonstration purposes. No physical club, memberships, paid services, or commercial operations exist. All pricing is illustrative USD (`$`), schedules and coaching profiles are conceptual, and inquiry submissions run client-side simulations without transmitting or saving user data.

---

## Visual Identity

- **Brand:** AMIT ATHLETIC CLUB (`AAC`)
- **Tagline:** *Strength. Movement. Intention.*
- **Concept Location:** Denver, Colorado
- **Palette:** Ivory (`#F5F3EE`), Muted Ivory (`#ECE8DF`), Graphite (`#1C211E`), Soft Graphite (`#3B423E`), Forest (`#46594B`), Deep Forest (`#324136`), and Stone (`#C9C5BA`)
- **Typography:** `Manrope` for UI and body hierarchy paired with `Instrument Serif` for editorial accents and headings

---

## Multi-Page Architecture

The application implements six routes under the Next.js App Router with synchronized route numbering (`01`–`06`):

| Route | Page Title | Summary |
| :--- | :--- | :--- |
| `/` | **Homepage** | Hero section (`MOVE WITH Intention.`), club introduction, 2×2 discipline overview, four pillars, membership preview, coaching teaser, and closing CTA. |
| `/about` | **About & Philosophy** | Training philosophy, newcomer and experienced-lifter pathways, four facility zones, and core club values. |
| `/programs` | **Programs & Weekly Schedule** | Four training disciplines with client-side category and experience-level filters, active count, reset controls, and a day-filterable weekly schedule. |
| `/memberships` | **Memberships & Pricing** | Three tiers (*Foundation Access* `$195/mo`, *Club All-Round* `$265/mo`, *Performance & Coaching* `$385/mo`), Monthly/Yearly toggle computing a 20% annual discount, desktop and mobile feature comparisons, and prefilled inquiry links. |
| `/trainers` | **Coaching Team & Methodology** | Four illustrative coaching profiles paired with non-identifying movement photography, shared coaching standards, and program inquiry links. |
| `/contact` | **Contact & Demo Inquiry** | Concept location details, sample hours, query-parameter prefilling, international phone validation across 245 countries/regions (defaulting to US `+1`), client-side validation, and a resettable simulation state. |

---

## Technology Stack

- **Framework:** Next.js 16.4.5 (App Router, Turbopack, Cache Components & Partial Prefetching)
- **Language:** TypeScript 5 (strict mode)
- **UI & Styling:** React 19.3, Tailwind CSS v4
- **Phone Validation:** `libphonenumber-js` (`libphonenumber-js/max` metadata for international validation and E.164 normalization)
- **Typography & Media:** `next/font/google` (`Manrope`, `Instrument Serif`), `next/image`, and inline SVG icons
- **Testing:** Automated unit suite (`tsx`) and React DOM interaction suite (`vitest` + `@testing-library/react` + `jsdom`)

---

## Project Structure

```text
amit-athletic-club/
├── src/
│   ├── app/                                # Next.js App Router routes, metadata & icons
│   ├── components/
│   │   ├── contact/
│   │   │   ├── ContactForm.tsx             # Inquiry form state, accessibility & simulation
│   │   │   ├── ContactForm.test.tsx        # Contact form DOM interaction tests
│   │   │   ├── contactValidation.ts        # Field validators & query-param resolvers
│   │   │   ├── countries.ts                # 245-territory list & sample placeholders
│   │   │   ├── phoneValidation.ts          # International phone parsing & E.164 logic
│   │   │   └── validation.test.ts          # Unit tests for validators, pricing & routes
│   │   ├── layout/
│   │   │   ├── Footer.tsx                  # Footer directory & fictional brand disclosure
│   │   │   └── Navbar.tsx                  # Sticky header & accessible mobile drawer
│   │   ├── memberships/
│   │   │   ├── MembershipsInteractive.tsx  # Billing toggle, pricing & shared comparison
│   │   │   └── MembershipsInteractive.test.tsx
│   │   ├── programs/
│   │   │   ├── ProgramsExplorer.tsx        # Discipline/level filters & weekly schedule
│   │   │   └── ProgramsExplorer.test.tsx
│   │   └── sections/                       # Homepage section components
│   └── data/
│       └── siteContent.ts                  # Typed content catalog, pricing & route map
├── public/                                 # Static favicons, touch icons & 14 images
├── IMAGE_CREDITS.md                        # Photographic licensing & attribution log
├── vitest.config.ts                        # Vitest & jsdom configuration
├── vitest.setup.tsx                        # Test cleanup & Next.js Link/Image mocks
├── eslint.config.mjs                       # ESLint 9 flat configuration
├── next.config.ts                          # Next.js & Turbopack CSS loader config
├── package.json                            # Project manifest & scripts
└── tsconfig.json                           # Strict TypeScript compiler configuration
```

---

## Local Installation & Development

### Prerequisites

- Node.js 20 LTS or newer (verified with Node v26.4.0)
- npm 10+ (verified with npm 11.17.0)

### Installation & Local Server

```bash
git clone https://github.com/amit-kulkarni7/amit-athletic-club.git
cd amit-athletic-club
npm install
npm run dev
```

Open `http://localhost:3000` in your browser.

### Available Scripts

| Script | Command | Description |
| :--- | :--- | :--- |
| `npm run dev` | `next dev` | Starts the local development server. |
| `npm run build` | `next build` | Builds the optimized production bundle. |
| `npm start` | `next start` | Serves the production build locally. |
| `npm run lint` | `eslint` | Runs ESLint across source files. |
| `npm test` | `npx tsx src/components/contact/validation.test.ts && vitest run` | Runs pure unit tests and DOM interaction tests. |

### Verification Pipeline

```bash
npm test
npm run lint
npx tsc --noEmit
npm run build
```

---

## Architecture, Accessibility & Form Simulation

### Centralized Content & Pricing Authority
All club copy, navigation links, programs, schedules, membership tiers, coaching profiles, and route numbers (`ROUTE_EDITORIAL_MAP`) reside in `src/data/siteContent.ts`. Annual membership rates, totals, and savings are calculated from `monthlyPriceUsd` and `ANNUAL_DISCOUNT_PERCENT` via `calculateAnnualDiscount()`, feeding homepage previews, interactive pricing cards, desktop tables, and mobile comparison views from one source.

### Simulated Inquiry Form & URL Prefilling
Site CTAs prefill `/contact` via search parameters:
- Membership tiers: `/contact?type=membership&interest=foundation&billing=yearly`
- Training programs & sessions: `/contact?type=program&interest=strength-conditioning&session=...`
- Orientation & trial inquiries: `/contact?type=trial`

Client-side validation enforces required full name (`2–100` characters), email format, international phone validation via `libphonenumber-js/max` (`US +1` default with automatic `+` country-code detection across 245 territories), and optional message length (`<= 1,000` characters). Submitted entries stay strictly in browser memory with no backend API, database, or email dispatch, and reset via **Submit Another Inquiry**.

### Accessibility & Responsive Design
- Skip-to-content link (`#main-content`) and semantic landmarks (`header`, `nav`, `main`, `footer`).
- Mobile navigation drawer with `Escape` handling, focus trapping, and scroll lock.
- Summary and field-level `role="alert"` messages, `aria-invalid`, `aria-describedby`, and automatic focus on the first invalid control on submit.
- Responsive layouts verified across `390px` mobile and `1440px` desktop viewports.

---

## Image Credits & Licensing Status

- **Image Provenance:** All 13 photographs in `public/images/` are sourced from [Unsplash](https://unsplash.com) under the [Unsplash License](https://unsplash.com/license). Photographer names, photo IDs, and source URLs are documented in [`IMAGE_CREDITS.md`](./IMAGE_CREDITS.md).
- **Repository Licensing:** `package.json` marks the project `"private": true`, with no separate open-source software license selected for the source code. Third-party npm packages and Unsplash photographs remain governed by their respective licenses.

---

## Deployment (Vercel)

- **Production URL:** [https://amitathleticclub.vercel.app/](https://amitathleticclub.vercel.app/)
- **Framework Preset:** Next.js (`npm run build`, `.next` output)
- **Environment Variables:** None required. Production OpenGraph/Twitter URLs, `robots.txt`, and `sitemap.xml` resolve from `VERCEL_PROJECT_PRODUCTION_URL` (or an optional `NEXT_PUBLIC_SITE_URL` override for custom domains).
