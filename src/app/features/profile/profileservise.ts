import { inject, Injectable } from '@angular/core';
import { environment } from '../../core/environment/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { profiledata } from './profileinterface';
import { DoctorApiResponse } from '../doctorlist/doctorApiResponse';

@Injectable({
  providedIn: 'root',
})

export class ProfileService{
  private getuserData=environment.endpoints.editProfile.getUser;
  private updateprofile=environment.endpoints.editProfile.updateUser;
  private logoutApi=environment.endpoints.editProfile.logout


  private http=inject(HttpClient);

  getprofiledata():Observable<DoctorApiResponse<profiledata>>{
    return this.http.get<DoctorApiResponse<profiledata>>(`${this.getuserData}`)
  }



  updatePersonalInfo(formData: FormData): Observable<any> {



    return this.http.put<any>(
      `${this.updateprofile}`,
      formData
    );
  }

 logout(): Observable<any> {
    return this.http.post<any>(
      `${this.logoutApi}`,
      {}
    );
  }

  // clearSession(): void {
  //   localStorage.removeItem('token');
  //   sessionStorage.clear();
  // }





}
