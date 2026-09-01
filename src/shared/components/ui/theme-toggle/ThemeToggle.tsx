import { cn } from '@shared/lib/cn'
import { Moon, Sun } from 'lucide-react'
import useTheme from '../../../../features/home/hooks/useTheme'

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme()

  const moon = isDark ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'
  const sun = isDark ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'

  return (
    <button
      onClick={toggleTheme}
      className='group relative flex size-6 items-center justify-center rounded-full hover:bg-gray-200 dark:hover:bg-gray-700'
    >
      <Moon size={20} className={cn('absolute transition-all duration-300 ease-in-out', moon)} />
      <Sun size={20} className={cn('absolute transition-all duration-300 ease-in-out', sun)} />
    </button>
  )
}

export default ThemeToggle
