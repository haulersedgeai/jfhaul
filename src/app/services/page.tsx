import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Phone, MessageSquare } from "lucide-react";
import {
  birminghamPathForService,
  business,
  services,
} from "@/data/site";
import { iconFor } from "@/data/serviceIcons";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Kicker } from "@/components/ui/Kicker";
import { Reveal } from "@/components/site/Reveal";

export const metadata: Metadata = {
  title: "Services — J&F Haul and Deliver | Junk Removal in Birmingham, AL",
  description: `Every service J&F Haul and Deliver offers in the Birmingham metro — junk removal, furniture and mattress removal, appliance haul-off, hot tub and shed removal, plus full cleanouts (estate, hoarder, eviction, garage, house, office). Family + woman-owned. Free upfront quotes. Call ${business.phone}.`,
  alternates: { canonical: `${business.siteUrl}/services` },
  openGraph: {
    title: "Services — J&F Haul and Deliver",
    description:
      "The full list of junk removal and cleanout services J&F offers in Birmingham, AL and surrounding cities. Family + woman-owned. Free upfront quotes.",
    url: `${business.siteUrl}/services`,
    type: "website",
    siteName: business.name,
  },
  twitter: { card: "summary_large_image" },
};

export default function ServicesPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-cream-50 to-cream-100">
        <div className="hero-arch" aria-hidden="true" />
        <div className="container-x pt-14 md:pt-20 pb-10 md:pb-14 relative">
          <Reveal eager>
            <div className="max-w-3xl">
              <Kicker>What we haul</Kicker>
              <h1 className="mt-3 font-display font-black tracking-[-0.02em] text-ink-800 leading-[1.05] [text-wrap:balance] text-[clamp(2.5rem,5.5vw,4rem)]">
                Every kind of junk. One friendly crew.
              </h1>
              <p className="mt-4 text-lg md:text-xl text-ink-500 max-w-2xl [text-wrap:pretty]">
                From a single couch to a full estate clean-out, here's everything Jacorie, Felicia, and the J&amp;F crew handle across Birmingham, Hoover, Vestavia Hills, Trussville, and the surrounding cities. Free upfront quotes, honest prices, same-day when we can.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={business.telHref}
                  className="inline-flex items-center gap-2 rounded-full bg-accent-500 hover:bg-accent-600 text-white px-5 py-2.5 font-semibold"
                >
                  <Phone size={16} aria-hidden="true" /> Call {business.phone}
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-white border border-ink-100 hover:border-brand-300 px-5 py-2.5 font-semibold text-brand-800"
                >
                  Get a free quote
                  <ArrowUpRight size={14} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SERVICES GRID */}
      <Section bg="white">
        <SectionHeader
          eyebrow="Full service list"
          title="Pick what needs to go."
          intro="Every service links to the Birmingham detail page. Not sure which fits? Call us and we'll tell you straight."
        />
        <div className="grid gap-5 md:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = iconFor(s.slug);
            const primaryHref = birminghamPathForService(s.slug);
            return (
              <Reveal key={s.slug} delay={Math.min(i * 0.03, 0.3)}>
                <Card className="group p-6 h-full flex flex-col relative overflow-hidden" as="article">
                  <div className="h-14 w-14 rounded-2xl bg-brand-50 text-brand-700 grid place-items-center mb-4 transition-colors group-hover:bg-accent-500 group-hover:text-white">
                    <Icon size={26} strokeWidth={2.1} aria-hidden="true" />
                  </div>
                  <h2 className="text-xl font-bold text-ink-800 font-display tracking-tight">{s.name}</h2>
                  <p className="mt-2 text-sm text-ink-500 flex-1">{s.blurb}</p>
                  <div className="mt-5 flex items-center justify-between gap-3">
                    <Link
                      href={primaryHref}
                      className="inline-flex items-center gap-1 text-brand-700 font-semibold text-sm hover:text-brand-900 group-hover:gap-2 transition-all"
                      aria-label={`Learn more about ${s.name} in Birmingham`}
                    >
                      Learn more
                      <ArrowUpRight size={14} aria-hidden="true" />
                    </Link>
                    <a
                      href={business.telHref}
                      className="text-xs font-semibold rounded-full bg-accent-50 text-accent-700 px-3 py-1.5 hover:bg-accent-100"
                      aria-label={`Call for ${s.name}`}
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

      {/* WHY US STRIP */}
      <Section bg="cream">
        <div className="grid gap-8 md:grid-cols-2 items-start">
          <Reveal>
            <SectionHeader
              eyebrow="Why J&F"
              title="Local crew. Real prices. Real fast."
              intro="You get us — not a franchise call center or a 1-800 dispatcher. We show up, size it up, and quote before we start."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { t: "Free upfront quotes", b: "You'll know the price before we lift a thing." },
                { t: "Same-day when we can", b: "Call before noon and we'll do our best to get there today." },
                { t: "Full-service haul", b: "We load it, sweep up, and haul it off — you just point." },
                { t: "Donate + recycle first", b: "Good stuff goes to charity. Metal, electronics, and cardboard get recycled." },
              ].map((v) => (
                <div key={v.t} className="rounded-2xl bg-white p-5 shadow-[var(--shadow-soft)]">
                  <div className="font-semibold text-ink-800">{v.t}</div>
                  <div className="text-sm text-ink-500 mt-1">{v.b}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      {/* CTA — dark band */}
      <section className="bg-brand-800 text-white relative overflow-hidden">
        <div className="container-x py-16 md:py-24 text-center relative">
          <Reveal>
            <Kicker tone="cream">Ready when you are</Kicker>
            <h2 className="mt-4 font-display font-black tracking-[-0.02em] text-white leading-[1.05] [text-wrap:balance] text-[clamp(2rem,5vw,3.5rem)]">
              Not sure which service you need?
            </h2>
            <p className="mt-4 text-white/80 text-lg max-w-2xl mx-auto">
              Send a photo or give us a call — we'll tell you exactly what fits and what it'll cost. Free upfront quotes, no runaround.
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
