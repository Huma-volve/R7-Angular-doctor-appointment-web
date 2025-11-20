import { inject, Injectable } from '@angular/core';
import { environment } from '../../core/environment/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AllSpecialist, DoctorlistData, DoctorSearchRequest, DoctorSearchResponse } from './doctorlist.DoctorData';
import { DoctorApiResponse } from './doctorApiResponse';


@Injectable({
  providedIn: 'root',
})
export class Doctorservice {



  private getAllDoctor=environment.endpoints.doctors.getalldoctors;

  private getAllspecialist=environment.endpoints.doctors.allspecialist;
  private doctorsearch=environment.endpoints.doctors.searchdoctor;

  private http=inject(HttpClient);



  getAllDoctors():Observable<DoctorApiResponse<DoctorlistData[]>>{

    return this.http.get<DoctorApiResponse<DoctorlistData[]>>(`${this.getAllDoctor}`)
  }

  getAllspecialists():Observable<DoctorApiResponse<AllSpecialist[]>>{

    return this.http.get<DoctorApiResponse<AllSpecialist[]>>(`${this.getAllspecialist}`)

  }


  searchdoctorlisrt(body:DoctorSearchRequest):Observable<DoctorSearchResponse >{
    return this.http.post<DoctorSearchResponse>(`${this.doctorsearch}`,body)

  }






}
