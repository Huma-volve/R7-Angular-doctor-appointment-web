import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TopRatedDoctors {
  constructor(private http: HttpClient) { }

  getTopRatedDoctors():Observable<any>{
    return this.http.get(`api/Customer/Doctors/GetTopRatedDoctors`)
  }
}
