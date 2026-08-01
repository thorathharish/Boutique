# Boutique — Vivora Elegance Studio

A responsive storefront landing page for a couture bridal and occasion-wear studio, built on TanStack Start and deployed to Cloudflare Workers.

`TanStack Start · React 19 · Tailwind v4 · TypeScript · Cloudflare Workers`

---

## Overview

A single-route marketing site presenting the studio's design catalogue across three audiences (women, men, children) and six wedding occasions. The page is composed of twelve sections — hero, design catalogue, occasion browser, most-loved categories, process, features, seasonal edits, trial booking, differentiators, technology preview, journal, and closing call to action.

The interaction work is concentrated in two places: a hand-written drag-scroll carousel, and a content model that resolves the audience/occasion matrix to the right imagery without duplicating markup.

---

## Core Features

- **Three-audience content model** — a single occasion list carries per-audience imagery, so six occasions × three audiences resolves to eighteen curated images through one toggle
- **Drag-scroll carousel** — pointer-driven horizontal scrolling with drag state tracking and dynamically enabled/disabled scroll affordances, written directly against scroll geometry rather than pulled from a library
- **Responsive navigation** — mobile menu with smooth scroll-to-section and touch-sized targets
- **Design system** — Tailwind v4 with a bespoke token layer in `src/styles.css`
- **Server-rendered** — TanStack Start SSR running on the Cloudflare Workers runtime

---

## Technical Stack

| Layer | Technology |
|---|---|
| Framework | TanStack Start, TanStack Router |
| UI | React 19, Tailwind CSS v4, Radix primitives, lucide-react |
| Language | TypeScript |
| Build | Vite 7 |
| Runtime | Cloudflare Workers (`nodejs_compat`) |

---

## Project Structure

```
src/
├── routes/
│   ├── __root.tsx      root route, document head, providers
│   └── index.tsx       the entire page — all twelve sections
├── components/ui/      shadcn/ui primitives
├── assets/             photography for hero, occasions, and journal
├── lib/                error capture and formatting helpers
├── styles.css          Tailwind v4 layer + design tokens
├── server.ts           SSR entry with branded error handling
└── router.tsx          router + QueryClient setup
```

---

## Getting Started

```bash
npm install
npm run dev        # http://localhost:3000
```

| Script | Purpose |
|---|---|
| `npm run dev` | Vite dev server |
| `npm run build` | Production build |
| `npm run preview` | Preview the production build |
| `npm run lint` | ESLint |
| `npm run format` | Prettier |

---

## Deployment

Deploys to Cloudflare Workers. `wrangler.jsonc` sets the worker name and points `main` at `src/server.ts`; the Cloudflare Vite plugin produces the Worker bundle at build time.

```bash
npm run build
npx wrangler deploy
```

---

## Engineering Decisions

| Decision | Choice | Rationale |
|---|---|---|
| Occasion browser | Hand-written drag-scroll | A carousel library would have added a dependency for behaviour that is a few dozen lines against `scrollLeft` and pointer events, and would have been harder to fit to the audience-switching content model |
| Content model | Per-occasion image map keyed by audience | One data structure drives eighteen combinations; adding an occasion is a data change, not a markup change |
| Single route | Anchor navigation within one page | The content is a linear pitch — routing between sections would add navigation cost without adding information |
| Runtime | Cloudflare Workers | Static-heavy page with SSR, served from edge locations without a server to operate |

---

## Current Limitations

- **Marketing site, not an application.** There is no backend, no database, no authentication, and no persisted state. The page makes no network requests.
- **The AI features described on the page are not implemented.** The "AI Bridal Harmony", skin analysis, couple-matching and virtual try-on sections are forward-looking product copy, and the page labels them as coming soon. There is no model, no inference, and no image processing in this repository.
- **No contact form.** Enquiry routing is not built; calls to action are in-page anchors.
- **No tests and no CI.**
- **Scaffolded from a Lovable template**, then developed by hand. The `.lovable/` marker and template-derived configuration remain in the tree.

## Future Improvements

- Enquiry form with a real submission path
- Split `src/routes/index.tsx` into per-section components
- Image optimisation — several assets are considerably larger than they need to be
- Add tests for the carousel scroll logic
