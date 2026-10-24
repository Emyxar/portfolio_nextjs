'use client'

import { useState } from 'react';
import { Mail, Copy, Check, MessageSquare, ArrowUpRight } from 'lucide-react';
import { profile } from '../data/portfolio';

const EMAIL = 'evgeny.mell@yandex.ru';

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard may be unavailable; fall back silently
    }
  };

  return (
    <section id="contact" className="section-y relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[360px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-500/[0.08] blur-[120px]" />
      </div>

      <div className="container-px mx-auto max-w-[1600px]">
        <div className="reveal card overflow-hidden">
          <div className="grid gap-0 md:grid-cols-2">
            {/* Left: pitch */}
            <div className="p-8 sm:p-10 md:p-12">
              <p className="eyebrow mb-4">
                <MessageSquare className="h-3.5 w-3.5" />
                Контакты
              </p>
              <h2 className="text-3xl font-semibold text-ink-50 sm:text-4xl">
                Давайте обсудим ваш проект
              </h2>
              <p className="mt-4 max-w-md text-base leading-relaxed text-ink-300">
                Открыт к предложениям о работе, консультациях и интересных
                задачах. Отвечаю в течение пары дней.
              </p>

              {/* Email actions */}
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={`mailto:${EMAIL}`} className="btn-primary">
                  <Mail className="h-4 w-4" />
                  Написать письмо
                </a>
                <button onClick={copyEmail} className="btn-ghost">
                  {copied ? (
                    <>
                      <Check className="h-4 w-4 text-accent-400" />
                      Скопировано
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4" />
                      Копировать email
                    </>
                  )}
                </button>
              </div>

              {/* Email display */}
              <p className="mt-6 font-mono text-sm text-ink-400">{EMAIL}</p>
            </div>

            {/* Right: socials */}
            <div className="border-t border-ink-800 bg-ink-900/40 p-8 sm:p-10 md:border-l md:border-t-0 md:p-12">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-ink-200">
                Профессиональные профили
              </h3>
              <ul className="mt-5 space-y-3">
                {profile.socials.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center justify-between rounded-lg border border-ink-700/60 bg-ink-850/60 p-4 transition-all duration-200 hover:border-ink-600 hover:bg-ink-800"
                    >
                      <span className="flex items-center gap-3">
                        <span className="flex h-9 w-9 items-center justify-center rounded-md border border-ink-700 bg-ink-900 text-ink-300 transition-colors group-hover:text-accent-300">
                          <s.icon className="h-[18px] w-[18px]" />
                        </span>
                        <span className="text-sm font-medium text-ink-100">{s.label}</span>
                      </span>
                      <ArrowUpRight className="h-4 w-4 text-ink-500 transition-all group-hover:text-accent-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
