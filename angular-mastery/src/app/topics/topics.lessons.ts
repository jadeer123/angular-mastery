import { LessonBlock } from './topic.model';

/** Lesson bodies are large, so each one is loaded on demand. */
export const LESSON_LOADERS: Record<string, () => Promise<LessonBlock[]>> = {
  'creating-a-new-angular-project': () => import('./lessons/creating-a-new-angular-project.lesson').then((m) => m.lessonCreatingANewAngularProject),
  '01-components': () => import('./lessons/01-components.lesson').then((m) => m.lesson01Components),
  '02-data-binding': () => import('./lessons/02-data-binding.lesson').then((m) => m.lesson02DataBinding),
  '03-directives': () => import('./lessons/03-directives.lesson').then((m) => m.lesson03Directives),
  '04-control-flow': () => import('./lessons/04-control-flow.lesson').then((m) => m.lesson04ControlFlow),
  '05-signals': () => import('./lessons/05-signals.lesson').then((m) => m.lesson05Signals),
  '06-routing': () => import('./lessons/06-routing.lesson').then((m) => m.lesson06Routing),
  '07-services': () => import('./lessons/07-services.lesson').then((m) => m.lesson07Services),
  '08-dependency-injection': () => import('./lessons/08-dependency-injection.lesson').then((m) => m.lesson08DependencyInjection),
  '09-http-client': () => import('./lessons/09-http-client.lesson').then((m) => m.lesson09HttpClient),
  '10-rxjs': () => import('./lessons/10-rxjs.lesson').then((m) => m.lesson10Rxjs),
  '11-forms': () => import('./lessons/11-forms.lesson').then((m) => m.lesson11Forms),
  '12-custom-directives': () => import('./lessons/12-custom-directives.lesson').then((m) => m.lesson12CustomDirectives),
  '13-custom-pipes': () => import('./lessons/13-custom-pipes.lesson').then((m) => m.lesson13CustomPipes),
  '14-lifecycle-hooks': () => import('./lessons/14-lifecycle-hooks.lesson').then((m) => m.lesson14LifecycleHooks),
  '15-content-projection': () => import('./lessons/15-content-projection.lesson').then((m) => m.lesson15ContentProjection),
  '16-viewchild': () => import('./lessons/16-viewchild.lesson').then((m) => m.lesson16Viewchild),
  '17-dynamic-components': () => import('./lessons/17-dynamic-components.lesson').then((m) => m.lesson17DynamicComponents),
  '18-interceptors': () => import('./lessons/18-interceptors.lesson').then((m) => m.lesson18Interceptors),
  '19-route-guards': () => import('./lessons/19-route-guards.lesson').then((m) => m.lesson19RouteGuards),
  '20-lazy-loading': () => import('./lessons/20-lazy-loading.lesson').then((m) => m.lesson20LazyLoading),
};

export const loadLesson = (slug: string): Promise<LessonBlock[]> =>
  LESSON_LOADERS[slug]?.() ?? Promise.resolve([]);
