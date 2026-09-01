import { useState, useEffect } from 'react'

type Theme = 'light' | 'dark'

const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === 'undefined') return 'light'
    return (localStorage.getItem('theme') as Theme) ?? (document.documentElement.dataset.theme as Theme) ?? 'light'
  })

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'))
  }

  const isDark = theme === 'dark'

  return { theme, isDark, toggleTheme }
}

export default useTheme
