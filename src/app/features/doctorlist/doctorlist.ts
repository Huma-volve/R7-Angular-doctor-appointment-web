import { Component,ElementRef,ViewChild } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MainNavbar } from '../../shared/main-navbar/main-navbar';
import { MainFooter } from "../../shared/main-footer/main-footer";


@Component({
  selector: 'app-doctorlist',
  imports: [CommonModule, FormsModule, MainNavbar, MainFooter,MainFooter],
  templateUrl: './doctorlist.html',
  styleUrl: './doctorlist.scss',
})
export class Doctorlist {

 // ///////////filterlisttoggle//////////////
  filterlistshown:boolean=false

  togglefiltermenu(){
   this.filterlistshown=!this.filterlistshown
  }


  @ViewChild('cardsContainer') cardsContainer!: ElementRef;
  items = Array.from({ length: 18 }, (_, i) => `Card ${i + 1}`);
  canScrollLeft = false;

  scrollRight() {
    this.cardsContainer.nativeElement.scrollBy({ left: 300, behavior: 'smooth' });
    this.onScroll();
  }

  scrollLeft() {
    this.cardsContainer.nativeElement.scrollBy({ left: -300, behavior: 'smooth' });
    this.onScroll();
  }

  onScroll() {
    const el = this.cardsContainer.nativeElement;
    this.canScrollLeft = el.scrollLeft > 0;
  }



}
