import { useEffect, useState } from 'react';

/**
 * Tracks the section currently in view to highlight the active nav link.
 * Pass the list of section ids (without #).
 */
export function useScrollSpy(sectionIds: string[], offset = 120) {
  const [active, setActive] = useState<string>(sectionIds[0] ?? '');

  useEffect(() => {
    const handler = () => {
      const scrollY = window.scrollY + offset;
      let current = sectionIds[0] ?? '';
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollY) {
          current = id;
        }
      }
      // Snap to last section when near the bottom of the page
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 4) {
        current = sectionIds[sectionIds.length - 1] ?? current;
      }
      setActive(current);
    };

    handler();
    window.addEventListener('scroll', handler, { passive: true });
    window.addEventListener('resize', handler);
    return () => {
      window.removeEventListener('scroll', handler);
      window.removeEventListener('resize', handler);
    };
  }, [sectionIds, offset]);

  return active;
}
