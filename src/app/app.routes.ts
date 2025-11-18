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

    loadComponent: () => import('./features/home/home').then((c) => c.HomeComponent),
  },

  {
    path: 'profile',

    loadComponent: () => import('./features/profile/profile').then((c) => c.Profile),
    children:[
      {path:"personal-info",
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

    loadComponent: () => import('./features/doctorlist/doctorlist').then((c) => c.Doctorlist),
  },
  {
    path: 'booking',
    loadComponent: () => import('./features/booking/booking').then((c) => c.Booking),
  },
  {path:"appointment/:id", loadComponent:()=>import('./features/appointment/appointment').then((c)=>c.Appointment)}
  ,{
    path: 'contactus',
    loadComponent: () => import('./features/contact-us/contact-us').then((c) => c.ContactUs),
  },
  {
    path: 'reviews-rating',
    loadComponent: () => import('./features/reviews-rating/reviews-rating').then((c) => c.ReviewsRating),
  },
  {
    path: 'payment',
    loadChildren: () =>
      import('./features/payment/payment.routes').then((m) => m.PAYMENT_ROUTES),
  },
    {
    path: 'hope',
    canActivate: [AuthGuard],
    loadComponent: () =>
      import('./features/chat/chatt/chatt').then((c) => c.Chatt),
  },

  // --------------------------
  // Payment Module (Lazy)
  // --------------------------
  {
    path: 'payment',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./features/payment/payment.routes').then(
        (m) => m.PAYMENT_ROUTES
      ),
  },

  // Wildcard
  { path: '**', redirectTo: 'auth' },
];
