import { Component,ElementRef,inject,ViewChild,OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MainNavbar } from '../../shared/main-navbar/main-navbar';
import { MainFooter } from "../../shared/main-footer/main-footer";
import { Doctorservice } from './doctorservice';
import { DoctorlistData } from './doctorlist.DoctorData';
import { RouterModule } from '@angular/router';
import { AllSpecialist } from './doctorlist.DoctorData';
import { error } from 'console';
@Component({
  selector: 'app-doctorlist',
  imports: [CommonModule, FormsModule, MainNavbar,RouterModule, MainFooter,MainFooter],
  templateUrl: './doctorlist.html',
  styleUrl: './doctorlist.scss',
})
export class Doctorlist implements OnInit {

 // ///////////filterlisttoggle//////////////
 

 

  

  // //////////////////////////

  private doctorServices=inject(Doctorservice)

  constructor(private ref:ChangeDetectorRef ){}

  doctorcontainer:DoctorlistData[] =[];

  specialistcontainer:AllSpecialist[]=[]
  ngOnInit(): void {

    


      this.doctorServices.getAllDoctors().subscribe({

            next: (res) => {
    
          this.doctorcontainer = res.data;
          this.ref.detectChanges();
      // console.log(this.doctorcontainer);
     
              },
              error: (err) => {
                console.error('error', err);
              }
        });

      //  ///////////specialist

      this.doctorServices.getAllspecialists().subscribe({
        next:(res)=>{
          this.specialistcontainer=res.data;
          this.ref.detectChanges();
          console.log(this.specialistcontainer);
          

        },
        error:(err)=>{
          console.log("error",err);
          

        }
      })
      


  }
  
 filterlistshown:boolean=false;
      togglefiltermenu(){
   this.filterlistshown=!this.filterlistshown
  }

  
// /////////////////



@ViewChild('cardsContainer') cardsContainer!: ElementRef;
  items = Array.from({ length: this.specialistcontainer.length }, (_, i) => `Card ${i + 1}`);
  canScrollLeft = false;

  scrollRight() {
    this.cardsContainer.nativeElement.scrollBy({ left: 200, behavior: 'smooth' });
    this.onScroll();
  }

  scrollLeft() {
    this.cardsContainer.nativeElement.scrollBy({ left: -200, behavior: 'smooth' });
    this.onScroll();
  }

  onScroll() {
    const el = this.cardsContainer.nativeElement;
    this.canScrollLeft = el.scrollLeft > 0;
  }





}
