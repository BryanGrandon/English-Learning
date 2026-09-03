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

  if (forPhone) selectedClass = comparison ? 'bg-primary text-white' : ''
  else selectedClass = comparison ? 'border-b-2 border-violet-500' : ''

  return (
    <a href={href} className={cn('navigation-link', selectedClass)} onClick={onClick}>
      {text}
    </a>
  )
}

export default LinkMenu
