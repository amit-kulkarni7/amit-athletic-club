# AMIT ATHLETIC CLUB — GYM-M1 (Foundation and Core Design)

**AMIT ATHLETIC CLUB** is a fictional premium all-round fitness club concept set in Denver, Colorado, developed as a software-engineering and design portfolio project.

> **Portfolio Disclosure:** AMIT ATHLETIC CLUB is a fictional fitness brand created as a portfolio demonstration. No physical club, memberships, or services are offered. All pricing shown is illustrative USD (`$`).

---

## Milestone 1 Scope (`GYM-M1`)

- **Editorial & Architectural Design System:** Built around Warm Ivory (`#F5F3EE`), Graphite (`#1C211E`), Forest Green (`#46594B`), and Warm Stone (`#C9C5BA`), pairing `Manrope` with `Instrument Serif` via `next/font/google`.
- **Homepage Sections:**
  - Sticky accessible navigation with responsive mobile drawer (`aria-expanded`, `aria-controls`, `Escape` handling, and keyboard focus management)
  - Editorial Hero (`MOVE WITH INTENTION.`) with architectural coordinate ledger
  - Club Introduction & Spatial Zoning (`#club`)
  - Programs Preview (`#programs`) — *Strength & Conditioning*, *Functional Training*, *Mobility & Recovery*, and *Small-Group Training*
  - Why Train With Us (`#why-us`) — Four foundational standards
  - Membership Preview (`#membership`) — Illustrative USD tiers (`$195`, `$265`, `$385`) and M2-ready comparison matrix
  - Coaching Philosophy Preview (`#coaching`) — Methodology-driven presentation
  - Closing CTA (`#final-cta`) & Footer with Denver concept location and portfolio disclosure
- **Authentic Photography:** Locally optimized, verified Unsplash photography documented in [`IMAGE_CREDITS.md`](./IMAGE_CREDITS.md).

---

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript 5
- **UI & Styling:** React 19, Tailwind CSS v4
- **Optimization:** `next/image`, `next/font/google`
- **Linting:** ESLint 9 (`eslint-config-next`)

---

## Getting Started

```bash
npm install
npm run dev
```

Open `http://localhost:3000` in your browser.

### Verification Commands

```bash
npm run lint
npx tsc --noEmit
npm run build
```
