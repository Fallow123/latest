// Shared helpers for the webinar pages, the home page and the announcement bar.
import { getCollection, type CollectionEntry } from 'astro:content';

export type Webinar = CollectionEntry<'webinars'>;

// A session with no date yet counts as upcoming. Dates are checked when the site is built.
export const isUpcoming = (w: Webinar) => !w.data.date || w.data.date.getTime() >= Date.now();

// Upcoming sessions soonest first (undated ones last), past sessions newest first.
export async function getWebinars() {
  const all = await getCollection('webinars');
  const time = (w: Webinar) => w.data.date?.getTime() ?? Infinity;
  const upcoming = all.filter(isUpcoming).sort((a, b) => time(a) - time(b));
  const past = all.filter((w) => !isUpcoming(w)).sort((a, b) => time(b) - time(a));
  return { upcoming, past };
}

export const formatDate = (w: Webinar) =>
  w.data.date
    ? w.data.date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric', timeZone: 'America/New_York' })
    : 'Date coming soon';

export const shortDate = (w: Webinar) =>
  w.data.date ? w.data.date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', timeZone: 'America/New_York' }) : 'Coming soon';
