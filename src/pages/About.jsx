import { LuSnowflake } from 'react-icons/lu';
import founderPhoto from '../assets/augustine-lobo.webp';
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
        art="fridgeopen"
        artLabel="Illustration of a refrigerator with its left door open, showing a stocked, lit interior, and its right door closed"
      />

      <section className="section">
        <div className="container about-vm">
          <Reveal className="vm-row">
            <div className="vm-head">
              <span className="vm-index" aria-hidden="true">01</span>
              <h2 className="vm-title">Our Vision</h2>
            </div>
            <div className="vm-content">
              <p className="vm-lead">
                To be Pune’s most trusted name in refrigeration and air-conditioning, keeping every
                business we serve cool, running and worry-free. For us, trust comes first, and we
                earn it with every job we do.
              </p>
            </div>
          </Reveal>

          <Reveal className="vm-row" delay={60}>
            <div className="vm-head">
              <span className="vm-index" aria-hidden="true">02</span>
              <h2 className="vm-title">Our Mission</h2>
            </div>
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
            Genuine work. Reliable service. Trusted since 1994.
          </Reveal>
        </div>
      </section>

      {/* FOUNDER'S NOTE */}
      <section className="section section--tint founder" aria-labelledby="founder-title">
        <div className="container founder-grid">
          <Reveal className="founder-photo">
            <img
              src={founderPhoto}
              alt="Augustine Lobo, founder of Alfa Refrigeration, smiling in a navy suit"
              width="1000"
              height="914"
              loading="lazy"
              decoding="async"
            />
          </Reveal>

          <div className="founder-copy">
            <Reveal delay={60}>
              <p className="eyebrow">Meet our founder</p>
              <h2 className="section-title" id="founder-title">Augustine Lobo</h2>
              <p className="founder-role">Founder, Alfa Refrigeration · Since 1994</p>
            </Reveal>
            <Reveal className="founder-body" delay={120}>
              <p>
                Starting his refrigeration career at 17, Augustine Lobo founded Alfa Refrigeration
                in 1994 at just 22 years old. What began with a team of three has grown into a
                trusted business built on quality workmanship, honesty, and lasting customer
                relationships.
              </p>
              <p>
                With a partnership with Blue Star dating back to 1994, Alfa Refrigeration continues
                to serve 30–40 customers daily through a dedicated team of experienced
                professionals.
              </p>
              <p>
                For Augustine, success has always been about quality service, customer
                satisfaction, and trust.
              </p>
            </Reveal>
            <Reveal as="figure" className="founder-quote" delay={180}>
              <blockquote>
                “A business grows when customers trust you and your people grow with you.”
              </blockquote>
              <figcaption>Augustine Lobo</figcaption>
            </Reveal>
          </div>
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
