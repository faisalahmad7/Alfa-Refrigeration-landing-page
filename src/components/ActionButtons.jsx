import { LuPhone } from 'react-icons/lu';
import { FaWhatsapp } from 'react-icons/fa6';
import { business } from '../data/business.js';
import { whatsappLink } from '../lib/contact.js';

export function CallButton({ className = 'btn btn-primary', label }) {
  return (
    <a className={className} href={business.phoneHref}>
      <LuPhone size={18} aria-hidden="true" />
      {label ?? `Call ${business.phoneDisplay}`}
    </a>
  );
}

export function WhatsAppButton({ className = 'btn btn-whatsapp', message, label = 'WhatsApp us' }) {
  return (
    <a className={className} href={whatsappLink(message)} target="_blank" rel="noopener noreferrer">
      <FaWhatsapp size={19} aria-hidden="true" />
      {label}
    </a>
  );
}
