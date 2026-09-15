type TransparentMix = {
  color: string
  percentage?: number
}

export const transparentMix = ({ color, percentage = 30 }: TransparentMix) => {
  let proportion = percentage >= 0 && percentage <= 100 ? percentage : 30

  return `color-mix(in srgb, ${color} ${proportion}%, transparent)`
}
