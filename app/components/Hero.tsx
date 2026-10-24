"use client";

import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { profile, heroStack } from '../data/portfolio';

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-10%] h-[420px] w-[680px] -translate-x-1/2 rounded-full bg-accent-500/10 blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(to right, #2d3344 1px, transparent 1px), linear-gradient(to bottom, #2d3344 1px, transparent 1px)',
            backgroundSize: '64px 64px',
            maskImage: 'radial-gradient(ellipse 80% 60% at 50% 30%, #000 40%, transparent 80%)',
            WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 30%, #000 40%, transparent 80%)',
          }}
        />
      </div>

      <div className="container-px mx-auto max-w-[1600px]">
        <div className="max-w-3xl">
          {/* Availability badge */}
          {profile.available && (
            <div className="mb-7 inline-flex animate-fade-in items-center gap-2.5 rounded-full border border-ink-700 bg-ink-850/80 px-3.5 py-1.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-accent-400" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-400" />
              </span>
              <span className="text-xs font-medium text-ink-200">Открыт к новым предложениям</span>
            </div>
          )}

          <p className="eyebrow mb-5 animate-fade-up" style={{ animationDelay: '60ms' }}>
            {profile.subtitle}
          </p>

          <h1
            className="animate-fade-up text-4xl font-semibold leading-[1.1] text-ink-50 sm:text-5xl lg:text-6xl"
            style={{ animationDelay: '120ms' }}
          >
            {profile.name}
          </h1>

          <p
            className="mt-3 animate-fade-up font-mono text-lg text-accent-400 sm:text-xl"
            style={{ animationDelay: '180ms' }}
          >
            {profile.role}
          </p>

          <p
            className="mt-6 animate-fade-up max-w-2xl text-base leading-relaxed text-ink-300 sm:text-lg"
            style={{ animationDelay: '240ms' }}
          >
            {profile.intro}
          </p>

          {/* Stack chips */}
          <div
            className="mt-8 flex animate-fade-up flex-wrap gap-2"
            style={{ animationDelay: '300ms' }}
          >
            {heroStack.map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-ink-700 bg-ink-850/60 px-3 py-1.5 font-mono text-xs text-ink-200"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div
            className="mt-10 flex animate-fade-up flex-wrap items-center gap-3"
            style={{ animationDelay: '360ms' }}
          >
            <button
              onClick={() =>
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
              }
              className="btn-primary"
            >
              Посмотреть проекты
              <ArrowUpRight className="h-4 w-4" />
            </button>
            <button
              onClick={() =>
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }
              className="btn-ghost"
            >
              Связаться со мной
            </button>
          </div>

          {/* Socials */}
          <div
            className="mt-10 flex animate-fade-up items-center gap-3"
            style={{ animationDelay: '420ms' }}
          >
            {profile.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-ink-700 bg-ink-850/60 text-ink-300 transition-all duration-200 hover:border-ink-600 hover:text-ink-50 hover:-translate-y-0.5"
              >
                <s.icon className="h-[18px] w-[18px]" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="container-px mx-auto max-w-[1600px]">
        <button
          onClick={() =>
            document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
          }
          className="group inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-ink-400 transition-colors hover:text-ink-200"
        >
          Листайте вниз
          <ArrowDown className="h-4 w-4 animate-float group-hover:text-accent-400" />
        </button>
      </div>
    </section>
  );
}
