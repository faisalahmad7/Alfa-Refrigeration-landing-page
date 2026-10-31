import { LuPhone } from 'react-icons/lu';
import { FaWhatsapp } from 'react-icons/fa6';
import { business } from '../data/business.js';
import { whatsappLink, WA_GENERAL } from '../lib/contact.js';

// Compact floating contact shortcuts for touch layouts.
export default function StickyActions() {
  return (
    <div className="sticky-actions" role="group" aria-label="Quick contact">
      <a
        className="sticky-call"
        href={business.phoneHref}
        aria-label={`Call Alfa at ${business.phoneDisplay}`}
        title="Call Alfa"
      >
        <LuPhone size={21} aria-hidden="true" />
      </a>
      <a
        className="sticky-wa"
        href={whatsappLink(WA_GENERAL)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Message Alfa on WhatsApp"
        title="WhatsApp Alfa"
      >
        <FaWhatsapp size={23} aria-hidden="true" />
      </a>
    </div>
  );
}
