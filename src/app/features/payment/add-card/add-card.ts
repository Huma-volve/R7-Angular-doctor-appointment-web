import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CardNumberPipe } from '../card-number.pipe';
import { Router } from '@angular/router';
import { PaymentInterface } from '../payment.interface';
import { PaymentService } from '../payment.service';

@Component({
  selector: 'app-add-card',
  standalone: true,
  imports: [CommonModule, FormsModule, CardNumberPipe],
  templateUrl: './add-card.html',
  styleUrls: ['./add-card.scss'],
})
export class AddCard implements OnInit{
  name = '';
  number = '';
  expiryMonth = '';
  expiryYear = '';
  cvv = '';
  cvvFocus = false;
  showNumber = false;
  isValid = signal(true);
  constructor(private paymentService: PaymentService, private router: Router){

  }
  ngOnInit(): void {

  }

  onCvvFocus() { this.cvvFocus = true; }
  onCvvBlur() { this.cvvFocus = false; }
  toggleNumber() { this.showNumber = !this.showNumber; }

  // Only allow numbers
  onlyNumbers(event: any) {
    event.target.value = event.target.value.replace(/\D/g, '');
  }
  validateMonth() {
    if (!this.expiryMonth) return;

    // Only allow numbers
    this.expiryMonth = this.expiryMonth.replace(/[^0-9]/g, '');

    const month = Number(this.expiryMonth);
    if (month < 1 || month > 12) {
      this.expiryMonth = '';
    }
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log('ADD Method Here')
      const userToken = localStorage.getItem('userToken')? localStorage.getItem('userToken') : '';
      console.log(userToken)
        const payMethod: PaymentInterface = {
        MethodName: this.name,
        ProviderToken: userToken || '',
        Last3: this.cvv,
        brand: this.paymentService._selectedWalletMethod(),
        ExpMonth: +this.expiryMonth,
        ExpYear: +this.expiryYear
      }
      console.log(payMethod)
      this.paymentService.addPaymentMethod(payMethod).subscribe({
        next: (res) => {
          console.log(res)
          this.router.navigate(['/payment/visa-version']);
        }
      })
      this.isValid.set(true);
    } else {
      this.isValid.set(false)
      console.log('Please fill all required fields.');
    }



  }
  backToPaymentMethod(){
    this.router.navigate(['/payment/payment-method'])
  }

  get selectedPaymentMethod(){
    return this.paymentService._selectedWalletMethod()
  }
}
