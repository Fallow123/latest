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
    heroImage: z.object({ src: z.string(), alt: z.string(), still: z.string().optional() }).optional(), // still: shown instead of an animated src to visitors who prefer less motion
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
    // People shown as speaker cards near the bottom (keys from `speakers` in src/site.ts)
    speakersTitle: z.string().optional(),
    speakers: z.array(z.string()).optional(),
    // Show the "Request your discovery call" form at the bottom (default yes)
    contactForm: z.boolean().default(true),
  }),
});

// Every Markdown file in src/content/webinars becomes a session page at /webinars/<file-name>.
// Leave out `date` until it is set; the session shows as "Date coming soon".
// Leave out `registerUrl` until registration opens; visitors can sign up to be notified instead.
// Once the date has passed, the session moves to "Past sessions" and shows `recordingUrl` if set.
const webinars = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/webinars' }),
  schema: z.object({
    title: z.string(),
    description: z.string(), // Google snippet
    summary: z.string(), // one or two lines shown on cards
    date: z.coerce.date().optional(), // e.g. 2026-11-20T17:00:00Z (the start time, in UTC)
    time: z.string().optional(), // shown as written, e.g. "12:00 PM ET / 9:00 AM PT"
    format: z.string().default('Live online · 60 minutes · Free'),
    speakers: z.array(z.string()),
    takeaways: z.array(z.string()).optional(),
    registerUrl: z.string().optional(),
    recordingUrl: z.string().optional(),
  }),
});

const home = defineCollection({
  loader: glob({ pattern: 'home.md', base: './src/content' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    heading: z.string(),
    intro: z.string(),
        solutions: z.array(card), // the four platforms, linked to their pages
    benefits: z.array(card),
    platformsIntro: z.string(), // short line under the platforms heading
    expertise: z.array(z.string()), // Ivanti skills shown as tags
    // "The human side of AI" band: links to the consulting page and the webinars
    humanSide: z.object({ title: z.string(), text: z.string(), cards: z.array(card) }).optional(),

  }),
});

export const collections = { pages, webinars, home };
