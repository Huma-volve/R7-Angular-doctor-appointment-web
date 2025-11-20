import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OnInit } from '@angular/core';
import { AuthContainerComponent } from "../../../auth/components/auth-container/auth-container";
import { ProfileService } from '../profileservise';
import { updateuserdata } from '../profileinterface';
@Component({
  selector: 'app-personalinfo',
  imports: [CommonModule, FormsModule, ],
  templateUrl: './personalinfo.html',
  styleUrl: './personalinfo.scss',
})
export class Personalinfo implements OnInit {


  days=Array.from({length:31},(_,i)=>(i+1))
 dayselected=''

 months = [
  { name: 'January', value: 1 },
  { name: 'February', value: 2 },
  { name: 'March', value: 3 },
  { name: 'April', value: 4 },
  { name: 'May', value: 5 },
  { name: 'June', value: 6 },
  { name: 'July', value: 7 },
  { name: 'August', value: 8 },
  { name: 'September', value: 9 },
  { name: 'October', value: 10 },
  { name: 'November', value: 11 },
  { name: 'December', value: 12 }
];
  selectedmonth=''



  selectedyear=''
  years:number[]=[]
  currentyear!:number;
  startyear!:number;
  ngOnInit(): void {

   this.currentyear=new Date().getFullYear();
   this.startyear=this.currentyear- 90;

  for (let y = this.currentyear; y >= this.startyear; y--) {
      this.years.push(y)

  }

  }


  constructor(private profileService: ProfileService) {}
   personal: updateuserdata = {
    FullName: '',
    Email: '',
    PhoneNumber: '',
    Address: '',
    BirthDate: ''   // هنعبيها من اليوم/الشهر/السنة
  };
   updatemassage:string='';
  onSave(): void {
    // 1) نبني تاريخ الميلاد بصيغة yyyy-MM-dd
    if (this.dayselected && this.selectedmonth && this.selectedyear) {
      const day = this.dayselected.toString().padStart(2, '0');
      this.personal.BirthDate = `${this.selectedyear}-${this.selectedmonth}-${day}`;
    }

    // 2) نحول الـ model لـ FormData
    const formData = new FormData();
    formData.append('FullName', this.personal.FullName);
    formData.append('Email', this.personal.Email);
    formData.append('PhoneNumber', this.personal.PhoneNumber);
    formData.append('Address', this.personal.Address);   // نفس اسم الباراميتر في الـ API
    formData.append('BirthDate', this.personal.BirthDate);

    // 3) نبعته على الـ API
    this.profileService.updatePersonalInfo(formData).subscribe({
      next: (res) => {
        console.log('saved', res);
        this.updatemassage=res.message
        console.log("datasent");
      },
      error: (err) => {
          console.error('status:', err.status);
           console.error('backend error:', err.error);
            this.updatemassage=err.error // 👈 دي المهمة

      }
    });



}



}
