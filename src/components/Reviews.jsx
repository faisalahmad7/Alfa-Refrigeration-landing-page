import Reveal from './Reveal.jsx';
import SectionHeader from './SectionHeader.jsx';
import { reviews } from '../data/business.js';

export default function Reviews() {
  return (
    <section className="section section--ink reviews">
      <div className="container">
        <SectionHeader
          eyebrow="Customer feedback"
          title="What customers have said about our service"
          light
        />
        <div className="review-grid">
          {reviews.items.map((text, i) => (
            <Reveal as="figure" className="review" delay={i * 80} key={text}>
              <blockquote>{text}</blockquote>
              <figcaption>Customer feedback</figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
