import { ICONS, type IconProps } from './icon-variation'

export function Icon({ name, size = 20, className }: IconProps) {
  const IconComponent = ICONS[name]
  return <IconComponent size={size} className={className} />
}

export default Icon
