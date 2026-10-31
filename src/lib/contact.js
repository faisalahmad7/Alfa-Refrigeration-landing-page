import { business } from '../data/business.js';

// Build a wa.me link. The message is always URL-encoded.
export function whatsappLink(message) {
  const base = `https://wa.me/${business.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export const WA_GENERAL = 'Hello Alfa Refrigeration, I would like to enquire about refrigeration service.';
export const WA_SERVICE = 'Hello Alfa Refrigeration, I need servicing for my equipment.';

export function mailtoLink(subject, body) {
  const params = new URLSearchParams({ subject, body });
  // URLSearchParams encodes spaces as "+"; mail clients expect %20.
  return `mailto:${business.email}?${params.toString().replace(/\+/g, '%20')}`;
}

// Accepts 10-digit Indian mobile numbers, with or without +91 / 0 / spaces.
export function normalisePhone(input) {
  let digits = String(input).replace(/[\s\-()]/g, '');
  if (digits.startsWith('+91')) digits = digits.slice(3);
  else if (digits.startsWith('91') && digits.length === 12) digits = digits.slice(2);
  else if (digits.startsWith('0') && digits.length === 11) digits = digits.slice(1);
  return digits;
}

export const isValidIndianMobile = (input) => /^[6-9]\d{9}$/.test(normalisePhone(input));

export function buildEnquiryMessage({ name, phone, service, message }) {
  const lines = [
    'Hello Alfa Refrigeration,',
    '',
    `Name: ${name}`,
    `Phone: ${normalisePhone(phone)}`,
    `Enquiry: ${service}`,
  ];
  if (message) lines.push(`Details: ${message}`);
  return lines.join('\n');
}
