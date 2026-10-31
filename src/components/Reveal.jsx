import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import FrostFrame from './FrostFrame.jsx';

gsap.registerPlugin(ScrollTrigger);

const FROSTABLE = /(?:^|\s)(?:tile|segment|svc|svc-big|contact-primary|contact-card|form-card|review|lesson|range-item|cta-banner)(?:\s|$)/;

export default function Reveal({ as: Tag = 'div', delay = 0, className = '', children, ...rest }) {
  const ref = useRef(null);
  const hasFrost = FROSTABLE.test(className);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      gsap.set(el, { autoAlpha: 1, y: 0, clearProps: 'filter,transform' });
      return undefined;
    }

    const context = gsap.context(() => {
      gsap.fromTo(
        el,
        { autoAlpha: 0, y: 28, filter: 'blur(5px)' },
        {
          autoAlpha: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 0.9,
          delay: Math.max(0, delay) / 1000,
          ease: 'power3.out',
          overwrite: 'auto',
          scrollTrigger: {
            trigger: el,
            start: 'top 89%',
            once: true,
          },
        },
      );
    }, el);

    return () => context.revert();
  }, [delay]);

  return (
    <Tag ref={ref} className={`reveal ${className}${hasFrost ? ' frost-card' : ''}`} {...rest}>
      {hasFrost && <FrostFrame />}
      {children}
    </Tag>
  );
}
