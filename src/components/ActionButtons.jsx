import { LuPhone } from 'react-icons/lu';
import { FaWhatsapp } from 'react-icons/fa6';
import { business } from '../data/business.js';
import { whatsappLink } from '../lib/contact.js';
import FrostFrame from './FrostFrame.jsx';

export function CallButton({ className = 'btn btn-primary', label }) {
  return <a className={`${className} frost-action`} href={business.phoneHref}>
    <FrostFrame /><span className="action-button-content"><LuPhone size={18} aria-hidden="true" />{label ?? `Call ${business.phoneDisplay}`}</span>
  </a>;
}
export function WhatsAppButton({ className = 'btn btn-whatsapp', message, label = 'WhatsApp us' }) {
  return <a className={`${className} frost-action`} href={whatsappLink(message)} target="_blank" rel="noopener noreferrer">
    <FrostFrame /><span className="action-button-content"><FaWhatsapp size={19} aria-hidden="true" />{label}</span>
  </a>;
}
