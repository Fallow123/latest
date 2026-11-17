// Renders scripts/og/og-image.html to public/og-image.png (the link-preview image).
import { createRequire } from 'node:module';
// Playwright isn't a project dependency; use whichever copy is installed (local or global).
const require = createRequire(import.meta.url);
const { chromium } = require('playwright');
import { fileURLToPath } from 'node:url';

const html = new URL('./og-image.html', import.meta.url);
const out = fileURLToPath(new URL('../../public/og-image.png', import.meta.url));
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
await page.goto(html.href, { waitUntil: 'networkidle' });
await page.screenshot({ path: out });
await browser.close();
console.log('wrote', out);
