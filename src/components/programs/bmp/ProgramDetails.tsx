import {
  Award,
  Calendar,
  ClipboardCheck,
  Clock,
  CreditCard,
  FlaskConical,
  Laptop,
  ListChecks,
  Wallet,
  Wrench,
  Sparkles,
  Terminal,
} from "lucide-react";

const bmpDetails = [
  {
    icon: Calendar,
    label: "DURATION",
    value: "3 Months (12 Weeks)",
    note: "24 Live Intensive Lab Sessions",
  },
  {
    icon: ListChecks,
    label: "SCHEDULE",
    value: "2 Classes per Week",
    note: "Friday & Saturday live interactive",
  },
  {
    icon: Clock,
    label: "TIME",
    value: "9:00 PM – 11:00 PM (BST)",
    note: "Evening sessions for students & pros",
  },
  {
    icon: Laptop,
    label: "MODE",
    value: "Live Interactive on Zoom",
    note: "Live screen-sharing & code debugging",
  },
  {
    icon: Wrench,
    label: "ASSIGNMENTS",
    value: "Weekly Hands-on Milestones",
    note: "GitHub code reviews & instructor feedback",
  },
  {
    icon: Sparkles,
    label: "CAPSTONE",
    value: "3 Research Projects (Group Peer-Review)",
    note: "Bulk RNA-seq, Single-Cell & Spatial Omics",
  },
  {
    icon: Award,
    label: "CERTIFICATE",
    value: "Official DeepBio Academy Certificate",
    note: "Verified computational biology credential",
  },
  {
    icon: Wallet,
    label: "FEE",
    value: "5,100 BDT / month",
    note: "50% Discount (Regular: 10,200 BDT / month)",
  },
  {
    icon: CreditCard,
    label: "PAYMENT DUE",
    value: "5th of every month",
    note: "Flexible monthly installment plan",
  },
  {
    icon: Terminal,
    label: "ENVIRONMENT",
    value: "Pre-Configured Conda & R",
    note: "Zero complex setup — start coding Day 1",
  },
  {
    icon: FlaskConical,
    label: "CODE REPOSITORIES",
    value: "Every Single Session",
    note: "Production-ready R & Bash scripts",
  },
  {
    icon: ClipboardCheck,
    label: "ENROLLMENT PROCESS",
    value: "Free Apply → Live Q&A → Enroll",
    note: "Zero fee before Q&A — enroll only when fully informed",
  },
];

export default function ProgramDetails() {
  return (
    <section className="py-16 sm:py-20 bg-slate-50/70 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-2.5">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider">
            <Calendar className="w-3.5 h-3.5" />
            <span>COHORT LOGISTICS &amp; INVESTMENT</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Program Structure &amp; Schedule
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            Transparent month-to-month fee. Zero hardware setup costs.
          </p>
        </div>

        {/* 12-Card Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {bmpDetails.map((detail) => {
            const Icon = detail.icon;
            return (
              <div
                key={detail.label}
                className="flex items-start gap-4 rounded-2xl border border-slate-200/90 bg-white p-6 shadow-2xs hover:shadow-md hover:border-blue-300 transition-all group"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 border border-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 font-mono">
                    {detail.label}
                  </span>
                  <span className="mt-1 block text-sm sm:text-base font-extrabold text-slate-900 leading-snug">
                    {detail.value}
                  </span>
                  {detail.note ? (
                    <span className="mt-0.5 block text-xs font-medium text-slate-500">
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
