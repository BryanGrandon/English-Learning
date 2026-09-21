import { cn } from '@shared/lib/cn'
import { NAVBAR } from './navbar.config'
import NavbarLink from './NavbarLink'

const Navbar = () => {
  return (
    <header className={cn('z-20 bg-gray-900 p-4', 'divider')}>
      <article className={cn('flex items-center justify-between', 'max-width')}>
        <a href={'/'} className='cursor-default'>
          Learning English
        </a>

        <nav className='flex space-x-6'>
          {NAVBAR.map((item) => (
            <NavbarLink key={item.data.title} title={item.data.title} url={item.data.url} items={item.data.items} />
          ))}
        </nav>

        <button type='button'>Light / Dark</button>
      </article>
    </header>
  )
}

export default Navbar
