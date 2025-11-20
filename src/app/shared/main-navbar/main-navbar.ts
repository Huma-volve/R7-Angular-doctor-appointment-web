import { SearchAllDorctors } from './../../core/services/search-all-dorctors';
import { GetNotificationByUser } from './../../core/services/get-notification-by-user';
import { routes } from './../../app.routes';
import { Component, Pipe, signal } from '@angular/core';
import { SharedModule } from '../shared-module';
import { CommonModule, NgClass } from '@angular/common';
import { Router, RouterLink, RouterOutlet, Routes } from '@angular/router';
import { SearchByLocation } from '../../core/services/search-by-location';
import { ITopRatedDoctors } from '../../core/interfaces/topRatedDoctors';
import { single } from 'rxjs';
import { CutPragraphPipe } from "../../core/pipe/cut-pragraph-pipe";
import { FormsModule, NgModel } from '@angular/forms';
import { SearchAllDoctorsPipe } from '../../core/pipe/search-all-doctors-pipe';
import { INotificationItem, INotificationsResponse } from '../../core/interfaces/Inotification';
import { ReadNotification } from '../../core/services/read-notification';
import { A11yModule } from "@angular/cdk/a11y";
import { StatusNotifiction } from '../../core/services/status-notifiction';
import { AuthService } from '../../auth/components/auth.service';

@Component({
  selector: 'app-main-navbar',
  imports: [CommonModule, RouterLink, SearchAllDoctorsPipe, FormsModule, A11yModule],
  templateUrl: './main-navbar.html',
  styleUrl: './main-navbar.scss',
  standalone: true,
})
export class MainNavbar {

constructor(private routes: Router , private _GetNotificationByUser: GetNotificationByUser,private _searchAllDoctors: SearchAllDorctors,private _ReadNotification:ReadNotification,public _statusNotification:StatusNotifiction) {}

 arrSearchAllDorctors !:ITopRatedDoctors[] 

valueInputSearch :string = ''

ngOnInit() {
this.Location()
  this.searchAllDoctors()
  this.getAllnotification()
 
}


getAllnotification():void{
    this._GetNotificationByUser.getNotificationByUser().subscribe((res:INotificationsResponse)=>{
    this._statusNotification.setNotifications(res.data.reverse())
  })

}

ReadNotification(notification:INotificationItem):void{
this._ReadNotification.RescheduleBooking(notification.id).subscribe({
  next:(()=> this.getAllnotification())
})
}

  StatusNotification: boolean = false;
  StatusUserMenu: boolean = false;
  StatusSidebar: boolean = false;
  StatusSidebarForMobile: boolean = false;

  fnOpenAndCloseNotification():void {
    this.StatusNotification = !this.StatusNotification;
    this.StatusUserMenu = false
  }

  fnOpenAndCloseStatusUserMenu():void {
    this.StatusUserMenu = !this.StatusUserMenu;
 this.StatusNotification = false

  }


  fnOpenAndCloseStatusSidebar():void {
this.StatusSidebar = !this.StatusSidebar;
  }


  fnOpenAndCloseStatusSidebarForMobile():void {
this.StatusSidebarForMobile = !this.StatusSidebarForMobile;
this.StatusUserMenu = false
this.StatusNotification = false
  }


searchAllDoctors():void{

this._searchAllDoctors.searchAllDorators().subscribe({
  next: (res:any)=>{
    console.log(res.data)
    this.arrSearchAllDorctors = res.data
  }
})
}

Location():void{

    navigator.geolocation.getCurrentPosition((position:any)=>{
      this.getLocationName(position.coords.latitude,position.coords.longitude)
    })
  


}

locationName!:string
getLocationName(lat: number, lng: number) {
  fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}&localityLanguage=en`)
    .then(res => res.json())
    .then(data => {
      const MlocationName = data.city || data.locality || data.principalSubdivision;
    this.locationName =  ` ${MlocationName}` 
    })
    .catch(err => console.log("Error:", err));
}



logout(){
  localStorage.removeItem('userToken'); //Remove Token
  this.routes.navigate(['/auth/sign-in']) //Go to sign in page
}



}
