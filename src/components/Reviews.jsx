import { LuInfo } from 'react-icons/lu';
import Reveal from './Reveal.jsx';
import SectionHeader from './SectionHeader.jsx';
import { reviews } from '../data/business.js';

// Reviews are shown ONLY with honest labelling. Until the owner provides the original
// listing link, they are marked as pending verification and no platform is named.
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
              <figcaption>
                {reviews.verified && reviews.source ? (
                  <a href={reviews.source.url} target="_blank" rel="noopener noreferrer">
                    Customer review on {reviews.source.name}
                  </a>
                ) : (
                  'Customer feedback · source pending verification'
                )}
              </figcaption>
            </Reveal>
          ))}
        </div>
        {!reviews.verified && (
          <p className="review-note">
            <LuInfo size={16} aria-hidden="true" />
            <span>
              This feedback was supplied by the business from a listing that we have not yet been able to
              verify. We will name the source and link to it once confirmed.
            </span>
          </p>
        )}
      </div>
    </section>
  );
}
