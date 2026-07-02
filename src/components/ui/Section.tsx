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
  tone = "light",
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  centered?: boolean;
  tone?: "light" | "dark";
}) {
  const titleCls = tone === "dark" ? "text-white" : "text-ink-800";
  const introCls = tone === "dark" ? "text-white/80" : "text-ink-500";
  const eyebrowCls = tone === "dark" ? "text-accent-300" : "text-accent-600";
  return (
    <header className={`max-w-3xl ${centered ? "mx-auto text-center" : ""} mb-10 md:mb-14`}>
      {eyebrow && (
        <div className={`inline-flex items-center gap-2 mb-4 text-[0.72rem] md:text-xs font-bold uppercase tracking-[0.18em] ${eyebrowCls}`}>
          <span aria-hidden="true" className={`h-px w-6 ${tone === "dark" ? "bg-accent-300" : "bg-accent-500"} opacity-70`} />
          {eyebrow}
        </div>
      )}
      <h2 className={`font-display font-bold [text-wrap:balance] tracking-[-0.02em] ${titleCls} text-[clamp(1.9rem,4.5vw,3.25rem)] leading-[1.05]`}>{title}</h2>
      {intro && <p className={`mt-5 text-lg md:text-xl leading-relaxed [text-wrap:pretty] ${introCls}`}>{intro}</p>}
    </header>
  );
}
