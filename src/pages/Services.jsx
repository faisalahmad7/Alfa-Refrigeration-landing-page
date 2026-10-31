import { Link } from 'react-router-dom';
import { LuArrowRight, LuArrowUpRight } from 'react-icons/lu';
import CTABanner from '../components/CTABanner.jsx';
import FrostFrame from '../components/FrostFrame.jsx';
import HowWeWork from '../components/HowWeWork.jsx';
import PageHero from '../components/PageHero.jsx';
import ProductArt from '../components/ProductArt.jsx';
import Reveal from '../components/Reveal.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import ServiceIcon from '../components/ServiceIcon.jsx';
import { equipment, segments, serviceGroups } from '../data/services.js';
import { whatsappLink } from '../lib/contact.js';
import { usePageMeta } from '../lib/usePageMeta.js';

const JUMP = [
  { href: '#equipment', label: 'Equipment' },
  { href: '#installation', label: 'Installation' },
  { href: '#maintenance', label: 'Maintenance and repair' },
  { href: '#onsite', label: 'Onsite support' },
  { href: '#customers', label: 'Residential and commercial' },
];

export default function Services() {
  usePageMeta(
    'Refrigeration Products & Service in Pune | Alfa Refrigeration',
    'Water coolers, dispensers, ice machines, deep freezers, commercial refrigerators, visi coolers and air conditioners in Pune. Installation, maintenance, repair and onsite support from Alfa Refrigeration.',
  );

  return (
    <>
      <PageHero
        title="Equipment, installation and service under one roof."
        crumb="Services"
        lead="Choose the right refrigeration equipment, have it set up properly, and keep it running with servicing and support."
        art="visi"
        artLabel="Illustration of a glass-door visi cooler"
      />

      <nav className="jump" aria-label="On this page">
        <div className="container">
          <ul>
            {JUMP.map((j, index) => (<li key={j.href}><a href={j.href}><span className="jump-number">{String(index + 1).padStart(2, '0')}</span><span className="jump-label">{j.label}</span><LuArrowUpRight size={17} aria-hidden="true" /></a></li>))}
          </ul>
        </div>
      </nav>

      <section className="section" id="equipment">
        <div className="container">
          <SectionHeader
            eyebrow="A. Equipment and products"
            title="What we supply and service"
            lead="We specialise in all refrigeration products of Blue Star. Ask us about any item below."
          />
          <div className="equip-rows">
            {equipment.map((item, i) => (
              <Reveal as="article" id={item.id} className={`equip-row${i % 2 ? ' is-flip' : ''}`} key={item.id}>
                <div className="equip-row-art frost-card">
                  <FrostFrame />
                  <ProductArt name={item.art} />
                </div>
                <div className="equip-row-copy">
                  <p className="sector">{item.sector}</p>
                  <h3>{item.title}</h3>
                  <dl className="facts">
                    <div><dt>What it is</dt><dd>{item.what}</dd></div>
                    <div><dt>Used for</dt><dd>{item.usedFor}</dd></div>
                    <div><dt>Who needs it</dt><dd>{item.who}</dd></div>
                  </dl>
                  <a
                    className="text-link"
                    href={whatsappLink(`Hello Alfa Refrigeration, I would like to enquire about: ${item.title}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Enquire about {item.title.toLowerCase()} on WhatsApp <LuArrowRight size={16} aria-hidden="true" />
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--ink">
        <div className="container">
          <SectionHeader
            eyebrow="B to D. Service and support"
            title="Installation, maintenance and onsite support"
            lead="Looked after by the team with 30+ years of experience dealing with and servicing refrigeration products."
            light
          />
          <div className="svc-stack">
            {serviceGroups.map((s, i) => (
              <Reveal as="article" id={s.id} className="svc-big" delay={i * 60} key={s.id}>
                <span className="svc-letter" aria-hidden="true">{s.letter}</span>
                <div>
                  <h3><ServiceIcon name={s.icon} size={22} /> {s.title}</h3>
                  <dl className="facts facts--light">
                    <div><dt>What it is</dt><dd>{s.what}</dd></div>
                    <div><dt>Used for</dt><dd>{s.usedFor}</dd></div>
                    <div><dt>Who needs it</dt><dd>{s.who}</dd></div>
                  </dl>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="section-foot section-foot--light">
            To enquire, call, WhatsApp or use the <Link to="/contact" className="text-link text-link--light">enquiry form</Link>.
          </p>
        </div>
      </section>

      <section className="section" id="customers">
        <div className="container">
          <SectionHeader
            eyebrow="E. Residential and commercial"
            title="Matched to how you use it"
            lead="Residential and commercial requirements differ. Tell us which applies and we will talk it through."
          />
          <div className="segments">
            {segments.map((s, i) => (
              <Reveal as="article" className={`segment segment--${s.id}`} delay={i * 80} key={s.id}>
                <span className="icon-tile"><ServiceIcon name={s.icon} /></span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <ul>{s.items.map((it) => (<li key={it}>{it}</li>))}</ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <HowWeWork />
      <CTABanner title="Ready to enquire?" text="Equipment, installation or servicing: call, message or send an enquiry and we will take it from there." />
    </>
  );
}
