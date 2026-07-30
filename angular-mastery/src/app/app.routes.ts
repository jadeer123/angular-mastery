import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'Angular Mastery',
    loadComponent: () =>
      import('./dashboard/dashboard.component').then((m) => m.DashboardComponent)
  },
  {
    path: 'topic/:slug',
    title: 'Angular Mastery · Tutorial',
    loadComponent: () =>
      import('./topic-detail/topic-detail.component').then((m) => m.TopicDetailComponent)
  },
  { path: '**', redirectTo: '' }
];
