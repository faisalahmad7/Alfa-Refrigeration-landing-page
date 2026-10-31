// Business details used across the site.
export const business = {
  name: 'Alfa Refrigeration and Air Conditioner',
  shortName: 'Alfa Refrigeration',
  tagline: 'Our commitment to customer satisfaction is our Motto.',
  experience: '30+',

  phone: '9881256922',
  phoneDisplay: '+91 98812 56922',
  phoneHref: 'tel:+919881256922',
  whatsappNumber: '919881256922',

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

// Customer feedback used in the website testimonials.
export const reviews = {
  items: [
    'Called for water cooler repair. Timely cost-effective service, personnel diligent, efficient and confident.',
    'Excellent services for water dispensers, deep freezers, Ice machines, water coolers and vizi coolers.',
  ],
};
