import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const localizedText = z.object({
  es: z.string(),
  en: z.string(),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/projects' }),
  schema: z.object({
    title: localizedText,
    summary: localizedText,
    problem: localizedText,
    year: z.number(),
    featured: z.boolean().default(false),
    tags: z.array(z.string()),
    technologies: z.array(z.string()),
    architecture: z.array(localizedText),
    results: z.array(
      z.object({
        value: z.string(),
        label: localizedText,
      }),
    ),
    repositoryUrl: z.url().optional(),
    demoUrl: z.url().optional(),
    youtubeId: z.string().optional(),
  }),
});

export const collections = { projects };
