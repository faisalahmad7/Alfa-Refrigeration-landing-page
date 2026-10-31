import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { LuArrowRight, LuArrowUpRight } from 'react-icons/lu';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CallButton, WhatsAppButton } from '../components/ActionButtons.jsx';
import CTABanner from '../components/CTABanner.jsx';
import HowWeWork from '../components/HowWeWork.jsx';
import ProductArt, { ShowroomScene } from '../components/ProductArt.jsx';
import Reveal from '../components/Reveal.jsx';
import Reviews from '../components/Reviews.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import ServiceIcon from '../components/ServiceIcon.jsx';
import { business } from '../data/business.js';
import { equipment, experienceLessons, segments, serviceGroups } from '../data/services.js';
import { usePageMeta } from '../lib/usePageMeta.js';
import { WA_GENERAL } from '../lib/contact.js';

gsap.registerPlugin(ScrollTrigger);
const TRUST = [
  { k: '30+ years', v: 'working with refrigeration products' },
  { k: 'Residential + commercial', v: 'homes, shops, offices and kitchens' },
  { k: 'Blue Star specialists', v: 'specialisation across Blue Star refrigeration' },
  { k: 'Sales + service', v: 'equipment, setup, maintenance and onsite support' },
];

export default function Home() {
  usePageMeta('Alfa Refrigeration Pune | 30+ Years in Refrigeration Sales & Service',
    'Alfa Refrigeration and Air Conditioner, New Nana Peth, Pune. 30+ years with water coolers, deep freezers, ice machines, visi coolers and Blue Star refrigeration products. Sales, installation and service.');
  const heroRef = useRef(null);

  useEffect(() => {
    const root = heroRef.current;
    if (!root || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    const ctx = gsap.context(() => {
      const intro = gsap.timeline({ defaults: { ease: 'power3.out' } });
      intro.fromTo('.hero-kicker', { y: 22, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: .7 })
        .fromTo('.hero-line', { yPercent: 115, autoAlpha: 0 }, { yPercent: 0, autoAlpha: 1, duration: .95, stagger: .12 }, '-=.2')
        .fromTo('.hero-lead', { y: 24, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: .7 }, '-=.45')
        .fromTo('.hero-actions > *', { y: 18, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: .6, stagger: .1 }, '-=.35')
        .fromTo('.hero-footnote', { y: 14, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: .55 }, '-=.25')
        .fromTo('.hero-proof', { x: 28, autoAlpha: 0 }, { x: 0, autoAlpha: 1, duration: .8 }, '-=.48');
      gsap.to('.hero-scene', { yPercent: -5, ease: 'none', scrollTrigger: { trigger: root, start: 'top top', end: 'bottom top', scrub: 1 } });
      gsap.to('.hero-ghost', { y: -48, ease: 'none', scrollTrigger: { trigger: root, start: 'top top', end: 'bottom top', scrub: 1.2 } });

      gsap.fromTo('.capability-ribbon-shell', { y: 64, autoAlpha: 0, rotateX: 7 }, {
        y: 0, autoAlpha: 1, rotateX: 0, duration: 1.1, ease: 'power3.out',
        scrollTrigger: { trigger: '.capability-ribbon', start: 'top 94%', once: true },
      });

      gsap.utils.toArray('.section-rail').forEach((rail) => {
        gsap.fromTo(rail, { x: -36, autoAlpha: 0 }, {
          x: 0, autoAlpha: 1, duration: .8, ease: 'power3.out',
          scrollTrigger: { trigger: rail, start: 'top 88%', once: true },
        });
      });

      gsap.to('.experience-orbit', {
        rotation: 360, ease: 'none',
        scrollTrigger: { trigger: '.experience', start: 'top bottom', end: 'bottom top', scrub: 1.3 },
      });

      gsap.fromTo('.bluestar-art .product-art', { y: 38, autoAlpha: 0, rotate: -4 }, {
        y: 0, autoAlpha: 1, rotate: 0, duration: 1.1, stagger: .16, ease: 'power3.out',
        scrollTrigger: { trigger: '.bluestar-art', start: 'top 82%', once: true },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  const [lead, ...rest] = equipment;
  return <>
    <section className="hero hero--editorial" ref={heroRef}>
      <div className="hero-ghost" aria-hidden="true">ALFA</div>
      <div className="hero-scene" aria-hidden="true"><ShowroomScene /><div className="hero-scene-fade" /></div>
      <div className="hero-grid-overlay" aria-hidden="true" />
      <div className="hero-vertical-note" aria-hidden="true"><span>COMMERCIAL / RESIDENTIAL</span><i /><span>PUNE · EXPERIENCE 30+</span></div>
      <div className="container hero-inner">
        <div className="hero-copy">
          <p className="hero-kicker"><span className="status-dot" /> REFRIGERATION & AIR CONDITIONING <b>—</b> PUNE</p>
          <h1><span className="hero-line-wrap"><span className="hero-line">Three decades of</span></span><span className="hero-line-wrap"><span className="hero-line">refrigeration</span></span><span className="hero-line-wrap"><span className="hero-line hero-line--accent">expertise.</span></span></h1>
          <p className="hero-lead">Sales, installation and service for commercial and residential refrigeration—backed by more than 30 years of working with the equipment people depend on.</p>
          <div className="hero-actions"><CallButton className="btn btn-light" label="Call Alfa" /><WhatsAppButton message={WA_GENERAL} className="btn btn-ghost-light" label="Start a WhatsApp enquiry" /></div>
          <div className="hero-footnote"><span className="hero-footnote-mark">“</span><p>{business.tagline}</p></div>
        </div>
        <aside className="hero-proof"><span className="hero-proof-label">EXPERIENCE THAT SHOWS</span><div className="hero-proof-number">30<span>+</span></div><p>Years dealing with and servicing refrigeration products</p><div className="hero-proof-rule" /><span className="hero-proof-location">NEW NANA PETH · PUNE</span></aside>
      </div>
      <div className="hero-bottom-bar"><span>01 / ALFA REFRIGERATION</span><span>PRODUCTS <i /> INSTALLATION <i /> SERVICE</span><span>SCROLL TO EXPLORE <b>↓</b></span></div>
    </section>

    <section className="capability-ribbon" aria-label="Alfa equipment and service range">
      <div className="container">
        <div className="capability-ribbon-shell">
          <div className="ribbon-intro">
            <span className="ribbon-index">ALFA / 01</span>
            <p>ONE TEAM. EVERY DEGREE.</p>
            <h2>Cold solutions for the way you work.</h2>
          </div>
          <div className="ribbon-content">
            <div className="ribbon-window">
              <div className="capability-ribbon-track">
                <span>WATER COOLERS</span><i /><span>DEEP FREEZERS</span><i /><span>VISI COOLERS</span><i /><span>ICE MACHINES</span><i /><span>COMMERCIAL REFRIGERATION</span><i /><span>WATER DISPENSERS</span><i /><span>ONSITE SERVICE</span><i />
                <span aria-hidden="true">WATER COOLERS</span><i aria-hidden="true" /><span aria-hidden="true">DEEP FREEZERS</span><i aria-hidden="true" /><span aria-hidden="true">VISI COOLERS</span><i aria-hidden="true" /><span aria-hidden="true">ICE MACHINES</span><i aria-hidden="true" /><span aria-hidden="true">COMMERCIAL REFRIGERATION</span><i aria-hidden="true" /><span aria-hidden="true">WATER DISPENSERS</span><i aria-hidden="true" /><span aria-hidden="true">ONSITE SERVICE</span><i aria-hidden="true" />
              </div>
            </div>
            <div className="ribbon-proof">
              <span><b>30+</b> YEARS OF EXPERIENCE</span>
              <span><b>BLUE STAR</b> REFRIGERATION SPECIALISATION</span>
              <span><b>SALES</b> · SETUP · SUPPORT</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="trust" aria-label="Alfa Refrigeration at a glance"><div className="container">
      <p className="trust-kicker">THE ALFA DIFFERENCE <span>— BUILT ON EXPERIENCE</span></p>
      <ul className="trust-row">{TRUST.map((t,i)=><li key={t.k}><small>{String(i+1).padStart(2,'0')}</small><strong>{t.k}</strong><span>{t.v}</span></li>)}</ul>
    </div></section>

    <section className="section product-section"><div className="container">
      <div className="section-rail"><span>01 / EQUIPMENT</span><span>THE RIGHT COLD FOR THE RIGHT SPACE</span></div>
      <SectionHeader eyebrow="What we deal in" title="Purpose-built cooling for everyday business and life." lead="From a household water cooler to a commercial ice machine, we sell, install and service the equipment we know best." />
      <div className="bento bento--showcase">
        <Reveal as="article" className="tile tile--lead"><span className="tile-index">01 <i /> FEATURED RANGE</span><div className="tile-art-wrap"><ProductArt name={lead.art}/></div><div className="tile-copy"><p className="tile-sector">{lead.sector}</p><h3>{lead.title}</h3><p>{lead.short}</p><Link to={`/services#${lead.id}`} className="text-link">Explore this range <LuArrowUpRight size={17}/></Link></div></Reveal>
        {rest.map((item,i)=><Reveal as="article" className="tile" delay={(i%4)*75} key={item.id}><span className="tile-index">{String(i+2).padStart(2,'0')} <i/> {item.sector}</span><div className="tile-art-wrap"><ProductArt name={item.art}/></div><div className="tile-copy"><h3>{item.title}</h3><p>{item.short}</p><Link to={`/services#${item.id}`} className="text-link">Product details <LuArrowRight size={15}/></Link></div></Reveal>)}
      </div>
    </div></section>

    <section className="section section--ink experience"><div className="container experience-grid">
      <Reveal className="experience-num"><span>30<span className="experience-plus">+</span></span><small>years in refrigeration</small><div className="experience-orbit" aria-hidden="true"/></Reveal>
      <div className="experience-copy"><SectionHeader eyebrow="Experience is the difference" title="Decades of knowing the equipment—and what keeps it working." lead="More than thirty years of working with refrigeration products shapes how Alfa advises, supplies and services." light/>
        <div className="lessons">{experienceLessons.map((l,i)=><Reveal as="article" className="lesson" delay={i*90} key={l.title}><span className="lesson-index">{String(i+1).padStart(2,'0')}</span><div><h3>{l.title}</h3><p>{l.text}</p></div></Reveal>)}</div>
        <Link to="/about" className="btn btn-ghost-light">Discover Alfa <LuArrowRight size={18}/></Link>
      </div>
    </div></section>

    <section className="section customers-section"><div className="container">
      <div className="section-rail"><span>02 / WHO WE SERVE</span><span>ONE STANDARD OF CARE</span></div>
      <SectionHeader eyebrow="Who we serve" title="Different spaces. Different demands. The same attention." lead="The right equipment depends on the space, the workload and the people who rely on it."/>
      <div className="segments">{segments.map((s,i)=><Reveal as="article" className={`segment segment--${s.id}`} delay={i*100} key={s.id}><div className="segment-topline"><span>0{i+1} / CUSTOMER</span><ServiceIcon name={s.icon} size={22}/></div><h3>{s.title}</h3><p>{s.text}</p><ul>{s.items.map(it=><li key={it}>{it}</li>)}</ul><Link to="/services#customers" className="segment-link">Explore support <LuArrowUpRight size={17}/></Link></Reveal>)}</div>
    </div></section>

    <section className="section section--tint blue-star-section"><div className="container bluestar">
      <div className="bluestar-copy"><p className="eyebrow">BLUE STAR SPECIALISATION / 03</p><SectionHeader eyebrow="A focused specialism" title="Blue Star refrigeration is a part of what we know best." lead="Alfa specialises in Blue Star refrigeration products and has decades of experience dealing with and servicing refrigeration equipment." light/><Link to="/services" className="btn btn-light">Explore products and services <LuArrowRight size={18}/></Link></div>
      <div className="bluestar-art"><span className="bluestar-art-label">EQUIPMENT / 01—03</span><ProductArt name="visi"/><ProductArt name="freezer"/><ProductArt name="cooler"/></div>
    </div></section>

    <section className="section service-overview"><div className="container">
      <div className="section-rail"><span>04 / SERVICE & SUPPORT</span><span>FROM SETUP TO AFTERCARE</span></div>
      <SectionHeader eyebrow="Service and support" title="The right setup. Experienced servicing. Support beyond the sale."/>
      <div className="svc-row">{serviceGroups.map((s,i)=><Reveal as="article" className="svc" delay={i*90} key={s.id}><span className="svc-count">0{i+1}</span><span className="icon-tile"><ServiceIcon name={s.icon}/></span><h3>{s.title}</h3><p>{s.lead}</p><Link to={`/services#${s.id}`} className="text-link">Learn more <LuArrowRight size={16}/></Link></Reveal>)}</div>
    </div></section>
    <HowWeWork/><Reviews/><CTABanner/>
  </>;
}
