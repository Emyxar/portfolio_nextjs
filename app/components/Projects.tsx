'use client'

import { FolderGit2, ArrowUpRight, GitBranch, X, CheckCircle2, AlertTriangle, Wrench } from 'lucide-react';
import { useEffect, useState } from 'react';
import { projects, type Project } from '../data/portfolio';

export function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  // Close on Escape, lock scroll while modal open
  useEffect(() => {
    if (!selected) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelected(null);
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [selected]);

  return (
    <section id="projects" className="section-y relative">
      <div className="container-px mx-auto max-w-[1600px]">
        <div className="reveal">
          <p className="eyebrow mb-4">
            <FolderGit2 className="h-3.5 w-3.5" />
            Проекты
          </p>
          <h2 className="section-title max-w-2xl">Кейсы, над которыми я работал</h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-300">
            Не просто список технологий, а контекст задачи, принятые решения и
            полученный результат. Нажмите на карточку, чтобы увидеть подробности.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, idx) => (
            <button
              key={p.id}
              onClick={() => setSelected(p)}
              className="reveal card card-hover group flex flex-col overflow-hidden text-left"
              data-reveal-delay={`${idx * 80}`}
            >
              {/* Cover */}
              <div className="relative h-40 overflow-hidden border-b border-ink-800">
                <ProjectCover seed={p.id} />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900/80 via-transparent to-transparent" />
                <div className="absolute left-3 top-3 flex flex-wrap gap-1.5">
                  {p.tags.slice(0, 2).map((t) => (
                    <span
                      key={t}
                      className="rounded border border-ink-700/80 bg-ink-900/70 px-2 py-0.5 font-mono text-[10px] text-ink-200 backdrop-blur"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-lg bg-ink-900/70 text-ink-200 opacity-0 backdrop-blur transition-all duration-300 group-hover:opacity-100 group-hover:text-accent-300">
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </div>

              {/* Body */}
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-base font-semibold text-ink-50 transition-colors group-hover:text-accent-300">
                  {p.name}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-300">
                  {p.tagline}
                </p>
                <p className="mt-4 text-xs font-mono uppercase tracking-wider text-ink-400">
                  {p.role}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-[60] flex items-start justify-center overflow-y-auto bg-ink-950/80 p-4 backdrop-blur-sm animate-fade-in sm:p-6 md:items-center"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Проект: ${project.name}`}
    >
      <div
        className="relative my-auto w-full max-w-3xl animate-scale-in overflow-hidden rounded-2xl border border-ink-700 bg-ink-900 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header / cover */}
        <div className="relative h-44 overflow-hidden border-b border-ink-800 sm:h-56">
          <ProjectCover seed={project.id} large />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/40 to-transparent" />
          <button
            onClick={onClose}
            className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-lg border border-ink-700 bg-ink-900/70 text-ink-200 backdrop-blur transition-colors hover:bg-ink-800 hover:text-ink-50"
            aria-label="Закрыть"
          >
            <X className="h-4 w-4" />
          </button>
          <div className="absolute bottom-0 left-0 p-5 sm:p-6">
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((t) => (
                <span
                  key={t}
                  className="rounded border border-ink-700/80 bg-ink-900/70 px-2 py-0.5 font-mono text-[10px] text-ink-200 backdrop-blur"
                >
                  {t}
                </span>
              ))}
            </div>
            <h3 className="mt-2 text-xl font-semibold text-ink-50 sm:text-2xl">
              {project.name}
            </h3>
          </div>
        </div>

        {/* Body */}
        <div className="max-h-[60vh] overflow-y-auto p-5 sm:p-6">
          <p className="text-sm leading-relaxed text-ink-200">{project.tagline}</p>

          <Field label="Контекст" icon={CheckCircle2}>
            {project.context}
          </Field>

          <Field label="Проблема" icon={AlertTriangle}>
            {project.problem}
          </Field>

          <Field label="Моя роль и ответственность">
            {project.responsibilities}
          </Field>

          <Field label="Архитектурные решения">
            {project.architecture}
          </Field>

          {/* Features */}
          <div className="mt-6">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-ink-400">
              Основные функции
            </h4>
            <ul className="mt-3 space-y-2">
              {project.features.map((f) => (
                <li key={f} className="flex gap-2.5 text-sm leading-relaxed text-ink-200">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent-400" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Challenges */}
          <div className="mt-6">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-ink-400">
              Технические сложности и решения
            </h4>
            <div className="mt-3 space-y-3">
              {project.challenges.map((c, i) => (
                <div key={i} className="rounded-lg border border-ink-700/60 bg-ink-850/60 p-4">
                  <p className="flex gap-2 text-sm leading-relaxed text-ink-200">
                    <Wrench className="mt-0.5 h-4 w-4 shrink-0 text-ink-400" />
                    <span>
                      <span className="text-ink-400">Задача:</span> {c.problem}
                    </span>
                  </p>
                  <p className="mt-2 flex gap-2 text-sm leading-relaxed text-ink-200">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent-400" />
                    <span>
                      <span className="text-ink-400">Решение:</span> {c.solution}
                    </span>
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Stack */}
          <div className="mt-6">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-ink-400">
              Технологический стек
            </h4>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.stack.map((t) => (
                <span
                  key={t}
                  className="rounded-md border border-ink-700 bg-ink-850 px-2.5 py-1 font-mono text-xs text-ink-200"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Outcome */}
          <Field label="Результаты работы" icon={CheckCircle2} last>
            {project.outcome}
          </Field>
        </div>

        {/* Footer actions */}
        <div className="flex flex-wrap gap-3 border-t border-ink-800 p-5 sm:px-6">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              Открыть продукт
              <ArrowUpRight className="h-4 w-4" />
            </a>
          )}
          {project.repoUrl && (
            <a href={project.repoUrl} target="_blank" rel="noreferrer" className="btn-ghost">
              <GitBranch className="h-4 w-4" />
              Репозиторий
            </a>
          )}
          <button onClick={onClose} className="btn-ghost ml-auto">
            Закрыть
          </button>
        </div>
      </div>
    </div>
  );
}

function Field({
  label,
  children,
  icon: Icon,
  last,
}: {
  label: string;
  children: React.ReactNode;
  icon?: React.ComponentType<{ className?: string }>;
  last?: boolean;
}) {
  return (
    <div className={`mt-6 ${last ? '' : ''}`}>
      <h4 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-ink-400">
        {Icon && <Icon className="h-3.5 w-3.5" />}
        {label}
      </h4>
      <p className="mt-2.5 text-sm leading-relaxed text-ink-200">{children}</p>
    </div>
  );
}

/** Deterministic gradient cover so each project gets a distinct visual without external images. */
function ProjectCover({ seed, large }: { seed: string; large?: boolean }) {
  // Derive two hues from the seed string
  let hash = 0;
  for (let i = 0; i < seed.length; i++) hash = (hash * 31 + seed.charCodeAt(i)) >>> 0;
  const h1 = hash % 360;
  const h2 = (h1 + 40) % 360;

  return (
    <div
      className="absolute inset-0"
      style={{
        background: `radial-gradient(120% 120% at 20% 20%, hsl(${h1} 60% 22%) 0%, transparent 55%), radial-gradient(120% 120% at 80% 80%, hsl(${h2} 55% 18%) 0%, transparent 55%), #0e1117`,
      }}
    >
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'linear-gradient(to right, #2d3344 1px, transparent 1px), linear-gradient(to bottom, #2d3344 1px, transparent 1px)',
          backgroundSize: large ? '32px 32px' : '24px 24px',
        }}
      />
      <div
        className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40 blur-2xl"
        style={{ background: `hsl(${h1} 70% 45%)` }}
      />
    </div>
  );
}
