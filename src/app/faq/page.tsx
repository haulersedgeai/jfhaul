import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Phone } from "lucide-react";
import { business, type FAQ } from "@/data/site";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Kicker } from "@/components/ui/Kicker";
import { Reveal } from "@/components/site/Reveal";
import { FAQAccordion } from "@/components/site/FAQAccordion";
import { FAQSchema } from "@/components/site/StructuredData";

export const metadata: Metadata = {
  title: "FAQ — J&F Haul and Deliver | Junk Removal Questions",
  description: `Answers to the most common questions about junk removal with J&F Haul and Deliver — pricing, same-day service, what we take, service areas, and more. Call ${business.phone}.`,
  alternates: { canonical: `${business.siteUrl}/faq` },
  openGraph: {
    title: "FAQ — J&F Haul and Deliver",
    description:
      "How much does junk removal cost? What do you take? Do you offer same-day service? Answers to the most common J&F Haul and Deliver questions.",
    url: `${business.siteUrl}/faq`,
    type: "website",
    siteName: business.name,
  },
  twitter: { card: "summary_large_image" },
};

const pageFaqs: FAQ[] = [
  {
    q: "How much does junk removal cost?",
    a: "Pricing is based on how much space your items take up in our truck — you only pay for the volume you use. We give you an upfront estimate before any work begins, with no hidden fees.",
  },
  {
    q: "Do you offer free estimates?",
    a: "Yes — we'll give you an upfront quote on-site or from a few photos before we start.",
  },
  {
    q: "What items do you take?",
    a: "Furniture, appliances, mattresses, electronics, yard and construction debris, hot tubs, garage and estate cleanouts, and general household junk. Not sure about an item? Just ask.",
  },
  {
    q: "Is there anything you can't remove?",
    a: "For safety and legal reasons we can't take certain hazardous materials such as wet paint, chemicals, solvents, asbestos, or medical waste. Reach out and we'll point you to the right disposal option.",
  },
  {
    q: "Do you offer same-day or next-day service?",
    a: "When our schedule allows — contact us early in the day for the best shot at same-day pickup.",
  },
  {
    q: "What areas do you serve?",
    a: "Birmingham and the surrounding communities, including Hoover, Vestavia Hills, Indian Springs Village, and nearby neighborhoods. See our full service areas page for the complete list.",
  },
  {
    q: "Do I need to be home for the pickup?",
    a: "Not necessarily — as long as the items are accessible and you've confirmed what's being removed, we can often handle it while you're away. Just coordinate with us in advance.",
  },
  {
    q: "Do you recycle or donate?",
    a: "Whenever possible we donate usable items and recycle what we can, so less ends up in the landfill.",
  },
  {
    q: "How do I schedule?",
    a: "Fill out our contact form or give us a call and we'll set up a time that works for you.",
  },
];

export default function FAQPage() {
  return (
    <>
      <FAQSchema items={pageFaqs} />

      <section className="bg-gradient-to-b from-cream-50 to-cream-100">
        <div className="container-x pt-14 md:pt-20 pb-10">
          <Reveal>
            <div className="max-w-3xl">
              <Kicker>Frequently asked</Kicker>
              <h1 className="mt-3 font-display font-black tracking-[-0.02em] text-ink-800 leading-[1.05] text-[clamp(2.5rem,5.5vw,4rem)]">
                Junk removal questions, answered.
              </h1>
              <p className="mt-4 text-lg text-ink-500 max-w-2xl">
                Everything folks around Birmingham most often ask us before booking. Still have a question? Give us a call and we'll walk you through it.
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
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] items-start">
          <Reveal>
            <SectionHeader
              eyebrow="Most common questions"
              title="What people ask before booking J&F."
              intro="If you don't see your question below, we're a call or text away."
            />
            <div className="mt-2 rounded-3xl bg-cream-50 border border-black/[0.04] p-6">
              <div className="text-xs font-bold uppercase tracking-[0.18em] text-accent-600">
                Still have questions?
              </div>
              <a
                href={business.telHref}
                className="mt-2 block text-2xl font-bold text-brand-800 hover:text-brand-900"
              >
                {business.phone}
              </a>
              <div className="mt-1 text-sm text-ink-500">{business.hours}</div>
              <div className="mt-4 flex flex-wrap gap-2 text-sm">
                <a
                  href={business.telHref}
                  className="inline-flex items-center gap-2 rounded-full bg-accent-500 hover:bg-accent-600 text-white px-4 py-2 font-semibold"
                >
                  Call
                </a>
                <a
                  href={business.smsHref}
                  className="inline-flex items-center gap-2 rounded-full bg-brand-700 hover:bg-brand-800 text-white px-4 py-2 font-semibold"
                >
                  Text
                </a>
                <a
                  href={business.emailHref}
                  className="inline-flex items-center gap-2 rounded-full bg-white border border-ink-100 hover:border-brand-300 text-brand-800 px-4 py-2 font-semibold"
                >
                  Email
                </a>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <FAQAccordion items={pageFaqs} />
          </Reveal>
        </div>
      </Section>

      <section className="bg-brand-800 text-white">
        <div className="container-x py-14 md:py-20 text-center">
          <Reveal>
            <Kicker tone="cream">Ready when you are</Kicker>
            <h2 className="mt-4 font-display font-black text-white leading-[1.05] text-[clamp(2rem,4.5vw,3rem)]">
              Get an upfront quote today.
            </h2>
            <p className="mt-4 text-white/80 max-w-2xl mx-auto text-lg">
              Send a photo, describe the load, or just tell us the address. We'll come back with a fair, upfront price — usually within the hour.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 justify-center">
              <a
                href={business.telHref}
                className="inline-flex items-center gap-2 rounded-full bg-accent-500 hover:bg-accent-600 px-6 py-3 font-semibold"
              >
                <Phone size={16} aria-hidden="true" /> Call {business.phone}
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/30 px-6 py-3 font-semibold"
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
