import { Toastr } from './../services/toastr';

import { HttpInterceptorFn } from '@angular/common/http';
import { catchError, finalize, of, tap, throwError } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';
import { inject, PLATFORM_ID } from '@angular/core';
import {  environment } from '../environment/environment';
import { isPlatformBrowser } from '@angular/common';
import { error } from 'console';

export const globalInterceptor: HttpInterceptorFn = (req, next) => {
  const id = inject(PLATFORM_ID);
  const spinner = inject(NgxSpinnerService);
  const toastr = inject(Toastr)
  let userToken = '';
  if (isPlatformBrowser(id)) {
    userToken = localStorage.getItem('userToken') || '' ;
  }

  spinner.show();
 
  const myReq = req.clone({
    url: environment.baseUrl + req.url,
    setHeaders: {
      Authorization: userToken ?`Bearer ${userToken}` : '',
    },
  });

  return next(myReq).pipe(

    catchError((err)=>{
       toastr.subject.next('Please check your internet connection')
      return throwError(()=> err)
    } ),  

    finalize(() => spinner.hide() )
  
  );
};
