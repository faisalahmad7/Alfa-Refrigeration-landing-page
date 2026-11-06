import { LuSnowflake } from 'react-icons/lu';
import CTABanner from '../components/CTABanner.jsx';
import PageHero from '../components/PageHero.jsx';
import Reveal from '../components/Reveal.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import { experienceLessons } from '../data/services.js';
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
      <section className="motto-band motto-band--feature">
        <div className="container">
          <Reveal as="figure" className="motto-fig">
            <span className="motto-icon" aria-hidden="true"><LuSnowflake size={28} /></span>
            <p className="motto-eyebrow">Our motto</p>
            <blockquote>
              Our commitment to <em>customer satisfaction</em> is our Motto.
            </blockquote>
            <span className="motto-rule" aria-hidden="true" />
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

      <CTABanner title="Talk to the Alfa team" text="Questions about equipment, servicing or installation? Call, message or visit us." />
    </>
  );
}
