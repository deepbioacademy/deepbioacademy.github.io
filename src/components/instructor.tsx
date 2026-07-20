import Image from "next/image";
import { BookOpen, FlaskConical, GraduationCap, Quote, Users } from "lucide-react";
import { instructors } from "@/lib/data";
import { SectionHeading } from "./ui/section-heading";
import { Reveal } from "./ui/reveal";
import { GlassCard } from "./ui/glass-card";
import { Counter } from "./ui/counter";

const statIcons = [FlaskConical, Users, GraduationCap, BookOpen];

function parseStat(value: string) {
  const match = value.match(/^(\d+)(\+?)$/);
  if (!match) return null;
  return { number: parseInt(match[1], 10), suffix: match[2] };
}

export function Instructor() {
  const lead = instructors.find((i) => i.lead) ?? instructors[0];
  const team = instructors.filter((i) => !i.lead);

  return (
    <section id="instructor" className="relative bg-slate-50 py-24 dark:bg-slate-900/40 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Meet the Team"
          title="Learn from a computational drug discovery team"
          description="A program lead and a team of pharmacy graduates and CADD experts guiding every session."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-[minmax(0,320px)_1fr] lg:gap-12">
          <Reveal>
            <GlassCard className="flex flex-col items-center border border-slate-900/10 bg-white/70 p-8 text-center dark:border-white/10 dark:bg-white/[0.03]">
              <div className="relative h-32 w-32 overflow-hidden rounded-full ring-4 ring-white shadow-xl shadow-violet-600/20 dark:ring-slate-900">
                <Image
                  src={lead.photo}
                  alt={lead.name}
                  fill
                  sizes="128px"
                  className="object-cover"
                />
              </div>
              <h3 className="mt-5 text-xl font-bold text-slate-900 dark:text-white">
                {lead.name}
              </h3>
              <p className="mt-1 text-sm font-medium text-violet-600 dark:text-cyan-300">
                {lead.role}
              </p>
              {lead.bio ? (
                <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {lead.bio}
                </p>
              ) : null}
              {lead.quote ? (
                <p className="mt-4 flex items-start gap-2 text-left text-xs font-medium italic leading-relaxed text-slate-500 dark:text-slate-400">
                  <Quote className="h-4 w-4 shrink-0 text-violet-500 dark:text-cyan-300" strokeWidth={2.2} />
                  {lead.quote}
                </p>
              ) : null}
            </GlassCard>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2">
            {(lead.stats ?? []).map((stat, i) => {
              const Icon = statIcons[i % statIcons.length];
              const parsed = parseStat(stat.value);
              return (
                <Reveal key={stat.label} delay={i * 0.08}>
                  <GlassCard className="h-full border border-slate-900/10 bg-white/70 p-6 dark:border-white/10 dark:bg-white/[0.03]">
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900/5 text-violet-600 dark:bg-white/5 dark:text-cyan-300">
                      <Icon size={18} />
                    </span>
                    <h4 className="mt-4 text-lg font-bold text-slate-900 dark:text-white">
                      {parsed ? (
                        <Counter value={parsed.number} suffix={parsed.suffix} />
                      ) : (
                        stat.value
                      )}
                    </h4>
                    <p className="mt-1 text-sm font-semibold text-slate-800 dark:text-slate-200">
                      {stat.label}
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-slate-500 dark:text-slate-400">
                      {stat.description}
                    </p>
                  </GlassCard>
                </Reveal>
              );
            })}
          </div>
        </div>

        <Reveal delay={0.15} className="mt-14">
          <h3 className="text-center text-sm font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
            Instructors
          </h3>
        </Reveal>

        <div className="mt-8 flex flex-wrap justify-center gap-5">
          {team.map((member, i) => (
            <Reveal key={member.name} delay={(i % 5) * 0.06} className="w-[calc(50%-0.625rem)] sm:w-[calc(33.333%-0.834rem)] lg:w-[calc(25%-0.938rem)]">
              <GlassCard className="flex h-full flex-col items-center gap-3 border border-slate-900/10 bg-white/70 px-4 py-7 text-center transition-all hover:-translate-y-1 hover:border-violet-500/30 dark:border-white/10 dark:bg-white/[0.03]">
                <div className="relative h-20 w-20 overflow-hidden rounded-full ring-2 ring-white shadow-md dark:ring-slate-900">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                </div>
                <span className="text-sm font-semibold leading-tight text-slate-900 dark:text-white">
                  {member.name}
                </span>
                <span className="text-xs leading-tight text-slate-500 dark:text-slate-400">
                  {member.role}
                </span>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
