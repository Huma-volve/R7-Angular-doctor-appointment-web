import { Component, computed, ElementRef, signal, ViewChild } from '@angular/core';
import { RatingService } from '../rating.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reviews',
  imports: [FormsModule],
  templateUrl: './reviews.html',
  styleUrl: './reviews.scss',
})
export class Reviews {
@ViewChild('slider', { static: false })
  slider!: ElementRef<HTMLDivElement>;
  maxStars = 5;
  rating = Math.floor(Math.random() * 5) + 1;

  constructor(private ratingService: RatingService) {}

  ngOnInit() {
    this.ratingService.getReviews().subscribe({
      next: (res:any) =>{
        this.reviews.set(res);
      }
    })
  }

  reviews = signal([
    {
      id: 1,
      name: 'Nabila Reyna',
      time: '30 min ago',
      img: './assets/images/user1.png',
      rating: 4.5,
      text: 'Quick and easy appointment! Highly recommend.'
    },
    {
      id: 2,
      name: 'Ferry Ichsan',
      time: '1 week ago',
      img: './assets/images/user2.png',
      rating: 4.5,
      text: 'Excellent service! The clinic was clean and staff friendly.'
    },
  ])

  // reviews = computed(() => this.ratingService.reviews());

  scrollLeft() {
    this.slider.nativeElement.scrollBy({
      left: -350,
      behavior: 'smooth'
    });
  }

  scrollRight() {
    this.slider.nativeElement.scrollBy({
      left: 350,
      behavior: 'smooth'
    });
  }
}
