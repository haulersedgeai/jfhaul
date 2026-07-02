import Link from "next/link";
import { business } from "@/data/site";

export default function NotFound() {
  return (
    <section className="container-x py-24 md:py-32 text-center">
      <div className="mx-auto max-w-2xl">
        <div className="text-xs font-semibold uppercase tracking-widest text-accent-600 mb-3">404</div>
        <h1 className="text-4xl md:text-6xl font-bold text-ink-800 [text-wrap:balance]">
          We couldn't find that page.
        </h1>
        <p className="mt-4 text-lg text-ink-500">
          The page you're looking for may have been moved or renamed. If you were trying to book a pickup, we're just a call away.
        </p>
        <div className="mt-8 flex flex-wrap gap-3 justify-center">
          <a
            href={business.telHref}
            className="inline-flex items-center gap-2 rounded-full bg-accent-500 hover:bg-accent-600 text-white font-semibold px-6 py-3.5 shadow-[var(--shadow-lift)]"
          >
            Call {business.phone}
          </a>
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-white border border-brand-100 hover:border-brand-300 text-brand-800 font-semibold px-6 py-3.5"
          >
            Back to home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-brand-700 hover:bg-brand-800 text-white font-semibold px-6 py-3.5"
          >
            Contact us
          </Link>
        </div>
      </div>
    </section>
  );
}
