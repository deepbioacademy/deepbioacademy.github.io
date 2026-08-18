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
  Sparkles,
} from "lucide-react";
import { programDetails } from "@/lib/data";

const icons: Record<string, typeof Calendar> = {
  Duration: Calendar,
  Schedule: ListChecks,
  Time: Clock,
  Mode: Laptop,
  Assignments: Wrench,
  Capstone: Sparkles,
  Certificate: Award,
  "Google Colab": Cloud,
  Fee: Wallet,
  "Payment Due": CreditCard,
  "Colab Notebooks": FlaskConical,
  "Enrollment Process": ClipboardCheck,
};

export function ProgramDetails() {
  return (
    <section className="py-16 sm:py-20 bg-slate-50/70 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 border border-teal-100 text-teal-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Calendar className="w-3.5 h-3.5" />
            <span>Cohort Logistics &amp; Investment</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Program Structure &amp; Schedule
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal mt-2">
            Transparent month-to-month fee. Zero hardware setup costs.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {programDetails.map((detail) => {
            const Icon = icons[detail.label] ?? Calendar;
            return (
              <div
                key={detail.label}
                className="flex items-start gap-4 rounded-2xl border border-slate-200/90 bg-white p-6 shadow-xs hover:shadow-md hover:border-teal-300 transition-all"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-700">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs font-bold uppercase tracking-wider text-slate-500">
                    {detail.label}
                  </span>
                  <span className="mt-1 block text-base font-extrabold text-slate-900">
                    {detail.value}
                  </span>
                  {detail.note ? (
                    <span className="mt-0.5 block text-xs font-normal text-slate-500">
                      {detail.note}
                    </span>
                  ) : null}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
