import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const HOME_STOPS = [
  { label: 'Home', selector: '.hero--editorial' },
  { label: 'Products', selector: '.product-section' },
  { label: 'About', selector: '.experience' },
  { label: 'Services', selector: '.service-overview' },
  { label: 'Reviews', selector: '.reviews' },
];

export default function SectionDotNav() {
  const { pathname } = useLocation();
  const [items, setItems] = useState([]);
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    if (pathname !== '/') {
      setItems([]);
      setActiveId('');
      return undefined;
    }

    const main = document.getElementById('main');
    if (!main) {
      setItems([]);
      return undefined;
    }

    const stops = HOME_STOPS
      .map((stop) => ({ ...stop, element: main.querySelector(stop.selector) }))
      .filter((stop) => stop.element);

    setItems(stops);
    setActiveId(stops[0]?.label || '');

    let frame = 0;
    const updateActive = () => {
      frame = 0;
      const marker = window.innerHeight * 0.46;
      let active = stops[0];

      for (const stop of stops) {
        if (stop.element.getBoundingClientRect().top <= marker) active = stop;
        else break;
      }

      if (active) setActiveId(active.label);
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(updateActive);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [pathname]);

  const goToSection = (item) => {
    item.element.scrollIntoView({
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
      block: 'start',
    });
    setActiveId(item.label);
  };

  if (pathname !== '/' || items.length < 2) return null;

  return (
    <nav className="section-dot-nav" aria-label="Homepage sections">
      <ol>
        {items.map((item) => (
          <li className={activeId === item.label ? 'section-dot-item is-active' : 'section-dot-item'} key={item.label}>
            <button
              type="button"
              className="section-dot"
              aria-label={`Go to ${item.label}`}
              aria-current={activeId === item.label ? 'location' : undefined}
              onClick={() => goToSection(item)}
            />
            <span className="section-dot-label" aria-hidden="true">{item.label}</span>
          </li>
        ))}
      </ol>
    </nav>
  );
}
