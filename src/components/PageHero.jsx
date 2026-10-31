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
    const ctx = gsap.context(() => {
      gsap.timeline({ defaults: { ease: 'power3.out' } })
        .fromTo('.page-hero-kicker', { y: 18, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: .55 })
        .fromTo('.crumbs', { y: 12, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: .5 }, '-=.3')
        .fromTo('.page-hero h1', { y: 46, autoAlpha: 0, filter: 'blur(8px)' }, { y: 0, autoAlpha: 1, filter: 'blur(0)', duration: .9 }, '-=.15')
        .fromTo('.page-lead', { y: 22, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: .65 }, '-=.42')
        .fromTo('.page-hero-art-wrap', { x: 48, autoAlpha: 0, scale: .93 }, { x: 0, autoAlpha: 1, scale: 1, duration: 1 }, '-=.65');
    }, el);
    return () => ctx.revert();
  }, []);
  return <section className="page-hero" ref={root}>
    <div className="page-hero-gridlines" aria-hidden="true" />
    <div className="container page-hero-grid">
      <div className="page-hero-copy">
        <p className="page-hero-kicker"><span className="status-dot" /> ALFA REFRIGERATION <span>/</span> PUNE, INDIA</p>
        <nav aria-label="Breadcrumb" className="crumbs"><Link to="/">Home</Link><span aria-hidden="true">/</span><span aria-current="page">{crumb ?? title}</span></nav>
        <h1>{title}</h1>{lead && <p className="page-lead">{lead}</p>}
        <div className="page-hero-meta"><span>30+ YEARS OF EXPERIENCE</span><span>SALES · INSTALLATION · SERVICE</span></div>
      </div>
      {art && <div className="page-hero-art-wrap">
        <div className="page-hero-orbit page-hero-orbit--one" /><div className="page-hero-orbit page-hero-orbit--two" />
        <div className="page-hero-art"><ProductArt name={art} label={artLabel} /></div>
        <span className="page-hero-art-stamp">{PAGE_INDEX[crumb] ?? '00'} <i /> EQUIPMENT / STUDY</span>
      </div>}
    </div>
    <div className="page-hero-bottom"><span>COMMERCIAL & RESIDENTIAL</span><span>BLUE STAR REFRIGERATION SPECIALISTS</span></div>
  </section>;
}
