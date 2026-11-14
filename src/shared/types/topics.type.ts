import type { LucideIcon } from "lucide-react";

type LessonsConfig = {
  key: string;
};

export type TopicConfig = {
  order: number;
  key: string;
  title: string;
  description: string;
  icon: LucideIcon;
  lessons: LessonsConfig[];
};

type ExpandTheLesson = LessonsConfig & {
  title: string;
  translation: string;
  href: string;
};

export type Topic = Omit<TopicConfig, "lessons"> & {
  lessons: ExpandTheLesson[];
};
