import { defineConfig } from 'vitest/config'
import { getViteConfig } from 'astro/config'

export default getViteConfig(
  defineConfig({
    test: {
      environment: 'jsdom',
      globals: true,
      setupFiles: ['./vitest.setup.ts'],
    },
  }),
)
