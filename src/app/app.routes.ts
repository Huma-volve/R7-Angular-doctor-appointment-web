import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth-module').then((m) => m.AuthModule),
  },
  {
    path: 'home',

    loadComponent: () => import('./features/home/home').then((c) => c.HomeComponent),
  },
  {
    path: 'doctorlist',

    loadComponent: () => import('./features/doctorlist/doctorlist').then((c) => c.Doctorlist),
  },
  {
    path:'profile',
    loadComponent: () => import('./features/profile/profile').then((c) =>c.Profile),
  }

];
