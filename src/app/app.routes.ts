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

  {
    path: 'profile',

    loadComponent: () => import('./features/profile/profile').then((c) => c.Profile),
  },

  {
    path: 'doctorlist',

    loadComponent: () => import('./features/doctorlist/doctorlist').then((c) => c.Doctorlist),
  }
  {
    path: 'booking',
    loadComponent: () => import('./features/booking/booking').then((c) => c.Booking),
  },
];
