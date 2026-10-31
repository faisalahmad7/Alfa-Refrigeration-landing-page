// ─────────────────────────────────────────────────────────────
// Single source of truth for every business detail on the site.
// Everything here comes from the owner-supplied business profile.
// Nothing has been independently verified online (see docs/CLIENT_CONFIRMATIONS.md).
// ─────────────────────────────────────────────────────────────
export const business = {
  name: 'Alfa Refrigeration and Air Conditioner',
  shortName: 'Alfa Refrigeration',
  tagline: 'Our commitment to customer satisfaction is our Motto.',
  experience: '30+',

  phone: '9881256922',
  phoneDisplay: '+91 98812 56922',
  phoneHref: 'tel:+919881256922',
  whatsappNumber: '919881256922',

  // CONFIRM: not in the latest owner profile; carried over from the earlier demo site.
  // Used only as a fallback link after the enquiry form is prepared.
  email: 'alfarefrigeration@rediffmail.com',

  hours: [
    { day: 'Monday to Saturday', time: '10:00 AM – 8:00 PM' },
    { day: 'Sunday', time: 'Closed' },
  ],
  hoursShort: 'Mon–Sat, 10 AM – 8 PM',

  address: {
    lines: ['Survey No. 368, Ram Prasad Apartments', 'Shop No. 17, 1/2, Near Kirad Hospital', 'New Nana Peth'],
    city: 'Pune',
    state: 'Maharashtra',
    pin: '411002',
  },
  mapsSearchUrl:
    'https://www.google.com/maps/search/?api=1&query=Ram+Prasad+Apartments+New+Nana+Peth+Pune+411002',
  mapsEmbedUrl:
    'https://www.google.com/maps?q=Ram+Prasad+Apartments+New+Nana+Peth+Pune+411002&output=embed',
};

export const fullAddress = () =>
  `${business.address.lines.join(', ')}, ${business.address.city}, ${business.address.state} ${business.address.pin}`;

// Customer feedback supplied by the owner from a business listing.
// The listing could NOT be located or verified, so it is shown in a clearly
// marked "pending verification" state. Flip `verified` to true only after the
// owner provides the original listing link, then fill `source`.
export const reviews = {
  verified: false,
  source: null, // e.g. { name: 'Google', url: 'https://…' }
  ratingSupplied: '4.7 out of 5',
  items: [
    'Called for water cooler repair. Timely cost-effective service, personnel diligent, efficient and confident.',
    'Excellent services for water dispensers, deep freezers, Ice machines, water coolers and vizi coolers.',
  ],
};
