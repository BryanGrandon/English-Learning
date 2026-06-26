import { defineCollection } from 'astro:content'
import { glob } from 'astro/loaders'
import { z } from 'astro/zod'

const grammar = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/grammar' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    level: z.string(),
    topic: z.string(),
    order: z.number(),
  }),
})

export const collections = { grammar }
