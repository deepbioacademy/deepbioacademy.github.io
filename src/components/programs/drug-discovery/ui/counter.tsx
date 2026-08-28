"use client";

import { useEffect, useRef } from "react";

type CounterProps = {
  value: number;
  suffix?: string;
  prefix?: string;
  /** Tween length in milliseconds. */
  duration?: number;
  className?: string;
};

export function Counter({
  value,
  suffix = "",
  prefix = "",
  duration = 1600,
  className,
}: CounterProps) {
  const numberRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = numberRef.current;
    if (!el) return;

    if (
      typeof IntersectionObserver === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      el.textContent = String(value);
      return;
    }

    let frame = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        const start = performance.now();
        const step = (now: number) => {
          const t = Math.min((now - start) / duration, 1);
          // easeOutCubic — written straight to the DOM so the tween never
          // triggers a React render.
          el.textContent = String(Math.round(value * (1 - (1 - t) ** 3)));
          if (t < 1) frame = requestAnimationFrame(step);
        };
        frame = requestAnimationFrame(step);
      },
      { rootMargin: "-60px" }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value, duration]);

  return (
    <span className={className}>
      {prefix}
      <span ref={numberRef}>0</span>
      {suffix}
    </span>
  );
}
