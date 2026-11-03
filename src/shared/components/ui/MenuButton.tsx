import { Menu, X } from 'lucide-react'

type MenuButtonProps = {
  isOpen: boolean
  onClick: () => void
  className: string
}

const MenuButton = ({ isOpen, onClick, className = '' }: MenuButtonProps) => {
  return (
    <button
      type='button'
      onClick={onClick}
      aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
      aria-expanded={isOpen}
      className={`relative flex h-10 w-10 items-center justify-center cursor-pointer ${className}`}
    >
      <Menu
        className={`absolute h-6 w-6 transition-all duration-300 ease-in-out ${
          isOpen ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'
        }`}
      />

      <X
        className={`absolute h-6 w-6 transition-all duration-300 ease-in-out ${
          isOpen ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'
        }`}
      />
    </button>
  )
}

export default MenuButton
