import { createVariants } from './lesson-block.utils'
import {
  Scale,
  GitCompareArrows,
  CircleX,
  Blocks,
  FileText,
  NotebookPen,
  Lightbulb,
  Brain,
  TriangleAlert,
  Star,
  BookOpenText,
  BookOpen,
} from 'lucide-react'

const LESSON_BLOCK_VARIANTS = {
  rule: createVariants({ color: '#7c3aed', icon: Scale }),
  structure: createVariants({ color: '#2563eb', icon: Blocks }),
  definition: createVariants({ color: '#6366f1', icon: BookOpen }),
  comparison: createVariants({ color: '#0891b2', icon: GitCompareArrows }),
  example: createVariants({ color: '#16a34a', icon: FileText }),
  common_mistake: createVariants({ color: '#dc2626', icon: CircleX }),
  note: createVariants({ color: '#475569', icon: NotebookPen }),
  tip: createVariants({ color: '#0d9488', icon: Lightbulb }),
  remember: createVariants({ color: '#d97706', icon: Brain }),
  warning: createVariants({ color: '#ea580c', icon: TriangleAlert }),
  important: createVariants({ color: '#db2777', icon: Star }),
  vocabulary: createVariants({ color: '#0f766e', icon: BookOpenText }),
} as const

type LessonBlockVariants = keyof typeof LESSON_BLOCK_VARIANTS

export { LESSON_BLOCK_VARIANTS, type LessonBlockVariants }
