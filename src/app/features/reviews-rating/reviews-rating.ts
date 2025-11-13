import { Component, output, signal } from '@angular/core';
import { AddReview } from './add-review/add-review';
import { RouterOutlet } from '@angular/router';
import { Reviews } from './reviews/reviews';
import { RatingService } from './rating.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reviews-rating',
  imports: [AddReview, Reviews, ReactiveFormsModule, CommonModule],
  templateUrl: './reviews-rating.html',
  styleUrl: './reviews-rating.scss',
})
export class ReviewsRating {
  addreviewbtnclicked = signal(false);

constructor(private ratingService: RatingService){

}
form = new FormGroup({
  comment: new FormControl(Validators.required)
})
  // user = input.required<string>() //should i replace string with modal type and use find method to get user name
  addReview = output<{}>()  //should i replace general object with modal type
  cancel = output<void>();


  onAddReviewClicked(){
    this.addreviewbtnclicked.update(preValue => !preValue)
  }
  onCancel(){
    this.addreviewbtnclicked.set(false);
  }
  onAddReview(){
    this.addreviewbtnclicked.set(false);
  }
  Dialog(){
    this.addreviewbtnclicked.set(false);
  }
}
