import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { business, howItWorks, trustPoints } from "@/data/site";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Kicker } from "@/components/ui/Kicker";
import { Reveal } from "@/components/site/Reveal";
import { Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "About J&F Haul & Deliver",
  description:
    "Meet Jacorie and Felicia — the family + woman-owned team behind J&F Haul & Deliver. Local, licensed, and proud to serve Birmingham, AL and nearby cities.",
  alternates: { canonical: `${business.siteUrl}/about` },
  openGraph: {
    title: "About J&F Haul & Deliver",
    description:
      "Family + woman-owned junk removal in Birmingham. Meet Jacorie and Felicia and the crew behind J&F Haul.",
    url: `${business.siteUrl}/about`,
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-cream-50 to-cream-100">
        <div className="hero-arch" aria-hidden="true" />
        <div className="container-x pt-14 md:pt-20 pb-10 md:pb-14 relative">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] items-center">
            <Reveal eager>
              <Kicker>About J&F</Kicker>
              <h1 className="mt-4 font-display font-black tracking-[-0.02em] text-ink-800 leading-[1.02] [text-wrap:balance] text-[clamp(2.5rem,5.5vw,4.5rem)]">
                Real neighbors doing honest, heavy work.
              </h1>
              <p className="mt-5 text-lg md:text-xl text-ink-500 max-w-xl">
                J&F Haul & Deliver is a family-owned, woman-owned junk removal team in Birmingham, Alabama. We’re Jacorie and Felicia — and we built J&F because folks around here deserve a crew that shows up, prices fairly, and treats every home like it’s their own.
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <Link
                  href="/book"
                  className="inline-flex items-center gap-2 rounded-full bg-accent-500 hover:bg-accent-600 text-white font-semibold px-6 py-4 text-lg shadow-[var(--shadow-lift)]"
                >
                  Get a free quote
                </Link>
                <a
                  href={business.telHref}
                  className="inline-flex items-center gap-2 rounded-full bg-white border border-brand-100 hover:border-brand-300 text-brand-800 px-6 py-4 text-lg font-semibold"
                >
                  <Phone size={18} aria-hidden="true" /> Call or text {business.phone}
                </a>
              </div>
            </Reveal>
            <Reveal eager delay={0.1}>
              <div className="relative">
                <div className="absolute -inset-6 rounded-[36px] bg-gradient-to-br from-brand-100 to-accent-100 blur-2xl opacity-60" aria-hidden="true" />
                <div className="relative overflow-hidden rounded-[28px] shadow-[var(--shadow-lift)] border border-white">
                  <Image
                    src="/images/truck-parked.jpg"
                    alt="The J&F Haul truck loaded up and ready for a job in Birmingham, AL"
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

      {/* OUR STORY */}
      <Section bg="white">
        <SectionHeader
          eyebrow="Our story"
          title="Meet Jacorie and Felicia"
        />
        <div className="grid gap-10 lg:gap-14 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] items-start">
          <Reveal>
            <div className="relative lg:sticky lg:top-24">
              <div className="absolute -inset-6 rounded-[36px] bg-gradient-to-br from-brand-100 to-accent-100 blur-2xl opacity-60" aria-hidden="true" />
              <div className="relative overflow-hidden rounded-[28px] shadow-[var(--shadow-lift)] border border-white">
                <Image
                  src="/about-us-photo.jpeg"
                  alt="Jacorie and Felicia, owners of J&F Haul and Deliver"
                  width={1200}
                  height={1500}
                  sizes="(min-width: 1024px) 480px, 100vw"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="max-w-[65ch] text-ink-700 leading-relaxed text-lg space-y-5">
              <p>
                Hey! We&rsquo;re Jacorie and Felicia, the husband-and-wife team behind J&amp;F Haul and Deliver.
              </p>
              <p>
                Our story started long before the business did. We met in middle school, grew up together, and have been building a life side by side ever since. If you see one of us, chances are you&rsquo;ll see the other &mdash; we&rsquo;re partners in life, best friends, and now business owners.
              </p>
              <p>
                We have three amazing children who are our biggest motivation. Everything we do is for them, and they&rsquo;re the reason we give this business everything we&rsquo;ve got every single day.
              </p>
              <p>
                Funny enough, owning a junk removal company wasn&rsquo;t something we dreamed about growing up. For seven years, we both worked traditional jobs &mdash; until everything changed. While we were away on vacation, we were both laid off. At first it was devastating. We didn&rsquo;t know what came next. But instead of letting that moment define us, we made a decision that would change our lives forever: we bet on ourselves.
              </p>

              <blockquote className="not-italic border-l-4 border-accent-500 pl-5 md:pl-6 py-2 my-2 font-display font-bold text-ink-800 text-[clamp(1.35rem,2.5vw,1.85rem)] leading-snug [text-wrap:balance]">
                That&rsquo;s how J&amp;F Haul and Deliver was born.
              </blockquote>

              <p>
                We chose junk removal because it lets us serve people every single day. Every job is different, every customer has a story, and every cleanout is a chance to make someone&rsquo;s life a little easier. Whether we&rsquo;re helping a family clear out a loved one&rsquo;s estate, cleaning up after a move, hauling away years of clutter, or keeping apartment communities clean, we know we&rsquo;re making a real difference.
              </p>

              <blockquote className="not-italic border-l-4 border-accent-500 pl-5 md:pl-6 py-2 my-2 font-display font-bold text-ink-800 text-[clamp(1.35rem,2.5vw,1.85rem)] leading-snug [text-wrap:balance]">
                To us, we&rsquo;re not just a junk removal company &mdash; we&rsquo;re neighbors helping neighbors.
              </blockquote>

              <p>
                We believe in treating every customer the way we&rsquo;d want our own family treated: with honesty, respect, professionalism, and genuine care. Building relationships means just as much to us as removing junk.
              </p>
              <p>
                When we&rsquo;re not working, you&rsquo;ll usually find us spending time with our kids, going to church, enjoying family movie nights at the theater, or simply making memories together. That same family-first mindset carries into how we serve every customer.
              </p>
              <p>
                Thank you for trusting our family with your home, your property, and your project. We look forward to serving our community for many years to come.
              </p>
              <p className="font-semibold text-ink-800">
                From our family to yours &mdash; thank you for supporting J&amp;F Haul and Deliver.
              </p>

              <div className="mt-8 rounded-3xl bg-cream-50 border border-black/[0.04] p-6">
                <div className="text-xs font-bold uppercase tracking-[0.18em] text-accent-600">What we believe</div>
                <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                  {trustPoints.map((t) => (
                    <li key={t} className="flex items-start gap-2 text-ink-700">
                      <span aria-hidden className="mt-2 h-1.5 w-1.5 rounded-full bg-accent-500" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* HOW IT WORKS */}
      <section className="bg-brand-800 text-white relative overflow-hidden">
        <div className="container-x py-16 md:py-20 relative">
          <SectionHeader
            eyebrow="How it works"
            title="Six simple steps from clutter to clear."
            centered
            tone="dark"
          />
          <ol className="grid gap-5 md:grid-cols-3 lg:grid-cols-6 steps-connector">
            {howItWorks.map((step, i) => (
              <li key={step.title} className="relative z-10 rounded-3xl bg-white/[0.04] backdrop-blur border border-white/10 p-5">
                <div className="h-11 w-11 rounded-full bg-accent-500 text-white font-black grid place-items-center text-lg mb-4">
                  {i + 1}
                </div>
                <div className="font-semibold text-white">{step.title}</div>
                <div className="text-sm text-white/70 mt-1">{step.body}</div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-b from-cream-100 to-white">
        <div className="container-x py-16 md:py-20 text-center">
          <Kicker>Ready when you are</Kicker>
          <h2 className="mt-4 font-display font-black tracking-[-0.02em] text-ink-800 leading-[1.05] text-[clamp(2rem,5vw,3.5rem)] [text-wrap:balance]">
            Let’s clear it out together.
          </h2>
          <p className="mt-4 text-ink-500 text-lg max-w-2xl mx-auto">
            Call, text, or send a message. You’ll get a real person, a fair price, and honest work.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a href={business.telHref} className="inline-flex items-center gap-2 rounded-full bg-accent-500 hover:bg-accent-600 text-white font-semibold px-7 py-4 text-lg shadow-[var(--shadow-lift)]">
              <Phone size={18} aria-hidden="true" /> {business.phone}
            </a>
            <Link href="/book" className="inline-flex items-center gap-2 rounded-full bg-brand-700 hover:bg-brand-800 text-white font-semibold px-7 py-4 text-lg">
              Get a free quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
