import type { LucideIcon } from 'lucide-react'

type Levels = 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2'

type Course = {
  title: string
  description: string
  url: string
  level: Levels
  icon: LucideIcon
  color: {
    dark: string
    light: string
  }
}

export type { Course }
