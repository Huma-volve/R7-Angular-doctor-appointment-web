import { Component } from '@angular/core';
import { PaymentService } from '../payment.service';
import { NgClass } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-method',
  imports: [NgClass],
  templateUrl: './payment-method.html',
  styleUrl: './payment-method.scss',
})
export class PaymentMethod {

constructor(private paymentService: PaymentService, private router: Router){

}

  selectedWallet: string | null = null;

  selectWallet(wallet: string) {
    this.selectedWallet = wallet;
    this.paymentService.setWalletMethod(wallet)
  }
  backToHome(){
    this.router.navigate(['/home'])
  }

  // MethodInit(){
  // this.paymentService.initPaymentMethods('2000').subscribe({
  //   next: res =>{
  //     console.log(res)
  //   }
  // })
  // }

  navigateToAddCMP(){
    this.router.navigate(['/payment/add-card'])
  }

}
