import { Routes } from '@angular/router';
import { AuthContainerComponent } from './components/auth-container/auth-container';

export const AUTH_ROUTES: Routes = [
  {
    path: '',
    component: AuthContainerComponent,
    children: [
      {
        path: 'sign-in',
        loadComponent: () =>
          import('./components/sign-in/sign-in').then(
            (m) => m.SignInComponent
          ),
      },
      {
        path: 'sign-up',
        loadComponent: () =>
          import('./components/sign-up/sign-up').then(
            (m) => m.SignUpComponent
          ),
      },
      {
        path: 'otp-validation',
        loadComponent: () =>
          import('./components/otp-validation/otp-validation').then(
            (m) => m.OtpValidationComponent
          ),
      },
      {
        path: 'forget-password',
        loadComponent: () =>
          import('./components/forget-password/forget-password').then(
            (m) => m.ForgetPasswordComponent
          ),
      },
      {
        path: 'reset-password',
        loadComponent: () =>
          import('./components/reset-password/reset-password').then(
            (m) => m.ResetPasswordComponent
          ),
      },
<<<<<<< HEAD
=======
      // redirect
>>>>>>> 253a7624dedc0b1ed2ec1ab7747a3cc120631a79
      { path: '', redirectTo: 'sign-in', pathMatch: 'full' },
    ],
  },
];
