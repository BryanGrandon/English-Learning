import { cn } from '@shared/lib/cn'
import { HERO } from '../utilities/config/home'
import { ArrowRight } from 'lucide-react'

type Hero = {
  background?: string
}

const Hero = ({ background }: Hero) => {
  const { title, highlight, description, img } = HERO

  return (
    <header className={cn('px-4 py-8 min-h-100 w-full border-b border-divider', background)}>
      <article className={cn('flex flex-col gap-6', 'max-width')}>
        <div className='inline-flex gap-2 border rounded-2xl py-1 px-6 w-fit border-accent bg-accent/10'>
          <span>Learn English</span> <span>●</span>
          <span className='text-brand'>Build your future</span>
        </div>
        <article className='flex justify-between items-center gap-6 flex-wrap-reverse'>
          <section className='space-y-6'>
            <h1 className='text-5xl flex flex-col font-bold'>
              {title}, <span className='text-brand font-semibold'>{highlight}</span>
            </h1>
            <p>{description}</p>
            <button
              className={cn(
                'rounded-4xl flex gap-3 py-2 px-6 bg-brand text-white shadow shadow-gray-800 cursor-pointer',
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
      </article>
    </header>
  )
}

export default Hero
