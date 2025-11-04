import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },

  {
    path: 'auth',
    loadChildren: () =>
      import('./auth/auth-routes').then((m) => m.AUTH_ROUTES),
    
  },
  {
    path: 'home',
    loadComponent: () => import('./features/home/home').then((c) => c.HomeComponent),
  },
];
