import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GetNotificationByUser{
  
  constructor(private http: HttpClient){}

    getNotificationByUser():Observable<any>{
      return this.http.get(`api/Customer/Notifications/GetNotificationsByUser`)
    }
}
