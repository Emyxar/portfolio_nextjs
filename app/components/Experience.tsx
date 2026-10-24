import { Briefcase, ChevronRight } from 'lucide-react';
import { experience } from '../data/portfolio';

export function Experience() {
  return (
    <section id="experience" className="section-y relative">
      <div className="container-px mx-auto max-w-[1600px]">
        <div className="reveal">
          <p className="eyebrow mb-4">
            <Briefcase className="h-3.5 w-3.5" />
            Опыт работы
          </p>
          <h2 className="section-title max-w-2xl">Карьерный путь и решённые задачи</h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-300">
            Где я работал, за что отвечал и какие результаты приносил. Заполните
            блок своими фактическими данными.
          </p>
        </div>

        <div className="relative mt-14">
          {/* Vertical line */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-accent-500/60 via-ink-700 to-transparent md:left-[11px]" />

          <div className="space-y-10">
            {experience.map((job, idx) => (
              <div key={`${job.company}-${idx}`} className="reveal relative pl-8 md:pl-12">
                {/* Node */}
                <span className="absolute left-0 top-1.5 flex h-[15px] w-[15px] items-center justify-center md:left-0.5">
                  <span className="absolute h-[15px] w-[15px] rounded-full border-2 border-ink-700 bg-ink-900" />
                  {job.current && (
                    <span className="absolute h-[15px] w-[15px] animate-pulse-ring rounded-full bg-accent-400/50" />
                  )}
                  <span
                    className={`relative h-[7px] w-[7px] rounded-full ${
                      job.current ? 'bg-accent-400' : 'bg-ink-500'
                    }`}
                  />
                </span>

                <div className="card card-hover p-6 md:p-7">
                  <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-ink-50">
                        {job.role}
                      </h3>
                      <p className="mt-1 text-sm font-medium text-accent-400">
                        {job.company}
                      </p>
                    </div>
                    <span
                      className={`inline-flex w-fit items-center gap-2 rounded-md px-2.5 py-1 font-mono text-xs ${
                        job.current
                          ? 'bg-accent-500/10 text-accent-300'
                          : 'bg-ink-800 text-ink-300'
                      }`}
                    >
                      {job.current && (
                        <span className="h-1.5 w-1.5 rounded-full bg-accent-400" />
                      )}
                      {job.period}
                    </span>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-ink-300">
                    {job.description}
                  </p>

                  {/* Responsibilities */}
                  <div className="mt-6">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-ink-400">
                      Основные задачи
                    </h4>
                    <ul className="mt-3 space-y-2">
                      {job.responsibilities.map((r) => (
                        <li
                          key={r}
                          className="flex gap-2.5 text-sm leading-relaxed text-ink-200"
                        >
                          <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-ink-500" />
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Results */}
                  <div className="mt-6">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-ink-400">
                      Результаты
                    </h4>
                    <ul className="mt-3 space-y-2">
                      {job.results.map((r) => (
                        <li
                          key={r}
                          className="flex gap-2.5 text-sm leading-relaxed text-ink-200"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-400" />
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Stack */}
                  <div className="mt-6 flex flex-wrap gap-2 border-t border-ink-800 pt-5">
                    {job.stack.map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-ink-700 bg-ink-900/60 px-2.5 py-1 font-mono text-xs text-ink-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
