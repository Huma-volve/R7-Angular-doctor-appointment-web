import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IaddFavourites } from '../interfaces/Ifavourites';

@Injectable({
  providedIn: 'root',
})
export class AddFavourite {
    constructor(private http:HttpClient){}


    FavDoctors(id:number):Observable<IaddFavourites>{
      
      return this.http.post<IaddFavourites>(`api/Customer/Favourites/FavouriteAndUnFavourite`,( { doctorId: id}));
    }
}
