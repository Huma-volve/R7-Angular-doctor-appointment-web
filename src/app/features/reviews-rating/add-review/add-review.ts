import { CommonModule } from '@angular/common';
import { Component, output } from '@angular/core';
import { RatingService } from '../rating.service';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-add-review',
  imports: [CommonModule, ReactiveFormsModule,FormsModule],
  templateUrl: './add-review.html',
  styleUrls: ['./add-review.scss'],
})
export class AddReview {

  maxStars = 5;
  rating = 0;
  hoverIndex = 0;
  closeDialog = output<any>();

  constructor(private ratingService: RatingService) {}

  form = new FormGroup({
    comment: new FormControl('', Validators.required),
  });

  onSubmit() {
    console.log('Hello I am here');
    const comment = this.form.get('comment')?.value ?? '';
    this.ratingService.addReview(comment, this.rating).subscribe({
      next: (res) => {
        console.log(res);
      },
    });

    this.dialog();
    console.log('Hello I am there');
  }

  setRating(value: number) {
    this.rating = value
  }
  setHover(value: number) {
    this.hoverIndex = value;
  }
  clearHover() {
    this.hoverIndex = 0;
  }
  dialog() {
    this.closeDialog.emit('');
  }
}
