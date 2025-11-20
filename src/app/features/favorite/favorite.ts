import { Component, effect, signal } from '@angular/core';
import { MainNavbar } from "../../shared/main-navbar/main-navbar";
import { MainFooter } from "../../shared/main-footer/main-footer";
import { SharedModule } from '../../shared/shared-module';
import { GetFavouriteDoctors } from '../../core/services/get-favourite-doctors';
import { IDoctorFavourite } from '../../core/interfaces/Ifavourites';
import { ITopRatedDoctors } from '../../core/interfaces/topRatedDoctors';
import { AddFavourite } from '../../core/services/add-favourite';
import { RouterLink } from '@angular/router';
// import { RouterLink } from '@angular/router';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-favorite',
  imports: [MainNavbar, MainFooter,SharedModule,RouterLink],
  templateUrl: './favorite.html',
  styleUrl: './favorite.scss',
  standalone:true,
    animations: [
    trigger('fade', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms ease-in', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('300ms ease-out', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class Favorite {
constructor(private _GetFavouriteDoctors:GetFavouriteDoctors,private _AddFavourite :AddFavourite){}
arrFavouriteDoctors = signal<IDoctorFavourite[] >([])
ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  this.fnGetFavDoctors()
}

fnGetFavDoctors():void{
  this._GetFavouriteDoctors.GetFavDoctors().subscribe({
    next:((res:any)=>{
           this.arrFavouriteDoctors.set(res.data) 
    }),

    error:(()=>{
      this.arrFavouriteDoctors.set([])
    })
    
  })
}

fnRemoveFavourite(doctors:IDoctorFavourite):void{
this._AddFavourite.FavDoctors(doctors.id).subscribe(
{
  next:(res:any)=>{
      this.fnGetFavDoctors()
  },

}
  
)

}
}
