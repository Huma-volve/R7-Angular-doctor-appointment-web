import { Routes } from '@angular/router';
import { Payment } from './payment';


export const PAYMENT_ROUTES: Routes = [
  {
    path: '',
    component: Payment,
    children: [
      {
        path: 'payment-method',
        loadComponent: () =>
          import('./payment-method/payment-method').then(
            (m) => m.PaymentMethod
          ),
      },
      {
        path: 'appointment-payment',
        loadComponent: () =>
          import('./appointment-payment/appointment-payment').then(
            (m) => m.AppointmentPayment
          ),
      },
      {
        path: 'add-card',
        loadComponent: () =>
          import('./add-card/add-card').then(
            (m) => m.AddCard
          ),
      },
      {
        path: 'visa-version',
        loadComponent: () =>
          import('./visa-version/visa-version').then(
            (m) => m.VisaVersion
          ),
      },
      // redirect
      { path: '', redirectTo: 'payment-method', pathMatch: 'full' },
    ],
  },
];
