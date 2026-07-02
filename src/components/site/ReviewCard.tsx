import { Star } from "lucide-react";
import { Card } from "@/components/ui/Card";
import type { Review } from "@/data/reviews";

const sourceStyles: Record<Review["source"], string> = {
  Google: "bg-brand-50 text-brand-800",
  Facebook: "bg-blue-50 text-blue-700",
  Networx: "bg-accent-50 text-accent-700",
};

export function ReviewCard({ review }: { review: Review }) {
  return (
    <Card className="p-6 h-full flex flex-col">
      <div className="flex items-center justify-between gap-3">
        <div className="flex text-accent-500" aria-label="5 out of 5 stars">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
          ))}
        </div>
        <span
          className={`text-[10px] font-bold uppercase tracking-widest rounded-full px-2 py-0.5 ${sourceStyles[review.source]}`}
        >
          {review.source}
        </span>
      </div>
      <p className="mt-3 text-ink-700 flex-1">{review.text}</p>
      <div className="mt-4 text-sm text-ink-500">
        — {review.name}
        {review.city ? <span className="text-ink-400"> · {review.city}, AL</span> : null}
      </div>
    </Card>
  );
}
