// Site-wide settings: company info, navigation, social links and the contact form.
// Edit this file to change anything that appears in the header or footer.

const wix = 'https://static.wixstatic.com/media/';

export const site = {
  name: 'Latest Solutions',
  tagline: 'IT Consulting & Ivanti Implementation Services',
  email: 'hello@latestsolutions.io',
  careersEmail: 'careers@latestsolutions.io',
  address: '2443 Fillmore St, San Francisco, CA 94115, USA',

  // TODO: move these images into /public/images once the repo exists.
  logo: wix + 'fdd389_f624c4b67e7147b2b65824006041c997~mv2.png',
  footerLogo: wix + 'fdd389_a2859e07650f4b6fa6005e5818fee439~mv2.png',
  ivantiBadge: wix + 'ded7dc_f12d4ecc72ec46a39bfc4651f4c833c5~mv2.png',

  // Where the "Request a discovery call" form sends submissions.
  // Set this to a Formspree / Netlify / Basin endpoint once hosting is chosen.
  formAction: '',
};

export type NavItem = { label: string; href: string; children?: NavItem[] };

export const nav: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'Ivanti',
    href: '/ivanti',
    children: [
      { label: 'Ivanti Asset Manager', href: '/ivanti-asset-manager' },
      { label: 'Ivanti Automation', href: '/ivanti-automation' },
      { label: 'Ivanti Identity Director', href: '/ivanti-identity-director' },
      { label: 'Ivanti Neurons', href: '/ivanti-neurons' },
      { label: 'Ivanti Neurons for RBVM', href: '/ivanti-risksense' },
      { label: 'Ivanti Security Controls', href: '/ivanti-security-controls' },
      { label: 'Ivanti Service Manager', href: '/ivanti-service-manager' },
      { label: 'Ivanti UEM Solutions', href: '/ivanti-uem-solutions' },
    ],
  },
  { label: 'NetDocuments', href: '/netdocuments' },
  { label: 'Intercom', href: '/intercom' },
  {
    label: 'TeamDynamix',
    href: '/teamdynamix',
    children: [
      { label: 'TeamDynamix ESM & PPM', href: '/teamdynamix-esm' },
      { label: 'AI Virtual Agent', href: '/teamdynamix-ai-virtual-agent' },
      { label: 'TeamDynamix ITAM', href: '/teamdynamix-itam' },
      { label: 'TeamDynamix iPaaS', href: '/teamdynamix-ipaas' },
    ],
  },
  { label: 'Partners', href: '/partners' },
  { label: 'About', href: '/about' },
];

// TODO: fill in the real profile URLs (not captured from the current site).
export const socials = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
  { label: 'X', href: 'https://x.com/' },
  { label: 'Facebook', href: 'https://www.facebook.com/' },
  { label: 'YouTube', href: 'https://www.youtube.com/' },
  { label: 'Instagram', href: 'https://www.instagram.com/' },
];
