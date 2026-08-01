import clsx from "clsx";
import type { CSSProperties, ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Seconds of visual stagger, translated into a scroll-range offset. */
  delay?: number;
  y?: number;
};

/**
 * Scroll-triggered fade-up built entirely on CSS scroll-driven animations, so
 * it ships no client JavaScript and never runs on the main thread. Browsers
 * without `animation-timeline: view()` render the children as-is.
 *
 * Note: `view()` resolves against the nearest scroll container, so ancestors
 * must not use `overflow: hidden` (use `overflow: clip` instead).
 */
export function Reveal({ children, className, delay = 0, y = 28 }: RevealProps) {
  const style = {
    "--reveal-offset": `${Math.round(delay * 500) / 10}%`,
    "--fade-up-y": `${y}px`,
  } as CSSProperties;

  return (
    <div className={clsx("reveal", className)} style={style}>
      {children}
    </div>
  );
}
