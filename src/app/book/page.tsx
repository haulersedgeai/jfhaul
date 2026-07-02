import type { Metadata } from "next";
import { business } from "@/data/site";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Reveal } from "@/components/site/Reveal";

export const metadata: Metadata = {
  title: "Book a Free Estimate",
  description:
    "Book a free junk removal estimate with J&F Haul and Deliver. Pick a time that works for you — same-day and next-day appointments available in Birmingham, Trussville, Hoover, and Vestavia Hills, AL.",
  alternates: { canonical: `${business.siteUrl}/book` },
  openGraph: {
    title: "Book a Free Estimate — J&F Haul and Deliver",
    description:
      "Schedule a free, no-obligation junk removal estimate with J&F Haul and Deliver in just a minute.",
    url: `${business.siteUrl}/book`,
    type: "website",
  },
};

export default function BookPage() {
  return (
    <Section bg="cream">
      <div className="max-w-3xl mx-auto">
        <Reveal eager>
          <SectionHeader
            eyebrow="Book online"
            title="Book Your Free Estimate"
            intro="Pick a time that works for you — it only takes a minute."
            centered
          />
        </Reveal>
        <Reveal delay={0.1}>
          <div className="overflow-hidden rounded-3xl border border-black/[0.06] bg-white shadow-[var(--shadow-lift)]">
            <iframe
              src="https://app.autopilotapp.io/booking/jandf-haul-and-deliver-llc-/30007bba-fcba-45d8-b85c-810432fc9fd8"
              title="Book J&F Haul and Deliver"
              width="100%"
              height="800"
              loading="lazy"
              className="block w-full"
              style={{ border: 0, minHeight: 630 }}
            />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
