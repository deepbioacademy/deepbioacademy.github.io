import { type HTMLAttributes } from "react";
import clsx from "clsx";

export function GlassCard({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={clsx(
        "glass rounded-2xl transition-all duration-300",
        className
      )}
      {...props}
    />
  );
}
