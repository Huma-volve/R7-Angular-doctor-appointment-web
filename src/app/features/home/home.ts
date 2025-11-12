import { TopRatedDoctors } from './../../core/services/top-rated-doctors';
import { AfterViewInit, ChangeDetectorRef, Component,CUSTOM_ELEMENTS_SCHEMA, NgZone, OnInit } from '@angular/core';
import { SharedModule } from '../../shared/shared-module';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { ITopRatedDoctors } from '../../core/interfaces/topRatedDoctors';
import { MainNavbar } from '../../shared/main-navbar/main-navbar';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
   standalone: true,
  imports: [CommonModule,SharedModule,FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeComponent  {

 constructor(private _TopRatedDoctors :TopRatedDoctors,private cdr : ChangeDetectorRef) {
 }
   arrTopRatedDoctors!:ITopRatedDoctors[];


 ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
   this.TopRatedDoctors()
}




  TopRatedDoctors():void{
  this._TopRatedDoctors.getTopRatedDoctors().subscribe({

    next: (data: any) => {
      console.log(data.data)

      this.arrTopRatedDoctors = data.data;
      this.cdr.detectChanges()
    },

    error: (err) => console.error(err)

  });

}


}


