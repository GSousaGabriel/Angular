import { Route } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';

export const MAIN_ROUTES: Route[] = [
  {
    path: '',
    component: WelcomeComponent,
  },
  {
    path: 'about',
    loadComponent: () => import('./about/about.component').then(mod => mod.AboutComponent)
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/routes').then(
        (mod) => mod.DASHBOARD_ROUTES
      ),
  },
];
