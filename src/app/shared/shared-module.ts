import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainNavbar } from './main-navbar/main-navbar';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,MainNavbar,
  ],
  exports: [CommonModule,MainNavbar,]
})
export class SharedModule { }
