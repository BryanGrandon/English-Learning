import type { EnglishLevel } from '@shared/constants/english-level'

type GetLevelColorForStyle = {
  level: EnglishLevel
  percentage?: number
}

type Background = {
  color: string
  percentage?: number
}

export const getBackgroundForStyle = ({ color, percentage = 30 }: Background) => {
  let proportion = percentage >= 0 && percentage <= 100 ? percentage : 30
  return `color-mix(in srgb, ${color} ${proportion}%, transparent)`
}

export const getLevelColorForStyle = ({ level, percentage = 15 }: GetLevelColorForStyle) => {
  const color = `var(--color-level-${level.toLowerCase()})`
  const background = getBackgroundForStyle({ color, percentage })
  return { color, background }
}
