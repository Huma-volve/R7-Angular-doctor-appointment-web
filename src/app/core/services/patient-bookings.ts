import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPatientBookings } from '../interfaces/IPatientBookings';

@Injectable({
  providedIn: 'root',
})
export class PatientBookings {
  constructor(private http:HttpClient){}



  getPatientBookings():Observable<IPatientBookings>{
    return this.http.get<IPatientBookings>('api/Customer/Booking/PatientBookings');
  }
}
