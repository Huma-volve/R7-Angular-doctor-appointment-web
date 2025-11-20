import { inject, Injectable } from "@angular/core";
import { environment } from "../../core/environment/environment";
import { Observable } from "rxjs";
import { DoctorApiResponse } from "../doctorlist/doctorApiResponse";
import { appointmentdoctordata } from "./appointmentdata";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn:'root'
})
export class Appointmentdoctor {
  private doctorDetailsEndpoint = environment.endpoints.doctors.doctordetails;

  private http=inject(HttpClient)
getDoctorDetails(id: number): Observable<DoctorApiResponse<appointmentdoctordata>> {
  return this.http.get<DoctorApiResponse<appointmentdoctordata>>(
    `${this.doctorDetailsEndpoint}/${id}`,
    
  );
}


}
