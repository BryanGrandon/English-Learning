import {
  Award,
  BookMarked,
  BookOpen,
  Brain,
  CheckCircle,
  GraduationCap,
  Layers,
  Lightbulb,
  NotebookPen,
  Sparkles,
} from 'lucide-react'

import TitleOfTheIllustration from '@shared/components/ui/TitleOfTheIllustration'

const CoursesIllustration = () => {
  return (
    <section className='relative mx-auto flex w-full max-w-xl items-center justify-center py-16'>
      {/* Decorative background */}
      <div className='absolute left-1/2 top-1/2 size-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/10 blur-3xl' />

      {/* Main title */}
      <TitleOfTheIllustration title='COURSES' className='relative w-full' />

      {/* Top decorative icons */}
      <BookOpen className='absolute left-[8%] top-[12%] size-8 -rotate-12 text-brand/70 sm:size-10' />
      <Sparkles className='absolute left-[30%] top-[2%] size-6 rotate-12 text-amber-400/80 sm:size-7' />
      <GraduationCap className='absolute right-[10%] top-[8%] size-9 rotate-12 text-brand/70 sm:size-11' />
      <Lightbulb className='absolute right-[32%] top-0 size-6 -rotate-12 text-amber-400/80 sm:size-8' />

      {/* Bottom decorative icons */}
      <NotebookPen className='absolute bottom-[5%] left-[10%] size-8 rotate-12 text-emerald-400/80 sm:size-10' />
      <BookMarked className='absolute bottom-0 left-[38%] size-7 -rotate-12 text-brand/70 sm:size-9' />
      <Award className='absolute bottom-[8%] right-[10%] size-8 rotate-12 text-amber-400/80 sm:size-10' />
      <Brain className='absolute bottom-[2%] right-[38%] size-7 rotate-6 text-purple-400/80 sm:size-9' />

      {/* Side decorative icons */}
      <Layers className='absolute left-[2%] top-1/2 size-6 -rotate-12 text-sky-400/80 sm:size-8' />
      <CheckCircle className='absolute right-[3%] top-1/2 size-6 rotate-12 text-emerald-400/80 sm:size-8' />
    </section>
  )
}

export default CoursesIllustration
