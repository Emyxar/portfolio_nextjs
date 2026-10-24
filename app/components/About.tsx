import { Sparkles, CheckCircle2, GraduationCap, Compass } from 'lucide-react';
import { profile } from '../data/portfolio';

export function About() {
  const { about } = profile;

  return (
    <section id="about" className="section-y relative">
      <div className="container-px mx-auto max-w-[1600px]">
        <div className="reveal">
          <p className="eyebrow mb-4">
            <Sparkles className="h-3.5 w-3.5" />
            Обо мне
          </p>
          <h2 className="section-title max-w-2xl">
            Специалист, который доводит идеи до рабочего продукта
          </h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {/* Intro card */}
          <div className="reveal card card-hover p-6 lg:col-span-2" data-reveal-delay="80">
            <p className="text-base leading-relaxed text-ink-200">{about.specialization}.</p>
            <p className="mt-4 text-base leading-relaxed text-ink-300">{about.approach}</p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              <Stat label="Опыт работы" value={`${about.experienceYears}+ лет`} />
              <Stat label="Специализация" value={profile.role} />
            </div>
          </div>

          {/* Strengths */}
          <div className="reveal card p-6" data-reveal-delay="160">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-ink-200">
              Сильные стороны
            </h3>
            <ul className="mt-5 space-y-3">
              {about.strengths.map((s) => (
                <li key={s} className="flex gap-3 text-sm leading-relaxed text-ink-300">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent-400" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          {/* Interests */}
          <div className="reveal card p-6" data-reveal-delay="80">
            <div className="flex items-center gap-2 text-accent-400">
              <Compass className="h-4 w-4" />
              <h3 className="text-sm font-semibold uppercase tracking-wider text-ink-200">
                Профессиональные интересы
              </h3>
            </div>
            <ul className="mt-5 space-y-2.5">
              {about.interests.map((i) => (
                <li key={i} className="flex items-center gap-2.5 text-sm text-ink-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent-500" />
                  {i}
                </li>
              ))}
            </ul>
          </div>

          {/* Education */}
          <div className="reveal card p-6 lg:col-span-2" data-reveal-delay="160">
            <div className="flex items-center gap-2 text-accent-400">
              <GraduationCap className="h-4 w-4" />
              <h3 className="text-sm font-semibold uppercase tracking-wider text-ink-200">
                Образование и развитие
              </h3>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-ink-300">{about.education}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-ink-700/60 bg-ink-900/50 p-4">
      <p className="text-xs font-mono uppercase tracking-wider text-ink-400">{label}</p>
      <p className="mt-1.5 text-base font-medium text-ink-50">{value}</p>
    </div>
  );
}
