# J&F Haul & Deliver — Website Rebuild Playbook (Claude Code)

A step-by-step set of prompts to rebuild **jfhaul.com** as a fast, modern Next.js site and ship it to Vercel. Run the prompts **in order**, one at a time, inside Claude Code. Review each result before moving on.

**Stack:** Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · Framer Motion · deployed on Vercel, source on GitHub.

> **Why this matters (read once):** The current site has ~20 city-by-service landing pages (`/junk-removal-birmingham-al`, `/estate-cleanouts-in-hoover-al`, etc.). Those are almost certainly what ranks them on Google. The #1 rule of this rebuild is **preserve every existing URL exactly** so you keep their search traffic. Every prompt below is built around that.

---

## Source-of-truth content (already scraped for you)

**Business:** J&F Haul and Deliver LLC
**Owners:** Jacorie & Felicia (family-owned + woman-owned)
**Tagline direction:** "Same-Day Junk Removal for Homes & Businesses in Birmingham, AL"
**Phone / Text:** 205-624-0731
**Email:** jnf@jfhaul.com
**Hours:** Mon–Sat, 7am–6pm
**Trust points:** Licensed & insured · family + woman-owned · free upfront quotes · same-day service · eco-friendly (donate/recycle) · local (not a franchise)

**Socials:**
- Facebook: `https://www.facebook.com/profile.php?id=61559172516284`
- Instagram: `https://www.instagram.com/jf_hauljunk/`
- YouTube: `https://www.youtube.com/@jnfjunkremoval`
- TikTok: `https://www.tiktok.com/@jnfjunkremoval`
- Google listing: search "J&F Junk removal"

**Services:** Junk Removal · Furniture Removal · Mattress Removal · Appliance Removal · Hot Tub Removal · Shed Removal · Property Cleanouts · House Cleanouts · Garage Cleanouts · Estate Cleanouts · Hoarder Cleanouts · Eviction Cleanouts · Apartment Cleanouts · Office Cleanouts · Valet Trash Service

**Service areas:** Birmingham · Trussville · Hoover · Vestavia Hills (all AL)

**"How it works" (6 steps):** Contact us → Free quote → We show up on time → We do the heavy lifting → We haul it away (donate/recycle/dispose) → Enjoy your clean space

**FAQ (reuse verbatim):**
1. *How much does junk removal cost?* — Pricing depends on how much space your items take up in the truck; always an upfront price before we start.
2. *Do I need to move my junk to the curb?* — No, the team handles all lifting and loading.
3. *What items can you take?* — Almost anything: furniture, appliances, mattresses, electronics, yard waste. No hazardous materials.
4. *Can you do same-day service?* — Yes, when the schedule allows.
5. *Do you recycle or donate?* — Yes, working with local charities and recycling centers.
6. *How do I book?* — Call, text, or fill out the online form.

**Existing URLs to preserve exactly (do not change these paths):**
```
/                                          (home)
/contact
/junk-removal-birmingham-al
/furniture-removal-birmingham--al
/appliance-removal-birmingham--al
/hot-tub-removal-birmingham--al
/shed-removal-birmingham--al
/garage-cleanouts-birmingham--al
/hoarder-cleanouts-birmingham--al
/eviction-cleanouts-birmingham--al
/estate-cleanouts-birmingham-al
/apartment-cleanouts-birmingham--al
/office-cleanout-birmingham-al
/estate-cleanouts-in-trussville-al
/junk-removal-in-trussville-al
/hot-tub-removal
/junk-removal-in-hoover-al
/estate-cleanouts-in-hoover-al
/office-cleanout-Hoover-AL          (note: capital letters — keep as-is)
/eviction-cleanouts-vestavia-hills-al
/junk-removal-vestavia-hills-al
/estate-cleanouts-Vestavia-Hills-AL   (note: capital letters — keep as-is)
/eviction-cleanouts-hoover-al
```

**Image assets on their CDN** (base: `https://lirp.cdn-website.com/3d3b91ff/dms3rep/multi/opt/`). URL-encoding: `%28`=`(`, `%29`=`)`, `+`=space.
```
Logo:            logo+final+-Converted--01-96-+new+logo+2-1920w.png
Hero header:     Junk+Removal+All+headers+2+%2886%29-1920w.png
Truck parked:    Untitled+design+%2831%29-934w.png
Team loading 1:  Untitled+design+%2829%29-934w.png
Team loading 2:  Untitled+design+%2830%29-934w.png
Service icons:   Untitled+design+%2833%29-583w.png  (junk removal)
                 Untitled+design+%2834%29-583w.png  (furniture)
                 Untitled+design+%2835%29-583w.png  (mattress)
                 Untitled+design+%2836%29-583w.png  (hot tub)
                 Untitled+design+%2837%29-583w.png  (property cleanout)
                 Untitled+design+%2838%29-583w.png  (house cleanout)
                 Untitled+design+%2839%29-583w.png  (garage cleanout)
                 Untitled+design+%2840%29-583w.png  (estate cleanout)
                 Hoarder+cleanouts-583w.png          (hoarder)
                 Valley+trash-583w.png               (valet trash)
```
> Tip: swap the `-583w`/`-934w` suffix for `-1920w` to try to pull a higher-res copy of any image.

---

## Design direction (paste this into the theme prompt)

**Personality:** dependable, local, hardworking, friendly — real people, not a faceless franchise. Lean into "family + woman-owned" and "your Birmingham neighbors."

**Look (2026):** mobile-first (most junk-removal leads come from phones), big confident type, generous whitespace, rounded corners, soft shadows, subtle scroll-in motion. Conversion-obsessed: phone number everywhere, a persistent click-to-call bar on mobile, and a quote form above the fold.

**Color:** derive the palette from the actual logo (Claude Code will sample it). Default direction if the logo is neutral — a confident deep **green** primary (eco + trust), warm off-white/cream backgrounds, near-black charcoal text, and one high-energy **amber/orange** accent reserved for call-to-action buttons.

**Type:** a characterful display sans for headlines (e.g. Bricolage Grotesque or Clash Display) + a clean neutral sans for body (Inter or Geist), loaded via `next/font`.

---

# THE PROMPTS

Run each block as a single message to Claude Code.

---

### Prompt 0 — Kickoff & guardrails (creates CLAUDE.md)

```
We're rebuilding a junk-removal company website (J&F Haul & Deliver, Birmingham AL)
as a new Next.js site. Before writing any app code, create a CLAUDE.md at the repo
root that you will follow for the whole project. Put these rules in it:

- Stack: Next.js 16 App Router, React 19, TypeScript, Tailwind CSS v4, Framer Motion.
  Use the App Router (app/ dir), Server Components by default, "use client" only where
  interactivity is needed.
- Next.js 16 gotchas to respect everywhere:
  * Route params are async — type them as `params: Promise<{...}>` and `await` them.
  * next/image no longer supports `priority`, `onLoadingComplete`, `lazyBoundary`,
    `lazyRoot` — do not use them. Use `loading`/`fetchPriority` and `sizes` instead.
  * Middleware file is `proxy.ts`, not `middleware.ts`.
  * Turbopack is the default bundler.
- Accessibility: semantic HTML, alt text on all images, visible focus states,
  color contrast AA minimum.
- Performance: target Lighthouse 95+ on mobile. Optimize images, minimal client JS.
- Every phone number is a tel: link. Every email is a mailto: link.
- SEO is critical: this is a local business. Do not change or drop any existing URL.

Confirm the file is created, then stop and wait for my next prompt.
```

---

### Prompt 1 — Scaffold + GitHub + first deploy

```
Scaffold the project and get a bare deploy working before we build anything.

1. Run: npx create-next-app@latest jfhaul --yes
   (TypeScript, Tailwind, ESLint, App Router, src/ dir, import alias @/*).
2. cd into it. Add framer-motion.
3. Replace the default homepage with a simple "J&F Haul — coming soon" page so we can
   confirm the pipeline works.
4. Initialize git, commit, and create a new GitHub repo named "jfhaul" using the gh CLI
   (I'm already authenticated), then push.
5. Deploy to Vercel using the Vercel CLI (I'm already logged in): link the project and
   run a production deploy. Print the live URL.

Report the GitHub repo URL and the Vercel URL, then stop.
```

---

### Prompt 2 — Pull down all the real content & images

```
Scrape the current live site so we reuse the real photos and copy.

Source site: https://www.jfhaul.com/  (also fetch https://www.jfhaul.com/sitemap.xml
to discover every page — there may be pages beyond the ones I list).

1. Create public/images/ and download every image from their CDN. Base URL:
   https://lirp.cdn-website.com/3d3b91ff/dms3rep/multi/opt/
   Download the logo, the hero header, the 3 truck/team photos, and the 10 service
   icons (filenames I'll paste below). For each, try the -1920w variant first for
   higher resolution, fall back to the listed size. Save with clean descriptive names
   (e.g. logo.png, hero.png, truck-parked.jpg, team-loading-1.jpg,
   icon-junk-removal.png, icon-furniture.png, ...). Remember %28=( %29=) +=space when
   curling.

   [PASTE the "Image assets" list from the playbook here]

2. Fetch each page in the sitemap and save the visible body copy + FAQ text into
   content/scraped/ as markdown, one file per URL, so we have the original wording.

3. Sample the logo's dominant colors and report the hex values — we'll use them to
   build the palette in the next step.

Report what you downloaded and the logo colors, then stop.
```

---

### Prompt 3 — Brand data file + design system

```
Create the single source of truth for site content and the design system.

1. Create src/data/site.ts exporting typed objects:
   - business: name, legalName, phone ("205-624-0731"), phoneHref ("tel:2056240731"),
     email ("jnf@jfhaul.com"), hours ("Mon–Sat, 7am–6pm"), owners, socials {facebook,
     instagram, youtube, tiktok, google}.
   - trustPoints: ["Licensed & insured", "Family + woman-owned", "Free upfront quotes",
     "Same-day service", "Eco-friendly disposal", "Locally owned"].
   - services: array of {slug, name, icon, blurb, longDescription} for all 15 services
     (Junk Removal, Furniture, Mattress, Appliance, Hot Tub, Shed, Property Cleanout,
     House Cleanout, Garage Cleanout, Estate Cleanout, Hoarder Cleanout, Eviction
     Cleanout, Apartment Cleanout, Office Cleanout, Valet Trash). Use the blurbs from
     the current site.
   - cities: [{slug:"birmingham", name:"Birmingham"}, "trussville", "hoover",
     "vestavia-hills"] all AL.
   - howItWorks: the 6 steps.
   - faqs: the 6 Q&As (I'll paste the exact text).
   - locationPages: an array mapping EVERY existing URL path to its {service, city,
     title} so we can render them. Use this exact list of paths — keep the paths
     character-for-character, including the double dashes and capital letters:
     [PASTE the "Existing URLs" list here]

2. Build the design system in Tailwind v4 (@theme in globals.css):
   - Palette based on the logo colors from the last step. If neutral, use: primary =
     a deep confident green, accent = a warm amber/orange (CTAs only), cream background,
     charcoal text. Define brand color tokens.
   - Typography via next/font: a characterful display sans for headings (Bricolage
     Grotesque or Clash Display) + Inter for body.
   - Rounded corners, soft shadows, a container width, consistent spacing scale.

3. Create reusable UI primitives in src/components/ui/: Button (primary/secondary/
   ghost), Section wrapper, Card, Badge. Buttons that are phone CTAs render as tel:
   links styled in the accent color.

Show me the palette and a couple of the primitives, then stop.
```

---

### Prompt 4 — Header, footer, sticky mobile call bar

```
Build the shared layout used on every page.

1. Header (src/components/Header.tsx): logo left; nav with Home, a "Service Areas"
   dropdown (Birmingham / Trussville / Hoover / Vestavia Hills, each expanding to that
   city's services), and Contact; a prominent "Call 205-624-0731" button on the right.
   Sticky, shrinks slightly on scroll, fully responsive with a mobile hamburger drawer.

2. Footer (src/components/Footer.tsx): logo, short blurb, services list, service areas,
   contact details, hours, and social icons (Facebook, Instagram, YouTube, TikTok,
   Google) linking to the real URLs in site.ts. Copyright "© 2026 J&F Haul and
   Deliver LLC".

3. StickyCallBar (src/components/StickyCallBar.tsx): a bottom-fixed bar visible only on
   mobile with two big buttons — "Call" (tel:) and "Text" (sms:) — always tappable.

4. Wire Header, Footer, and StickyCallBar into app/layout.tsx. Add the fonts and set
   the default <html lang="en">.

Deploy nothing yet — just show the layout on the coming-soon page. Stop.
```

---

### Prompt 5 — Homepage

```
Build the homepage (app/page.tsx) using real photos from public/images and copy from
site.ts. Sections, in order:

1. Hero: big headline "Same-Day Junk Removal in Birmingham, AL", subhead about homes &
   businesses, the truck/team hero photo, a primary "Call or Text 205-624-0731" button
   and a secondary "Get a Free Quote" button that scrolls to the quote form. Show trust
   badges (licensed & insured, family + woman-owned) as a row under the CTAs.

2. Quote form (client component) — reused from the Contact prompt later; for now a
   Name/Phone/Email/Message form styled and ready to wire up.

3. Services grid: cards for all 15 services with their icons and blurbs; each card
   links to that service's local page and has a small "Call" CTA.

4. "Why Birmingham chooses J&F": the neighbors/local/personal copy + the 4 value props
   (save time & energy, stress-free, same-day, eco-friendly) with the team photos.

5. "How it works": the 6 numbered steps as a clean horizontal/stepper layout.

6. Service-area section: the 4 cities, each linking to its pages.

7. Testimonials placeholder ("See what our customers are saying") — leave a clean
   section I can drop Google reviews into later.

8. FAQ accordion using the 6 Q&As.

9. Final CTA band: "Ready to reclaim your space? Call or text 205-624-0731."

Add tasteful scroll-in animations with Framer Motion (fade/slide up, subtle, not
distracting). Make sure it's flawless on mobile. Commit and push when done. Stop.
```

---

### Prompt 6 — Local SEO landing pages (the important one)

```
Build the city × service landing pages that drive their Google traffic. These must
live at the EXACT existing paths so we don't lose rankings.

1. For every entry in site.ts locationPages, create a Next.js route at that exact path
   (including the double-dashes and the capitalized ones like /office-cleanout-Hoover-AL
   and /estate-cleanouts-Vestavia-Hills-AL). Use a shared page component so they all
   share one template but get unique, non-duplicate content.

2. Each page template includes: an H1 like "{Service} in {City}, AL", a locally-worded
   intro (mention the city by name, "your neighbors in {City}", same-day, licensed &
   insured), the relevant service description, the "how it works" steps, a city-specific
   CTA with the phone number, an FAQ, and a quote form. Vary the intro copy per
   service/city so pages aren't near-duplicates (write genuinely useful local copy, not
   spun text).

3. Per-page SEO metadata via generateMetadata: unique <title> and meta description
   using the city + service (mirror the current titles, e.g. "Junk Removal Birmingham,
   AL – Same-Day Service"), canonical URL, and Open Graph tags.

4. Cross-link: each city page links to that city's other services; each service links
   to nearby cities.

Build them, verify every old URL resolves with `next build`, commit and push. Stop.
```

---

### Prompt 7 — Contact page + working quote form

```
Make the quote form actually send.

1. Build app/contact/page.tsx: contact details (phone tel:, text sms:, email mailto:,
   hours), the service-area info, and the quote form.

2. Implement the form submission with a Next.js Server Action that emails the lead to
   jnf@jfhaul.com. Use Resend (add the `resend` package). Read the API key from
   RESEND_API_KEY in env — do NOT hardcode it. The email should include the customer's
   name, phone, email, and message with a clear subject like "New quote request from
   {name}". Add honeypot + basic validation to reduce spam. Show a success and an error
   state in the UI (client component for the form, server action for the send).

   If Resend isn't set up, fall back to Web3Forms (a hidden access_key field, POST to
   their endpoint) so the form works with zero backend — tell me which you used and what
   env var / key I need to provide.

3. Reuse this same form component on the homepage and all landing pages.

Commit and push. Tell me exactly what env variable to add in Vercel. Stop.
```

---

### Prompt 8 — SEO, schema, sitemap, robots

```
Wire up full SEO so Google re-indexes cleanly.

1. Root metadata in app/layout.tsx: title template, description, Open Graph + Twitter
   cards using the logo, theme-color, and the canonical domain https://www.jfhaul.com.

2. Add LocalBusiness (JSON-LD) structured data with name, phone, email, hours, service
   area (the 4 cities), geo for Birmingham AL, and social sameAs links. Inject it in the
   root layout. Add Service schema on service pages and FAQPage schema where FAQs appear.

3. Generate app/sitemap.ts covering the home, contact, and every location page, and
   app/robots.ts allowing all and pointing to the sitemap.

4. In next.config, set up any redirects ONLY if we intentionally renamed a URL (we
   shouldn't have — we preserved them all). Double-check nothing 404s that used to exist
   by diffing our routes against the scraped sitemap; if anything is missing, add it.

Run `next build`, confirm zero broken routes, commit and push. Stop.
```

---

### Prompt 9 — Polish, a11y & performance pass

```
Final quality pass before launch.

1. Run through the site on a mobile viewport and fix any layout issues, tap-target
   sizes, and overflow. The sticky call bar must never cover content or the footer CTA.
2. Accessibility: verify all images have meaningful alt text, headings are ordered,
   the mobile menu and FAQ accordion are keyboard-navigable and have ARIA labels, and
   color contrast passes AA.
3. Performance: ensure next/image is used for all images with correct sizes; the hero
   uses fetchPriority="high"; fonts use display:swap; no layout shift. Aim for
   Lighthouse 95+ on mobile — run it and report the scores.
4. Add a nice 404 (app/not-found.tsx) with the branding and a phone CTA.
5. Add favicon/app icons and an og-image from the logo.

Report Lighthouse scores, commit and push. Stop.
```

---

### Prompt 10 — Ship it

```
Production launch.

1. Ensure RESEND_API_KEY (or the Web3Forms key) is set in the Vercel project env for
   Production.
2. Run a production deploy via the Vercel CLI and give me the deployment URL.
3. Summarize what I need to do to point the real domain (jfhaul.com + www) at Vercel:
   the exact A / CNAME records, and remind me to keep the old Duda site up until DNS
   has fully propagated and I've confirmed every old URL loads on the new site.
4. Give me a short post-launch checklist: submit the sitemap in Google Search Console,
   verify the domain, spot-check the top landing pages, and test the quote form
   end-to-end.

Stop.
```

---

## After launch — quick reference

- **Domain cutover:** add `jfhaul.com` and `www.jfhaul.com` in Vercel → Domains, set the DNS records Vercel gives you at your registrar. Keep the Duda site live until the new one is confirmed on the real domain.
- **Don't lose SEO:** the whole point of preserving URLs is that Google keeps ranking them. After cutover, submit the sitemap in Google Search Console and watch coverage for a couple of weeks.
- **Reviews:** drop real Google reviews into the testimonials section when ready.
- **Form:** test it end-to-end and confirm the lead email actually lands in jnf@jfhaul.com.

---

### Handy tips while running these
- Run prompts **one at a time**; review the diff before letting Claude Code push.
- If a step drifts, tell Claude Code "re-read CLAUDE.md and fix X."
- Commit after every prompt so you can always roll back.
- You can paste screenshots of the old site into Claude Code if you want it to match a specific section's layout more closely.
