import {
  AlertTriangle,
  Blocks,
  BookOpen,
  CircleX,
  Lightbulb,
  MapPin,
  Sparkles,
  NotebookPen,
  Target,
  History,
  Crown,
  Fingerprint,
} from 'lucide-react'

const ICON_VARIATIONS = {
  position: {
    icon: MapPin,
    color: '#a78bfa',
    background: '#8b5cf640',
  },

  structure: {
    icon: Blocks,
    color: '#22d3ee',
    background: '#06b6d440',
  },

  usage: {
    icon: BookOpen,
    color: '#60a5fa',
    background: '#3b82f640',
  },

  example: {
    icon: Lightbulb,
    color: '#34d399',
    background: '#10b98140',
  },

  note: {
    icon: NotebookPen,
    color: '#fbbf24',
    background: '#f59e0b40',
  },

  important: {
    icon: AlertTriangle,
    color: '#fb923c',
    background: '#f9731640',
  },

  tip: {
    icon: Sparkles,
    color: '#e879f9',
    background: '#d946ef40',
  },

  mistake: {
    icon: CircleX,
    color: '#f87171',
    background: '#ef444440',
  },

  focus: {
    icon: Target,
    color: '#f472b6',
    background: '#f472b620',
  },

  reference: {
    icon: History,
    color: '#818cf8',
    background: '#818cf820',
  },

  unique: {
    icon: Crown,
    color: '#facc15',
    background: '#facc1520',
  },

  identify: {
    icon: Fingerprint,
    color: '#2dd4bf',
    background: '#2dd4bf20',
  },
} as const

type IconVariations = keyof typeof ICON_VARIATIONS

export { ICON_VARIATIONS }
export type { IconVariations }
