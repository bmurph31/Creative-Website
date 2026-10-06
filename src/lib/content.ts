/**
 * Product relaunch copy for MKTG 1101.
 * The same template and motion system are preserved, but the wine story has
 * been repositioned around the Google Pen Red and its new target customer.
 */

export const productUrl =
  'https://shop.merch.google/product/google-pen-red-gmssgoar100899?itemListName=Search';

export const brand = {
  name: 'Google',
  sub: 'Pen Red',
  founded: 'WORK. CREATE. REPRESENT.',
  cta: 'Shop the pen',
  nav: ['The Pen', 'Why It Works', 'At Work', 'Benefits', 'Shop'],
} as const;

export const hero = {
  giant: ['Google', 'Pen Red'],
  cue: 'Scroll to discover',
} as const;

export const wine = {
  eyebrow: 'A small detail. A stronger brand.',
  headline: ['Sign With', 'Google'],
  body:
    'The Google Pen Red turns an everyday writing tool into a simple expression of professional identity. Designed for Google employees, technology professionals, and dedicated Google fans, it brings the brand into meetings, notes, presentations, and important decisions.',
  action: 'Get yours',
} as const;

export type Spec = {
  key: string;
  label: string;
  value: string;
  note: string;
};

export const specs: Spec[] = [
  {
    key: 'PRICE',
    label: 'Google Merchandise Store',
    value: '$2',
    note: 'An affordable way to bring Google branding into your everyday professional routine.',
  },
  {
    key: 'TIP',
    label: 'Fine-point gel tip',
    value: 'FINE',
    note: 'Smooth, precise writing for meeting notes, signatures, and everyday work.',
  },
  {
    key: 'INK',
    label: 'Google Pen Red',
    value: 'RED',
    note: 'A bold red finish, Google branding, and red ink make it instantly recognizable.',
  },
];

export const finish = {
  giant: 'Make Your Mark',
  videoCaption: ['Built for the workplace,', 'branded for Google.'],
  lead:
    'From quick ideas to major agreements, the tools professionals use become part of how they present themselves. The Google Pen Red gives employees and Google enthusiasts a simple way to keep the brand visible in everyday work.',
  styleHeading: 'Professional Identity',
  styleBody: [
    'A pen may be a small product, but it appears in meetings, presentations, conferences, workspaces, and conversations every day. That makes it a natural opportunity for brand representation.',
    'Instead of positioning the Google Pen Red as ordinary merchandise, this relaunch presents it as a professional workplace accessory for people who are proud to represent Google and the technology industry.',
  ],
} as const;

export type Note = {
  title: string;
  body: string;
  glyph: string;
  tone: 'wine' | 'ink';
};

export const notes: Note[] = [
  {
    title: 'Brand Pride',
    body: 'Represent Google through an item you can actually use throughout the workday.',
    glyph: 'G',
    tone: 'wine',
  },
  {
    title: 'Everyday Utility',
    body: 'Useful for meetings, planning, note-taking, presentations, and signatures.',
    glyph: '✦',
    tone: 'wine',
  },
  {
    title: 'Professional Detail',
    body: 'A recognizable branded accessory that adds personality to a desk and professional routine.',
    glyph: '✓',
    tone: 'ink',
  },
];

export type Format = {
  id: string;
  caption: string;
  detail: string;
  live?: boolean;
  src?: string;
  h: number;
};

export const allocation = {
  eyebrow: 'Made for:',
  giant: 'Everyday',
  giantSub: 'Google',
  formats: [
    {id: 'meeting', caption: 'Meetings', detail: 'Take notes', src: '/img/google-pen-red.svg', h: 0.9},
    {id: 'desk', caption: 'Your desk', detail: 'Show your brand', src: '/img/google-pen-red.svg', h: 0.82},
    {id: 'signature', caption: 'Signatures', detail: 'Make your mark', src: '/img/google-pen-red.svg', h: 0.96},
    {id: 'conference', caption: 'Conferences', detail: 'Represent Google', src: '/img/google-pen-red.svg', h: 0.84},
    {id: 'ideas', caption: 'Big ideas', detail: 'Write them down', src: '/img/google-pen-red.svg', h: 0.88},
  ] as Format[],
} as const;

export const pairings = {
  eyebrow: 'More than merchandise',
  headline: ['Put Google', 'In Your Hand'],
  body:
    'Google employees and technology professionals already represent the brand through the work they do. The Google Pen Red extends that identity to an everyday object — making it ideal for the office, meetings, events, and professional conversations.',
  action: 'Shop Google Pen Red',
} as const;

export const estate = {
  eyebrow: 'For people who build the future',
  headline: ['Think Bold.', 'Write Google.'],
  body:
    'Designed for employees, technology professionals, and dedicated Google fans who value innovation, recognizable design, and the opportunity to represent the brands they believe in.',
} as const;

export const footer = {
  columns: [
    {title: 'Product', links: ['Google Pen Red', 'Fine-point gel tip', 'Soft-touch finish', 'Red ink']},
    {title: 'Use It', links: ['Meetings', 'Signatures', 'Notes', 'Conferences']},
    {title: 'Google', links: ['Brand pride', 'Professional identity', 'Technology', 'Merchandise Store']},
  ],
  newsletter: {
    title: 'Make your mark',
    body: 'Bring Google branding into your everyday work with a simple professional accessory.',
    placeholder: 'Your email',
    action: 'Stay connected',
  },
  legal: 'Google Pen Red promotional concept created for a Fairfield University marketing course project.',
} as const;
