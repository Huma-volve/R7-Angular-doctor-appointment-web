import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { INotificationsResponse } from '../interfaces/Inotification';

@Injectable({
  providedIn: 'root',
})
export class GetNotificationByUser{
  
  constructor(private http: HttpClient){}

    getNotificationByUser():Observable<INotificationsResponse>{
      return this.http.get<INotificationsResponse>(`api/Customer/Notifications/GetNotificationsByUser`)
    }
}
