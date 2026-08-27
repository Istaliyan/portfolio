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
4. Replace the bilingual case studies in `src/content/case-studies/`.
5. In the GitHub repository, choose **GitHub Actions** as the Pages source.

## Authoring projects

Each project has two content sources:

- `src/content/projects/<project-id>.json` contains shared metadata used by cards, filters, page titles, cover images, and optional project links.
- `src/content/case-studies/<project-id>/es.md` and `en.md` contain the localized long-form case study. Both files are required for the build.

Store cover images in `src/assets/projects/` and reference them from JSON with a path relative to the JSON file. A cover and localized alternative text are required.

Case studies support standard Markdown images, highlighted code fences, and KaTeX notation:

````md
![Descripción accesible](../../../assets/projects/example.png)

Inline math uses $R^2$ and display math uses:

$$
R^2 = 1 - \frac{\sum_i(y_i-\hat{y}_i)^2}{\sum_i(y_i-\bar{y})^2}
$$

```python
score = model.evaluate(features, labels)
```
````

Use descriptive alternative text for every meaningful image. Keep the first heading in a case study at level two because the page title is already the level-one heading.

## Commands

- `npm run dev` — local development server
- `npm run check` — Astro and TypeScript diagnostics
- `npm run build` — production build
- `npm run preview` — preview the built site
