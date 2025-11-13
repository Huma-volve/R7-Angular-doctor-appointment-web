import { Component } from '@angular/core';
import { PatientRoutingModule } from "../../patient/patient-routing-module";
import { MainNavbar } from "../../shared/main-navbar/main-navbar";
import { FormsModule } from "@angular/forms";
import { OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-appointment',
  imports: [PatientRoutingModule, MainNavbar, FormsModule ,CommonModule],
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




  ngOnInit(): void {
    const today=new Date();   //دا عشان يبقي ثابت يعني بيعبر عن تاريخ النهارده
    for (let i = 0; i <= 7 ; i++) {
      const date=new Date(); //ودا عشان اللي هيتزود ف اللوب
      date.setDate(today.getDate()+i) //هنا هيزود ع الايام يوم بيوم كدت

      this.weekdays.push({
        fulldate:date,
        dayName:date.toLocaleDateString('en-US',{weekday:'short'}),
        dayNameLong:date.toLocaleDateString('en-US',{weekday:'long'}),//to make it in the shape fri and eng
        dayNum:date.getDate()
      })

    }

  }

  selecteddate(day:any){
    this.selectedDay=day;
    // console.log(day.fulldate);


  }

  selecthour(hour:any){
    this.selectedhour=hour
  }
  selectMonth(event:any){
    this.selectedMonth=event.target.value

  }

  get monthName(){
    if(!this.selectMonth) return null;
   return new Date(this.selectedMonth).toLocaleDateString('en-US',{month:'long'})
  }
   

}
