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
} from 'lucide-react'

export const ALL_VERSIONS_OF_THE_LESSONS = {
  rule: { color: '#7c3aed', icon: Scale },
  structure: { color: '#2563eb', icon: Blocks },
  comparison: { color: '#0891b2', icon: GitCompareArrows },
  common_mistake: { color: '#dc2626', icon: CircleX },
  example: { color: '#16a34a', icon: FileText },
  example_sentences: { color: '#15803d', icon: FileText },
  note: { color: '#475569', icon: NotebookPen },
  tip: { color: '#0d9488', icon: Lightbulb },
  remember: { color: '#d97706', icon: Brain },
  warning: { color: '#ea580c', icon: TriangleAlert },
  important: { color: '#db2777', icon: Star },
} as const
