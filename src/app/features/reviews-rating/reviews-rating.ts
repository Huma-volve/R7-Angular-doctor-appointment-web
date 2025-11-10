import { Component, signal } from '@angular/core';
import { AddReview } from './add-review/add-review';
import { RouterOutlet } from '@angular/router';
import { Reviews } from './reviews/reviews';

@Component({
  selector: 'app-reviews-rating',
  imports: [AddReview, Reviews],
  templateUrl: './reviews-rating.html',
  styleUrl: './reviews-rating.scss',
})
export class ReviewsRating {
  addreviewbtnclicked = signal(false);



  onAddReviewClicked(){
    this.addreviewbtnclicked.update(preValue => !preValue)
  }
  onCancel(){
    this.addreviewbtnclicked.set(false);
  }
  onAddReview(){
    this.addreviewbtnclicked.set(false);
  }
}
