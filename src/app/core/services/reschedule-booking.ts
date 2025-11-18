import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAppointmentItem } from '../interfaces/IPatientBookings';

@Injectable({
  providedIn: 'root',
})
export class RescheduleBooking {
    constructor(private http:HttpClient){}


    RescheduleBooking(id:number,Date:string):Observable<IAppointmentItem>{
      return this.http.put<IAppointmentItem>(`api/Customer/Booking/RescheduleBooking/${id}`,(`${JSON.stringify(Date)}`));
    }
}
