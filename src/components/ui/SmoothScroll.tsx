"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

export default function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
      smoothWheel: true,
      wheelMultiplier: 1.25,
      touchMultiplier: 1.0,
      lerp: 0.1,
      anchors: true,
    });

    // Make lenis globally accessible for programmatic scrolling if needed
    (window as unknown as { lenisInstance: Lenis }).lenisInstance = lenis;

    return () => {
      lenis.destroy();
    };
  }, []);

  return null;
}
