import { Link } from 'react-router-dom';
import Reveal from './Reveal.jsx';
import { CallButton, WhatsAppButton } from './ActionButtons.jsx';
import { WA_GENERAL } from '../lib/contact.js';

export default function CTABanner({
  title = 'Tell us what you need.',
  text = 'Looking for equipment, or need your existing refrigeration looked at? Call, message or visit us.',
}) {
  return (
    <section className="cta-section">
      <div className="container">
        <Reveal className="cta-banner">
          <div className="cta-copy">
            <h2>{title}</h2>
            <p>{text}</p>
          </div>
          <div className="cta-actions">
            <CallButton className="btn btn-light" />
            <WhatsAppButton message={WA_GENERAL} />
            <Link to="/contact" className="btn btn-ghost-light">Send an enquiry</Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
