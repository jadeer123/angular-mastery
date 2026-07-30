export interface Topic {
  id: string;
  order: number;
  title: string;
  slug: string;
  icon: string;
  summary: string;
}

export interface CodeExample {
  caption: string;
  code: string;
}

export type LessonBlock =
  | { kind: 'heading'; level: 2 | 3; text: string }
  | { kind: 'paragraph'; text: string }
  | { kind: 'quote'; text: string }
  | { kind: 'list'; ordered: boolean; items: string[] }
  | { kind: 'table'; headers: string[]; rows: string[][] }
  | { kind: 'code'; language: string; code: string };

export interface TopicContent {
  title: string;
  whatIsIt: string;
  whyUseIt: string;
  whenToUseIt: string;
  realWorldScenario: string;
  codeExamples: CodeExample[];
}
