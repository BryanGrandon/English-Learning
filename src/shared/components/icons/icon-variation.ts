import {
  AlertTriangle,
  Blocks,
  BookOpen,
  CircleX,
  Crosshair,
  Fingerprint,
  Lightbulb,
  MapPin,
  Quote,
  Sparkles,
} from 'lucide-react'

const ICONS = {
  position: MapPin,
  structure: Blocks,
  usage: BookOpen,
  example: Lightbulb,
  important: AlertTriangle,
  tip: Sparkles,
  mistake: CircleX,
  focus: Crosshair,
  reference: Quote,
  unique: Fingerprint,
  identify: Fingerprint,
} as const

type IconName = keyof typeof ICONS

type IconProps = {
  name: IconName
  size?: number
  className?: string
}

export { ICONS, type IconProps, type IconName }
