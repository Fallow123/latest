// Site-wide settings: company info, navigation, social links and the contact form.
// Edit this file to change anything that appears in the header or footer.

export const site = {
  name: 'Latest Solutions',
  tagline: 'IT Consulting & Ivanti Implementation Services',
  email: 'hello@latestsolutions.io',
  careersEmail: 'careers@latestsolutions.io',
  address: '2443 Fillmore St, San Francisco, CA 94115, USA',

  // Images live in /public/images (copied from the old Wix site).
  logo: '/images/shared/ls-logo-white.png',
  footerLogo: '/images/shared/latest-solutions-full-white.png',
  ivantiBadge: '/images/shared/ivanti-premier-partner-badge.png',

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

// Profile links, as listed in the footer of the old site.
export const socials = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/latestsolutions/' },
  { label: 'X', href: 'https://x.com/SolutionsLatest' },
  { label: 'Facebook', href: 'https://www.facebook.com/LatestSolutions/' },
  { label: 'YouTube', href: 'https://www.youtube.com/@LatestSolutionsYT' },
  { label: 'Instagram', href: 'https://www.instagram.com/latestsolutions/' },
  { label: 'WhatsApp', href: 'https://wa.me/5219871181086' },
];
