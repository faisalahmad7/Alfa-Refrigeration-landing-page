import Reveal from './Reveal.jsx';
import SectionHeader from './SectionHeader.jsx';
import { process } from '../data/services.js';

export default function HowWeWork() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeader
          eyebrow="How we work"
          title="A straightforward process, from first call to ongoing support"
          lead="Your equipment, your requirement, and clear next steps at each stage."
        />
        <ol className="process">
          {process.map((p, i) => (
            <Reveal as="li" className="process-step" delay={i * 60} key={p.title}>
              <span className="process-num" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
