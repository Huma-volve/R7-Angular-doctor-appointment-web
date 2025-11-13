import { inject, Injectable } from '@angular/core';
import { environment } from '../../core/environment/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DoctorlistData } from './doctorlist.DoctorData';
import { DoctorApiResponse } from './doctorApiResponse';

@Injectable({
  providedIn: 'root',
})
export class Doctorservice {

  private baseUrl=environment.apiBaseUrl;

  private getAllDoctor=environment.endpoints.doctors.getalldoctors;

  private getAllspecialist=environment.endpoints.doctors.allspecialist;

  private http=inject(HttpClient);


   private headers=new HttpHeaders({
       Authorization:'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMWQxNGRlYS1mNTg5LTRkNzYtOTQ2My1jYjgxZTdkNDI1ZWEiLCJ1bmlxdWVfbmFtZSI6IisyMDAxMDkyMzg5MzMzIiwiZmlyc3ROYW1lIjoiZ2VoYWQiLCJsYXN0TmFtZSI6IiIsImFkZHJlc3MiOiIiLCJpbWdVcmwiOiIiLCJiaXJ0aERhdGUiOiIwMDAxLTAxLTAxIiwiZ2VuZGVyIjoiTWFsZSIsImxvY2F0aW9uIjoiIiwiaXNOb3RpZmljYXRpb25zRW5hYmxlZCI6IlRydWUiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjExZDE0ZGVhLWY1ODktNGQ3Ni05NDYzLWNiODFlN2Q0MjVlYSIsImV4cCI6MTc2MzA1NTgyNSwiaXNzIjoiaHR0cHM6Ly9jdXJlLWRvY3Rvci1ib29raW5nLnJ1bmFzcC5uZXQvIiwiYXVkIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NTAwMCxodHRwczovL2xvY2FsaG9zdDo1NTAwLGh0dHBzOi8vbG9jYWxob3N0OjQyMDAgLGh0dHBzOi8vY3VyZS1kb2N0b3ItYm9va2luZy5ydW5hc3AubmV0LyJ9.XWyi8pha2XEHuirKHphf9DoAlLRKMAgURWWlmpGKPTI '
    })

  getAllDoctors():Observable<DoctorApiResponse>{
    
    return this.http.get<DoctorApiResponse>(`${this.baseUrl}${this.getAllDoctor}`,{headers: this.headers})
  }

  getAllspecialists():Observable<DoctorApiResponse>{

    return this.http.get<DoctorApiResponse>(`${this.baseUrl}${this.getAllspecialist}`)

  }

  
}
