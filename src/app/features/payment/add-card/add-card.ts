import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CardNumberPipe } from '../card-number.pipe';
import { RouterLink } from '@angular/router';
import { PaymentInterface } from '../payment.interface';
import { PaymentService } from '../payment.service';

@Component({
  selector: 'app-add-card',
  standalone: true,
  imports: [CommonModule, FormsModule, CardNumberPipe, RouterLink],
  templateUrl: './add-card.html',
  styleUrls: ['./add-card.scss'],
})
export class AddCard {
  name = '';
  number = '';
  expiryMonth = '';
  expiryYear = '';
  cvv = '';
  cvvFocus = false;
  showNumber = false;

  constructor(private paymentService: PaymentService){

  }


  onCvvFocus() { this.cvvFocus = true; }
  onCvvBlur() { this.cvvFocus = false; }
  toggleNumber() { this.showNumber = !this.showNumber; }

  // Only allow numbers
  onlyNumbers(event: any) {
    event.target.value = event.target.value.replace(/\D/g, '');
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log('ADD Method Here')
        const payMethod: PaymentInterface = {
        MethodName: this.name,
        ProviderToken: this.number,
        Last3: this.cvv,
        brand: "HSPC Bank",
        expMonth: +this.expiryMonth,
        expYear: +this.expiryYear
      }
      console.log(payMethod)
      this.paymentService.addPaymentMethod(payMethod).subscribe({
        next: (res) => {
          console.log(res)
        }
      })
    } else {
      console.log('Please fill all required fields.');
    }


  }
}
