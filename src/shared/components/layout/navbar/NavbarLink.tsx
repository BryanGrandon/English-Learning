import { cn } from '@shared/lib/cn'
import { useEffect, useRef, useState } from 'react'

type NavbarLinkProps = {
  title: string
  url?: string
  items?: {
    title: string
    url: string
  }[]
}

const NavbarLink = ({ title, url, items }: NavbarLinkProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) setIsOpen(false)
    }
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [])

  if (url) {
    return (
      <a href={url} className='transition-colors hover:text-brand'>
        {title}
      </a>
    )
  }

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev)
  }

  return (
    <div ref={dropdownRef} className='relative'>
      <button
        type='button'
        onClick={toggleDropdown}
        aria-expanded={isOpen}
        className={cn('transition-colors hover:text-brand cursor-pointer')}
      >
        {title}
      </button>

      <section
        className={cn(
          'absolute top-10 left-21',
          'min-w-max overflow-hidden rounded-b-xl',
          'border border-gray-500 border-t-0 bg-gray-900',
          'transition-all duration-150',
        )}
        style={{
          opacity: isOpen ? 1 : 0,
          visibility: isOpen ? 'visible' : 'hidden',
          transform: `translate(-50%, ${isOpen ? '0' : '-0.5rem'})`,
        }}
      >
        {items?.map((item) => (
          <a key={item.title} href={item.url} className='block px-4 py-2 transition-colors hover:bg-brand'>
            {item.title}
          </a>
        ))}
      </section>
    </div>
  )
}

export default NavbarLink
