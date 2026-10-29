# Latest Solutions website

The source for www.latestsolutions.io, built with [Astro](https://astro.build). Every page is a plain Markdown file, so updating the site means editing text, not code.

## Where things live

| To change… | Edit |
| --- | --- |
| Home page text | `src/content/home.md` |
| Any other page (Ivanti, TeamDynamix, About, Partners…) | `src/content/pages/<page-name>.md` |
| Menu, footer, email, address, social links, form destination | `src/site.ts` |
| Colours and fonts | the top of `src/styles/global.css` |
| Images | `public/images/` |

### Adding a page

Copy an existing file in `src/content/pages/`, rename it (the file name becomes the URL, e.g. `delinea.md` → `/delinea`), and edit the text. Add it to the menu in `src/site.ts` if it should appear there.

### Page front matter

The block between the `---` lines at the top of each page controls the hero and optional sections:

```yaml
title: Shown in the browser tab and on Google
description: The Google snippet
eyebrow: Small label above the heading
heading: The big headline
intro: The paragraph under the headline
cardsTitle: Heading for an optional grid of cards
cards:
  - { title: Card title, text: Card text, href: /optional-link }
contactForm: true   # show the "Request your discovery call" form (default)
```

Everything below the second `---` is the page body in normal Markdown.

## Running it locally

```sh
npm install
npm run dev      # live preview at http://localhost:4321
npm run build    # production build into dist/
```
