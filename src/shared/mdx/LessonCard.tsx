import { type IconVariations } from '@shared/components/icons/icon-variation'
import Icons from '@shared/components/icons/Icons'
import './lesson-card.css'

type TypeCard = 'section' | 'topic' | 'card'

type Props = {
  icon: IconVariations
  children: React.ReactNode
  title: string
  type?: TypeCard
  background?: string
}

const LessonCard = ({ title, icon, children, background = '', type = 'card' }: Props) => {
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
  }

  const config = types[type]

  return (
    <section
      className={`grid ${config.class} items-center gap-3 p-4 bg-mdx-surface border border-mdx-border rounded-xl mdx-shadow`}
      style={customStyle}
    >
      <section className='grid items-center justify-center' style={{ gridArea: 'icon' }}>
        {config.icon}
      </section>

      <section style={{ gridArea: 'title' }} className={type == 'card' ? 'border-b border-inherit pb-2' : ''}>
        {config.title}
      </section>

      <section className='grid gap-2 justify-start' style={{ gridArea: 'content' }}>
        {children}
      </section>
    </section>
  )
}

export default LessonCard
