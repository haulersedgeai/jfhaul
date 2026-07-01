import type { ReactNode } from "react";

type Props = {
  id?: string;
  className?: string;
  children: ReactNode;
  bg?: "cream" | "white" | "brand" | "ink";
  padded?: boolean;
  ariaLabel?: string;
};

const bgs = {
  cream: "bg-[var(--color-cream-100)]",
  white: "bg-white",
  brand: "bg-brand-800 text-white",
  ink: "bg-ink-800 text-white",
} as const;

export function Section({ id, className = "", children, bg = "cream", padded = true, ariaLabel }: Props) {
  return (
    <section
      id={id}
      aria-label={ariaLabel}
      className={`${bgs[bg]} ${padded ? "py-14 md:py-20" : ""} ${className}`}
    >
      <div className="container-x">{children}</div>
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  intro,
  centered = false,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  centered?: boolean;
}) {
  return (
    <header className={`max-w-3xl ${centered ? "mx-auto text-center" : ""} mb-10 md:mb-14`}>
      {eyebrow && (
        <div className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent-600">
          {eyebrow}
        </div>
      )}
      <h2 className="text-3xl md:text-5xl font-bold text-ink-800 [text-wrap:balance]">{title}</h2>
      {intro && <p className="mt-4 text-lg text-ink-500 [text-wrap:pretty]">{intro}</p>}
    </header>
  );
}
