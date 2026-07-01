import { business } from "@/data/site";

export function StickyCallBar() {
  return (
    <div className="md:hidden fixed inset-x-0 bottom-0 z-30 pb-safe">
      <div className="mx-3 mb-2 flex items-center gap-2 rounded-full bg-white shadow-[0_10px_30px_rgba(15,93,107,0.18)] border border-black/5 p-1.5">
        <a
          href={business.telHref}
          className="flex-1 inline-flex items-center justify-center gap-2 h-12 rounded-full bg-accent-500 text-white font-semibold"
          aria-label={`Call ${business.phone}`}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Call now
        </a>
        <a
          href={business.smsHref}
          className="flex-1 inline-flex items-center justify-center gap-2 h-12 rounded-full bg-brand-700 text-white font-semibold"
          aria-label="Text us"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Text
        </a>
      </div>
    </div>
  );
}
