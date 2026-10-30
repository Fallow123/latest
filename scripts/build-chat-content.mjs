// Gathers the site's text into one file for the chatbot (netlify/functions/chat.mts),
// so it can answer from what the site actually says. Runs before every build.
import { readFileSync, readdirSync, writeFileSync } from 'node:fs';

const read = (path) => readFileSync(path, 'utf8').trim();
const mdFiles = (dir) => readdirSync(dir).filter((f) => f.endsWith('.md')).sort();

const pages = [
  { url: '/', source: read('src/content/home.md') },
  ...mdFiles('src/content/pages').map((f) => ({
    url: `/${f.replace(/\.md$/, '')}`,
    source: read(`src/content/pages/${f}`),
  })),
  ...mdFiles('src/content/webinars').map((f) => ({
    url: `/webinars/${f.replace(/\.md$/, '')}`,
    source: read(`src/content/webinars/${f}`),
  })),
];

const text = [
  '<site_settings>\nMenus, company details and the webinar series list (src/site.ts). Every href here is a real page.\n' +
    read('src/site.ts') +
    '\n</site_settings>',
  '<page url="/webinars">\nLists every session of the webinar series described in site_settings.\n</page>',
  ...pages.map((p) => `<page url="${p.url}">\n${p.source}\n</page>`),
].join('\n\n');

const urls = ['/', '/webinars', ...pages.map((p) => p.url)];
writeFileSync('netlify/chat-content.json', JSON.stringify({ text, urls: [...new Set(urls)] }));
console.log(`Chat content: ${pages.length} pages, ${Math.round(text.length / 1024)} KB`);
