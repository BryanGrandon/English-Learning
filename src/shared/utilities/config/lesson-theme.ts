import { type LucideIcon } from 'lucide-react'
import { isHex } from '../color/isHex'

type LessonTheme = {
  color: string
  icon: LucideIcon
}

export const createLessonTheme = ({ color, icon }: LessonTheme) => {
  if (!isHex(color)) throw new Error(`Invalid color: ${color}. Color must be a valid hex code.`)

  return {
    color,
    icon,
    background: `${color}15`,
  }
}
