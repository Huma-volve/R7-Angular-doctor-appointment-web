
import { HttpInterceptorFn } from '@angular/common/http';
import { catchError, finalize, of, tap, throwError } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';
import { inject, PLATFORM_ID } from '@angular/core';
import {  environment } from '../environment/environment';
import { isPlatformBrowser } from '@angular/common';
import { error } from 'console';
import { ToastrService } from 'ngx-toastr';

export const globalInterceptor: HttpInterceptorFn = (req, next) => {
  const id = inject(PLATFORM_ID);
  const spinner = inject(NgxSpinnerService);
  const toaster = inject(ToastrService)
  let userToken = '';
  if (isPlatformBrowser(id)) {
    userToken = localStorage.getItem('userToken') || '' ;
  }

  spinner.show();

  const myReq = req.clone({
    url: environment.baseUrl + req.url,
    setHeaders: {
      Authorization: userToken ?`Bearer ${userToken}` : '', 'Content-Type': 'application/json',
    },
  });

return next(myReq).pipe(
  catchError((err) => {
    let errorMessage = 'Something went wrong';

    // If backend returns a string
    if (typeof err.error === 'string') {
      errorMessage = err.error;
    }

    // If backend returns object with message field
    else if (err.error?.message) {
      errorMessage = err.error.message;
    }

    // If backend returns an array of errors
    else if (Array.isArray(err.error?.errors)) {
      errorMessage = err.error.errors.join(', ');
    }

    // Show toast
    toaster.error(errorMessage);

    return throwError(() => err);
  }),
  finalize(() => spinner.hide())
);

/////////////Toaster//////////////


};
