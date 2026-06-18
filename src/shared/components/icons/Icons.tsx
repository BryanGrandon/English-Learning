import { ICON_VARIATIONS, type IconVariations } from './icon-variation'

type IconsProps = {
  variant: IconVariations
  size?: number
  color?: string
  stroke?: number
  background?: boolean
}

const Icons = ({ variant, size = 18, stroke, background = false }: IconsProps) => {
  const config = ICON_VARIATIONS[variant]
  const Icon = config.icon

  const stylesCustom = {
    background: config.background,
  }

  if (background) {
    return (
      <span className={`p-2 rounded-full grid items-center justify-center mdx-shadow `} style={stylesCustom}>
        <Icon size={size} color={config.color} strokeWidth={2} />
      </span>
    )
  } else {
    return <Icon size={size} color={config.color} strokeWidth={stroke} />
  }
}

export default Icons
