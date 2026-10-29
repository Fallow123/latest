// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.latestsolutions.io',
  // Keep the same URLs as the current site (e.g. /ivanti-asset-manager)
  trailingSlash: 'never',
  build: { format: process.env.BUILD_FORMAT === 'file' ? 'file' : 'directory' },
});
