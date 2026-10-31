import { useEffect } from 'react';

// Very light scroll parallax: sets --py (px) on the element. Off for reduced motion and small screens.
export default function useParallax(ref, factor = 0.12) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
    const wide = window.matchMedia('(min-width: 900px)');
    let raf = 0;
    const update = () => {
      raf = 0;
      el.style.setProperty('--py', `${Math.min(window.scrollY, 700) * factor}px`);
    };
    const onScroll = () => {
      if (reduce.matches || !wide.matches || raf) return;
      raf = requestAnimationFrame(update);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [ref, factor]);
}
