import type { ReactNode } from "react";

type Tone = "brand" | "accent" | "neutral" | "success";

const tones: Record<Tone, string> = {
  brand: "bg-brand-50 text-brand-800 border-brand-100",
  accent: "bg-accent-50 text-accent-700 border-accent-100",
  neutral: "bg-ink-50 text-ink-700 border-ink-100",
  success: "bg-emerald-50 text-emerald-800 border-emerald-100",
};

export function Badge({
  children,
  tone = "brand",
  className = "",
}: {
  children: ReactNode;
  tone?: Tone;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold ${tones[tone]} ${className}`}
    >
      {children}
    </span>
  );
}
