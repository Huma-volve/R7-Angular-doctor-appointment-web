import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAppointmentItem } from '../interfaces/IPatientBookings';

@Injectable({
  providedIn: 'root',
})
export class CancelBooking {
  constructor(private http:HttpClient){}


    cancelBooking(id:number):Observable<IAppointmentItem>{
      return this.http.put<IAppointmentItem>(`api/Customer/Booking/CancelBooking/${id}`,({}));
    }
}
