import type { SVGProps } from 'react'

interface Props extends SVGProps<SVGSVGElement> {
  title: string
  color?: string
  strokeColor?: string
  strokeWidth?: number
  dashArray?: string
  letterSpacing?: number
}

const TitleOfTheIllustration = ({
  title,
  color = 'var(--color-brand)',
  strokeColor = 'var(--color-text)',
  strokeWidth = 1.5,
  dashArray = '5 8',
  letterSpacing = -4,
  ...props
}: Props) => {
  const text = title.toUpperCase()

  return (
    <svg viewBox='0 0 1440 240' fill='none' role='img' aria-label={title} {...props}>
      {/* Filled letters */}
      <text
        x='50%'
        y='85%'
        textAnchor='middle'
        fontFamily='Arial, Helvetica, sans-serif'
        fontSize='190'
        fontWeight='900'
        letterSpacing={letterSpacing}
        fill={color}
      >
        {text}
      </text>

      {/* Dashed outline */}
      <text
        x='50.5%'
        y='82%'
        textAnchor='middle'
        fontFamily='Arial, Helvetica, sans-serif'
        fontSize='190'
        fontWeight='900'
        letterSpacing={letterSpacing}
        fill='none'
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeDasharray={dashArray}
        strokeLinejoin='round'
        paintOrder='stroke'
      >
        {text}
      </text>
    </svg>
  )
}

export default TitleOfTheIllustration
