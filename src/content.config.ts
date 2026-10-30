import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Every Markdown file in src/content/pages becomes a page at /<file-name>.
// The front matter (between the --- lines) fills the hero and the optional blocks;
// the Markdown below it is the body of the page.
const card = z.object({
  title: z.string(),
  text: z.string().optional(),
  icon: z.string().optional(),
  href: z.string().optional(),
});

const pages = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(), // browser tab / Google title
    description: z.string(), // Google snippet
    eyebrow: z.string().optional(),
    heading: z.string(),
    intro: z.string().optional(),
    cta: z.object({ label: z.string(), href: z.string() }).optional(),
    // Optional picture shown beside the hero text (path under /public)
    heroImage: z.object({ src: z.string(), alt: z.string() }).optional(),
    // Optional grid of cards shown under the hero
    cardsTitle: z.string().optional(),
    cards: z.array(card).optional(),
    // Show the cards on a dark background (for white or light icons)
    cardsDark: z.boolean().default(false),
    // Optional logo wall (used on Partners)
    logos: z.array(z.object({ name: z.string(), image: z.string().optional(), href: z.string() })).optional(),
    // Show the shared Consulting / Tech Support / Solutions Architecture cards
    // (text lives in src/site.ts), with an optional page-specific intro above them
    services: z.boolean().default(false),
    servicesIntro: z.string().optional(),
    // Questions and answers shown, collapsed, near the bottom of the page
    faqs: z.array(z.object({ q: z.string(), a: z.string() })).optional(),
    // Show bullet lists as a 2-column checklist (on by default when services is on)
    checklist: z.boolean().optional(),
    // Show the "Request your discovery call" form at the bottom (default yes)
    contactForm: z.boolean().default(true),
  }),
});

const home = defineCollection({
  loader: glob({ pattern: 'home.md', base: './src/content' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    heading: z.string(),
    intro: z.string(),
    whatWeDo: z.object({ title: z.string(), text: z.string(), image: z.string().optional() }),
    solutions: z.array(card), // the four platforms, linked to their pages
    services: z.array(card),
    benefits: z.array(card),
    cta: z.object({ title: z.string(), text: z.string() }),
    expertise: z.array(z.string()), // Ivanti skills shown as tags

  }),
});

export const collections = { pages, home };
