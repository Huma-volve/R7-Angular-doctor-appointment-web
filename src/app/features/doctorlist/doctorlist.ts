import { Component,ElementRef,ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-doctorlist',
  imports: [CommonModule],
  templateUrl: './doctorlist.html',
  styleUrl: './doctorlist.scss',
})
export class Doctorlist {

  togglefiltermenu(){

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
