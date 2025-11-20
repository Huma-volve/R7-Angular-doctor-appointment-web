import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchByLocation {
 
  constructor(private http : HttpClient) {}

  fnsearch_By_location(latitude:number,longitude:number,radiusKm:number):Observable<any> {
   return this.http.get(`api/Customer/SearchData/SearchByLocation?latitude=${latitude}&longitude=${longitude}&radiusKm=${radiusKm}`)
  }

}
