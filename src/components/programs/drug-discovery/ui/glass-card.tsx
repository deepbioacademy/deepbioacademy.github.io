import { type HTMLAttributes } from "react";
import clsx from "clsx";

type GlassCardProps = HTMLAttributes<HTMLDivElement>;

export function GlassCard({ className, ...props }: GlassCardProps) {
  return (
    <div
      className={clsx("glass rounded-2xl transition-all duration-300", className)}
      {...props}
    />
  );
}
