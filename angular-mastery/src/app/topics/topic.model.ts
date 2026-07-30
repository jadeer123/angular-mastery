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

export interface TopicContent {
  title: string;
  whatIsIt: string;
  whyUseIt: string;
  whenToUseIt: string;
  realWorldScenario: string;
  codeExamples: CodeExample[];
}
