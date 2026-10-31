// Content for Home and Services. Every statement is drawn from the owner's
// business description. No prices, guarantees, response times or counts are claimed.
// `art` maps to a scene in components/ProductArt.jsx. `icon` maps to ServiceIcon.jsx.

export const equipment = [
  {
    id: 'water-coolers',
    title: 'Water coolers',
    art: 'cooler',
    sector: 'Residential & commercial',
    short: 'Drinking-water coolers for offices, shops and homes.',
    what: 'A water cooler chills drinking water and delivers it on demand.',
    usedFor: 'Everyday cold drinking water in workplaces, commercial premises and homes.',
    who: 'Offices, shops, institutions and households.',
  },
  {
    id: 'water-dispensers',
    title: 'Water dispensers',
    art: 'dispenser',
    sector: 'Residential & commercial',
    short: 'Dispensers for cold water, sold and serviced.',
    what: 'A compact dispenser that serves chilled water at the press of a button.',
    usedFor: 'Convenient drinking water where a full cooler is not needed.',
    who: 'Small offices, shops and homes.',
  },
  {
    id: 'ice-machines',
    title: 'Ice cube makers',
    art: 'ice',
    sector: 'Commercial',
    short: 'Ice cube makers and ice machines for food and beverage businesses.',
    what: 'A machine that produces ice cubes on site so ice is always on hand.',
    usedFor: 'Beverages, food display and kitchen use.',
    who: 'Restaurants, cafés, bars, hotels and commercial kitchens.',
  },
  {
    id: 'deep-freezers',
    title: 'Deep freezers',
    art: 'freezer',
    sector: 'Residential & commercial',
    short: 'Deep freezers for storing frozen stock in bulk.',
    what: 'A chest-style freezer built to hold frozen goods at low temperature.',
    usedFor: 'Bulk storage of frozen food and similar products.',
    who: 'Food businesses, shops and households.',
  },
  {
    id: 'commercial-refrigerators',
    title: 'Commercial refrigerators',
    art: 'fridge',
    sector: 'Commercial',
    short: 'Upright commercial refrigerators for day-to-day business use.',
    what: 'A heavy-use refrigerator designed for business environments.',
    usedFor: 'Keeping stock and ingredients cold through a working day.',
    who: 'Restaurants, catering, shops and commercial kitchens.',
  },
  {
    id: 'visi-coolers',
    title: 'Visi coolers',
    art: 'visi',
    sector: 'Commercial',
    short: 'Glass-door display coolers that show what you sell.',
    what: 'A cooler with a transparent door so customers can see the stock.',
    usedFor: 'Displaying chilled beverages and packaged products.',
    who: 'Retail outlets, beverage sellers and commercial establishments.',
  },
  {
    id: 'split-ac',
    title: 'Split air conditioners',
    art: 'split',
    sector: 'Residential & commercial',
    short: 'Split air conditioners for rooms, shops and offices.',
    what: 'An air conditioner with an indoor unit and a separate outdoor unit.',
    usedFor: 'Cooling rooms and workspaces quietly.',
    who: 'Homes, shops and offices.',
  },
  {
    id: 'window-ac',
    title: 'Window air conditioners',
    art: 'window',
    sector: 'Residential & commercial',
    short: 'Self-contained window air conditioners.',
    what: 'A single-unit air conditioner fitted into a window or wall opening.',
    usedFor: 'Straightforward cooling for a single room or cabin.',
    who: 'Homes, small shops and offices.',
  },
];

// Services page, grouped as B, C, D.
export const serviceGroups = [
  {
    id: 'installation',
    letter: 'B',
    icon: 'settings',
    title: 'Installation and setup',
    lead: 'Getting new equipment working properly in your space.',
    what: 'Setting up refrigeration equipment and air conditioners once you have chosen them.',
    usedFor: 'A new purchase, a replacement, or equipment moving to a new location.',
    who: 'Any residential or commercial customer buying equipment.',
  },
  {
    id: 'maintenance',
    letter: 'C',
    icon: 'wrench',
    title: 'Maintenance and repair',
    lead: 'Decades of experience servicing refrigeration products.',
    what: 'Servicing and repairing water coolers, water dispensers, deep freezers, ice machines, visi coolers and other refrigeration equipment.',
    usedFor: 'Equipment that is not cooling properly, behaving oddly, or due for a check.',
    who: 'Anyone with refrigeration equipment, whether or not it was bought from Alfa.',
  },
  {
    id: 'onsite',
    letter: 'D',
    icon: 'pin',
    title: 'Onsite support',
    lead: 'Support where your equipment actually is.',
    what: 'Our team can attend at your premises for installation, servicing and support.',
    usedFor: 'Equipment that is installed, heavy, or part of a working business.',
    who: 'Shops, offices, kitchens and homes. Tell us your location when you enquire.',
  },
];

export const segments = [
  {
    id: 'residential',
    icon: 'home',
    title: 'Residential',
    text: 'Water coolers, dispensers, deep freezers and air conditioners for the home, with servicing when they need attention.',
    items: ['Water coolers and dispensers', 'Deep freezers', 'Split and window air conditioners'],
  },
  {
    id: 'commercial',
    icon: 'office',
    title: 'Commercial',
    text: 'Ice machines, commercial refrigerators, visi coolers and deep freezers for businesses that depend on cold storage and display.',
    items: ['Ice cube makers', 'Commercial refrigerators', 'Visi coolers and display units', 'Water coolers for workplaces'],
  },
];

// Adapted to what the business does. No timings or guarantees implied.
export const process = [
  { title: 'Discuss your requirement', text: 'Call, WhatsApp or visit. Tell us whether you need equipment, installation or service.' },
  { title: 'Understand the equipment or service', text: 'We talk through what you use it for and which product or fix suits that need.' },
  { title: 'Confirm the next steps', text: 'We agree what happens next, and you know what to expect before anything is arranged.' },
  { title: 'Arrange the product or service', text: 'The right equipment is supplied, installed, or serviced, onsite where that applies.' },
  { title: 'Ongoing support', text: 'Maintenance and repair support stays available after the job, as your equipment needs it.' },
];

export const experienceLessons = [
  {
    title: 'We know the equipment',
    text: 'Water coolers, deep freezers, ice machines, visi coolers: we have spent decades dealing with and servicing them, not just selling them.',
  },
  {
    title: 'We know the problems',
    text: 'Long years of servicing refrigeration products means recognising what is wrong, and explaining it plainly.',
  },
  {
    title: 'We stay for the long run',
    text: 'Our motto is customer satisfaction. Support after the sale is part of how we work, not an extra.',
  },
];

export const serviceOptions = [
  'Repair / servicing',
  'New equipment purchase',
  'Installation',
  'Maintenance enquiry',
  'General enquiry',
];
