import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function slugify(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 42);
}

function getLabel(section, index) {
  const heading = section.querySelector('.section-title, h1, h2, h3');
  const value = heading?.textContent?.replace(/\s+/g, ' ').trim();
  if (value) return value.length > 48 ? `${value.slice(0, 45).trim()}…` : value;
  return section.getAttribute('aria-label') || `Section ${index + 1}`;
}

export default function SectionDotNav() {
  const { pathname } = useLocation();
  const [items, setItems] = useState([]);
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const main = document.getElementById('main');
    if (!main) {
      setItems([]);
      return undefined;
    }

    const sections = Array.from(main.children).filter((element) => element.matches('section'));
    const routeKey = slugify(pathname || 'page');
    const nextItems = sections.map((section, index) => {
      if (!section.id) section.id = `section-${routeKey}-${index + 1}`;
      section.classList.add('section-dot-target');
      return { id: section.id, label: getLabel(section, index), element: section };
    });

    setItems(nextItems);
    setActiveId(nextItems[0]?.id || '');

    let frame = 0;
    const updateActive = () => {
      frame = 0;
      const marker = window.innerHeight * 0.48;
      let closest = nextItems[0];
      let closestDistance = Number.POSITIVE_INFINITY;

      nextItems.forEach((item) => {
        const bounds = item.element.getBoundingClientRect();
        const distance = bounds.top > marker
          ? bounds.top - marker
          : bounds.bottom < marker
            ? marker - bounds.bottom
            : 0;
        if (distance < closestDistance) {
          closest = item;
          closestDistance = distance;
        }
      });

      if (closest) setActiveId(closest.id);
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
      sections.forEach((section) => section.classList.remove('section-dot-target'));
    };
  }, [pathname]);

  const goToSection = (id) => {
    const target = document.getElementById(id);
    if (!target) return;
    setActiveId(id);
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    target.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth', block: 'start' });
  };

  if (items.length < 2) return null;

  return (
    <nav className="section-dot-nav" aria-label="Page section navigation">
      <ol>
        {items.map((item) => (
          <li className={activeId === item.id ? 'section-dot-item is-active' : 'section-dot-item'} key={item.id}>
            <button
              type="button"
              className="section-dot"
              aria-label={`Go to ${item.label}`}
              aria-current={activeId === item.id ? 'location' : undefined}
              onClick={() => goToSection(item.id)}
            />
            <span className="section-dot-label">{item.label}</span>
          </li>
        ))}
      </ol>
    </nav>
  );
}
