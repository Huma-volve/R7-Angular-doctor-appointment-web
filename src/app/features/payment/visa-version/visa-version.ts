import { ChangeDetectorRef, Component, computed, OnInit, signal } from '@angular/core';
import { PaymentService } from '../payment.service';
import { PaymentInterface } from '../payment.interface';
import { Router } from '@angular/router';



@Component({
  selector: 'app-visa-version',
  imports: [],
  templateUrl: './visa-version.html',
  styleUrl: './visa-version.scss',
})
export class VisaVersion implements OnInit {
  brand = signal<string>('');
  isEmpty = signal(true);
  resultPath= ''
  selectedWallet= signal(true);
  paymentMethodsArr: PaymentInterface[] =[];
  constructor(private paymentService: PaymentService, private cdr: ChangeDetectorRef, private router: Router){

  }

  ngOnInit(){
    this.getAllPaymentMethod()  //Get ALL Payment Methods...
  }

  getAllPaymentMethod(){
    this.paymentService.gellAtPaymentMethods().subscribe({
        next: (res : any) => {
          console.log(res)
          this.brand.set(this.paymentService._selectedWalletMethod())
          this.resultPath = this.brand().replace(/\s+/g, '-');
          console.log(this.resultPath)
          this.paymentMethodsArr = res.data
          this.paymentService.setwalletArr(res.data)
          this.cdr.detectChanges()
          this.isEmpty.set(false)
          console.log(this.paymentMethodsArr)
        }
      })
  }
  backToAddCard(){
    this.router.navigate(['/payment/add-card'])
  }
  amount = signal('');
  status = signal('');
  isInit = signal(false);
  goToInit(){
    this.paymentService.initPaymentMethods('350').subscribe({
      next: (res: any) =>{
        console.log(res)
        this.amount.set(res.data.amount)
        this.status.set(res.data.status)
        this.isInit.set(true);
      }
    })
  }
    confirmPayment(){
    this.paymentService.confirmPaymentMethods('123',+this.amount(),this.status()).subscribe({
      next: (res: any) =>{
        console.log(res)
        this.router.navigate(['/home'])
      }
    })
    console.log('Confirmed Payment Procces')
  }

}
