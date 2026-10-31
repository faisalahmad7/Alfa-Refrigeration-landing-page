import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import ProductArt from './ProductArt.jsx';

const PAGE_INDEX = { About: '01', Services: '02', Contact: '03' };

export default function PageHero({ title, lead, crumb, art, artLabel }) {
  const root = useRef(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return undefined;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    const context = gsap.context(() => {
      const timeline = gsap.timeline({ defaults: { ease: 'power3.out' } });
      timeline
        .fromTo('.page-hero-kicker', { y: 18, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.65 })
        .fromTo('.crumbs', { y: 12, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.55 }, '-=0.35')
        .fromTo('.page-hero h1', { y: 44, autoAlpha: 0, filter: 'blur(8px)' }, { y: 0, autoAlpha: 1, filter: 'blur(0px)', duration: 0.95 }, '-=0.2')
        .fromTo('.page-lead', { y: 22, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.7 }, '-=0.45')
        .fromTo('.page-hero-art-wrap', { x: 42, autoAlpha: 0, scale: 0.94 }, { x: 0, autoAlpha: 1, scale: 1, duration: 1.05 }, '-=0.75');
    }, el);

    return () => context.revert();
  }, []);

  return (
    <section className="page-hero" ref={root}>
      <div className="page-hero-gridlines" aria-hidden="true" />
      <div className="container page-hero-grid">
        <div className="page-hero-copy">
          <p className="page-hero-kicker"><span className="status-dot" /> ALFA REFRIGERATION <span>/</span> PUNE, INDIA</p>
          <nav aria-label="Breadcrumb" className="crumbs">
            <Link to="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{crumb ?? title}</span>
          </nav>
          <h1>{title}</h1>
          {lead && <p className="page-lead">{lead}</p>}
          <div className="page-hero-meta">
            <span>30+ YEARS OF EXPERIENCE</span>
            <span>SALES · INSTALLATION · SERVICE</span>
          </div>
        </div>
        {art && (
          <div className="page-hero-art-wrap">
            <div className="page-hero-orbit page-hero-orbit--one" />
            <div className="page-hero-orbit page-hero-orbit--two" />
            <div className="page-hero-art">
              <ProductArt name={art} label={artLabel} />
            </div>
            <span className="page-hero-art-stamp">{PAGE_INDEX[crumb] ?? '00'} <i /> EQUIPMENT / STUDY</span>
          </div>
        )}
      </div>
      <div className="page-hero-bottom"><span>COMMERCIAL & RESIDENTIAL</span><span>BLUE STAR REFRIGERATION SPECIALISTS</span></div>
    </section>
  );
}
