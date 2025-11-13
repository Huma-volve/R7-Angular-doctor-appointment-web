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
        path: 'otp-validation-register',
        loadComponent: ()=>
          import('./components/otp-validation-register/otp-validation-register').then(
            (m)=> m.OtpValidationRegister
          )
      },
      {
        path: 'otp-validation-login',
        loadComponent: ()=>
          import('./components/otp-validation-login/otp-validation-login').then(
            (m)=> m.OtpValidationLogin
          )
      },
      {
        path: 'sign-up',
        loadComponent: () =>
          import('./components/sign-up/sign-up').then(
            (m) => m.SignUpComponent
          ),
      },
      {
        path: 'otp-validation/:PhoneNumber',
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
      // redirect
      { path: '', redirectTo: 'sign-in', pathMatch: 'full' },
    ],
  },
];
