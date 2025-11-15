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

@Component({
  selector: 'app-main-navbar',
  imports: [CommonModule, RouterLink, CutPragraphPipe,SearchAllDoctorsPipe,FormsModule,RouterLink],
  templateUrl: './main-navbar.html',
  styleUrl: './main-navbar.scss',
  standalone: true,
})
export class MainNavbar {

constructor(private routes: Router , private _GetNotificationByUser: GetNotificationByUser,private _searchAllDoctors: SearchAllDorctors) {}

//  arrSearchAllDorctors = signal<ITopRatedDoctors[]>([])
 arrSearchAllDorctors !:ITopRatedDoctors[] 

//  showDivSearch:boolean = false;
valueInputSearch :string = ''

ngOnInit() {
  this._GetNotificationByUser.getNotificationByUser().subscribe((res:any)=>{
    
  })

  this.searchAllDoctors()
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






}
