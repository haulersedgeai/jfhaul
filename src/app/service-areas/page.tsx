import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, MapPin, Phone } from "lucide-react";
import {
  business,
  cities,
  primaryPathForCity,
  serviceAreaPath,
  serviceAreas,
} from "@/data/site";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Kicker } from "@/components/ui/Kicker";
import { Reveal } from "@/components/site/Reveal";

export const metadata: Metadata = {
  title: "Service Areas — J&F Haul and Deliver",
  description: `Junk removal across a 37-mile radius from Calera, AL. Serving Birmingham, Hoover, Vestavia Hills, Trussville, and dozens of surrounding towns. Call ${business.phone}.`,
  alternates: { canonical: `${business.siteUrl}/service-areas` },
  openGraph: {
    title: "Service Areas — J&F Haul and Deliver",
    description: "Junk removal within a 37-mile radius of Calera, AL. Birmingham metro and surrounding towns.",
    url: `${business.siteUrl}/service-areas`,
    type: "website",
    siteName: business.name,
  },
};

export default function ServiceAreasPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-cream-50 to-cream-100">
        <div className="container-x pt-14 md:pt-20 pb-10">
          <Reveal>
            <div className="max-w-3xl">
              <Kicker>Service areas</Kicker>
              <h1 className="mt-3 font-display font-black tracking-[-0.02em] text-ink-800 leading-[1.05] text-[clamp(2.5rem,5.5vw,4rem)]">
                We roll to your town.
              </h1>
              <p className="mt-4 text-lg text-ink-500 max-w-2xl">
                J&F Haul and Deliver serves a <strong>37-mile radius from Calera, AL</strong> — that covers the entire Birmingham metro plus most of Shelby, Jefferson, and northern Chilton counties. If your town isn't on the list, give us a call — we'll usually make it happen.
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

      <Section bg="white">
        <SectionHeader
          eyebrow="Primary cities"
          title="Where most of our work happens."
          intro="These four cities each have their own dedicated service pages."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cities.map((c) => (
            <Reveal key={c.slug}>
              <Card className="p-6 h-full">
                <div className="h-10 w-10 rounded-xl bg-brand-50 text-brand-700 grid place-items-center mb-3">
                  <MapPin size={18} aria-hidden="true" />
                </div>
                <div className="text-xl font-bold text-ink-800 font-display tracking-tight">
                  {c.name}, {c.state}
                </div>
                <Link
                  href={primaryPathForCity(c.slug)}
                  className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-accent-600 hover:text-accent-700"
                >
                  See {c.name} services
                  <ArrowUpRight size={14} aria-hidden="true" />
                </Link>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section bg="cream">
        <SectionHeader
          eyebrow="More towns we serve"
          title="Within our 37-mile radius from Calera."
          intro="Each town below has its own local page — click through to book."
        />
        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {serviceAreas.map((a) => (
            <Link
              key={a.slug}
              href={serviceAreaPath(a.slug)}
              className="group flex items-center justify-between gap-3 rounded-2xl bg-white p-4 shadow-[var(--shadow-soft)] hover:shadow-[0_20px_40px_rgba(15,93,107,0.10)] transition"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="h-8 w-8 rounded-lg bg-brand-50 text-brand-700 grid place-items-center shrink-0">
                  <MapPin size={14} aria-hidden="true" />
                </div>
                <div className="font-semibold text-ink-800 truncate">
                  {a.name}, {a.state}
                </div>
              </div>
              <ArrowUpRight
                size={16}
                aria-hidden="true"
                className="text-ink-400 group-hover:text-accent-600 shrink-0"
              />
            </Link>
          ))}
        </div>
        <p className="mt-8 text-center text-ink-500">
          Don't see your town? Call{" "}
          <a href={business.telHref} className="font-semibold text-brand-800 hover:text-brand-900">
            {business.phone}
          </a>
          {" "}— we probably still cover it.
        </p>
      </Section>

      <section className="bg-brand-800 text-white">
        <div className="container-x py-14 md:py-20 text-center">
          <Reveal>
            <h2 className="font-display font-black text-white leading-[1.05] text-[clamp(2rem,4.5vw,3rem)]">
              One truck. One call. Done today, usually.
            </h2>
            <div className="mt-6 flex flex-wrap gap-3 justify-center">
              <a
                href={business.telHref}
                className="inline-flex items-center gap-2 rounded-full bg-accent-500 hover:bg-accent-600 px-6 py-3 font-semibold"
              >
                <Phone size={16} aria-hidden="true" /> Call {business.phone}
              </a>
              <a
                href={business.smsHref}
                className="inline-flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/30 px-6 py-3 font-semibold"
              >
                Text us
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
