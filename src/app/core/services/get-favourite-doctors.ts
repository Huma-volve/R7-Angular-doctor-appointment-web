import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IDoctorFavourite } from '../interfaces/Ifavourites';

@Injectable({
  providedIn: 'root',
})
export class GetFavouriteDoctors {
    constructor(private http:HttpClient){}


    GetFavDoctors():Observable<IDoctorFavourite>{
      return this.http.get<IDoctorFavourite>(`api/Customer/Favourites/GetAllFavourites`);
    }
}
