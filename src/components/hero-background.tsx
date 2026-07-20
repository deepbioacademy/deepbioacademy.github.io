"use client";

import { motion } from "framer-motion";

const molecules = [
  { cx: 12, cy: 18, r: 3 },
  { cx: 28, cy: 10, r: 2 },
  { cx: 22, cy: 32, r: 2.4 },
  { cx: 45, cy: 22, r: 3.2 },
  { cx: 60, cy: 12, r: 2 },
  { cx: 70, cy: 30, r: 2.6 },
  { cx: 85, cy: 16, r: 3 },
  { cx: 92, cy: 40, r: 2 },
  { cx: 8, cy: 55, r: 2.2 },
  { cx: 35, cy: 62, r: 2.8 },
  { cx: 55, cy: 70, r: 2 },
  { cx: 78, cy: 60, r: 3 },
  { cx: 95, cy: 78, r: 2.4 },
  { cx: 18, cy: 85, r: 2 },
  { cx: 48, cy: 90, r: 2.6 },
];

const links: Array<[number, number]> = [
  [0, 1],
  [1, 3],
  [2, 3],
  [3, 5],
  [4, 5],
  [5, 6],
  [6, 7],
  [0, 2],
  [8, 9],
  [9, 10],
  [10, 11],
  [11, 12],
  [9, 2],
  [10, 5],
  [13, 8],
  [14, 10],
];

const particles = Array.from({ length: 26 }, (_, i) => ({
  id: i,
  x: Math.round((i * 37) % 100),
  y: Math.round((i * 53) % 100),
  size: 2 + (i % 4),
  duration: 6 + (i % 6),
  delay: (i % 5) * 0.6,
}));

export function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Gradient wash */}
      <div className="absolute inset-0 bg-slate-950" />
      <div className="absolute -top-40 -left-40 h-[36rem] w-[36rem] rounded-full bg-blue-600/30 blur-[120px] animate-pulse-slow" />
      <div className="absolute top-1/3 -right-40 h-[32rem] w-[32rem] rounded-full bg-violet-600/30 blur-[120px] animate-pulse-slow [animation-delay:1.5s]" />
      <div className="absolute -bottom-40 left-1/4 h-[30rem] w-[30rem] rounded-full bg-cyan-500/20 blur-[120px] animate-pulse-slow [animation-delay:3s]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(15,23,42,0.4)_70%,rgba(15,23,42,0.9))]" />

      {/* Neural network / molecular graph */}
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full opacity-40"
      >
        <defs>
          <linearGradient id="linkGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#2563EB" />
            <stop offset="50%" stopColor="#7C3AED" />
            <stop offset="100%" stopColor="#06B6D4" />
          </linearGradient>
        </defs>
        {links.map(([a, b], i) => {
          const p1 = molecules[a];
          const p2 = molecules[b];
          return (
            <motion.line
              key={`${a}-${b}-${i}`}
              x1={p1.cx}
              y1={p1.cy}
              x2={p2.cx}
              y2={p2.cy}
              stroke="url(#linkGrad)"
              strokeWidth={0.15}
              initial={{ opacity: 0.15 }}
              animate={{ opacity: [0.15, 0.5, 0.15] }}
              transition={{ duration: 4 + (i % 3), repeat: Infinity, delay: i * 0.2 }}
            />
          );
        })}
        {molecules.map((m, i) => (
          <motion.circle
            key={i}
            cx={m.cx}
            cy={m.cy}
            r={m.r * 0.35}
            fill={i % 3 === 0 ? "#06B6D4" : i % 3 === 1 ? "#7C3AED" : "#2563EB"}
            initial={{ opacity: 0.5 }}
            animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.3, 1] }}
            transition={{ duration: 3 + (i % 4), repeat: Infinity, delay: i * 0.15 }}
          />
        ))}
      </svg>

      {/* DNA helix, right side */}
      <svg
        className="absolute -right-10 top-1/2 hidden h-[140%] w-64 -translate-y-1/2 opacity-30 sm:block lg:opacity-40"
        viewBox="0 0 200 800"
        fill="none"
      >
        <g className="animate-spin-slower origin-center">
          {Array.from({ length: 20 }).map((_, i) => {
            const y = i * 40;
            const offset = Math.sin(i * 0.6) * 60;
            return (
              <g key={i}>
                <line
                  x1={100 - offset}
                  y1={y}
                  x2={100 + offset}
                  y2={y}
                  stroke="#7C3AED"
                  strokeWidth={1.5}
                  opacity={0.4}
                />
                <circle cx={100 - offset} cy={y} r={4} fill="#06B6D4" opacity={0.7} />
                <circle cx={100 + offset} cy={y} r={4} fill="#2563EB" opacity={0.7} />
              </g>
            );
          })}
        </g>
      </svg>

      {/* Protein ribbon */}
      <svg
        className="absolute left-1/2 top-0 h-full w-[140%] -translate-x-1/2 opacity-20"
        viewBox="0 0 1000 600"
        fill="none"
      >
        <motion.path
          d="M -50 300 C 150 100, 300 500, 500 300 S 850 100, 1050 300"
          stroke="#06B6D4"
          strokeWidth={2}
          strokeDasharray="12 10"
          initial={{ strokeDashoffset: 0 }}
          animate={{ strokeDashoffset: -1000 }}
          transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
        />
        <motion.path
          d="M -50 340 C 150 140, 300 540, 500 340 S 850 140, 1050 340"
          stroke="#7C3AED"
          strokeWidth={2}
          strokeDasharray="12 10"
          initial={{ strokeDashoffset: 0 }}
          animate={{ strokeDashoffset: 1000 }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        />
      </svg>

      {/* Floating particles */}
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full bg-cyan-300/70"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
          }}
          animate={{ y: [0, -30, 0], opacity: [0.2, 0.8, 0.2] }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Grid overlay for scientific feel */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:48px_48px]" />
    </div>
  );
}
