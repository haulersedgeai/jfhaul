import Image from "next/image";
import Link from "next/link";
import {
  business,
  howItWorks,
  locationPages,
  serviceBySlug,
  type LocationPage,
} from "@/data/site";
import { landingCopy, landingFAQ } from "@/data/landingContent";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/site/Reveal";
import { QuoteForm } from "@/components/site/QuoteForm";
import { FAQAccordion } from "@/components/site/FAQAccordion";
import { FAQSchema, ServiceSchema } from "@/components/site/StructuredData";

export function LocationLanding({ page }: { page: LocationPage }) {
  const service = serviceBySlug(page.service);
  const { c, s } = landingCopy(page);
  const faqs = landingFAQ(page);
  const canonical = `${business.siteUrl}${page.path}`;

  const otherServicesInCity = locationPages
    .filter((p) => p.citySlug === page.citySlug && p.path !== page.path)
    .slice(0, 6);
  const sameServiceOtherCities = locationPages
    .filter((p) => p.service === page.service && p.path !== page.path)
    .slice(0, 6);

  return (
    <>
      <FAQSchema items={faqs} />
      <ServiceSchema
        serviceName={service?.name ?? page.title}
        areaServed={`${page.city}, AL`}
        url={canonical}
        description={`${service?.name ?? page.title} in ${page.city}, Alabama — provided by ${business.legalName}.`}
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-cream-50 to-cream-100">
        <div className="container-x pt-10 md:pt-14 pb-10 md:pb-16">
          <nav aria-label="Breadcrumb" className="text-sm text-ink-400 mb-4">
            <Link href="/" className="hover:text-brand-800">Home</Link>
            <span aria-hidden="true"> · </span>
            <span className="text-ink-700">{page.city}, AL</span>
            <span aria-hidden="true"> · </span>
            <span className="text-ink-700">{service?.name ?? page.title}</span>
          </nav>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] items-center">
            <Reveal eager>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge tone="accent">Same-day in {page.city}</Badge>
                <Badge tone="brand">Licensed &amp; insured</Badge>
                <Badge tone="neutral">Family + woman-owned</Badge>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight text-ink-800 [text-wrap:balance]">
                {service?.name ?? page.title} in <span className="text-brand-700">{page.city}, AL</span>
              </h1>
              <p className="mt-5 text-lg md:text-xl text-ink-500 max-w-xl [text-wrap:pretty]">
                {c.intro}
              </p>
              <p className="mt-4 text-ink-500 max-w-xl">
                {s.hook} {s.who}
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <a
                  href={business.telHref}
                  className="inline-flex items-center gap-2 rounded-full bg-accent-500 hover:bg-accent-600 text-white font-semibold px-6 py-4 text-lg shadow-[var(--shadow-lift)]"
                >
                  <PhoneIcon /> Call {business.phone}
                </a>
                <Link
                  href="#quote"
                  className="inline-flex items-center gap-2 rounded-full bg-white border border-brand-100 hover:border-brand-300 text-brand-800 px-6 py-4 text-lg font-semibold"
                >
                  Get a free quote
                </Link>
              </div>
            </Reveal>
            <Reveal eager delay={0.1}>
              <div className="relative">
                <div className="absolute -inset-6 rounded-[36px] bg-gradient-to-br from-brand-100 to-accent-100 blur-2xl opacity-60" aria-hidden="true" />
                <div className="relative overflow-hidden rounded-[28px] shadow-[var(--shadow-lift)] border border-white">
                  <Image
                    src="/images/hero.png"
                    alt={`${service?.name ?? page.title} crew working in ${page.city}, AL`}
                    width={1200}
                    height={800}
                    fetchPriority="high"
                    sizes="(min-width: 1024px) 560px, 100vw"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SERVICE DETAILS */}
      <Section bg="white">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] items-start">
          <Reveal>
            <SectionHeader
              eyebrow={`In ${page.city}`}
              title={s.h2}
              intro={`Here's what a typical ${service?.name.toLowerCase() ?? "job"} job in ${page.city} looks like when you call J&F.`}
            />
            <ul className="space-y-3">
              {s.what.map((item) => (
                <li key={item} className="flex items-start gap-3 rounded-2xl bg-cream-50 p-4">
                  <div className="mt-0.5 h-8 w-8 rounded-lg bg-accent-50 text-accent-600 grid place-items-center shrink-0">
                    <CheckIcon />
                  </div>
                  <div className="text-ink-700">{item}</div>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-ink-500 leading-relaxed">{c.neighborhoods}</p>
            <p className="mt-3 text-ink-500 leading-relaxed">{c.local}</p>
          </Reveal>

          <Reveal delay={0.1}>
            <div id="quote" className="scroll-mt-24">
              <QuoteForm
                heading={`Get a ${page.city} quote`}
                intro="Text-fast replies during business hours. Photos welcome."
                defaultService={service?.name}
                defaultCity={page.city}
                source={`landing:${page.path}`}
              />
            </div>
          </Reveal>
        </div>
      </Section>

      {/* HOW IT WORKS */}
      <Section bg="cream">
        <SectionHeader
          eyebrow="How it works"
          title={`Booking ${service?.name ?? page.title} in ${page.city} is simple.`}
          centered
        />
        <ol className="grid gap-5 md:grid-cols-3 lg:grid-cols-6">
          {howItWorks.map((step, i) => (
            <Reveal key={step.title} delay={Math.min(i * 0.05, 0.3)} as="li">
              <div className="rounded-3xl bg-white border border-ink-100 p-6 h-full">
                <div className="h-10 w-10 rounded-full bg-brand-700 text-white font-bold grid place-items-center mb-4">
                  {i + 1}
                </div>
                <div className="font-semibold text-ink-800">{step.title}</div>
                <div className="text-sm text-ink-500 mt-1">{step.body}</div>
              </div>
            </Reveal>
          ))}
        </ol>
      </Section>

      {/* CITY-SPECIFIC CTA */}
      <section className="bg-brand-800 text-white">
        <div className="container-x py-14 md:py-20">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <Reveal>
              <h2 className="text-3xl md:text-4xl font-bold">
                Need us in {page.city} today?
              </h2>
              <p className="mt-3 text-brand-100 max-w-xl">
                Call or text {business.phone} and we&apos;ll do our best to fit you in. Same-day is often possible when we have a truck rolling nearby.
              </p>
            </Reveal>
            <Reveal delay={0.1} className="md:justify-self-end">
              <div className="flex flex-wrap gap-3">
                <a
                  href={business.telHref}
                  className="inline-flex items-center gap-2 rounded-full bg-accent-500 hover:bg-accent-600 px-6 py-4 text-lg font-semibold shadow-[var(--shadow-lift)]"
                >
                  <PhoneIcon /> Call {business.phone}
                </a>
                <a
                  href={business.smsHref}
                  className="inline-flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/30 px-6 py-4 text-lg font-semibold"
                >
                  Text us
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <Section bg="white">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] items-start">
          <Reveal>
            <SectionHeader
              eyebrow="FAQ"
              title={`${page.city} ${service?.name.toLowerCase() ?? "junk removal"} questions`}
              intro={`The most common things folks ask us before booking a ${service?.name.toLowerCase() ?? "junk removal"} job in ${page.city}.`}
            />
          </Reveal>
          <Reveal delay={0.1}>
            <FAQAccordion items={faqs} />
          </Reveal>
        </div>
      </Section>

      {/* CROSS-LINKS */}
      <Section bg="cream">
        <div className="grid gap-8 md:grid-cols-2">
          <Card className="p-6 md:p-8">
            <div className="text-xs font-semibold uppercase tracking-widest text-accent-600 mb-2">Other services in {page.city}</div>
            <ul className="grid gap-2 sm:grid-cols-2">
              {otherServicesInCity.map((p) => {
                const svc = serviceBySlug(p.service);
                return (
                  <li key={p.path}>
                    <Link href={p.path} className="text-brand-700 hover:text-brand-900">
                      {svc?.name ?? p.title}
                    </Link>
                  </li>
                );
              })}
              {otherServicesInCity.length === 0 && (
                <li className="text-ink-500">More {page.city} services coming soon — call for anything not listed.</li>
              )}
            </ul>
          </Card>
          {sameServiceOtherCities.length > 0 && (
            <Card className="p-6 md:p-8">
              <div className="text-xs font-semibold uppercase tracking-widest text-accent-600 mb-2">
                {service?.name ?? page.title} in other cities
              </div>
              <ul className="grid gap-2 sm:grid-cols-2">
                {sameServiceOtherCities.map((p) => (
                  <li key={p.path}>
                    <Link href={p.path} className="text-brand-700 hover:text-brand-900">
                      {p.city}, AL
                    </Link>
                  </li>
                ))}
              </ul>
            </Card>
          )}
        </div>
      </Section>
    </>
  );
}

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
