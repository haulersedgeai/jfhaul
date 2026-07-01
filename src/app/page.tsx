import Image from "next/image";
import Link from "next/link";
import { business, cities, faqs, howItWorks, locationPages, services, trustPoints } from "@/data/site";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/site/Reveal";
import { QuoteForm } from "@/components/site/QuoteForm";
import { FAQAccordion } from "@/components/site/FAQAccordion";
import { FAQSchema } from "@/components/site/StructuredData";

export default function Home() {
  return (
    <>
      <FAQSchema />

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-cream-50 to-cream-100">
        <div className="container-x pt-10 md:pt-16 pb-12 md:pb-20">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] items-center">
            <Reveal className="max-w-2xl">
              <div className="flex flex-wrap gap-2 mb-5">
                <Badge tone="accent">Family + woman-owned</Badge>
                <Badge tone="brand">Licensed &amp; insured</Badge>
                <Badge tone="neutral">Same-day service</Badge>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] tracking-tight text-ink-800 [text-wrap:balance]">
                Same-day junk removal in <span className="text-brand-700">Birmingham, AL</span>
              </h1>
              <p className="mt-5 text-lg md:text-xl text-ink-500 max-w-xl [text-wrap:pretty]">
                From a single couch to a full estate clean-out — Jacorie, Felicia, and the J&amp;F crew do the heavy lifting so you don&apos;t have to. Free upfront quotes, honest prices, no franchise runaround.
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <a
                  href={business.telHref}
                  className="inline-flex items-center gap-2 rounded-full bg-accent-500 hover:bg-accent-600 text-white font-semibold px-6 py-4 text-lg shadow-[var(--shadow-lift)]"
                >
                  <PhoneIcon /> Call or text {business.phone}
                </a>
                <Link
                  href="#quote"
                  className="inline-flex items-center gap-2 rounded-full bg-white text-brand-800 font-semibold px-6 py-4 text-lg border border-brand-100 hover:border-brand-300"
                >
                  Get a free quote
                </Link>
              </div>
              <ul className="mt-7 flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-500">
                {trustPoints.map((t) => (
                  <li key={t} className="flex items-center gap-2">
                    <CheckIcon /> {t}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="relative">
                <div className="absolute -inset-6 rounded-[36px] bg-gradient-to-br from-brand-100 to-accent-100 blur-2xl opacity-60" aria-hidden="true" />
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
                <div className="hidden md:flex absolute -bottom-6 -left-6 rounded-2xl bg-white shadow-[var(--shadow-lift)] p-4 items-center gap-3 max-w-xs">
                  <div className="h-11 w-11 rounded-full bg-accent-50 grid place-items-center text-accent-600">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M12 2v20M2 12h20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-ink-800">Locally owned</div>
                    <div className="text-xs text-ink-500">Real neighbors, not a call center.</div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

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
              <a href={business.telHref} className="text-3xl font-bold text-brand-800 hover:text-brand-900">
                {business.phone}
              </a>
              <div className="mt-2 text-sm text-ink-500">{business.hours}</div>
              <div className="mt-4 flex gap-2">
                <a href={business.telHref} className="inline-flex items-center gap-2 rounded-full bg-accent-500 text-white px-4 py-2 text-sm font-semibold">Call</a>
                <a href={business.smsHref} className="inline-flex items-center gap-2 rounded-full bg-brand-700 text-white px-4 py-2 text-sm font-semibold">Text</a>
                <a href={business.emailHref} className="inline-flex items-center gap-2 rounded-full bg-white border border-ink-100 text-ink-700 px-4 py-2 text-sm font-semibold">Email</a>
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
            const locationForService = locationPages.find(
              (p) => p.service === s.slug && p.citySlug === "birmingham",
            );
            const primaryHref = locationForService?.path;
            return (
              <Reveal key={s.slug} delay={Math.min(i * 0.04, 0.3)}>
                <Card className="p-6 h-full flex flex-col" as="article">
                  <div id={`service-${s.slug}`} className="h-16 w-16 rounded-2xl bg-brand-50 grid place-items-center mb-4">
                    <Image
                      src={s.icon}
                      alt=""
                      width={48}
                      height={48}
                      className="h-12 w-12 object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-ink-800">{s.name}</h3>
                  <p className="mt-2 text-sm text-ink-500 flex-1">{s.blurb}</p>
                  <div className="mt-5 flex items-center justify-between gap-3">
                    {primaryHref ? (
                      <Link
                        href={primaryHref}
                        className="text-brand-700 font-semibold text-sm hover:text-brand-900"
                      >
                        Learn more →
                      </Link>
                    ) : (
                      <Link
                        href="/contact"
                        className="text-brand-700 font-semibold text-sm hover:text-brand-900"
                      >
                        Get a quote →
                      </Link>
                    )}
                    <a
                      href={business.telHref}
                      className="text-xs font-semibold rounded-full bg-accent-50 text-accent-700 px-3 py-1.5 hover:bg-accent-100"
                    >
                      Call
                    </a>
                  </div>
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
              intro="We&apos;re Jacorie and Felicia. We built J&F Haul so folks in Birmingham can have a junk-removal team that actually shows up, prices fairly, and treats your home like their own."
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
                    <CheckIcon />
                  </div>
                  <div className="font-semibold text-ink-800">{v.t}</div>
                  <div className="text-sm text-ink-500 mt-1">{v.b}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      {/* HOW IT WORKS */}
      <Section bg="white">
        <SectionHeader
          eyebrow="How it works"
          title="Six simple steps from clutter to clear."
          centered
        />
        <ol className="grid gap-5 md:grid-cols-3 lg:grid-cols-6">
          {howItWorks.map((step, i) => (
            <Reveal key={step.title} delay={Math.min(i * 0.05, 0.3)} as="li">
              <div className="rounded-3xl bg-white border border-ink-100 p-6 h-full">
                <div className="h-10 w-10 rounded-full bg-accent-500 text-white font-bold grid place-items-center mb-4">
                  {i + 1}
                </div>
                <div className="font-semibold text-ink-800">{step.title}</div>
                <div className="text-sm text-ink-500 mt-1">{step.body}</div>
              </div>
            </Reveal>
          ))}
        </ol>
      </Section>

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
            const primary = cityPages[0];
            return (
              <Reveal key={c.slug}>
                <Card className="p-6 h-full">
                  <div className="text-2xl font-bold text-ink-800">{c.name}, {c.state}</div>
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
                  {primary && (
                    <Link
                      href={primary.path}
                      className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-accent-600 hover:text-accent-700"
                    >
                      See {c.name} services →
                    </Link>
                  )}
                </Card>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* TESTIMONIALS PLACEHOLDER */}
      <Section bg="white">
        <SectionHeader
          eyebrow="What neighbors say"
          title="Reviews from folks we've helped."
          intro="Google reviews from our Birmingham customers. Want to see more? Search &lsquo;J&F Junk removal&rsquo; on Google."
          centered
        />
        <div className="grid gap-5 md:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <Reveal key={i} delay={i * 0.05}>
              <Card className="p-6 h-full">
                <div className="flex text-accent-500" aria-label="Five stars">
                  {[0, 1, 2, 3, 4].map((s) => (
                    <StarIcon key={s} />
                  ))}
                </div>
                <p className="mt-3 text-ink-700">
                  {[
                    "“Showed up same day, quoted fairly, and hauled a load of furniture out of a second-floor apartment without a scratch. Jacorie and the crew were kind and quick.”",
                    "“We had my mom&rsquo;s estate to clear and J&F handled it with so much care. They donated what could be donated and swept up when they were done.”",
                    "“Called Tuesday morning, they were in my driveway that afternoon. Old hot tub gone. Priced honestly. I&rsquo;ll be recommending them to everyone.”",
                  ][i - 1]}
                </p>
                <div className="mt-4 text-sm text-ink-500">— A Birmingham neighbor</div>
              </Card>
            </Reveal>
          ))}
        </div>
        <div className="mt-8 text-center">
          <a
            href="https://www.google.com/search?q=J%26F+Junk+removal+Birmingham"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white border border-ink-100 hover:border-brand-300 px-5 py-2.5 font-semibold text-brand-800"
          >
            Read more on Google →
          </a>
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
              <PhoneIcon /> Still have a question? Call us
            </a>
          </Reveal>
          <Reveal delay={0.1}>
            <FAQAccordion items={faqs} />
          </Reveal>
        </div>
      </Section>

      {/* FINAL CTA */}
      <section className="bg-brand-800 text-white">
        <div className="container-x py-16 md:py-24 text-center">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-bold [text-wrap:balance]">
              Ready to reclaim your space?
            </h2>
            <p className="mt-4 text-brand-100 text-lg max-w-2xl mx-auto">
              Free upfront quotes. Same-day when we can. Real neighbors, real service — right here in Birmingham.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href={business.telHref}
                className="inline-flex items-center gap-2 rounded-full bg-accent-500 hover:bg-accent-600 px-7 py-4 text-lg font-semibold shadow-[var(--shadow-lift)]"
              >
                <PhoneIcon /> Call {business.phone}
              </a>
              <a
                href={business.smsHref}
                className="inline-flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/30 px-7 py-4 text-lg font-semibold"
              >
                Text us instead
              </a>
              <Link
                href="#quote"
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
function StarIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2l2.9 6.9L22 10l-5.5 4.7L18 22l-6-3.5L6 22l1.5-7.3L2 10l7.1-1.1L12 2z"/>
    </svg>
  );
}
