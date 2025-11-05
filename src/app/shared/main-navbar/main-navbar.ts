import { Component } from '@angular/core';
import { SharedModule } from '../shared-module';
import { CommonModule, NgClass } from '@angular/common';

@Component({
  selector: 'app-main-navbar',
  imports:[CommonModule],
  templateUrl: './main-navbar.html',
  styleUrl: './main-navbar.scss',
  standalone: true,
})
export class MainNavbar {

constructor() {}

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
  }





}
