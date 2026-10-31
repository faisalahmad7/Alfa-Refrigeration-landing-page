import { LuPhone } from 'react-icons/lu';
import { FaWhatsapp } from 'react-icons/fa6';
import { business } from '../data/business.js';
import { whatsappLink, WA_GENERAL } from '../lib/contact.js';

// Thumb-reach call / WhatsApp bar, shown on phones only.
export default function StickyActions() {
  return (
    <div className="sticky-actions" role="group" aria-label="Quick contact">
      <a className="sticky-call" href={business.phoneHref}>
        <LuPhone size={18} aria-hidden="true" /> Call now
      </a>
      <a className="sticky-wa" href={whatsappLink(WA_GENERAL)} target="_blank" rel="noopener noreferrer">
        <FaWhatsapp size={19} aria-hidden="true" /> WhatsApp
      </a>
    </div>
  );
}
