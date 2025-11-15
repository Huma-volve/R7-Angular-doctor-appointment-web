import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchAllDorctors {
  constructor(private http : HttpClient) {}


  searchAllDorators():Observable<any> {
    return this.http.get("api/Customer/Doctors/GetAllDoctors")
  }
  
}
