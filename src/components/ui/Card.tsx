import type { ReactNode } from "react";

export function Card({
  children,
  className = "",
  as: As = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "article" | "section";
}) {
  return (
    <As
      className={`rounded-3xl bg-white shadow-[var(--shadow-soft)] border border-black/[0.04] transition-shadow hover:shadow-[var(--shadow-lift)] ${className}`}
    >
      {children}
    </As>
  );
}
