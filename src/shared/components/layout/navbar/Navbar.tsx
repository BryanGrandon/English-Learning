import useNavbar from '@shared/hooks/useNavbar'
import ThemeToggle from '@shared/components/ui/theme-toggle/ThemeToggle'
import HamburgerMenuAnimation from '@shared/components/ui/hamburger-menu-animation/HamburgerMenuAnimation'
import LinkMenu from './LinkMenu'

const Navbar = () => {
  const { NAVIGATION, getSelectedLink } = useNavbar()

  const selectedLink = getSelectedLink()

  const clickOpenAndCloseMenu = () => document.getElementById('menu-phone')?.classList.toggle('translate-y-0')

  return (
    <nav id='navbar' className='block fixed top-0 inset-x-0 z-20 font-display'>
      <article className='flex justify-between items-center max-w-350 mx-auto p-4'>
        <a href='/' className='text-xl'>
          Logo.
        </a>
        <section className='hidden md:flex gap-4 capitalize '>
          {NAVIGATION.map((el) => (
            <LinkMenu key={el.id} href={el.url} text={el.nav} selected={selectedLink} />
          ))}
        </section>

        <div className='flex gap-6 items-center'>
          <ThemeToggle />
          <button onClick={clickOpenAndCloseMenu} className='flex md:hidden justify-center items-center h-4 w-5'>
            <HamburgerMenuAnimation />
          </button>
        </div>
      </article>

      <article
        id='menu-phone'
        className='fixed right-2 top-15 rounded-xl overflow-hidden z-10 h-fit transition-transform duration-650 -translate-y-100 test'
      >
        <section className='flex flex-col justify-center min-w-60'>
          {NAVIGATION.map((el) => (
            <LinkMenu
              key={el.id}
              href={el.url}
              text={el.nav}
              selected={selectedLink}
              onClick={clickOpenAndCloseMenu}
              forPhone
            />
          ))}
        </section>
      </article>
    </nav>
  )
}

export default Navbar
