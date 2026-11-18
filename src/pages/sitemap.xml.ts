// Lists every page for search engines at /sitemap.xml (pages, webinars and the home page).
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async ({ site }) => {
  const base = (site?.href ?? 'https://www.latestsolutions.io/').replace(/\/$/, '');
  const pages = await getCollection('pages');
  const webinars = await getCollection('webinars');
  const paths = ['/', '/webinars', ...pages.filter((p) => p.id !== 'thanks').map((p) => `/${p.id}`), ...webinars.map((w) => `/webinars/${w.id}`)];
  const body =
    '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
    paths.map((p) => `  <url><loc>${base}${p === '/' ? '/' : p}</loc></url>`).join('\n') +
    '\n</urlset>\n';
  return new Response(body, { headers: { 'Content-Type': 'application/xml' } });
};
