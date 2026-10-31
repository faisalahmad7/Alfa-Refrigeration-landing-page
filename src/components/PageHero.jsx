import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import ProductArt from './ProductArt.jsx';

const PAGE_INDEX = { About: '01', Services: '02', Contact: '03' };

export default function PageHero({ title, lead, crumb, art, artLabel }) {
  const root = useRef(null);

  useEffect(() => {
    const el = root.current;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    const context = gsap.context(() => {
      const intro = gsap.timeline({ defaults: { ease: 'power3.out' } });
      intro
        .fromTo('.page-hero-kicker', { autoAlpha: 0, y: 18 }, { autoAlpha: 1, y: 0, duration: .65 })
        .fromTo('.crumbs', { autoAlpha: 0, y: 12 }, { autoAlpha: 1, y: 0, duration: .5 }, '-=.35')
        .fromTo('.page-hero h1', { autoAlpha: 0, y: 40, filter: 'blur(7px)' }, { autoAlpha: 1, y: 0, filter: 'blur(0px)', duration: .9 }, '-=.2')
        .fromTo('.page-lead', { autoAlpha: 0, y: 20 }, { autoAlpha: 1, y: 0, duration: .7 }, '-=.45')
        .fromTo('.page-hero-art-wrap', { autoAlpha: 0, x: 32, scale: .94 }, { autoAlpha: 1, x: 0, scale: 1, duration: 1 }, '-=.65');

      gsap.to('.page-hero-orbit--two', {
        rotate: 360,
        duration: 50,
        ease: 'none',
        repeat: -1,
        transformOrigin: '50% 50%',
      });
    }, el);

    return () => context.revert();
  }, []);

  return (
    <section className="page-hero page-hero--editorial" ref={root}>
      <div className="page-hero-gridlines" aria-hidden="true" />
      <div className="container page-hero-grid">
        <div className="page-hero-copy">
          <p className="page-hero-kicker"><span className="status-dot" /> ALFA REFRIGERATION <b>/</b> PUNE, INDIA</p>
          <nav aria-label="Breadcrumb" className="crumbs">
            <Link to="/">Home</Link><span aria-hidden="true">/</span><span aria-current="page">{crumb ?? title}</span>
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
            <div className="page-hero-art"><ProductArt name={art} label={artLabel} /></div>
            <span className="page-hero-art-stamp">{PAGE_INDEX[crumb] ?? '00'} <i /> EQUIPMENT / STUDY</span>
          </div>
        )}
      </div>
      <div className="page-hero-bottom"><span>COMMERCIAL &amp; RESIDENTIAL</span><span>BLUE STAR REFRIGERATION SPECIALISTS</span></div>
    </section>
  );
}
