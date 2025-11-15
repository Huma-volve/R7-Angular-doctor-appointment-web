import { SearchByLocation } from './../../core/services/search-by-location';
import { TopRatedDoctors } from './../../core/services/top-rated-doctors';
import { AfterViewInit, ChangeDetectorRef, Component, CUSTOM_ELEMENTS_SCHEMA, NgZone, OnInit, signal } from '@angular/core';
import { SharedModule } from '../../shared/shared-module';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { ITopRatedDoctors } from '../../core/interfaces/topRatedDoctors';
import { MainNavbar } from '../../shared/main-navbar/main-navbar';
import { FormsModule } from '@angular/forms';
import { PatientRoutingModule } from "../../patient/patient-routing-module";
import { A11yModule } from "@angular/cdk/a11y";
import { CutPragraphPipe } from '../../core/pipe/cut-pragraph-pipe';

@Component({
  selector: 'app-home',
   standalone: true,
  imports: [CommonModule, SharedModule, FormsModule, PatientRoutingModule,CutPragraphPipe],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeComponent  {

 constructor(private _TopRatedDoctors :TopRatedDoctors,private _search_By_location:SearchByLocation) {
 }
   arrTopRatedDoctors = signal<ITopRatedDoctors[]>([]);


 ngOnInit(): void {
   this.TopRatedDoctors()
}




  TopRatedDoctors():void{
  this._TopRatedDoctors.getTopRatedDoctors().subscribe({

    next: (data: any) => {
      console.log(data.data)

      this.arrTopRatedDoctors.set(data.data) 
    },

    error: (err) => console.error(err)

  });

}



// search by location
arrSearchByLocation = signal<ITopRatedDoctors[]>([]) ;

statusDivSearchByLocation:boolean = false;
Search_By_Location():void{
  const radiusKm :number = 15;
    navigator.geolocation.getCurrentPosition((position:any)=>{
      this._search_By_location.fnsearch_By_location(position.coords.latitude,position.coords.longitude,radiusKm).subscribe({

        next: (res:any) => {
          this.statusDivSearchByLocation = true;
         console.log(res.data)
        this.arrSearchByLocation.set(res.data) 
        },

        error:(err:any)=>{
          console.log(err)
        },


          complete: () => {
    console.log('Done');
  }
       
      })
    })
  


}


}


