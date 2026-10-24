'use client'

import { useEffect, useState } from 'react';
import { Menu, X, Terminal } from 'lucide-react';
import { useScrollSpy } from '../hooks/useScrollSpy';

const NAV_ITEMS = [
  { id: 'about', label: 'Обо мне' },
  { id: 'stack', label: 'Стек' },
  { id: 'experience', label: 'Опыт' },
  { id: 'projects', label: 'Проекты' },
  { id: 'contact', label: 'Контакты' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const active = useScrollSpy(NAV_ITEMS.map((n) => n.id));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const go = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-smooth ${
        scrolled
          ? 'border-b border-ink-800/80 bg-ink-950/80 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="container-px mx-auto max-w-[1600px] flex h-16 max-w-8xl items-center justify-between md:h-20">
        <button
          onClick={() => go('hero')}
          className="group flex items-center gap-2.5"
          aria-label="В начало страницы"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-ink-700 bg-ink-850 text-accent-400 transition-colors group-hover:border-accent-500/60 group-hover:text-accent-300">
            <Terminal className="h-5 w-5" />
          </span>
          <span className="font-mono text-sm font-medium text-ink-100">
            emyxar<span className="text-accent-400">.</span>portfolio
          </span>
        </button>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 md:flex">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => go(item.id)}
                className={`relative rounded-md px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                  active === item.id ? 'text-ink-50' : 'text-ink-300 hover:text-ink-100'
                }`}
              >
                {item.label}
                <span
                  className={`absolute inset-x-3 -bottom-px h-px bg-accent-400 transition-all duration-300 ease-smooth ${
                    active === item.id ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
                  }`}
                />
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <button onClick={() => go('contact')} className="btn-primary">
            Связаться
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-ink-700 bg-ink-850 text-ink-100 md:hidden"
          aria-label={menuOpen ? 'Закрыть меню' : 'Открыть меню'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden">
          <div className="container-px mx-auto max-w-8xl pb-6">
            <ul className="flex flex-col gap-1 rounded-xl border border-ink-800 bg-ink-900/95 p-3 backdrop-blur-xl">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => go(item.id)}
                    className={`w-full rounded-lg px-4 py-3 text-left text-sm font-medium transition-colors ${
                      active === item.id
                        ? 'bg-ink-800 text-ink-50'
                        : 'text-ink-200 hover:bg-ink-800/60 hover:text-ink-50'
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
              <li className="mt-1">
                <button onClick={() => go('contact')} className="btn-primary w-full">
                  Связаться
                </button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}
