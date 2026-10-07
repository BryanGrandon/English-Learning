import { cn } from '@shared/lib/cn'
import { NAVBAR } from './navbar.config'
import NavbarLink from './NavbarLink'
import { URLS_NAVBAR } from '@config/urls'

const Navbar = () => {
  return (
    <header className={cn('z-20 bg-surface-layout p-4', 'divider')}>
      <article className={cn('flex items-center justify-between', 'max-width')}>
        <a href={URLS_NAVBAR.HOME} className='cursor-default'>
          Learning English
        </a>

        <nav className='flex space-x-6'>
          {NAVBAR.map((item) => (
            <NavbarLink key={item.title} title={item.title} url={item.url} items={item.items} />
          ))}
        </nav>

        <button type='button'>Light / Dark</button>
      </article>
    </header>
  )
}

export default Navbar
