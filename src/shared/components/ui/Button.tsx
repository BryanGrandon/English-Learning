import { cn } from '@shared/lib/cn'
import type { LucideIcon } from 'lucide-react'

type ButtonProps = {
  text: string
  ariaLabel?: string
  primary?: boolean
  onClick?: () => void
  icon?: LucideIcon
  rightIcon?: LucideIcon
  leftIcon?: LucideIcon
}

const Button = ({
  text,
  ariaLabel,
  primary = false,
  onClick,
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
}: ButtonProps) => {
  return (
    <button
      type='button'
      aria-label={ariaLabel}
      onClick={onClick}
      className={cn(
        'group inline-flex items-center gap-3 px-5 py-2 text-accent font-semibold tracking-wide border border-transparent',
        'transition-all duration-300 cursor-pointer shadow-md rounded-full',
        'active:scale-95 hover:text-white hover:bg-accent',
        primary ? 'hover:shadow-xl shadow-lg text-white bg-brand' : 'hover:text-white border-accent ',
      )}
    >
      {LeftIcon && <LeftIcon size={20} className='transition-transform duration-400 group-hover:-rotate-7' />}
      {text}
      {RightIcon && <RightIcon size={20} className='transition-transform duration-300 group-hover:translate-x-1' />}
    </button>
  )
}

export default Button
