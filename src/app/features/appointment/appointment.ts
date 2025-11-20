import { ChangeDetectorRef, Component, inject, Input, input } from '@angular/core';
import { PatientRoutingModule } from "../../patient/patient-routing-module";
import { MainNavbar } from "../../shared/main-navbar/main-navbar";
import { FormsModule } from "@angular/forms";
import { OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { appointmentdoctordata } from './appointmentdata';
import { Appointmentdoctor } from './appointmentServise';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { MainFooter } from "../../shared/main-footer/main-footer";
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-appointment',
  imports: [PatientRoutingModule, MainNavbar, FormsModule, CommonModule, MainFooter],
  templateUrl: './appointment.html',
  styleUrl: './appointment.scss',
})
export class Appointment implements OnInit  {

        weekdays:any[]=[];
        hours:any[]=[
          '9:00 AM','10:00 AM','11:00 AM','12:30 AM','5:30 PM','7:00 PM','9:00 PM','10:00 PM'
        ]
        selectedDay:any=null;
        selectedMonth:any=null;
        selectedhour:any=null

        currentMonth: string = '';

        safeMapUrl: SafeResourceUrl | null = null;

       constructor(private sanitizer: DomSanitizer) {}


  ngOnInit(): void {
    const today=new Date();
    for (let i = 0; i <= 7 ; i++) {
      const date=new Date();
      date.setDate(today.getDate()+i)

      this.weekdays.push({
        fulldate:date,
        dayName:date.toLocaleDateString('en-US',{weekday:'short'}),
        dayNameLong:date.toLocaleDateString('en-US',{weekday:'long'}),//to make it in the shape fri and eng
        dayNum:date.getDate()
      })

    }

    const idParam = this.route.snapshot.paramMap.get('id');
     this.doctorId = Number(idParam);




      this.loaddoctordetails()



    this.safeMapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://www.google.com/maps?q=${this.doctor?.latitude},${this.doctor?.langtude}&output=embed`
  );





  }

  selecteddate(day:any){
    this.selectedDay=day;
  }

  selecthour(hour:any){
    this.selectedhour=hour
  }
  selectMonth(event: any) {
  this.selectedMonth = event.target.value;
}

  get monthName(){
    if(!this.selectMonth) return null;
   return new Date(this.selectedMonth).toLocaleDateString('en-US',{month:'long'})
  }

  doctor?:appointmentdoctordata;
  route=inject(ActivatedRoute)
  doctorId!:number;

  // const idParam = this.route.snapshot.paramMap.get('id');
  //  this.doctorId = Number(idParam);

  appointservise=inject(Appointmentdoctor);
  ref=inject(ChangeDetectorRef)
  loaddoctordetails():void{
    this.appointservise.getDoctorDetails(this.doctorId).subscribe({
      next: (res) => {
        this.doctor = res.data;
        this.ref.detectChanges()
        console.log(this.doctor);



      },
      error: (err) => {
        console.error("error",err);

      }
    });

  }







}
