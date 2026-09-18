import useNavbar from '@shared/hooks/useNavbar'
import { cn } from '@shared/lib/cn'
import { NAVBAR } from '@shared/utilities/config/navbar'
import { useEffect, useState } from 'react'

type NavbarLinkProps = {
  title: string
  url?: string
  items?: {
    title: string
    url: string
  }[]
}

const NavbarLink = ({ title, url, items }: NavbarLinkProps) => {
  const { navbarActions } = useNavbar()
  const [menuDrop, setMenuDrop] = useState(false)

  const click = () => {
    setMenuDrop((prev) => !prev)
  }

  if (url) {
    return <a href={url}>{title}</a>
  }

  return (
    <>
      <button onClick={click}>{title}</button>
      <article
        className={cn(
          'absolute top-18 min-h-40 w-fit ',
          'bg-gray-900 rounded-xl border border-gray-500',
          'overflow-hidden z-10',
          'transition-all duration-150',
        )}
        style={{
          opacity: menuDrop ? 1 : 0,
          visibility: menuDrop ? 'visible' : 'hidden',
          transform: menuDrop ? 'translateY(0)' : 'translateY(-0.5rem)',
        }}
      >
        {items?.map((el) => (
          <a key={el.title} href={el.url} className='block px-4 py-2 hover:bg-brand'>
            {el.title}
          </a>
        ))}
      </article>
    </>
  )
}

const Navbar = () => {
  return (
    <>
      <header className={cn('p-4 z-20 bg-gray-900 ', ' divider')}>
        <article className={cn('flex justify-between', 'max-width')}>
          <h3>Learning English</h3>
          <nav className='space-x-6 flex'>
            {NAVBAR.map((el) => (
              <NavbarLink key={el.data.title} url={el.data.url} items={el.data.items} title={el.data.title} />
            ))}
          </nav>
          <button> Light / Dark </button>
        </article>
      </header>
    </>
  )
}

export default Navbar
