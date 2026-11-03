import { useState } from 'react'
import { cn } from '@shared/lib/cn'

import { NAVBAR_ROUTES } from '@config/routes'
import LightDarkButton from '@shared/components/ui/LightDarkButton'
import MenuButton from '@shared/components/ui/MenuButton'
import Brand from '@shared/components/ui/Brand'

const Navbar = () => {
  const selected = window.location.pathname.split('/')[1] || 'home'
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav id='navbar' className='fixed top-0 inset-x-0 flex z-10 flex-col border-b border-divider bg-background px-4'>
      <article className='max-width'>
        <article className='flex justify-between items-center py-3 md:py-0'>
          <Brand />
          <ul className='hidden md:flex justify-between gap-4'>
            {NAVBAR_ROUTES.map((el) => (
              <li key={el.id}>
                <a
                  href={el.href}
                  className={cn(
                    `border-b-2 py-3 px-4 block hover:border-brand transition-all duration-300 hover:text-brand`,
                    selected == el.label.toLowerCase() ? 'border-brand' : 'border-transparent',
                  )}
                >
                  {el.label}
                </a>
              </li>
            ))}
          </ul>
          <div className='flex items-center gap-4'>
            <LightDarkButton />
            <MenuButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} className='flex md:hidden' />
          </div>
        </article>
        {isOpen && (
          <article className='border-t border-divider py-2'>
            <ul>
              {NAVBAR_ROUTES.map((el) => (
                <a
                  href={el.href}
                  className={cn(`block p-4 text-center`, selected == el.label.toLowerCase() ? 'bg-brand' : '')}
                  onClick={() => setIsOpen(!isOpen)}
                >
                  {el.label}
                </a>
              ))}
            </ul>
          </article>
        )}
      </article>
    </nav>
  )
}

export default Navbar
