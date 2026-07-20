import { type HTMLAttributes } from "react";
import clsx from "clsx";

type GlassCardProps = HTMLAttributes<HTMLDivElement> & {
  /** Only needed over busy/animated backgrounds — backdrop-blur is expensive to paint. */
  blur?: boolean;
};

export function GlassCard({ className, blur = false, ...props }: GlassCardProps) {
  return (
    <div
      className={clsx(
        "glass rounded-2xl transition-all duration-300",
        blur && "glass-blur",
        className
      )}
      {...props}
    />
  );
}
