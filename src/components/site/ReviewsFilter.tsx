"use client";

import { useMemo, useState } from "react";
import { reviewCategories, reviews, type ReviewCategory } from "@/data/reviews";
import { ReviewCard } from "@/components/site/ReviewCard";

type Filter = "All" | ReviewCategory;

const chips: Filter[] = ["All", ...reviewCategories];

export function ReviewsFilter() {
  const [active, setActive] = useState<Filter>("All");

  const filtered = useMemo(() => {
    if (active === "All") return reviews;
    return reviews.filter((r) => r.category === active);
  }, [active]);

  return (
    <div>
      <div
        role="tablist"
        aria-label="Filter reviews by category"
        className="flex flex-wrap gap-2 mb-8"
      >
        {chips.map((c) => {
          const selected = active === c;
          return (
            <button
              key={c}
              type="button"
              role="tab"
              aria-selected={selected}
              onClick={() => setActive(c)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                selected
                  ? "bg-accent-500 text-white shadow-[var(--shadow-soft)]"
                  : "bg-white border border-ink-100 text-ink-700 hover:border-brand-300 hover:text-brand-800"
              }`}
            >
              {c}
            </button>
          );
        })}
      </div>

      {filtered.length === 0 ? (
        <p className="text-ink-500">
          No reviews yet in that category — check back soon.
        </p>
      ) : (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((r) => (
            <ReviewCard key={`${r.name}-${r.text.slice(0, 12)}`} review={r} />
          ))}
        </div>
      )}
    </div>
  );
}
