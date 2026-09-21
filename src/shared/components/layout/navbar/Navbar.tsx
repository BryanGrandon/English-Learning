import { cn } from '@shared/lib/cn'
import { NAVBAR } from '@shared/utilities/config/navbar'
import NavbarLink from './NavbarLink'

const Navbar = () => {
  return (
    <header className={cn('z-20 bg-gray-900 p-4', 'divider')}>
      <article className={cn('flex items-center justify-between', 'max-width')}>
        <h3>Learning English</h3>

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
