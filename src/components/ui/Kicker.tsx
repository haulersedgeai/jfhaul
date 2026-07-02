import type { ReactNode } from "react";

export function Kicker({
  children,
  className = "",
  as: As = "div",
  tone = "accent",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "span" | "p";
  tone?: "accent" | "brand" | "cream";
}) {
  const tones = {
    accent: "text-accent-600",
    brand: "text-brand-700",
    cream: "text-cream-200/90",
  } as const;
  return (
    <As
      className={`inline-flex items-center gap-2 text-[0.72rem] md:text-xs font-bold uppercase tracking-[0.18em] ${tones[tone]} ${className}`}
    >
      <span aria-hidden="true" className="h-px w-6 bg-current opacity-60" />
      {children}
    </As>
  );
}
