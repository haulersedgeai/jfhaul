import Image from "next/image";
import Link from "next/link";
import { Phone, ArrowUpRight, Check, Star } from "lucide-react";
import {
  business,
  howItWorks,
  locationPages,
  serviceBySlug,
  serviceInSentence,
  serviceSingularName,
  type LocationPage,
} from "@/data/site";
import { iconFor } from "@/data/serviceIcons";
import { landingCopy, landingFAQ } from "@/data/landingContent";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Kicker } from "@/components/ui/Kicker";
import { Reveal } from "@/components/site/Reveal";
import { QuoteForm } from "@/components/site/QuoteForm";
import { FAQAccordion } from "@/components/site/FAQAccordion";
import { FAQSchema, ServiceSchema } from "@/components/site/StructuredData";
import { TrustBar } from "@/components/site/TrustBar";
import { ReviewCard } from "@/components/site/ReviewCard";
import { categoryForService, pickReviewsFor, reviewStats } from "@/data/reviews";

function capitalize(word: string): string {
  if (!word) return word;
  return word.charAt(0).toUpperCase() + word.slice(1);
}

export function LocationLanding({ page }: { page: LocationPage }) {
  const service = serviceBySlug(page.service);
  const { c, s } = landingCopy(page);
  const faqs = landingFAQ(page);
  const canonical = `${business.siteUrl}${page.path}`;
  const Icon = iconFor(page.service);

  const singular = serviceSingularName(page.service); // "office cleanout"
  const inSentence = serviceInSentence(page.service); // "an office cleanout" / "junk removal"
  const singularTitle = singular.split(" ").map(capitalize).join(" "); // "Office Cleanout"
  const cityState = `${page.city}, AL`;

  const otherServicesInCity = locationPages
    .filter((p) => p.citySlug === page.citySlug && p.path !== page.path)
    .slice(0, 6);
  const sameServiceOtherCities = locationPages
    .filter((p) => p.service === page.service && p.path !== page.path)
    .slice(0, 6);

  const localReviews = pickReviewsFor({
    city: page.city,
    category: categoryForService(page.service),
    limit: 2,
  });

  return (
    <>
      <FAQSchema items={faqs} />
      <ServiceSchema
        serviceName={service?.name ?? page.title}
        areaServed={cityState}
        url={canonical}
        description={`${service?.name ?? page.title} in ${cityState} — provided by ${business.legalName}.`}
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-cream-50 to-white">
        <div className="hero-arch" aria-hidden="true" />
        <div className="grain absolute inset-0" aria-hidden="true" />
        <div className="container-x pt-10 md:pt-14 pb-12 md:pb-16 relative">
          <nav aria-label="Breadcrumb" className="text-sm text-ink-400 mb-4">
            <Link href="/" className="hover:text-brand-800">Home</Link>
            <span aria-hidden="true"> · </span>
            <span className="text-ink-700">{cityState}</span>
            <span aria-hidden="true"> · </span>
            <span className="text-ink-700">{service?.name ?? page.title}</span>
          </nav>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] items-center">
            <Reveal eager>
              <Kicker>
                <span className="inline-flex items-center gap-2">
                  <Icon size={14} aria-hidden="true" />
                  Serving {cityState}
                </span>
              </Kicker>
              <h1 className="mt-4 font-display font-black tracking-[-0.025em] text-ink-800 leading-[1.02] [text-wrap:balance] text-[clamp(2.5rem,6vw,4.5rem)]">
                {service?.name ?? page.title} in <span className="text-brand-700">{cityState}</span>
              </h1>
              <p className="mt-5 text-lg md:text-xl text-ink-500 max-w-xl [text-wrap:pretty]">
                {c.intro}
              </p>
              <p className="mt-4 text-ink-500 max-w-xl">
                {s.hook} {s.who}
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <Link
                  href="#quote"
                  className="inline-flex items-center gap-2 rounded-full bg-accent-500 hover:bg-accent-600 text-white font-semibold px-6 py-4 text-lg shadow-[var(--shadow-lift)]"
                >
                  Get a free quote
                  <ArrowUpRight size={18} aria-hidden="true" />
                </Link>
                <a
                  href={business.telHref}
                  className="inline-flex items-center gap-2 rounded-full bg-white border border-brand-100 hover:border-brand-300 text-brand-800 px-6 py-4 text-lg font-semibold"
                >
                  <Phone size={18} aria-hidden="true" /> Call {business.phone}
                </a>
              </div>
            </Reveal>
            <Reveal eager delay={0.1}>
              <div className="relative">
                <div className="absolute -inset-x-4 -inset-y-6 rounded-[36px] bg-gradient-to-br from-brand-100 via-cream-200 to-accent-100 opacity-70 blur-2xl" aria-hidden="true" />
                <div className="absolute -bottom-4 -right-4 h-2/3 w-3/4 rounded-[36px] bg-accent-500/95" aria-hidden="true" />
                <div className="relative overflow-hidden rounded-[28px] shadow-[var(--shadow-lift)] border border-white">
                  <Image
                    src="/images/hero.png"
                    alt={`${service?.name ?? page.title} crew working in ${cityState}`}
                    width={1200}
                    height={800}
                    loading="eager"
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

      <TrustBar />

      {/* SERVICE DETAILS */}
      <Section bg="white">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] items-start">
          <Reveal>
            <SectionHeader
              eyebrow={`In ${page.city}`}
              title={s.h2}
              intro={`Here’s what ${inSentence} in ${page.city} typically looks like when you call J&F.`}
            />
            <ul className="space-y-3">
              {s.what.map((item) => (
                <li key={item} className="flex items-start gap-3 rounded-2xl bg-cream-50 p-4">
                  <div className="mt-0.5 h-8 w-8 rounded-lg bg-accent-50 text-accent-600 grid place-items-center shrink-0">
                    <Check size={16} strokeWidth={2.5} aria-hidden="true" />
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

      {/* HOW IT WORKS — dark band */}
      <section className="bg-brand-800 text-white relative overflow-hidden">
        <div className="container-x py-16 md:py-20 relative">
          <SectionHeader
            eyebrow="How it works"
            title={`Booking ${singularTitle} in ${page.city} is simple.`}
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

      {/* REVIEWS — sprinkle 2 relevant */}
      <Section bg="white">
        <div className="grid gap-8 md:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] items-start">
          <Reveal>
            <Kicker>Reviews</Kicker>
            <div className="mt-3 flex items-center gap-3">
              <div className="font-display font-black text-ink-800 text-5xl leading-none">
                {reviewStats.rating.toFixed(1)}
              </div>
              <div>
                <div className="flex text-accent-500" aria-hidden="true">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
                <div className="text-sm text-ink-500">{reviewStats.count} Google reviews</div>
              </div>
            </div>
            <p className="mt-4 text-ink-500 max-w-md">
              What {page.city} neighbors say about working with J&F.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <a
                href={reviewStats.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-accent-500 hover:bg-accent-600 text-white px-4 py-2 text-sm font-semibold"
              >
                Read on Google
                <ArrowUpRight size={14} aria-hidden="true" />
              </a>
              <Link
                href="/reviews"
                className="inline-flex items-center gap-2 rounded-full bg-white border border-ink-100 hover:border-brand-300 px-4 py-2 text-sm font-semibold text-brand-800"
              >
                All reviews
              </Link>
            </div>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2">
            {localReviews.map((r) => (
              <Reveal key={r.name}>
                <ReviewCard review={r} />
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* CITY-SPECIFIC CTA */}
      <section className="bg-gradient-to-b from-cream-100 to-white">
        <div className="container-x py-14 md:py-20">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <Reveal>
              <Kicker>Local & fast</Kicker>
              <h2 className="mt-4 font-display font-black tracking-[-0.02em] text-ink-800 leading-[1.05] text-[clamp(2rem,4.5vw,3rem)]">
                Need us in {page.city} today?
              </h2>
              <p className="mt-3 text-ink-500 max-w-xl text-lg">
                Call or text {business.phone} and we’ll do our best to fit you in. Same-day is often possible when we have a truck rolling nearby.
              </p>
            </Reveal>
            <Reveal delay={0.1} className="md:justify-self-end">
              <div className="flex flex-wrap gap-3">
                <a
                  href={business.telHref}
                  className="inline-flex items-center gap-2 rounded-full bg-accent-500 hover:bg-accent-600 text-white px-6 py-4 text-lg font-semibold shadow-[var(--shadow-lift)]"
                >
                  <Phone size={18} aria-hidden="true" /> Call {business.phone}
                </a>
                <a
                  href={business.smsHref}
                  className="inline-flex items-center gap-2 rounded-full bg-brand-700 hover:bg-brand-800 text-white px-6 py-4 text-lg font-semibold"
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
              title={`${page.city} ${singular} questions`}
              intro={`The most common things folks ask us before booking ${inSentence} in ${page.city}.`}
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
            <div className="text-xs font-bold uppercase tracking-[0.18em] text-accent-600 mb-3">Other services in {page.city}</div>
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
              <div className="text-xs font-bold uppercase tracking-[0.18em] text-accent-600 mb-3">
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
