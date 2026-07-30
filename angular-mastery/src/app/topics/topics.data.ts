import { Topic } from './topic.model';

export const TOPICS: Topic[] = [
  {
    id: 'getting-started',
    order: 0,
    title: 'Creating a New Angular Project',
    slug: 'creating-a-new-angular-project',
    icon: '🚀',
    summary: 'Scaffold your first Angular 20 workspace with the CLI and understand every generated file.'
  },
  {
    id: 'components',
    order: 1,
    title: 'Components',
    slug: '01-components',
    icon: '🧩',
    summary: 'The standalone building blocks that pair a template with a class of logic.'
  },
  {
    id: 'data-binding',
    order: 2,
    title: 'Data Binding',
    slug: '02-data-binding',
    icon: '🔗',
    summary: 'Move data between class and template with interpolation, property, event and two-way binding.'
  },
  {
    id: 'directives',
    order: 3,
    title: 'Directives',
    slug: '03-directives',
    icon: '🎯',
    summary: 'Attach behaviour, classes and styles to elements without writing a whole component.'
  },
  {
    id: 'control-flow',
    order: 4,
    title: 'Control Flow',
    slug: '04-control-flow',
    icon: '🔀',
    summary: 'Render conditionally and loop over data with the built-in @if, @for and @switch blocks.'
  },
  {
    id: 'signals',
    order: 5,
    title: 'Signals',
    slug: '05-signals',
    icon: '📶',
    summary: 'Reactive values that tell Angular exactly what changed, for fast and simple state.'
  },
  {
    id: 'routing',
    order: 6,
    title: 'Routing',
    slug: '06-routing',
    icon: '🗺️',
    summary: 'Map URLs to components so your single-page app feels like a real multi-page site.'
  },
  {
    id: 'services',
    order: 7,
    title: 'Services',
    slug: '07-services',
    icon: '🛠️',
    summary: 'Reusable classes that hold shared state and logic outside your components.'
  },
  {
    id: 'dependency-injection',
    order: 8,
    title: 'Dependency Injection',
    slug: '08-dependency-injection',
    icon: '💉',
    summary: 'Ask Angular for what you need with inject() instead of building it yourself.'
  },
  {
    id: 'http-client',
    order: 9,
    title: 'HTTP Client',
    slug: '09-http-client',
    icon: '🌐',
    summary: 'Talk to REST APIs with provideHttpClient, typed responses and httpResource.'
  },
  {
    id: 'rxjs',
    order: 10,
    title: 'RxJS',
    slug: '10-rxjs',
    icon: '🌊',
    summary: 'Compose streams of async events with observables and operators like switchMap.'
  },
  {
    id: 'forms',
    order: 11,
    title: 'Forms',
    slug: '11-forms',
    icon: '📝',
    summary: 'Collect and validate user input with template-driven or reactive forms.'
  },
  {
    id: 'custom-directives',
    order: 12,
    title: 'Custom Directives',
    slug: '12-custom-directives',
    icon: '✨',
    summary: 'Package your own reusable DOM behaviour as an attribute you can drop anywhere.'
  },
  {
    id: 'custom-pipes',
    order: 13,
    title: 'Custom Pipes',
    slug: '13-custom-pipes',
    icon: '🚰',
    summary: 'Transform values for display in templates without touching your component logic.'
  },
  {
    id: 'lifecycle-hooks',
    order: 14,
    title: 'Lifecycle Hooks',
    slug: '14-lifecycle-hooks',
    icon: '♻️',
    summary: 'Run code at key moments: creation, change detection and destruction.'
  },
  {
    id: 'content-projection',
    order: 15,
    title: 'Content Projection',
    slug: '15-content-projection',
    icon: '📦',
    summary: 'Let callers pass markup into your component with <ng-content> slots.'
  },
  {
    id: 'viewchild',
    order: 16,
    title: 'ViewChild',
    slug: '16-viewchild',
    icon: '🔍',
    summary: 'Grab a reference to an element or child component from your own template.'
  },
  {
    id: 'dynamic-components',
    order: 17,
    title: 'Dynamic Components',
    slug: '17-dynamic-components',
    icon: '🪄',
    summary: 'Create components at runtime for modals, toasts and configurable dashboards.'
  },
  {
    id: 'interceptors',
    order: 18,
    title: 'Interceptors',
    slug: '18-interceptors',
    icon: '🛡️',
    summary: 'Wrap every HTTP call to add auth headers, logging, retries and error handling.'
  },
  {
    id: 'route-guards',
    order: 19,
    title: 'Route Guards',
    slug: '19-route-guards',
    icon: '🚧',
    summary: 'Allow or block navigation with small functional guards like canActivate.'
  },
  {
    id: 'lazy-loading',
    order: 20,
    title: 'Lazy Loading',
    slug: '20-lazy-loading',
    icon: '🐢',
    summary: 'Ship a smaller first bundle by loading routes only when they are visited.'
  },
  {
    id: 'state-management',
    order: 21,
    title: 'State Management',
    slug: '21-state-management',
    icon: '🗄️',
    summary: 'Keep app-wide state predictable with signal stores or a library like NgRx.'
  },
  {
    id: 'performance',
    order: 22,
    title: 'Performance',
    slug: '22-performance',
    icon: '⚡',
    summary: 'Make apps fast with OnPush, @defer, track functions and image optimisation.'
  },
  {
    id: 'testing',
    order: 23,
    title: 'Testing',
    slug: '23-testing',
    icon: '🧪',
    summary: 'Prove your code works with TestBed unit tests and HTTP test doubles.'
  },
  {
    id: 'deployment',
    order: 24,
    title: 'Deployment',
    slug: '24-deployment',
    icon: '🚢',
    summary: 'Build for production and host your app with correct SPA fallback routing.'
  }
];

export const getTopicBySlug = (slug: string): Topic | undefined =>
  TOPICS.find((topic) => topic.slug === slug);
