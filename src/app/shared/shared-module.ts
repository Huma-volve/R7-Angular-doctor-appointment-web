import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainNavbar } from './main-navbar/main-navbar';
import { MainFooter } from './main-footer/main-footer';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,MainNavbar,MainFooter
  ],
  exports: [CommonModule,MainNavbar,MainFooter]
})
export class SharedModule { }
