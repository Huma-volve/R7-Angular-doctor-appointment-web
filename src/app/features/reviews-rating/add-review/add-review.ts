import { Component, output } from '@angular/core';

@Component({
  selector: 'app-add-review',
  imports: [],
  templateUrl: './add-review.html',
  styleUrl: './add-review.scss',
})
export class AddReview {

  // user = input.required<string>() //should i replace string with modal type and use find method to get user name
  addReview = output<{}>()  //should i replace general object with modal type
  cancel = output<void>();

  onAddReview(){
    this.addReview.emit({
    userImg: 'ali.png',
    userName:'userName',
    rate: '2',
    reviewMessage:'lorem2-0',
    })
  }

  onCancel(){
    this.cancel.emit();
  }
}
