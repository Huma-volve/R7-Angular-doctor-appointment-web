import { routes } from './../../app.routes';
import { Component } from '@angular/core';
import { SharedModule } from '../shared-module';
import { CommonModule, NgClass } from '@angular/common';
import { Router, RouterLink, RouterOutlet, Routes } from '@angular/router';
import { AuthService } from '../../auth/components/auth.service';

@Component({
  selector: 'app-main-navbar',
  imports:[CommonModule,RouterLink],
  templateUrl: './main-navbar.html',
  styleUrl: './main-navbar.scss',
  standalone: true,
})
export class MainNavbar {

constructor(private routes: Router, private authService: AuthService) {}

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


// User Logging out
logout(){
  this.authService.logout()
  this.routes.navigate(['/auth/sign-in']);
}

}
