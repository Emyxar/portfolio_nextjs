import { Zap } from 'lucide-react';
import { skillGroups } from '../data/portfolio';

export function Skills() {
  return (
    <section id="skills" className="section-y relative">
      <div className="container-px mx-auto max-w-[1600px]">
        <div className="reveal">
          <p className="eyebrow mb-4">
            <Zap className="h-3.5 w-3.5" />
            Дополнительные навыки
          </p>
          <h2 className="section-title max-w-2xl">Как я работаю над продуктом</h2>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {skillGroups.map((group, idx) => (
            <div
              key={group.label}
              className="reveal card card-hover p-6"
              data-reveal-delay={`${idx * 90}`}
            >
              <h3 className="text-sm font-semibold text-ink-50">{group.label}</h3>
              <ul className="mt-4 space-y-3">
                {group.items.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-ink-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent-500" />
                    {item}
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
