import type { Metadata } from "next";
import Link from "next/link";
import { business, cities, socials } from "@/data/site";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { QuoteForm } from "@/components/site/QuoteForm";
import { Reveal } from "@/components/site/Reveal";

export const metadata: Metadata = {
  title: "Contact J&F Haul & Deliver",
  description:
    "Get in touch for a free upfront quote. Call or text 205-624-0731, email jnf@jfhaul.com, or fill out our form. Serving Birmingham, Trussville, Hoover, and Vestavia Hills, AL.",
  alternates: { canonical: `${business.siteUrl}/contact` },
  openGraph: {
    title: "Contact J&F Haul & Deliver",
    description: "Call, text, email, or send a message. Serving Birmingham, AL and nearby cities.",
    url: `${business.siteUrl}/contact`,
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-cream-50 to-cream-100">
        <div className="container-x pt-14 md:pt-20 pb-8">
          <Reveal>
            <div className="max-w-3xl">
              <div className="text-sm font-semibold uppercase tracking-widest text-accent-600 mb-3">Contact</div>
              <h1 className="text-4xl md:text-6xl font-bold text-ink-800 [text-wrap:balance]">
                Let&apos;s get your junk out of the way.
              </h1>
              <p className="mt-4 text-lg text-ink-500 max-w-2xl">
                Call, text, email, or fill out the form. Whichever&apos;s easiest — you&apos;ll usually hear back within an hour during business hours.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <Section bg="cream" padded>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] items-start">
          <Reveal>
            <div className="space-y-4">
              <Card className="p-6">
                <div className="text-xs font-semibold uppercase tracking-widest text-accent-600 mb-2">Call or text</div>
                <a href={business.telHref} className="text-3xl font-bold text-brand-800 hover:text-brand-900 block">
                  {business.phone}
                </a>
                <div className="mt-2 text-sm text-ink-500">Same number for calls, texts, and voicemails.</div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <a href={business.telHref} className="inline-flex items-center gap-2 rounded-full bg-accent-500 hover:bg-accent-600 text-white px-4 py-2 text-sm font-semibold">Call now</a>
                  <a href={business.smsHref} className="inline-flex items-center gap-2 rounded-full bg-brand-700 hover:bg-brand-800 text-white px-4 py-2 text-sm font-semibold">Text</a>
                </div>
              </Card>

              <Card className="p-6">
                <div className="text-xs font-semibold uppercase tracking-widest text-accent-600 mb-2">Email</div>
                <a href={business.emailHref} className="text-lg font-semibold text-brand-800 hover:text-brand-900">
                  {business.email}
                </a>
                <div className="mt-2 text-sm text-ink-500">Photos of what needs to go? Send them our way.</div>
              </Card>

              <Card className="p-6">
                <div className="text-xs font-semibold uppercase tracking-widest text-accent-600 mb-2">Hours</div>
                <div className="text-lg font-semibold text-ink-800">{business.hours}</div>
                <div className="mt-2 text-sm text-ink-500">Closed Sundays. Emergency situations? Try us — we&apos;ll do what we can.</div>
              </Card>

              <Card className="p-6">
                <div className="text-xs font-semibold uppercase tracking-widest text-accent-600 mb-2">Service area</div>
                <ul className="mt-1 grid grid-cols-2 gap-2 text-ink-700">
                  {cities.map((c) => (
                    <li key={c.slug}>· {c.name}, {c.state}</li>
                  ))}
                </ul>
                <div className="mt-3 text-sm text-ink-500">Not sure if we cover your street? Give us a call — we probably do.</div>
              </Card>

              <Card className="p-6">
                <div className="text-xs font-semibold uppercase tracking-widest text-accent-600 mb-2">Find us online</div>
                <div className="flex flex-wrap gap-3 text-sm">
                  <Social href={socials.facebook} label="Facebook" />
                  <Social href={socials.instagram} label="Instagram" />
                  <Social href={socials.youtube} label="YouTube" />
                  <Social href={socials.tiktok} label="TikTok" />
                  <Social href={socials.googleSearch} label="Google" />
                </div>
              </Card>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <QuoteForm
              heading="Send us a quote request"
              intro="We reply as fast as we can — usually within an hour during business hours."
              source="contact"
            />
            <p className="mt-4 text-sm text-ink-500 text-center">
              Prefer to talk to someone right now?{" "}
              <a href={business.telHref} className="font-semibold text-brand-800 hover:text-brand-900">Call {business.phone}</a>.
            </p>
          </Reveal>
        </div>
      </Section>
    </>
  );
}

function Social({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-full bg-brand-50 hover:bg-brand-100 text-brand-800 px-3 py-1.5"
    >
      {label}
    </Link>
  );
}
