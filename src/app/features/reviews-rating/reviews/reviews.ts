import { Component } from '@angular/core';
import { RatingService } from '../rating.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reviews',
  imports: [FormsModule],
  templateUrl: './reviews.html',
  styleUrl: './reviews.scss',
})
export class Reviews {
  maxStars = 5;
  rating = Math.floor(Math.random() * 5) + 1;

  constructor(private ratingService: RatingService) {}

  ngOnInit() {
    // this.getAllReviews()  // to Get ALl reviews but right now data is null
  }

  getAllReviews() {
    this.ratingService.getReviews().subscribe({
      next: (res) => {
        console.log(res);
      },
    });
  }
}
