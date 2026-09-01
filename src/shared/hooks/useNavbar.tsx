import { NAVIGATION } from '@shared/components/layout/navbar/navbar.config'
import { useState } from 'react'

const useNavbar = () => {
  const [selected, setSelected] = useState('home')
  const CONTENT_CLASS = 'article'

  // Add the same class to each container so that the observer can detect them.
  NAVIGATION.forEach((el) => {
    const $article = document.getElementById(el.nav)
    $article?.classList.add(CONTENT_CLASS)
  })

  const visibleSectionListener = () => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(({ isIntersecting, target }) => {
          if (isIntersecting) setSelected(target.id ?? 'home')
        })
      },
      { rootMargin: '-30% 0px -70% 0px' },
    )
    const $articles = document.querySelectorAll(`.${CONTENT_CLASS}`)
    $articles.forEach((article) => observer.observe(article))
  }

  return { selected, visibleSectionListener }
}

export default useNavbar
