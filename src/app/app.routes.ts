import { Routes } from '@angular/router';
import { profile } from 'console';
import { features } from 'process';
import { Personalinfo } from './features/profile/personalinfo/personalinfo';
import { AuthGuard } from './core/guards/auth-guard';

export const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },

  {
    path: 'auth',
    loadChildren: () =>
      import('./auth/auth-routes').then((m) => m.AUTH_ROUTES),

  },
  {
    path: 'home',
    canActivate:[AuthGuard],
    loadComponent: () => import('./features/home/home').then((c) => c.HomeComponent),
  },

  {
    path: 'profile',
    canActivate:[AuthGuard],
    loadComponent: () => import('./features/profile/profile').then((c) => c.Profile),
    children:[
      {
      path:"personal-info",
      loadComponent:()=>import('./features/profile/personalinfo/personalinfo').then(c =>c.Personalinfo)
    },{
      path:'password',
      loadComponent:()=>import('./features/profile/managepassword/managepassword').then(c => c.Managepassword)
    },
    { path:"",
      redirectTo:'personal-info', pathMatch:'full'
    }
    ]
  },

  {
    path: 'doctorlist',
    canActivate:[AuthGuard],
    loadComponent: () => import('./features/doctorlist/doctorlist').then((c) => c.Doctorlist),
  },
  {
    path: 'booking',
    canActivate:[AuthGuard],
    loadComponent: () => import('./features/booking/booking').then((c) => c.Booking),
  },
  {
    path:"appointment/:id",
    canActivate:[AuthGuard],
    loadComponent:()=>import('./features/appointment/appointment').then((c)=>c.Appointment)}
  ,{
    path: 'contactus',
    canActivate:[AuthGuard],
    loadComponent: () => import('./features/contact-us/contact-us').then((c) => c.ContactUs),
  },
  {
    path: 'reviews-rating',
    canActivate:[AuthGuard],
    loadComponent: () => import('./features/reviews-rating/reviews-rating').then((c) => c.ReviewsRating),
  },
    {
    path: 'chat',
    canActivate:[AuthGuard],
    loadComponent: () =>
      import('./features/chat/chatt/chatt').then((c) => c.Chatt),
  },

  // --------------------------
  // Payment Module (Lazy)
  // --------------------------
  {
    path: 'payment',
    canActivate:[AuthGuard],
    loadChildren: () =>
      import('./features/payment/payment.routes').then(
        (m) => m.PAYMENT_ROUTES
      ),
  },
  
  {
    path:'favorite',
    loadComponent: () => import('./features/favorite/favorite').then((c)=>c.Favorite),
  },

  // Wildcard
  { path: '**', redirectTo: 'auth' },
];
