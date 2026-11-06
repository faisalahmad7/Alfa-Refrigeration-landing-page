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
        <div className="container about-vm">
          <Reveal className="vm-row">
            <h2 className="vm-title">Our Vision</h2>
            <div className="vm-content">
              <p className="vm-lead">
                To be Pune’s most trusted name in refrigeration and air-conditioning, keeping every
                business we serve cool, running and worry-free. For us, trust comes first, and we
                earn it with every job we do.
              </p>
            </div>
          </Reveal>

          <Reveal className="vm-row" delay={60}>
            <h2 className="vm-title">Our Mission</h2>
            <div className="vm-content">
              <p>
                Alfa Refrigeration began in 1994 with a simple promise: do honest work and take care
                of our customers. Our experienced technicians use only genuine parts and aim to
                close every complaint on the same day, so your work never stops for long. We want to
                keep growing with our customers’ support and reach more areas, while staying the
                same dependable team you have always known.
              </p>
            </div>
          </Reveal>

          <Reveal as="blockquote" className="vm-quote" delay={90}>
            “Genuine work. Reliable service. Trusted since 1994.”
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
