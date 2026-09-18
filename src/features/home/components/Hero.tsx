import { cn } from '@shared/lib/cn'
import { HERO } from '../../../shared/utilities/config/home'
import { transparentMix } from '@shared/utilities/color/transparentMix'
import { ArrowRight, ChevronRight } from 'lucide-react'
HERO

const Hero = () => {
  const { title, highlight, description, img } = HERO

  const bgLabel = transparentMix({ color: 'var(--color-brand)', percentage: 93 })

  return (
    <header className={cn('flex flex-col gap-8 justify-center px-4 py-8 min-h-100', 'divider')}>
      <div className='inline-flex gap-2 border rounded-2xl py-1 px-6 w-fit' style={{ borderColor: bgLabel }}>
        <p>Learn English</p>●
        <span className='text-brand' style={{ color: bgLabel }}>
          Build your future
        </span>
      </div>
      <article className='flex justify-between items-center gap-6 flex-wrap-reverse'>
        <section className='space-y-6'>
          <h1 className='text-5xl flex flex-col font-bold'>
            {title}, <span className='text-brand font-semibold'>{highlight}</span>
          </h1>
          <p>{description}</p>
          <button
            className={cn(
              'rounded-4xl flex gap-3 py-2 px-6 bg-brand shadow shadow-gray-800 cursor-pointer',
              'hover:scale-103 active:scale-97',
            )}
          >
            Start Learning <ArrowRight />
          </button>
        </section>
        <picture className='flex justify-center h-50 w-full sm:w-auto'>
          <img src={img.src} alt={img.alt} className=' h-full rounded-xl' />
        </picture>
      </article>
    </header>
  )
}

export default Hero
