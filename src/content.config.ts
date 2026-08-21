import { defineCollection } from 'astro:content'
import { glob } from 'astro/loaders'
import { z } from 'astro/zod'

const grammar = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/grammar' }),
  schema: z.object({
    title: z.string(),
    translation: z.string(),
    level: z.enum(['A1', 'A2', 'B1', 'B2', 'C1', 'C2']),
    topic: z.string(),
    order: z.number(),
  }),
})

export const collections = { grammar }
