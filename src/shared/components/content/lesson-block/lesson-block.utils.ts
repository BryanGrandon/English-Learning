import { checkTheHexadecimalValue } from '@shared/utilities/color/checkTheHexadecimalValue'
import type { LucideIcon } from 'lucide-react'

const createBackground = (color: string) => {
  const ALPHA = { light: '1a', dark: '26' }
  return {
    background: { dark: color + ALPHA.dark, light: color + ALPHA.light },
  }
}

const createVariants = ({ icon, color }: { icon: LucideIcon; color: string }) => {
  const hex = checkTheHexadecimalValue({ color })
  if (!hex) throw Error(`Invalid hexadecimal color: ${color}, The format is #ffffff not #fff`)
  return {
    icon,
    color,
    ...createBackground(color),
  }
}

export { createVariants }
