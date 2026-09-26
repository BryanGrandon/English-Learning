import { defineCollection } from 'astro:content'
import { glob } from 'astro/loaders'
import { z } from 'astro/zod'

const grammar = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/grammar' }),
  schema: z.object({
    key: z.string(),
    title: z.string(),
    translation: z.string(),
    topic: z.string(),
    level: z.union([
      z.enum(['A1', 'A2', 'B1', 'B2', 'C1', 'C2']),
      z.array(z.enum(['A1', 'A2', 'B1', 'B2', 'C1', 'C2'])),
    ]),
    theme: z.string(),
  }),
})

export const collections = { grammar }
