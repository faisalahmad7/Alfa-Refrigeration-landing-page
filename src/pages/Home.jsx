import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { LuArrowRight } from 'react-icons/lu';
import { CallButton, WhatsAppButton } from '../components/ActionButtons.jsx';
import CTABanner from '../components/CTABanner.jsx';
import HowWeWork from '../components/HowWeWork.jsx';
import ProductArt, { ShowroomScene } from '../components/ProductArt.jsx';
import Reveal from '../components/Reveal.jsx';
import Reviews from '../components/Reviews.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import ServiceIcon from '../components/ServiceIcon.jsx';
import useParallax from '../components/useParallax.js';
import { business } from '../data/business.js';
import { equipment, experienceLessons, segments, serviceGroups } from '../data/services.js';
import { usePageMeta } from '../lib/usePageMeta.js';
import { WA_GENERAL } from '../lib/contact.js';

const TRUST = [
  { k: '30+ years', v: 'dealing with and servicing refrigeration products' },
  { k: 'Residential and commercial', v: 'homes, shops, offices and kitchens' },
  { k: 'Blue Star specialists', v: 'we specialise in all Blue Star refrigeration products' },
  { k: 'Sales and service', v: 'equipment, installation, maintenance and onsite support' },
];

export default function Home() {
  usePageMeta(
    'Alfa Refrigeration Pune | 30+ Years in Refrigeration Sales & Service',
    'Alfa Refrigeration and Air Conditioner, New Nana Peth, Pune. 30+ years with water coolers, deep freezers, ice machines, visi coolers and Blue Star refrigeration products. Sales, installation and service.',
  );
  const sceneRef = useRef(null);
  useParallax(sceneRef, 0.1);

  const [lead, ...rest] = equipment;

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-scene" ref={sceneRef} aria-hidden="false">
          <ShowroomScene />
          <div className="hero-scene-fade" aria-hidden="true" />
        </div>
        <div className="container hero-inner">
          <div className="hero-copy">
            <h1>
              <span className="line"><span className="line-in">Three decades of</span></span>
              <span className="line"><span className="line-in" style={{ '--i': 1 }}>refrigeration</span></span>
              <span className="line"><span className="line-in" style={{ '--i': 2 }}>expertise.</span></span>
            </h1>
            <p className="hero-lead rise" style={{ '--i': 3 }}>
              Alfa Refrigeration and Air Conditioner sells and services commercial and residential
              refrigeration in Pune, from water coolers and deep freezers to ice machines and visi
              coolers. We specialise in Blue Star refrigeration products.
            </p>
            <div className="hero-actions rise" style={{ '--i': 4 }}>
              <CallButton className="btn btn-light" />
              <WhatsAppButton message={WA_GENERAL} className="btn btn-ghost-light" label="WhatsApp us" />
            </div>
            <p className="hero-motto rise" style={{ '--i': 5 }}>{business.tagline}</p>
          </div>

          <div className="hero-badge rise" style={{ '--i': 3 }}>
            <span className="hero-badge-num">30+</span>
            <span className="hero-badge-text">years dealing with and servicing refrigeration products</span>
          </div>
        </div>
      </section>

      {/* TRUST FACTS */}
      <section className="trust" aria-label="Alfa Refrigeration at a glance">
        <div className="container">
          <ul className="trust-row">
            {TRUST.map((t) => (
              <li key={t.k}>
                <strong>{t.k}</strong>
                <span>{t.v}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="What we deal in"
            title="Refrigeration equipment for homes and businesses"
            lead="From a household water cooler to a commercial ice machine, we sell, install and service the equipment we know best."
          />
          <div className="bento">
            <Reveal as="article" className="tile tile--lead">
              <ProductArt name={lead.art} />
              <div className="tile-copy">
                <h3>{lead.title}</h3>
                <p>{lead.short}</p>
                <Link to={`/services#${lead.id}`} className="text-link">
                  About {lead.title.toLowerCase()} <LuArrowRight size={16} aria-hidden="true" />
                </Link>
              </div>
            </Reveal>
            {rest.slice(0, 6).map((item, i) => (
              <Reveal as="article" className="tile" delay={(i % 3) * 60} key={item.id}>
                <ProductArt name={item.art} />
                <div className="tile-copy">
                  <h3>{item.title}</h3>
                  <p>{item.short}</p>
                  <Link to={`/services#${item.id}`} className="text-link">
                    Details <LuArrowRight size={16} aria-hidden="true" />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="section section--ink experience">
        <div className="container experience-grid">
          <Reveal className="experience-num" aria-hidden="true">
            <span>30+</span>
            <small>years</small>
          </Reveal>
          <div className="experience-copy">
            <SectionHeader
              eyebrow="Our history"
              title="Decades of dealing with and servicing refrigeration products"
              light
            />
            <p className="experience-intro">
              Alfa has spent more than thirty years working with the equipment its customers depend on.
              That experience shapes how we advise, how we service and how we look after people long
              after a sale.
            </p>
            <ul className="lessons">
              {experienceLessons.map((l) => (
                <li key={l.title}>
                  <h3>{l.title}</h3>
                  <p>{l.text}</p>
                </li>
              ))}
            </ul>
            <Link to="/about" className="btn btn-ghost-light">
              About Alfa Refrigeration <LuArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* RESIDENTIAL / COMMERCIAL */}
      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Who we serve"
            title="Residential and commercial customers"
            lead="The same experienced attention, whether it is one cooler at home or the cold storage that runs a business."
          />
          <div className="segments">
            {segments.map((s, i) => (
              <Reveal as="article" className={`segment segment--${s.id}`} delay={i * 80} key={s.id}>
                <span className="icon-tile"><ServiceIcon name={s.icon} /></span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <ul>
                  {s.items.map((it) => (<li key={it}>{it}</li>))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* BLUE STAR */}
      <section className="section section--tint">
        <div className="container bluestar">
          <Reveal className="bluestar-copy">
            <SectionHeader
              eyebrow="Blue Star specialisation"
              title="We specialise in all refrigeration products of Blue Star"
            />
            <p>
              Alfa specialises in Blue Star refrigeration products, and has spent decades dealing with and
              servicing refrigeration equipment. If you are choosing, running or repairing Blue Star
              equipment, that is a conversation we are well placed to have.
            </p>
            <Link to="/services" className="btn btn-primary">
              See products and services <LuArrowRight size={18} aria-hidden="true" />
            </Link>
          </Reveal>
          <Reveal className="bluestar-art" delay={80}>
            <ProductArt name="cooler" />
            <ProductArt name="visi" />
            <ProductArt name="dispenser" />
          </Reveal>
        </div>
      </section>

      {/* SERVICE */}
      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Service and support"
            title="Set up properly, then supported for the long run."
          />
          <div className="svc-row">
            {serviceGroups.map((s, i) => (
              <Reveal as="article" className="svc" delay={i * 70} key={s.id}>
                <span className="icon-tile"><ServiceIcon name={s.icon} /></span>
                <h3>{s.title}</h3>
                <p>{s.lead}</p>
                <Link to={`/services#${s.id}`} className="text-link">
                  Learn more <LuArrowRight size={16} aria-hidden="true" />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <HowWeWork />
      <Reviews />
      <CTABanner />
    </>
  );
}
