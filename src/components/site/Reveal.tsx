"use client";

import { motion, useReducedMotion, type MotionProps } from "framer-motion";
import { useEffect, useState, type ReactNode } from "react";

/**
 * Server-safe reveal. On SSR / before hydration, content is fully visible
 * (no LCP penalty). After mount, the initial state is applied and the
 * whileInView animation fires when the element enters the viewport.
 * `eager` skips the effect entirely — use for hero/above-the-fold content.
 */
export function Reveal({
  children,
  delay = 0,
  y = 20,
  eager = false,
  className,
  as: As = "div",
  ...rest
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  eager?: boolean;
  className?: string;
  as?: "div" | "section" | "article" | "li";
} & MotionProps) {
  const MotionAs = motion[As] as typeof motion.div;
  const reduced = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (eager || reduced || !mounted) {
    return <As className={className}>{children}</As>;
  }

  return (
    <MotionAs
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
      {...rest}
    >
      {children}
    </MotionAs>
  );
}
