import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: 'dashboard',
    loadComponent: () => import('./gifts/pages/dashboard-pages/dashboard.component'),
    children: [
      {
        path: 'trending',
        loadComponent: () => import('./gifts/pages/trending-pages/trending.component')
      },
      {
        path: 'search',
        loadComponent: () => import('./gifts/pages/search-pages/search.component')
      },
      {
        path: 'history/:query',
        loadComponent: () => import('./gifts/pages/gif-history/gif-history.component'),
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'dashboard',
  }
];
