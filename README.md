# AMIT ATHLETIC CLUB — Multi-Page Fitness Club Website (`GYM-M2`)

**AMIT ATHLETIC CLUB** is a fictional premium all-round fitness club concept (`Denver, Colorado — Concept Location`), developed as a software-engineering and design portfolio project.

> **Portfolio Disclosure:** AMIT ATHLETIC CLUB is a fictional fitness brand created as a portfolio demonstration. No physical club, memberships, or services are offered. All pricing shown is illustrative USD (`$`).

---

## Multi-Page Architecture (`GYM-M2`)

- `/` — **Homepage**: Editorial hero (`MOVE WITH INTENTION.`), concise club introduction, 2×2 programs preview, four club pillars, compact membership preview, coaching methodology preview, and closing CTA.
- `/about` — **About the Club & Philosophy**: Club story, approach for both newcomers and experienced lifters, four dedicated facility zones, and core club values.
- `/programs` — **Training Programs & Weekly Schedule**: Detailed breakdown of all four disciplines (*Strength & Conditioning*, *Functional Training*, *Mobility & Recovery*, *Small-Group Training*), interactive client-side filtering by category and experience level (including empty-state handling and reset), and an interactive illustrative weekly class schedule.
- `/memberships` — **Memberships & Illustrative Pricing**: Three illustrative USD membership tiers (*Foundation Access* `$195/mo`, *Club All-Round* `$265/mo`, *Performance & Coaching* `$385/mo`), functional Monthly / Yearly billing toggle (`20%` annual discount), desktop comparison table, and responsive mobile comparison cards.
- `/trainers` — **Coaching Team & Methodology**: Four fictional, illustrative coaching roles (*Marcus Vance*, *Elena Rostova*, *Soren Lindqvist*, *Maya Lin*) paired with non-identifying movement photography and shared coaching standards.
- `/contact` — **Contact & Demo Inquiry**: Concept location info, illustrative sample hours, and a client-side interactive inquiry form supporting URL query-parameter prefill (`?type=...&interest=...&billing=...&session=...`), accessible validation, and a truthful frontend simulation confirmation state.

---

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript 5
- **UI & Styling:** React 19, Tailwind CSS v4
- **Optimization:** `next/image`, `next/font/google` (`Manrope` & `Instrument Serif`)
- **Photography:** Authentic licensed Unsplash photography documented in [`IMAGE_CREDITS.md`](./IMAGE_CREDITS.md)

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
