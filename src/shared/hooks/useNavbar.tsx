import { clickHamburgerMenu } from '@shared/components/ui/hamburger-menu-animation/clickHamburgerMenu'
import { useEffect, useState } from 'react'

const useNavbar = () => {
  useEffect(() => {
    const $links = document.querySelectorAll('.navigation-link')
    $links.forEach((el) => {
      el.addEventListener('click', clickHamburgerMenu)
      return () => el.removeEventListener('click', clickHamburgerMenu)
    })
  }, [])

  const NAVIGATION = [
    {
      id: 0,
      nav: 'home',
      url: '/',
    },
    {
      id: 1,
      nav: 'Learning',
      url: '/learning',
    },
    {
      id: 2,
      nav: 'vocabulary',
      url: '/vocabulary',
    },
  ]

  const getSelectedLink = () => {
    const currentPath = window.location.pathname
    const selectedLink = NAVIGATION.find((el) => el.url === currentPath)
    return selectedLink?.nav || 'home'
  }

  return { NAVIGATION, getSelectedLink }
}

export default useNavbar
