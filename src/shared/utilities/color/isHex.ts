const HEX_COLOR_REGEX = /^#(?:[0-9A-Fa-f]{3}|[0-9A-Fa-f]{4}|[0-9A-Fa-f]{6}|[0-9A-Fa-f]{8})$/

const isHex = (color: string) => HEX_COLOR_REGEX.test(color)

export { isHex }
