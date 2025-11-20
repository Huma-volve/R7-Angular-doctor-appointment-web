import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { INotificationItem, INotificationsResponse } from '../interfaces/Inotification';

@Injectable({
  providedIn: 'root',
})
export class ReadNotification {
     constructor(private http:HttpClient){}


    RescheduleBooking(id:number):Observable<INotificationsResponse>{
      return this.http.put<INotificationsResponse>(`api/Customer/Notifications/MarkAsRead/${id}`,({}));
    }
}
