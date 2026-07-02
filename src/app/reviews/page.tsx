import type { Metadata } from "next";
import { ArrowUpRight, Phone, Star } from "lucide-react";
import { business } from "@/data/site";
import { reviewStats } from "@/data/reviews";
import { Section } from "@/components/ui/Section";
import { Kicker } from "@/components/ui/Kicker";
import { Reveal } from "@/components/site/Reveal";
import { ReviewsFilter } from "@/components/site/ReviewsFilter";

export const metadata: Metadata = {
  title: "Customer Reviews — J&F Haul and Deliver",
  description: `Real customer reviews for J&F Haul and Deliver — ${reviewStats.rating.toFixed(1)} stars across ${reviewStats.count} Google reviews. Junk removal, cleanouts, hot tubs, and more in Birmingham, AL.`,
  alternates: { canonical: `${business.siteUrl}/reviews` },
  openGraph: {
    title: "Customer Reviews — J&F Haul and Deliver",
    description: `${reviewStats.rating.toFixed(1)} stars · ${reviewStats.count} Google reviews. Real customers of J&F Haul and Deliver in Birmingham, AL.`,
    url: `${business.siteUrl}/reviews`,
    type: "website",
    siteName: business.name,
  },
  twitter: { card: "summary_large_image" },
};

export default function ReviewsPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-cream-50 to-cream-100">
        <div className="container-x pt-14 md:pt-20 pb-10">
          <Reveal>
            <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
              <div className="max-w-2xl">
                <Kicker>Reviews</Kicker>
                <h1 className="mt-3 font-display font-black tracking-[-0.02em] text-ink-800 leading-[1.05] text-[clamp(2.5rem,5.5vw,4rem)]">
                  Real customers. Real reviews.
                </h1>
                <p className="mt-4 text-lg text-ink-500 max-w-xl">
                  What Birmingham-area neighbors say about working with Jacorie, Felicia, and the J&F crew — pulled from Google, Facebook, and Networx.
                </p>
              </div>

              <div className="rounded-3xl bg-white p-6 shadow-[var(--shadow-soft)] md:min-w-[280px]">
                <div className="flex items-baseline gap-3">
                  <div className="font-display font-black text-ink-800 leading-none text-5xl">
                    {reviewStats.rating.toFixed(1)}
                  </div>
                  <div className="text-ink-500 text-sm">out of 5</div>
                </div>
                <div className="mt-2 flex text-accent-500" aria-label={`${reviewStats.rating} out of 5 stars`}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={20} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
                <div className="mt-2 text-sm text-ink-500">
                  Based on <span className="font-semibold text-ink-800">{reviewStats.count}</span> Google reviews
                </div>
                <div className="mt-4 flex flex-col gap-2">
                  <a
                    href={reviewStats.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-accent-500 hover:bg-accent-600 text-white px-4 py-2 text-sm font-semibold"
                  >
                    Leave us a review
                    <ArrowUpRight size={14} aria-hidden="true" />
                  </a>
                  <a
                    href={reviewStats.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-white border border-ink-100 hover:border-brand-300 px-4 py-2 text-sm font-semibold text-brand-800"
                  >
                    Read on Google
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Section bg="white">
        {/*
          The list below is a curated set of real reviews from Google, Facebook, and Networx.
          Add new entries to src/data/reviews.ts — they'll show up here automatically.
        */}
        <ReviewsFilter />
      </Section>

      <section className="bg-brand-800 text-white">
        <div className="container-x py-14 md:py-20 text-center">
          <Reveal>
            <h2 className="font-display font-black text-white leading-[1.05] text-[clamp(2rem,4.5vw,3rem)]">
              Ready to be our next 5-star review?
            </h2>
            <p className="mt-3 text-white/80 max-w-2xl mx-auto">
              Free upfront quotes. Same-day service when we can. Call, text, or send a message.
            </p>
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
