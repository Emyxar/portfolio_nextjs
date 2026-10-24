"use client";

import { ArrowUp, Terminal } from 'lucide-react';
import { profile } from '../data/portfolio';
import { CurrentYear } from "./CurrentYear";

export function Footer() {

  return (
    <footer className="border-t border-ink-800/80 bg-ink-950">
      <div className="container-px mx-auto max-w-[1600px] py-10">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-ink-700 bg-ink-850 text-accent-400">
              <Terminal className="h-4 w-4" />
            </span>
            <div>
              <p className="text-sm font-medium text-ink-100">{profile.name}</p>
              <p className="text-xs text-ink-400">{profile.role}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {profile.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-ink-700 bg-ink-850 text-ink-400 transition-colors hover:border-ink-600 hover:text-ink-50"
              >
                <s.icon className="h-4 w-4" />
              </a>
            ))}
          </div>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group inline-flex items-center gap-2 rounded-lg border border-ink-700 bg-ink-850 px-3.5 py-2 text-xs font-medium text-ink-300 transition-all hover:border-ink-600 hover:text-ink-50"
            aria-label="В начало страницы"
          >
            Наверх
            <ArrowUp className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5" />
          </button>
        </div>

        <div className="divider mt-8" />

        <p className="mt-6 text-center text-xs text-ink-500 sm:text-left">
          © <CurrentYear /> {profile.name}. Спроектировано и разработано вручную.
        </p>
      </div>
    </footer>
  );
}
