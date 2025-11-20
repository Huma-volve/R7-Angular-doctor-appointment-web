import { SearchByLocation } from './../../core/services/search-by-location';
import { TopRatedDoctors } from './../../core/services/top-rated-doctors';
import { AfterViewInit, ChangeDetectorRef, Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, NgZone, OnInit, signal, ViewChild } from '@angular/core';
import { SharedModule } from '../../shared/shared-module';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { ITopRatedDoctors } from '../../core/interfaces/topRatedDoctors';
import { MainNavbar } from '../../shared/main-navbar/main-navbar';
import { FormsModule } from '@angular/forms';
import { PatientRoutingModule } from "../../patient/patient-routing-module";
import { A11yModule } from "@angular/cdk/a11y";
import { CutPragraphPipe } from '../../core/pipe/cut-pragraph-pipe';
import { AddFavourite } from '../../core/services/add-favourite';
import { DomSanitizer } from '@angular/platform-browser';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
   standalone: true,
  imports: [CommonModule, SharedModule, FormsModule, PatientRoutingModule,CutPragraphPipe],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeComponent  {

 constructor(private toastr: ToastrService, private _TopRatedDoctors :TopRatedDoctors,private _search_By_location:SearchByLocation,private _AddFavourite:AddFavourite) { }
  // private audio = new Audio('assets/audioNotification/come-here-notification.mp3');


   arrTopRatedDoctors = signal<ITopRatedDoctors[]>([]);

audio!:HTMLAudioElement
 ngOnInit(): void {
   this.TopRatedDoctors()
   this.Search_By_Location()
 this.audio = new Audio('assets/audioNotification/come-here-notification.mp3');
}




  TopRatedDoctors():void{
  this._TopRatedDoctors.getTopRatedDoctors().subscribe({

    next: (data: any) => {
      this.arrTopRatedDoctors.set(data.data) 
    },

    error: (err) => console.error(err)

  });

}



// search by location
arrSearchByLocation = signal<ITopRatedDoctors[]>([]) ;


Search_By_Location():void{

  const radiusKm :number = 15;
    navigator.geolocation.getCurrentPosition((position:any)=>{
      this.getLocationName(position.coords.latitude,position.coords.longitude)
      this._search_By_location.fnsearch_By_location(position.coords.latitude,position.coords.longitude,radiusKm).subscribe({

        next: (res:any) =>  {
          this.arrSearchByLocation.set(res.data)
        }  ,
      
        

        error:(err:any)=>{
          console.log(err)
        },


  complete: () => {
    console.log('Done');
  }
       
      })
    })
  


}

locationName!:string 
getLocationName(lat: number, lng: number):void{
fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`)
    .then(response => response.json())
    .then(data => {
      console.log("Full Response:", data);

      this.locationName = data.display_name; 
    })
    .catch(err => {
      console.log("Error getting address:", err);
    });
}

// close modal

@ViewChild('closeBtn') closeBtn!: ElementRef;


fnCloseModal():void{
  console.log(this.closeBtn.nativeElement.click())
}



fnAddFavourite(doctors:ITopRatedDoctors):void{
this._AddFavourite.FavDoctors(doctors.id).subscribe(
  {
    next:(next:any)=>{
     this.toastr.success('Added to favorites successfully', 'Success');
    this.audio.play()
  this.TopRatedDoctors()
    }
  }

)
}
}


