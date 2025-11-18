import { HttpClient, HttpHeaders } from "@angular/common/http";
import { inject, Injectable, signal } from "@angular/core";
import { environment } from "../../core/environment/environment";
import { PaymentInterface } from "./payment.interface";

@Injectable({
  providedIn: 'root'
})

export class PaymentService{

private httpClient = inject(HttpClient);
private userToken = localStorage.getItem('userToken')? localStorage.getItem('userToken') : '';

private selectedWalletMethod = signal('') // For Set Payment Method Brand
_selectedWalletMethod = this.selectedWalletMethod.asReadonly()

private walletArr = signal<any>([]) // For Set Payment Method Brand
_walletArr = this.selectedWalletMethod.asReadonly()

// Set SelectedWalletMethod
setwalletArr(wallet: Array<any>){
  this.walletArr.set(wallet)
  console.log(this.walletArr())
}
// Set SelectedWalletMethod
setWalletMethod(wallet: string){
  this.selectedWalletMethod.set(wallet)
  console.log(this.selectedWalletMethod())
}
//GET api/Profile/PaymentMethods/getall
gellAtPaymentMethods(){
    return this.httpClient.get(`api/Profile/PaymentMethods/getall`)
}
//POST api/Profile/PaymentMethods/add
addPaymentMethod(paymentMethod: PaymentInterface){
    return this.httpClient.post(`api/Profile/PaymentMethods/add`,
      paymentMethod
    )
}
//Delete api/Profile/PaymentMethods/delete/{id}
deletePaymentMethods(id: number){

    return this.httpClient.delete(`api/Profile/PaymentMethods/delete/${id}`)
}
//POST api/Profile/PaymentMethods/init
// {
//   "method": "string",
//   "amount": 0.1
// }
initPaymentMethods(amount: string){
    return this.httpClient.post(`api/Profile/PaymentMethods/init`,
      {
        "Amount": +amount,
        "Method": `${this._selectedWalletMethod()}`
      }
      )
}
//POST api/Profile/PaymentMethods/confirm
// {
//   "transactionId": "string",
//   "paymentMethod": "string",
//   "amount": 0,
//   "status": "string"
// } Still Working on It...
confirmPaymentMethods(transactionId: string, amount: number, status: string){
    return this.httpClient.post(`api/Profile/PaymentMethods/confirm`,{
      TransactionId: transactionId,
      PaymentMethod: this._selectedWalletMethod(),
      amount,
      status
    })
}

}
