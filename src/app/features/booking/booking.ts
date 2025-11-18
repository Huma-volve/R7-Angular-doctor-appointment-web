import { PatientBookings } from './../../core/services/patient-bookings';
import { ChangeDetectorRef, Component, inject, signal } from '@angular/core';
import { SharedModule } from '../../shared/shared-module';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { IAppointmentItem, IPatientBookings, IPatientBookingsResponse } from '../../core/interfaces/IPatientBookings';
import { CancelBooking } from '../../core/services/cancel-booking';
import { RescheduleBooking } from '../../core/services/reschedule-booking';
import { FormsModule, Validators } from '@angular/forms';
import { PatientRoutingModule } from "../../patient/patient-routing-module";
import { NgxPaginationModule } from 'ngx-pagination';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { trigger, style, animate, transition } from '@angular/animations';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-booking',
  imports: [SharedModule,
    CommonModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule, PatientRoutingModule,NgxPaginationModule],
  templateUrl: './booking.html',
  styleUrl: './booking.scss',
  standalone: true,
    animations: [
    trigger('fade', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms ease-in', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('300ms ease-out', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class Booking {
 
 constructor(private _PatientBookings:PatientBookings, private _CancelBooking: CancelBooking,private _RescheduleBooking:RescheduleBooking){}

AllpatientBooking   = signal<IPatientBookingsResponse | null>(null)
filteredBookings = signal<IAppointmentItem[] >([]);

  p: number = 1
  itemsPerPage: number = 8

selectedDate!:Date

arrBars :string[] = ['all','Pending','completed','Cancelled']

 ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
 this.selectedDate = new Date();
this.getBooking()
 }


// 
 getBooking():void{
   this._PatientBookings.getPatientBookings().subscribe({
    next:(res:any)=>{
        this.AllpatientBooking.set( res.data)
        this.filteredBookings.set(res.data.data)
        console.log(this.filteredBookings())
    }
  });
 }


   selected:string =''
 switchStatus(valueBar:string):void{
  this.selectedDate = new Date()
     this.selected = valueBar
 const all = this.AllpatientBooking();
  const data = all?.data ?? [];
   
  if (this.selected === 'all') {
    
    this.filteredBookings.set(data);
  } else {
    this.filteredBookings.set(data.filter((res: any) => res.status === this.selected  ))
  
  }

 }


 filterWithTime():void{
 console.log(this.selected)
   const all = this.AllpatientBooking();
  const data = all?.data ?? [];
  this.filteredBookings.set(data.filter((resFilterTime:IAppointmentItem) =>{
   const dateAppointmentAt:Date = new Date(resFilterTime.appointmentAt)
   const dateEqual :boolean =  dateAppointmentAt.getFullYear() === this.selectedDate.getFullYear() && dateAppointmentAt.getMonth()+1 === this.selectedDate.getMonth()+1 && dateAppointmentAt.getDate() === this.selectedDate.getDate()

      return  data.some(() =>  resFilterTime.status == this.selected && dateEqual || dateEqual && this.selected == this.arrBars[0] ? all?.data :false) 

  }
  ))
 }


 
 cancelBooking(patient:IAppointmentItem):void{
    this._CancelBooking.cancelBooking(patient.id).subscribe({
      next:(()=>{
             this.getBooking()
      })
    })
 }


 RescheduleBooking(patient:IAppointmentItem){
this._RescheduleBooking.RescheduleBooking(patient.id,this.selectedDate.toISOString()).subscribe({
  next:()=>{
    this.getBooking()
  }
  
})
 }

  

}
