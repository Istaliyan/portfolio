# ML / Geospatial Engineering Portfolio

Bilingual Astro portfolio scaffold designed for static deployment to GitHub Pages.

## Local development

```sh
npm install
npm run dev
```

The configured local base path is `/portfolio/`.

## Replace before publishing

1. Update `site`, `base`, and the placeholder GitHub username in `astro.config.mjs`.
2. Replace identity and contact values in `src/lib/site.ts`.
3. Replace the placeholder project JSON files in `src/content/projects/`.
4. Add a `youtubeId` to a project to activate its click-to-load video facade.
5. In the GitHub repository, choose **GitHub Actions** as the Pages source.

## Commands

- `npm run dev` — local development server
- `npm run check` — Astro and TypeScript diagnostics
- `npm run build` — production build
- `npm run preview` — preview the built site
