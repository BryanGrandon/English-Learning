import {
  Award,
  BookOpen,
  Brain,
  GraduationCap,
  Languages,
  Lightbulb,
  MessageCircle,
  Rocket,
  Star,
  TrendingUp,
} from 'lucide-react'

import TitleOfTheIllustration from '@shared/components/ui/TitleOfTheIllustration'

const LevelIllustration = ({ text }: { text: string }) => {
  return (
    <section className='relative mx-auto flex w-full max-w-xl items-center justify-center py-16'>
      {/* Decorative background */}
      <div className='absolute left-1/2 top-1/2 size-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/10 blur-3xl' />

      {/* Main title */}
      <TitleOfTheIllustration title={text} className='relative w-full' />

      {/* Decorative icons */}
      <BookOpen className='absolute left-[5%] top-[12%] size-8 -rotate-12 text-brand/70 sm:size-10' />

      <Star className='absolute left-[25%] top-0 size-6 rotate-12 text-amber-400/80 sm:size-8' />

      <GraduationCap className='absolute right-[8%] top-[8%] size-9 rotate-12 text-brand/70 sm:size-11' />

      <Rocket className='absolute right-[25%] top-[2%] size-7 -rotate-12 text-purple-400/80 sm:size-9' />

      <Languages className='absolute bottom-[5%] left-[8%] size-8 rotate-12 text-brand/70 sm:size-10' />

      <TrendingUp className='absolute bottom-0 left-[38%] size-7 -rotate-12 text-emerald-400/80 sm:size-9' />

      <MessageCircle className='absolute bottom-[8%] right-[10%] size-8 -rotate-12 text-brand/70 sm:size-10' />

      <Brain className='absolute right-[35%] top-[5%] size-7 rotate-12 text-purple-400/80 sm:size-9' />

      <Award className='absolute bottom-[2%] right-[38%] size-7 rotate-6 text-amber-400/80 sm:size-9' />

      <Lightbulb className='absolute left-[15%] top-[48%] size-6 -rotate-12 text-sky-400/80 sm:size-8' />
    </section>
  )
}

export default LevelIllustration
