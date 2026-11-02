import { Sun, Moon } from 'lucide-react'
import { useEffect, useState } from 'react'

const LightDarkButton = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    const currentTheme = document.documentElement.dataset.theme

    setTheme(currentTheme === 'dark' ? 'dark' : 'light')
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'

    document.documentElement.dataset.theme = newTheme
    localStorage.setItem('theme', newTheme)

    setTheme(newTheme)
  }

  return (
    <button
      type='button'
      onClick={toggleTheme}
      aria-label={theme === 'dark' ? 'Turn on light mode' : 'Turn on dark mode'}
      title={theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
      className='rounded-full cursor-pointer text-foreground transition-colors hover:bg-surface-hover'
    >
      <span className='relative flex size-5 items-center justify-center'>
        <Sun
          size={20}
          className={`absolute transition-all duration-300 ease-in-out ${
            theme === 'dark' ? 'rotate-0 scale-100 opacity-100' : 'rotate-90 scale-0 opacity-0'
          }`}
        />
        <Moon
          size={20}
          className={`absolute transition-all duration-300 ease-in-out ${
            theme === 'dark' ? '-rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'
          }`}
        />
      </span>
    </button>
  )
}

export default LightDarkButton
