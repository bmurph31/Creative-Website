/** Golf AI venture brief, adapted into the original creative website template. */
export const productUrl = '#demo';
export const brand = {
  name: 'Golf AI', sub: 'Your pocket caddy', founded: 'LESS GUESSWORK. MORE GOLF.',
  cta: 'Try the demo',
  nav: [
    {label: 'The idea', href: '#wine'}, {label: 'Our mission', href: '#finish'},
    {label: 'How it works', href: '#notes'}, {label: 'Try the demo', href: '#demo'},
    {label: 'Membership', href: '#pairings'}, {label: 'Get in touch', href: '#footer'},
  ],
} as const;
export const hero = {giant: ['Golf', 'AI'], cue: 'Explore the idea'} as const;
export const wine = {
  eyebrow: 'Meet your caddy in your pocket.', headline: ['One photo.', 'A clearer shot.'],
  body: 'Golf AI is a proposed mobile app that starts with a quick photo of where your ball lies. The idea is simple: turn that moment of uncertainty into an understandable shot suggestion, so you can spend less time second-guessing and more time enjoying the round.',
  action: 'Explore a sample shot',
} as const;
export type Spec = {key: string; label: string; value: string; note: string};
export const specs: Spec[] = [
  {key: 'CAPTURE', label: 'Start where your ball is', value: '01', note: 'Take a quick photo of the lie and surrounding terrain.'},
  {key: 'CONTEXT', label: 'Add the details that matter', value: '02', note: 'Confirm distance and conditions. A photo alone cannot tell the whole story.'},
  {key: 'COMMIT', label: 'Understand your next move', value: '03', note: 'Review a simple shot idea and the reasoning behind it.'},
];
export const finish = {
  giant: 'Play with clarity', videoCaption: ['More confidence.', 'Less second-guessing.'],
  lead: 'Everybody wants to be the best golfer they can be. But most of us do not have the knowledge, experience, or on-course support that professionals have.',
  styleHeading: 'Knowledge for the rest of us.',
  styleBody: [
    'Our mission is to bridge that gap and ease the stress everyday golfers feel when deciding what shot to hit. Golf AI aims to make practical guidance convenient, understandable, and affordable.',
    'It is about a more enjoyable round, not a promise of a perfect score. Your ability, the conditions, and your own judgment still shape every shot.',
  ],
} as const;
export type Note = {title: string; body: string; glyph: string; tone: 'wine' | 'ink'};
export const notes: Note[] = [
  {title: 'Snap the lie', body: 'Open your phone and photograph the ball with enough of the surrounding ground to show the situation.', glyph: '01', tone: 'wine'},
  {title: 'Set the scene', body: 'Add distance, obstacles, and conditions. The planned app combines your photo with the context you provide.', glyph: '02', tone: 'wine'},
  {title: 'Choose your shot', body: 'Get an easy-to-understand suggestion. See the thinking, choose what suits your game, and take your swing.', glyph: '03', tone: 'ink'},
];
export const pairings = {
  eyebrow: 'A small part of your golf budget.', headline: ['Keep your', 'caddy close.'],
  body: 'Golf AI is designed around an affordable recurring subscription for golfers who play often. The goal is a useful companion you return to each round, with enough everyday value to earn your renewal. Pricing and launch availability are still being developed.',
  action: 'Share your interest',
} as const;
export const estate = {
  eyebrow: 'Built around an active life.', headline: ['Your game.', 'Your next chapter.'],
  body: 'From weekend rounds to a regular tee time, Golf AI is for recreational golfers who want to make more informed decisions without turning every shot into a lesson. The initial venture focus is North America and Europe, welcoming adult golfers of all genders.',
} as const;
