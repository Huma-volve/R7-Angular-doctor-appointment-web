import { Component } from '@angular/core';
import { PatientRoutingModule } from "../../patient/patient-routing-module";
import { MainNavbar } from "../../shared/main-navbar/main-navbar";

@Component({
  selector: 'app-appointment',
  imports: [PatientRoutingModule, MainNavbar],
  templateUrl: './appointment.html',
  styleUrl: './appointment.scss',
})
export class Appointment {

}
