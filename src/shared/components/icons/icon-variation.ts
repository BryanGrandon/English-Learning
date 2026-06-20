import {
  Blocks,
  CircleX,
  Lightbulb,
  Sparkles,
  NotebookPen,
  Target,
  History,
  Crown,
  Fingerprint,
  MapPinned,
  FileText,
  AlertCircle,
  Info,
  BadgeHelp,
  Volume2,
  Globe,
  Briefcase,
  Hash,
  MessageSquarePlus,
  BookOpen,
  Scale,
  AlertTriangle,
  PhoneCall,
  Users,
} from 'lucide-react'

const ICON_VARIATIONS = {
  position: {
    icon: MapPinned, // posición de palabras
    color: '#a78bfa',
    background: '#8b5cf640',
  },

  structure: {
    icon: Blocks, // estructura de la frase
    color: '#22d3ee',
    background: '#06b6d440',
  },

  usage: {
    icon: BookOpen, // o Layers / FileText
    color: '#60a5fa',
    background: '#3b82f640',
  },

  example: {
    icon: FileText, // ejemplos
    color: '#34d399',
    background: '#10b98140',
  },

  note: {
    icon: NotebookPen, // nota
    color: '#fbbf24',
    background: '#f59e0b40',
  },

  important: {
    icon: AlertCircle, // importante
    color: '#f59e0b',
    background: '#f59e0b20',
  },

  tip: {
    icon: Sparkles, // consejo
    color: '#34d399',
    background: '#10b98120',
  },

  mistake: {
    icon: CircleX, // error común
    color: '#ef4444',
    background: '#ef444420',
  },

  focus: {
    icon: Target, // punto clave
    color: '#f472b6',
    background: '#f472b620',
  },

  reference: {
    icon: History, // referencia o contexto
    color: '#818cf8',
    background: '#818cf820',
  },

  unique: {
    icon: Crown, // excepción o caso especial
    color: '#facc15',
    background: '#facc1520',
  },

  identify: {
    icon: Fingerprint, // identificar algo
    color: '#2dd4bf',
    background: '#2dd4bf20',
  },

  concept: {
    icon: Lightbulb, // concepto principal
    color: '#84cc16',
    background: '#84cc1640',
  },

  info: {
    icon: Info, // información adicional
    color: '#38bdf8',
    background: '#38bdf840',
  },

  rule: {
    icon: Scale, // regla o patrón
    color: '#c084fc',
    background: '#c084fc40',
  },

  question: {
    icon: BadgeHelp, // FAQ o dudas frecuentes
    color: '#fb7185',
    background: '#fb718540',
  },

  pronunciation: {
    icon: Volume2,
    color: '#14b8a6',
    background: '#14b8a620',
  },

  general: {
    icon: Globe,
    color: '#38bdf8',
    background: '#38bdf820',
  },

  profession: {
    icon: Briefcase,
    color: '#f59e0b',
    background: '#f59e0b20',
  },

  quantity: {
    icon: Hash,
    color: '#f97316',
    background: '#f9731620',
  },

  firstMention: {
    icon: MessageSquarePlus,
    color: '#34d399',
    background: '#10b98120',
  },

  exception: {
    icon: AlertTriangle,
    color: '#f97316',
    background: '#f9731620',
  },

  phoneIntroduction: {
    icon: PhoneCall,
    color: '#22c55e',
    background: '#22c55e20',
  },

  people: {
    icon: Users,
    color: '#34d399',
    background: '#10b98120',
  },
} as const

type IconVariations = keyof typeof ICON_VARIATIONS

export { ICON_VARIATIONS }
export type { IconVariations }
