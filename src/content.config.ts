import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const localizedText = z.object({
  es: z.string(),
  en: z.string(),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/projects' }),
  schema: ({ image }) => z.object({
    title: localizedText,
    summary: localizedText,
    year: z.number(),
    featured: z.boolean().default(false),
    tags: z.array(z.string()),
    cover: image(),
    coverAlt: localizedText,
    repositoryUrl: z.url().optional(),
    demoUrl: z.url().optional(),
  }),
});

const caseStudies = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/case-studies' }),
});

export const collections = { projects, caseStudies };
