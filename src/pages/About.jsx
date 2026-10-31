import { LuArrowRight } from 'react-icons/lu';
import { Link } from 'react-router-dom';
import CTABanner from '../components/CTABanner.jsx';
import PageHero from '../components/PageHero.jsx';
import ProductArt from '../components/ProductArt.jsx';
import Reveal from '../components/Reveal.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import ServiceIcon from '../components/ServiceIcon.jsx';
import { business } from '../data/business.js';
import { equipment, experienceLessons, segments } from '../data/services.js';
import { usePageMeta } from '../lib/usePageMeta.js';

export default function About() {
  usePageMeta(
    'About Alfa Refrigeration | 30+ Years of Refrigeration Experience, Pune',
    'Alfa Refrigeration and Air Conditioner has 30+ years of experience dealing with and servicing refrigeration products in Pune, specialising in Blue Star refrigeration. Residential and commercial.',
  );

  return (
    <>
      <PageHero
        title="30+ years of knowing refrigeration inside out."
        crumb="About"
        lead="Alfa Refrigeration and Air Conditioner deals in and services commercial and residential refrigeration in Pune."
        art="fridge"
        artLabel="Illustration of a commercial stainless-steel refrigerator"
      />

      <section className="section">
        <div className="container story">
          <Reveal className="story-lead">
            <p className="big-num" aria-hidden="true">30+</p>
            <SectionHeader eyebrow="Who we are" title="An established refrigeration business, built on service" />
          </Reveal>
          <Reveal className="story-body" delay={60}>
            <p className="drop">
              Alfa Refrigeration deals with commercial and residential refrigeration services and
              products: water coolers, water dispensers, ice cube makers, deep freezers, commercial
              refrigerators, visi coolers and more. We have over 30 years of experience in dealing
              with and servicing refrigeration products.
            </p>
            <p>
              We specialise in all refrigeration products of Blue Star. We also supply split and
              window air conditioners, and look after installation, maintenance and onsite support
              for the equipment we sell and the equipment our customers already own.
            </p>
          </Reveal>
        </div>
      </section>

      {/* MOTTO */}
      <section className="motto-band">
        <div className="container">
          <Reveal as="figure">
            <blockquote>{business.tagline}</blockquote>
            <figcaption>
              The motto behind how we advise, sell and service our customers.
            </figcaption>
          </Reveal>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="What 30+ years gives you"
            title="Experience that benefits you directly"
            lead="Three decades is not just a number on a page. It is the reason a conversation with Alfa is practical, not scripted."
          />
          <div className="lesson-cols">
            {experienceLessons.map((l, i) => (
              <Reveal className="lesson" delay={i * 70} key={l.title}>
                <h3>{l.title}</h3>
                <p>{l.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SPECIALISM */}
      <section className="section section--tint">
        <div className="container">
          <SectionHeader
            eyebrow="What we specialise in"
            title="The range we deal in"
            lead="Residential and commercial refrigeration, with Blue Star at the centre of what we know."
          />
          <ul className="range-grid">
            {equipment.map((e, i) => (
              <Reveal as="li" className="range-item" delay={(i % 4) * 50} key={e.id}>
                <ProductArt name={e.art} />
                <span>{e.title}</span>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* WHO WE SERVE */}
      <section className="section">
        <div className="container">
          <SectionHeader eyebrow="Who we serve" title="People and businesses who depend on cold" />
          <div className="segments">
            {segments.map((s, i) => (
              <Reveal as="article" className={`segment segment--${s.id}`} delay={i * 80} key={s.id}>
                <span className="icon-tile"><ServiceIcon name={s.icon} /></span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </Reveal>
            ))}
          </div>
          <p className="section-foot">
            <Link to="/services" className="text-link">
              Explore products and services <LuArrowRight size={16} aria-hidden="true" />
            </Link>
          </p>
        </div>
      </section>

      <CTABanner title="Talk to the Alfa team" text="Questions about equipment, servicing or installation? Call, message or visit us." />
    </>
  );
}
