"use client";

import { useState } from "react";
import type { FAQ } from "@/data/site";

export function FAQAccordion({ items }: { items: FAQ[] }) {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  return (
    <ul className="divide-y divide-ink-100 rounded-3xl bg-white shadow-[var(--shadow-soft)] border border-black/[0.04]">
      {items.map((f, i) => {
        const open = openIdx === i;
        const panelId = `faq-panel-${i}`;
        const btnId = `faq-btn-${i}`;
        return (
          <li key={f.q}>
            <button
              id={btnId}
              type="button"
              aria-expanded={open}
              aria-controls={panelId}
              onClick={() => setOpenIdx(open ? null : i)}
              className="w-full flex items-center justify-between gap-4 text-left px-5 md:px-7 py-5 md:py-6 hover:bg-brand-50/40"
            >
              <span className="text-base md:text-lg font-semibold text-ink-800">{f.q}</span>
              <span
                className={`h-8 w-8 shrink-0 grid place-items-center rounded-full bg-brand-50 text-brand-800 transition-transform ${
                  open ? "rotate-45" : ""
                }`}
                aria-hidden="true"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
                </svg>
              </span>
            </button>
            <div
              id={panelId}
              role="region"
              aria-labelledby={btnId}
              hidden={!open}
              className="px-5 md:px-7 pb-6 -mt-2 text-ink-500 leading-relaxed"
            >
              {f.a}
            </div>
          </li>
        );
      })}
    </ul>
  );
}
