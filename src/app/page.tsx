import Image from "next/image";
import Link from "next/link";
import {
  birminghamPathForService,
  business,
  cities,
  faqs,
  howItWorks,
  locationPages,
  primaryPathForCity,
  services,
} from "@/data/site";
import { featuredReviews, reviewStats } from "@/data/reviews";
import { iconFor } from "@/data/serviceIcons";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Kicker } from "@/components/ui/Kicker";
import { Reveal } from "@/components/site/Reveal";
import { QuoteForm } from "@/components/site/QuoteForm";
import { FAQAccordion } from "@/components/site/FAQAccordion";
import { FAQSchema } from "@/components/site/StructuredData";
import { TrustBar } from "@/components/site/TrustBar";
import { ReviewCard } from "@/components/site/ReviewCard";
import { ArrowUpRight, Phone, Star, MessageSquare, Mail } from "lucide-react";

export default function Home() {
  return (
    <>
      <FAQSchema />

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-cream-50 to-white">
        <div className="hero-arch" aria-hidden="true" />
        <div className="grain absolute inset-0" aria-hidden="true" />
        <div className="container-x pt-12 md:pt-16 pb-14 md:pb-20 relative">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] items-center">
            <Reveal eager className="max-w-2xl">
              <Kicker>Birmingham, Alabama · Family + woman-owned</Kicker>
              <h1 className="mt-4 font-display font-black tracking-[-0.025em] text-ink-800 leading-[1.02] [text-wrap:balance] text-[clamp(2.75rem,6vw,4.75rem)]">
                Same-day <span className="text-brand-700">junk removal</span> in Birmingham, AL.
              </h1>
              <p className="mt-5 text-lg md:text-xl text-ink-500 max-w-xl [text-wrap:pretty]">
                From a single couch to a full estate clean-out — Jacorie, Felicia, and the J&F crew do the heavy lifting so you don’t have to. Free upfront quotes, honest prices, no franchise runaround.
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-accent-500 hover:bg-accent-600 text-white font-semibold px-6 py-4 text-lg shadow-[var(--shadow-lift)] transition"
                >
                  Get a free quote
                  <ArrowUpRight size={18} aria-hidden="true" />
                </Link>
                <a
                  href={business.telHref}
                  className="inline-flex items-center gap-2 rounded-full bg-white text-brand-800 font-semibold px-6 py-4 text-lg border border-brand-100 hover:border-brand-300"
                >
                  <Phone size={18} aria-hidden="true" /> Call or text {business.phone}
                </a>
              </div>
            </Reveal>

            <Reveal eager delay={0.1}>
              <div className="relative">
                {/* Accent block behind photo */}
                <div className="absolute -inset-x-4 -inset-y-6 rounded-[36px] bg-gradient-to-br from-brand-100 via-cream-200 to-accent-100 opacity-70 blur-2xl" aria-hidden="true" />
                <div className="absolute -bottom-4 -right-4 h-2/3 w-3/4 rounded-[36px] bg-accent-500/95" aria-hidden="true" />
                <div className="relative overflow-hidden rounded-[28px] shadow-[var(--shadow-lift)] border border-white">
                  <Image
                    src="/images/hero.png"
                    alt="J&F Haul crew removing junk in Birmingham, AL"
                    width={1200}
                    height={800}
                    fetchPriority="high"
                    sizes="(min-width: 1024px) 560px, 100vw"
                    className="w-full h-auto"
                  />
                </div>
                <a
                  href={reviewStats.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden md:flex absolute -bottom-6 -left-6 rounded-2xl bg-white shadow-[var(--shadow-lift)] p-4 items-center gap-3 max-w-xs hover:shadow-[0_20px_40px_rgba(15,93,107,0.15)] transition"
                  aria-label={`${reviewStats.rating.toFixed(1)} out of 5 based on ${reviewStats.count} Google reviews`}
                >
                  <div className="h-11 w-11 rounded-full bg-accent-50 grid place-items-center text-accent-600 shrink-0">
                    <Star size={20} aria-hidden="true" fill="currentColor" />
                  </div>
                  <div>
                    <div className="flex text-accent-500" aria-hidden="true">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
                      ))}
                    </div>
                    <div className="mt-1 text-sm font-bold text-ink-800">
                      {reviewStats.rating.toFixed(1)} · {reviewStats.count} Google reviews
                    </div>
                  </div>
                </a>
                <div className="hidden md:flex absolute -top-4 -right-2 rounded-2xl bg-white shadow-[var(--shadow-lift)] p-3 items-center gap-2">
                  <div className="h-9 w-9 rounded-full bg-brand-50 text-brand-700 grid place-items-center">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M12 22s8-4.5 8-11.5A8 8 0 0 0 4 10.5C4 17.5 12 22 12 22z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>
                  <div className="text-xs font-semibold text-ink-800 pr-1">Licensed & insured</div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <TrustBar />

      {/* QUOTE FORM */}
      <Section id="quote" bg="cream" padded>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] items-start">
          <Reveal>
            <SectionHeader
              eyebrow="Get started"
              title="One truck. One call. Done today, usually."
              intro="Fill this out and we'll text you a fast, upfront quote. Prefer to talk it through? Call or text — that's the same number."
            />
            <div className="rounded-3xl bg-white p-6 shadow-[var(--shadow-soft)]">
              <div className="text-sm text-ink-500 mb-1">Talk to a person</div>
              <a href={business.telHref} className="text-3xl font-bold text-brand-800 hover:text-brand-900 tracking-tight">
                {business.phone}
              </a>
              <div className="mt-2 text-sm text-ink-500">{business.hours}</div>
              <div className="mt-4 flex gap-2 flex-wrap">
                <a href={business.telHref} className="inline-flex items-center gap-2 rounded-full bg-accent-500 hover:bg-accent-600 text-white px-4 py-2 text-sm font-semibold">
                  <Phone size={14} aria-hidden="true" /> Call
                </a>
                <a href={business.smsHref} className="inline-flex items-center gap-2 rounded-full bg-brand-700 hover:bg-brand-800 text-white px-4 py-2 text-sm font-semibold">
                  <MessageSquare size={14} aria-hidden="true" /> Text
                </a>
                <a href={business.emailHref} className="inline-flex items-center gap-2 rounded-full bg-white border border-ink-100 hover:border-ink-200 text-ink-700 px-4 py-2 text-sm font-semibold">
                  <Mail size={14} aria-hidden="true" /> Email
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <QuoteForm source="homepage" />
          </Reveal>
        </div>
      </Section>

      {/* SERVICES GRID */}
      <Section id="services" bg="white">
        <SectionHeader
          eyebrow="What we haul"
          title="Every kind of junk. One friendly crew."
          intro="If it's not hazardous, we can probably take it. Not sure? Send us a photo and we'll tell you."
        />
        <div className="grid gap-5 md:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = iconFor(s.slug);
            const primaryHref = birminghamPathForService(s.slug);
            return (
              <Reveal key={s.slug} delay={Math.min(i * 0.04, 0.3)}>
                <Card className="group p-6 h-full flex flex-col relative overflow-hidden" as="article">
                  <div id={`service-${s.slug}`} className="h-14 w-14 rounded-2xl bg-brand-50 text-brand-700 grid place-items-center mb-4 transition-colors group-hover:bg-accent-500 group-hover:text-white">
                    <Icon size={26} strokeWidth={2.1} aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold text-ink-800 font-display tracking-tight">{s.name}</h3>
                  <p className="mt-2 text-sm text-ink-500 flex-1">{s.blurb}</p>
                  <div className="mt-5 flex items-center justify-between gap-3">
                    <Link
                      href={primaryHref}
                      className="inline-flex items-center gap-1 text-brand-700 font-semibold text-sm hover:text-brand-900 group-hover:gap-2 transition-all"
                    >
                      Learn more
                      <ArrowUpRight size={14} aria-hidden="true" />
                    </Link>
                    <a
                      href={business.telHref}
                      className="text-xs font-semibold rounded-full bg-accent-50 text-accent-700 px-3 py-1.5 hover:bg-accent-100"
                    >
                      Call
                    </a>
                  </div>
                  <span aria-hidden className="absolute left-6 right-6 bottom-0 h-0.5 bg-accent-500 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </Card>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* WHY US */}
      <Section bg="cream">
        <div className="grid gap-10 md:grid-cols-2 items-center">
          <Reveal>
            <div className="relative">
              <div className="absolute -top-6 -left-6 rounded-2xl bg-white p-3 shadow-[var(--shadow-soft)] hidden md:block">
                <Image src="/images/team-1.jpg" alt="Felicia loading up the J&F trailer" width={220} height={220} className="rounded-xl object-cover h-40 w-40" />
              </div>
              <Image src="/images/truck-parked.jpg" alt="J&F Haul trailer parked and ready" width={900} height={700} className="rounded-3xl w-full h-auto object-cover shadow-[var(--shadow-lift)]" />
              <div className="absolute -bottom-6 -right-4 rounded-2xl bg-white p-3 shadow-[var(--shadow-soft)] hidden md:block">
                <Image src="/images/team-2.jpg" alt="The J&F crew after a Birmingham cleanout" width={220} height={220} className="rounded-xl object-cover h-40 w-40" />
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <SectionHeader
              eyebrow="Why Birmingham chooses J&F"
              title="Your neighbors, not a national call center."
              intro="We're Jacorie and Felicia. We built J&F Haul so folks in Birmingham can have a junk-removal team that actually shows up, prices fairly, and treats your home like their own."
            />
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { t: "Save your Saturday", b: "You don't rent the truck, hurt your back, or waste the day at the dump. We handle all of it." },
                { t: "Stress-free & respectful", b: "Careful with your floors, doors, and driveway. Sensitive with estate and hoarder situations." },
                { t: "Same-day when we can", b: "Call before noon and we'll do our best to be there the same afternoon." },
                { t: "Eco-friendly disposal", b: "Donatable stuff goes to local charities. Metal, cardboard, and electronics get recycled." },
              ].map((v) => (
                <div key={v.t} className="rounded-2xl bg-white p-5 shadow-[var(--shadow-soft)]">
                  <div className="h-9 w-9 rounded-lg bg-accent-50 text-accent-600 grid place-items-center mb-3">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="font-semibold text-ink-800">{v.t}</div>
                  <div className="text-sm text-ink-500 mt-1">{v.b}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      {/* HOW IT WORKS - dark band */}
      <section className="bg-brand-800 text-white relative overflow-hidden">
        <div className="container-x py-16 md:py-24 relative">
          <SectionHeader
            eyebrow="How it works"
            title="Six simple steps from clutter to clear."
            centered
            tone="dark"
          />
          <ol className="grid gap-5 md:grid-cols-3 lg:grid-cols-6 steps-connector">
            {howItWorks.map((step, i) => (
              <Reveal key={step.title} delay={Math.min(i * 0.05, 0.3)} as="li">
                <div className="relative z-10 rounded-3xl bg-white/[0.05] backdrop-blur border border-white/10 p-6 h-full">
                  <div className="h-11 w-11 rounded-full bg-accent-500 text-white font-black grid place-items-center text-lg mb-4 shadow-[0_10px_20px_rgba(225,45,36,0.35)]">
                    {i + 1}
                  </div>
                  <div className="font-semibold text-white">{step.title}</div>
                  <div className="text-sm text-white/70 mt-1">{step.body}</div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* SERVICE AREAS */}
      <Section bg="cream">
        <SectionHeader
          eyebrow="Service areas"
          title="Proudly serving the Birmingham metro."
          intro="Not sure if we cover your street? Give us a call — we probably do."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cities.map((c) => {
            const cityPages = locationPages.filter((p) => p.citySlug === c.slug);
            const primary = primaryPathForCity(c.slug);
            return (
              <Reveal key={c.slug}>
                <Card className="p-6 h-full">
                  <div className="text-2xl font-bold text-ink-800 font-display tracking-tight">{c.name}, {c.state}</div>
                  <ul className="mt-3 space-y-1.5">
                    {cityPages.slice(0, 4).map((p) => {
                      const svc = services.find((s) => s.slug === p.service);
                      return (
                        <li key={p.path}>
                          <Link href={p.path} className="text-brand-700 hover:text-brand-900 text-sm">
                            {svc?.name ?? p.title}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                  <Link
                    href={primary}
                    className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-accent-600 hover:text-accent-700"
                  >
                    See {c.name} services
                    <ArrowUpRight size={14} aria-hidden="true" />
                  </Link>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* REVIEWS */}
      <Section bg="white">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] items-start">
          <Reveal>
            <Kicker>Reviews</Kicker>
            <div className="mt-4 font-display font-black text-ink-800 leading-none text-[clamp(4rem,10vw,7rem)]">
              {reviewStats.rating.toFixed(1)}
            </div>
            <div className="mt-2 flex text-accent-500" aria-label={`${reviewStats.rating} out of 5 stars`}>
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={24} fill="currentColor" strokeWidth={0} />
              ))}
            </div>
            <p className="mt-3 text-ink-500 text-lg">
              Based on <span className="font-semibold text-ink-800">{reviewStats.count} Google reviews</span>
              {" "}— plus more on Facebook and Networx.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={reviewStats.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-accent-500 hover:bg-accent-600 text-white px-5 py-2.5 font-semibold"
              >
                Read on Google
                <ArrowUpRight size={14} aria-hidden="true" />
              </a>
              <Link
                href="/reviews"
                className="inline-flex items-center gap-2 rounded-full bg-white border border-ink-100 hover:border-brand-300 px-5 py-2.5 font-semibold text-brand-800"
              >
                Read all reviews
                <ArrowUpRight size={14} aria-hidden="true" />
              </Link>
            </div>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2">
            {featuredReviews.slice(0, 4).map((r, i) => (
              <Reveal key={r.name} delay={i * 0.05}>
                <ReviewCard review={r} />
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section bg="cream">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] items-start">
          <Reveal>
            <SectionHeader
              eyebrow="FAQ"
              title="Answers before you ask."
              intro="Common questions from folks calling us for the first time."
            />
            <a
              href={business.telHref}
              className="inline-flex items-center gap-2 rounded-full bg-accent-500 hover:bg-accent-600 text-white font-semibold px-6 py-3.5"
            >
              <Phone size={18} aria-hidden="true" /> Still have a question? Call us
            </a>
          </Reveal>
          <Reveal delay={0.1}>
            <FAQAccordion items={faqs} />
          </Reveal>
        </div>
      </Section>

      {/* FINAL CTA */}
      <section className="bg-brand-800 text-white relative overflow-hidden">
        <div className="container-x py-16 md:py-24 text-center relative">
          <Reveal>
            <Kicker tone="cream">Ready when you are</Kicker>
            <h2 className="mt-4 font-display font-black tracking-[-0.02em] text-white leading-[1.05] [text-wrap:balance] text-[clamp(2rem,5vw,3.5rem)]">
              Ready to reclaim your space?
            </h2>
            <p className="mt-4 text-white/80 text-lg max-w-2xl mx-auto">
              Free upfront quotes. Same-day when we can. Real neighbors, real service — right here in Birmingham.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href={business.telHref}
                className="inline-flex items-center gap-2 rounded-full bg-accent-500 hover:bg-accent-600 px-7 py-4 text-lg font-semibold shadow-[var(--shadow-lift)]"
              >
                <Phone size={18} aria-hidden="true" /> Call {business.phone}
              </a>
              <a
                href={business.smsHref}
                className="inline-flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/30 px-7 py-4 text-lg font-semibold"
              >
                <MessageSquare size={18} aria-hidden="true" /> Text us instead
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-white text-brand-800 px-7 py-4 text-lg font-semibold"
              >
                Get a free quote
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
