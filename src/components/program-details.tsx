import {
  Award,
  Calendar,
  ClipboardCheck,
  Clock,
  Cloud,
  CreditCard,
  FlaskConical,
  Laptop,
  ListChecks,
  Wallet,
  Wrench,
} from "lucide-react";
import { programDetails } from "@/lib/data";
import { SectionHeading } from "./ui/section-heading";
import { Reveal } from "./ui/reveal";
import { GlassCard } from "./ui/glass-card";

const icons: Record<string, typeof Calendar> = {
  Duration: Calendar,
  Schedule: ListChecks,
  Time: Clock,
  Mode: Laptop,
  Assignments: Wrench,
  Projects: Wrench,
  Certificate: Award,
  "Google Colab Pro": Cloud,
  Fee: Wallet,
  "Payment Deadline": CreditCard,
  "Colab Notebooks": FlaskConical,
  "Enrollment Process": ClipboardCheck,
};

export function ProgramDetails() {
  return (
    <section className="relative bg-white py-24 dark:bg-slate-950 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Program Details"
          title="Everything you need to know"
        />

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {programDetails.map((detail, i) => {
            const Icon = icons[detail.label] ?? Calendar;
            return (
              <Reveal key={detail.label} delay={(i % 3) * 0.06}>
                <GlassCard className="flex h-full items-start gap-4 border border-slate-900/10 bg-white/70 p-6 dark:border-white/10 dark:bg-white/[0.03]">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-violet-600 text-white shadow-md shadow-violet-600/20">
                    <Icon size={19} />
                  </span>
                  <span>
                    <span className="block text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                      {detail.label}
                    </span>
                    <span className="mt-1 block text-base font-bold text-slate-900 dark:text-white">
                      {detail.value}
                    </span>
                    {detail.note ? (
                      <span className="mt-0.5 block text-xs font-medium text-slate-500 dark:text-slate-400">
                        {detail.note}
                      </span>
                    ) : null}
                  </span>
                </GlassCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
