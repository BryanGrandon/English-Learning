import { type IconVariations } from '@shared/components/icons/icon-variation'
import Icons from '@shared/components/icons/Icons'
import './lesson-block.css'

type TypeCard = 'section' | 'topic' | 'card' | 'remember'

type Props = {
  icon: IconVariations
  children: React.ReactNode
  title: string
  type?: TypeCard
  background?: string
  className?: string
}

const LessonCard = ({ title, icon, children, background = '', type = 'card', className = '' }: Props) => {
  const HEX_COLOR_REGEX = /^#(?:[0-9A-Fa-f]{3}|[0-9A-Fa-f]{4}|[0-9A-Fa-f]{6}|[0-9A-Fa-f]{8})$/
  const isHex = (color: string) => HEX_COLOR_REGEX.test(color)

  const hasBackground = isHex(background)
  const customStyle = {
    borderColor: hasBackground ? background : undefined,
    backgroundColor: hasBackground ? (background.length > 6 ? `${background}25` : `${background}2`) : undefined,
  }

  const types = {
    section: {
      title: <h2>{title}</h2>,
      icon: <Icons variant={icon} size={20} background={true} />,
      class: `lesson-card-config-1`,
    },
    topic: {
      title: <h3>{title}</h3>,
      icon: <Icons variant={icon} size={20} background={true} />,
      class: `lesson-card-config-1`,
    },
    card: {
      title: <p className='font-semibold text-lg'>{title}</p>,
      icon: <Icons variant={icon} size={18} />,
      class: `lesson-card-config-1`,
    },
    remember: {
      title: <p className='font-semibold text-lg'>{title}</p>,
      icon: <Icons variant={icon} size={40} background={true} />,
      class: `lesson-card-config-2`,
    },
  }

  const config = types[type]

  return (
    <section
      className={`grid ${config.class} items-center p-4 bg-mdx-surface border border-mdx-border rounded-xl mdx-shadow  ${className}`}
      style={customStyle}
    >
      <section className='grid items-center justify-center p-2' style={{ gridArea: 'icon' }}>
        {config.icon}
      </section>

      <section style={{ gridArea: 'title' }} className={`px-2 ${type == 'card' ? 'border-b border-inherit pb-2' : ''}`}>
        {config.title}
      </section>

      <section className='grid gap-3 justify-start items-start w-full h-full pt-3' style={{ gridArea: 'content' }}>
        {children}
      </section>
    </section>
  )
}

export default LessonCard
