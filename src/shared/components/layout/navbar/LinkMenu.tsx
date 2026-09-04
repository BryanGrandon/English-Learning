import { cn } from '@shared/lib/cn'

interface Props {
  href: string
  text: string
  selected: string
  forPhone?: boolean
  onClick?: () => void
}

const LinkMenu = ({ href, text, selected, forPhone = false, onClick }: Props) => {
  const comparison = selected.toLocaleLowerCase() == text.toLocaleLowerCase()

  let selectedClass = ''

  if (forPhone) selectedClass = comparison ? 'text-brand p-4' : 'p-4'
  else selectedClass = comparison ? 'border-b-2 border-brand px-1' : ''

  return (
    <a href={href} className={cn('  text-center block ', 'navigation-link', selectedClass)} onClick={onClick}>
      {text}
    </a>
  )
}

export default LinkMenu
