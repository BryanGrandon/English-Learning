import {
  BookOpen,
  Brain,
  GraduationCap,
  Languages,
  Lightbulb,
  MessageCircle,
  Pencil,
  SpellCheck,
  Star,
} from 'lucide-react'

import TitleOfTheIllustration from '@shared/components/ui/TitleOfTheIllustration'

const EnglishIllustration = () => {
  return (
    <section className='relative mx-auto flex w-full max-w-xl items-center justify-center py-16 '>
      {/* Decorative background */}
      <div className='absolute left-1/2 top-1/2 size-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/10 blur-3xl' />

      {/* Main title */}
      <TitleOfTheIllustration title='English' className='relative w-full' />

      {/* Decorative icons */}
      <BookOpen className='absolute left-[5%] top-[12%] size-8 -rotate-12 text-brand/70 sm:size-10' />
      <Lightbulb className='absolute left-[23%] top-0 size-7 rotate-12 text-amber-400/80 sm:size-9' />
      <GraduationCap className='absolute right-[8%] top-[8%] size-9 rotate-12 text-brand/70 sm:size-11' />
      <Star className='absolute right-[25%] top-[2%] size-5 rotate-12 text-amber-400/80 sm:size-6' />
      <Languages className='absolute bottom-[5%] left-[10%] size-8 rotate-12 text-brand/70 sm:size-10' />
      <Pencil className='absolute bottom-0 left-[40%] size-7 -rotate-45 text-emerald-400/80 sm:size-9' />
      <MessageCircle className='absolute bottom-[8%] right-[12%] size-8 -rotate-12 text-brand/70 sm:size-10' />
      <Brain className='absolute right-[35%] top-[5%] size-6 -rotate-12 text-purple-400/80 sm:size-8' />
      <SpellCheck className='absolute bottom-[2%] right-[38%] size-7 rotate-6 text-sky-400/80 sm:size-9' />
    </section>
  )
}

export default EnglishIllustration
