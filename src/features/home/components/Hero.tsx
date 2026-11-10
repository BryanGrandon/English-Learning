import { cn } from '@shared/lib/cn'
import { HERO } from '../config/hero.ts'
import { ArrowRight, BookOpen } from 'lucide-react'
import Button from '@shared/components/ui/Button'
import HeroIllustration from './EnglishIllustration.tsx'

type Hero = {
  background?: string
}

const Hero = ({ background }: Hero) => {
  const { title, highlight, description, img } = HERO

  return (
    <header className={cn('relative w-full overflow-hidden border-b border-divider px-4 py-20 md:py-24', background)}>
      <div className={cn('mx-auto grid min-h-100 max-w-7xl items-center gap-12 md:grid-cols-2', 'max-width')}>
        <section className='flex flex-col items-start gap-6'>
          <div className='inline-flex items-center gap-3 rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-sm'>
            <span className='font-medium'>Learn English</span>
            <span className='size-1.5 rounded-full bg-accent' />
            <span className='text-brand'>Build your future</span>
          </div>

          <h1 className='text-4xl font-bold tracking-tight'>
            {title} <span className='block text-brand'>{highlight}</span>
          </h1>

          <p className='text-base text-foreground/70 '>{description}</p>

          <div className='flex items-center gap-2'>
            <Button text='Start Learning' rightIcon={ArrowRight} ariaLabel='Start learning' primary />
            <Button text='Explore Courses' ariaLabel='Explore courses' leftIcon={BookOpen} />
          </div>
        </section>

        <div className='relative flex items-center justify-center'>
          {/* Background glow */}
          <div className='pointer-events-none absolute size-64 rounded-full bg-brand/20 blur-3xl sm:size-80' />

          {/* Illustration */}
          <div className='relative z-10 w-full max-w-md'>
            <HeroIllustration className='h-auto w-full' />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Hero
