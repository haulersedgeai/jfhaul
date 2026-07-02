import type { ReactNode } from "react";
import Link from "next/link";
import { business } from "@/data/site";
import { Section } from "@/components/ui/Section";
import { Kicker } from "@/components/ui/Kicker";

export function LegalPage({
  kicker,
  title,
  effectiveDate,
  children,
}: {
  kicker: string;
  title: string;
  effectiveDate: string;
  children: ReactNode;
}) {
  return (
    <>
      <section className="bg-gradient-to-b from-cream-50 to-cream-100 border-b border-black/[0.04]">
        <div className="container-x pt-14 md:pt-20 pb-8">
          <Kicker>{kicker}</Kicker>
          <h1 className="mt-4 font-display font-black tracking-[-0.02em] text-ink-800 text-[clamp(2.25rem,5.5vw,3.75rem)] leading-[1.05] [text-wrap:balance]">
            {title}
          </h1>
          <p className="mt-4 text-ink-500 text-lg max-w-2xl">
            Effective {effectiveDate}. This is a general template provided as a starting point — you should have it reviewed by an attorney licensed in Alabama before treating it as final legal advice.
          </p>
        </div>
      </section>

      <Section bg="white" padded>
        <article className="prose-jf mx-auto max-w-3xl text-ink-700 leading-relaxed">
          {children}
          <hr className="my-10 border-ink-100" />
          <p className="text-sm text-ink-500">
            Questions? Contact us at{" "}
            <a href={business.emailHref} className="text-brand-800 hover:underline font-semibold">
              {business.email}
            </a>{" "}
            or{" "}
            <a href={business.telHref} className="text-brand-800 hover:underline font-semibold">
              {business.phone}
            </a>
            .
          </p>
          <p className="mt-2 text-sm text-ink-500">
            <Link href="/" className="text-brand-800 hover:underline">← Back to home</Link>
          </p>
        </article>
      </Section>
    </>
  );
}
