const TYPES_OF_HEXADECIMAL_FORMATS = {
  short: {
    hex: /^#(?:[0-9A-Fa-f]{3})$/,
    alpha: /^#(?:[0-9A-Fa-f]{4})$/,
    both: /^#(?:[0-9A-Fa-f]{3}|[0-9A-Fa-f]{4})$/,
  },
  long: {
    hex: /^#(?:[0-9A-Fa-f]{6})$/, // default
    alpha: /^#(?:[0-9A-Fa-f]{8})$/,
    both: /^#(?:[0-9A-Fa-f]{6}|[0-9A-Fa-f]{8})$/,
  },
  both: {
    hex: /^#(?:[0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/,
    alpha: /^#(?:[0-9A-Fa-f]{4}|[0-9A-Fa-f]{8})$/,
    both: /^#(?:[0-9A-Fa-f]{3}|[0-9A-Fa-f]{4}|[0-9A-Fa-f]{6}|[0-9A-Fa-f]{8})$/,
  },
} as const

type HexadecimalFormat = keyof typeof TYPES_OF_HEXADECIMAL_FORMATS
type HexadecimalType = keyof typeof TYPES_OF_HEXADECIMAL_FORMATS.short

type CheckTheHexadecimalValue = {
  color: string
  format?: HexadecimalFormat
  type?: HexadecimalType
}

const checkTheHexadecimalValue = ({ color, format = 'long', type = 'hex' }: CheckTheHexadecimalValue) => {
  const regex = TYPES_OF_HEXADECIMAL_FORMATS[format][type]
  return regex.test(color)
}

export { checkTheHexadecimalValue }
