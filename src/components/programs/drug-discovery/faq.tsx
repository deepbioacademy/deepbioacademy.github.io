import { ChevronDown, HelpCircle } from "lucide-react";
import { faqItems } from "@/lib/data";

export function Faq() {
  return (
    <section id="faq" className="py-16 sm:py-20 bg-slate-50/60 border-b border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 border border-teal-100 text-teal-800 text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-teal-600" />
            <span>Frequently Asked Questions</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Everything You Need to Know
          </h2>

          <p className="text-slate-600 text-sm sm:text-base font-normal leading-relaxed">
            Clear answers regarding pre-registration, software requirements, schedule, and certification.
          </p>
        </div>

        <div className="space-y-3">
          {faqItems.map((item, i) => (
            <details
              key={item.question}
              name="faq"
              open={i === 0}
              className="border border-slate-200/90 rounded-2xl bg-white overflow-hidden shadow-xs transition-all group"
            >
              <summary className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-slate-900 hover:bg-slate-50/80 transition-colors cursor-pointer">
                <span className="text-sm sm:text-base leading-snug">{item.question}</span>
                <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0 transition-transform group-open:rotate-180 group-open:text-teal-700" />
              </summary>
              <div className="px-5 pb-5 pt-1 border-t border-slate-100 text-slate-600 text-xs sm:text-sm leading-relaxed font-normal bg-slate-50/50">
                {item.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
