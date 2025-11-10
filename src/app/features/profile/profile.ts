import { Component } from '@angular/core';
import { MainNavbar } from "../../shared/main-navbar/main-navbar";
import { MainFooter } from "../../shared/main-footer/main-footer";
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-profile',
  imports: [MainNavbar, MainFooter,RouterModule],
  templateUrl: './profile.html',
  styleUrl: './profile.scss',
})
export class Profile {
logout(){

}
}
