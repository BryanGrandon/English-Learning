import { clickHamburgerMenu } from '@shared/components/ui/hamburger-menu-animation/clickHamburgerMenu'
import { NAVBAR } from '@shared/utilities/config/navbar'
import { useEffect, useState } from 'react'

type simple = {
  url: string
  title: string
}

const useNavbar = () => {
  const [statusModal, setStatusModal] = useState(false)
  const [contentForModal, setContentForModal] = useState<simple[]>([])

  const navbarActions = {
    status: statusModal,
    actionsForModal: {
      open: () => setStatusModal(true),
      close: () => setStatusModal(false),
      toggle: () => setStatusModal(!statusModal),
    },
    actionsForContent: {
      getContent: contentForModal,
      setContent: (content: simple[]) => setContentForModal(content),
    },
  }

  const getSelectedLink = () => {
    const currentPath = window.location.pathname
    const selectedLink = NAVBAR.find((el) => el.data.url === currentPath)
    return selectedLink?.data.url || 'home'
  }

  return { navbarActions, getSelectedLink, contentForModal }
}

export default useNavbar
