import { useEffect } from 'react'
import { cn } from '@shared/lib/cn'
import useNavbar from '@shared/hooks/useNavbar'
import ThemeToggle from '@shared/components/ui/theme-toggle/ThemeToggle'
import { NAVIGATION } from './navbar.config'
import { clickHamburgerMenu } from '@shared/components/ui/hamburger-menu-animation/clickHamburgerMenu'
import HamburgerMenuAnimation from '@shared/components/ui/hamburger-menu-animation/HamburgerMenuAnimation'

const Navbar = () => {
  const { selected, visibleSectionListener } = useNavbar()

  useEffect(() => {
    visibleSectionListener()
    // Close HamburgerMenu in click Navigation link in phone
    const $links = document.querySelectorAll('.navigation-link')
    $links.forEach((el) => {
      el.addEventListener('click', clickHamburgerMenu)
      return () => el.removeEventListener('click', clickHamburgerMenu)
    })
  }, [])

  const clickOpenAndCloseMenu = () => document.getElementById('menu-phone')?.classList.toggle('translate-y-0')

  return (
    <nav
      id='navbar'
      className='block sticky top-0 inset-x-0  transition-transform duration-350 translate-0 z-20 font-display '
    >
      <article className='flex justify-between items-center max-w-350 mx-auto p-4'>
        <a href='/' className='text-xl'>
          Logo.
        </a>
        <section className='hidden md:flex gap-4 capitalize '>
          {NAVIGATION.map((el) => (
            <a
              key={el.id}
              href={el.url}
              className={` hover:text-text-primary ${selected == el.nav.toLowerCase() ? 'border-b-2 border-violet-500' : ''}`}
            >
              {el.nav}
            </a>
          ))}
        </section>
        <div className='hidden md:flex gap-4 items-center'>
          <ThemeToggle />
        </div>
        <div className='flex gap-6 items-center md:hidden'>
          <ThemeToggle />
          <button onClick={clickOpenAndCloseMenu} className='flex md:hidden justify-center items-center h-4 w-5'>
            <HamburgerMenuAnimation />
          </button>
        </div>
      </article>
      <article
        id='menu-phone'
        className='fixed right-2 top-15 rounded-xl overflow-hidden bg-underlay-light dark:bg-underlay-dark z-10 h-fit transition-transform duration-650 -translate-y-100'
      >
        <section className='flex flex-col justify-center  shadow shadow-gray-600 dark:shadow-gray-100 min-w-60'>
          {NAVIGATION.map((el) => (
            <a
              onClick={clickOpenAndCloseMenu}
              key={el.id}
              href={el.url}
              className={`navigation-link text-center p-4 font-xl capitalize font-semibold hover:text-secondary ${selected == el.nav.toLowerCase() ? 'bg-primary text-white' : ''}`}
            >
              {el.nav}
            </a>
          ))}
        </section>
      </article>
    </nav>
  )
}

export default Navbar
