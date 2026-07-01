# J&F Haul and Deliver LLC — jfhaul.com

Junk removal business in Birmingham, AL. Family-owned + woman-owned. Owners: Jacorie & Felicia.

## Stack
Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · Framer Motion · Resend (email) · Vercel.

## Core rules
- App Router. Server Components by default. `"use client"` only when you truly need it (state, effects, event handlers, browser APIs, framer-motion).
- **Next.js 16 gotchas:**
  - Route params are async: `params: Promise<{ slug: string }>` — you must `await params` inside the component.
  - `next/image` does NOT support `priority`, `onLoadingComplete`, `lazyBoundary`, or `lazyRoot`. Use `loading`, `fetchPriority`, and `sizes`.
  - Middleware file is `proxy.ts` (not `middleware.ts`).
- **SEO is priority #1.** This is a local business. PRESERVE every existing URL character-for-character (double-dashes, capital letters, hyphenation). Do not rename, drop, or canonicalize existing paths — the source of truth is `src/data/site.ts` `locationPages`.
- Every phone number renders as a `tel:` link. Every email is `mailto:`. Texting uses `sms:`.
- Accessibility target: WCAG AA. Semantic HTML, alt text, visible focus, keyboard nav, AA contrast. Target Lighthouse 95+ mobile.
- Conversion-first: phone visible everywhere; sticky mobile call/text bar; quote form above the fold.

## Business data
Source of truth is `src/data/site.ts`. Never hardcode phone/email/hours elsewhere — import from there.

- Phone: 205-624-0731 (`tel:2056240731`, `sms:2056240731`)
- Email: jnf@jfhaul.com
- Hours: Mon–Sat, 7am–6pm
- Service cities: Birmingham, Trussville, Hoover, Vestavia Hills (AL)

## Design direction
Dependable, local, hardworking, friendly. Lean into family + woman-owned. Mobile-first (leads come from phones). Big confident type, generous whitespace, rounded corners, soft shadows, subtle Framer Motion scroll-ins. Palette sampled from the logo; deep confident green primary, warm amber/orange accent reserved for CTAs, cream backgrounds, charcoal text. Display sans (Bricolage Grotesque) for headings + Inter for body via `next/font`.
