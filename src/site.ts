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

// The top menu. "Solutions" opens one wide dropdown with a column per platform.
export const nav: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'Solutions',
    href: '/ivanti',
    children: [
      {
        label: 'Ivanti',
        href: '/ivanti',
        children: [
          { label: 'Asset Manager', href: '/ivanti-asset-manager' },
          { label: 'Automation', href: '/ivanti-automation' },
          { label: 'Identity Director', href: '/ivanti-identity-director' },
          { label: 'Neurons', href: '/ivanti-neurons' },
          { label: 'Neurons for RBVM', href: '/ivanti-risksense' },
          { label: 'Security Controls', href: '/ivanti-security-controls' },
          { label: 'Service Manager', href: '/ivanti-service-manager' },
          { label: 'UEM Solutions', href: '/ivanti-uem-solutions' },
        ],
      },
      {
        label: 'TeamDynamix',
        href: '/teamdynamix',
        children: [
          { label: 'ESM & PPM', href: '/teamdynamix-esm' },
          { label: 'AI Virtual Agent', href: '/teamdynamix-ai-virtual-agent' },
          { label: 'ITAM', href: '/teamdynamix-itam' },
          { label: 'iPaaS', href: '/teamdynamix-ipaas' },
        ],
      },
      { label: 'NetDocuments', href: '/netdocuments' },
      { label: 'Intercom', href: '/intercom' },
    ],
  },
  {
    label: 'Leadership & AI',
    href: '/behavioral-science-leadership',
    children: [
      { label: 'Behavioral Science for Leadership', href: '/behavioral-science-leadership' },
      { label: 'Webinars', href: '/webinars' },
    ],
  },
  { label: 'Partners', href: '/partners' },
  { label: 'About', href: '/about' },
];

// The webinar series. Each session is a Markdown file in src/content/webinars.
export const webinarSeries = {
  name: 'Staying Human in the Age of AI',
  intro:
    'A free webinar series on behavioral science, leadership and AI, co-hosted by Latest Solutions and applied behavioral scientist Kip Jon. Why people adopt (or quietly avoid) new technology, and what leaders can do about it.',
};

// Speakers and collaborators, referred to by their key (e.g. "kip") in webinar
// and page front matter. Add a photo by dropping a square image in
// /public/images/speakers and setting photo to its path.
export type Speaker = { name: string; role: string; bio: string; photo?: string; href?: string; linkLabel?: string };
export const speakers: Record<string, Speaker> = {
  kip: {
    name: 'Kip Jon',
    role: 'Leadership coach and applied behavioral scientist',
    bio: 'Kip is an award-winning executive coach with more than 20 years working with leaders on what sits underneath behavior. He has spoken for organizations including AstraZeneca, Novartis, Pepsi and Ford, and his work starts from one idea: look beneath the behavior.',
    href: 'https://www.kipjon.com',
    linkLabel: 'kipjon.com',
  },
};

// Numbers shown in the strip under the home page hero.
// A number with a "+" or plain digits counts up when it scrolls into view.
export const stats = [
  { value: '2011', label: 'Helping IT teams since' },
  { value: '100+', label: 'Years of combined Ivanti experience' },
  { value: 'Premier', label: 'Ivanti Partner' },
  { value: '4', label: 'Platforms we implement and support' },
];

// The three services shown on every Ivanti product page.
export const implementationServices = [
  {
    title: 'Consulting',
    icon: '/icons/compass.svg',
    text: 'Tell us your unique needs and how your systems work. We plan and configure your implementation so it goes right at every step.',
  },
  {
    title: 'Tech Support',
    icon: '/icons/headset.svg',
    text: 'Quick answers and step-by-step help with any feature, from a team that knows the product inside out.',
  },
  {
    title: 'Expert Solutions Architecture',
    icon: '/icons/puzzle.svg',
    text: 'Ongoing help to reach your goals, such as getting your whole team to adopt the software and use it well.',
  },
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
