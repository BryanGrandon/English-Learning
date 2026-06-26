import { type IconVariations } from '@shared/components/icons/icon-variation'
import { LESSON_BLOCK_VARIANTS } from './lesson-block-variants'
import { isHex } from '@shared/utilities/color/isHex'
import Icons from '@shared/components/icons/Icons'

type HeadingLevel = 'h2' | 'h3' | 'p'
type ContainerVariant = 'aside' | 'section' | 'article' | 'blockquote' | 'div'
type Variant = 'default' | 'highlight' // background and size of the Icon

// aside → tips, ayudas, contenido extra
// section → bloques estructurados (ej: ejemplos)
// article → contenido independiente completo
// blockquote → notas destacadas o advertencias
// div → solo si no encaja en nada (último recurso)

type Props = {
  icon: IconVariations
  children: React.ReactNode
  title: string
  container: ContainerVariant
  heading: HeadingLevel
  variant?: Variant
  background?: string
  className?: string
}

const LessonCard = ({
  title,
  icon,
  children,
  container,
  heading,
  background = '',
  className = '',
  variant = 'default',
}: Props) => {
  const hasBackground = isHex(background)

  const customStyle = {
    borderColor: hasBackground ? background : undefined,
    backgroundColor: hasBackground ? (background.length > 6 ? `${background}25` : `${background}2`) : undefined,
  }

  const config = LESSON_BLOCK_VARIANTS[variant]
  const TagTitle = heading
  const TagContainer = container

  return (
    <TagContainer
      className={`lesson-block flex flex-col gap-4 p-4 bg-mdx-surface border border-mdx-border rounded-xl mdx-shadow${className}`}
      style={customStyle}
    >
      <header className={`flex gap-4 items-center ${heading === 'p' ? 'border-b border-inherit pb-2' : ''}`}>
        <Icons variant={icon} size={config.iconSize} background={config.iconBackground} />
        <TagTitle className={`capitalize w-full ${heading === 'p' ? 'font-semibold text-lg' : ''}`}>{title}</TagTitle>
      </header>

      <section className='grid gap-4'>{children}</section>
    </TagContainer>
  )
}

export default LessonCard
