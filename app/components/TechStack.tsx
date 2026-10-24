import { Layers } from 'lucide-react';
import { techCategories } from '../data/portfolio';

export function TechStack() {
  return (
    <section id="stack" className="section-y relative">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-[10%] top-1/3 h-[300px] w-[300px] rounded-full bg-accent-500/[0.06] blur-[120px]" />
      </div>

      <div className="container-px mx-auto max-w-[1600px]">
        <div className="reveal">
          <p className="eyebrow mb-4">
            <Layers className="h-3.5 w-3.5" />
            Технологический стек
          </p>
          <h2 className="section-title max-w-2xl">Инструменты, которыми пользуюсь каждый день</h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-300">
            Стек сформирован реальными проектами и задачами. Уровень владения
            подтверждается опытом использования в коммерческой разработке.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {techCategories.map((cat, idx) => (
            <div
              key={cat.id}
              className="reveal card card-hover group p-5"
              data-reveal-delay={`${idx * 70}`}
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-ink-700 bg-ink-900 text-accent-400 transition-colors group-hover:border-accent-500/50 group-hover:text-accent-300">
                  <cat.icon className="h-5 w-5" />
                </span>
                <h3 className="text-sm font-semibold text-ink-50">{cat.label}</h3>
              </div>

              <ul className="mt-5 space-y-3.5">
                {cat.items.map((item) => (
                  <li key={item.name}>
                    <p className="text-sm font-medium text-ink-100">{item.name}</p>
                    {item.note && (
                      <p className="mt-0.5 text-xs leading-relaxed text-ink-400">{item.note}</p>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
