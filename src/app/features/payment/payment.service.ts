import { HttpClient, HttpHeaders } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { environment } from "../../core/environment/environment";
import { PaymentInterface } from "./payment.interface";

@Injectable({
  providedIn: 'root'
})

export class PaymentService{

private httpClient = inject(HttpClient);
private userToken = localStorage.getItem('userToken')? localStorage.getItem('userToken') : '';

//GET api/Profile/PaymentMethods/getall
gellAtPaymentMethods(){
    const userToken = localStorage.getItem('userToken')? localStorage.getItem('userToken') : '';
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${userToken}`,
      'Content-Type': 'application/json',
    });

    return this.httpClient.get(`${environment.baseUrl}api/Profile/PaymentMethods/all`,{
      headers
    })
}
//POST api/Profile/PaymentMethods/add
//  {
//   "methodName": "string",
//   "providerToken": "string",
//   "last3": "857",
//   "brand": "string",
//   "expMonth": 12,
//   "expYear": 9999
// }
addPaymentMethod(paymentMethod: PaymentInterface){
    const userToken = localStorage.getItem('userToken')? localStorage.getItem('userToken') : '';
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${userToken}`,
      'Content-Type': 'application/json',
    });

    return this.httpClient.post(`${environment.baseUrl}api/Profile/PaymentMethods/add`,{
      paymentMethod
    },{
      headers
    })
}
//Delete api/Profile/PaymentMethods/delete/{id}
deletePaymentMethods(){
    const userToken = localStorage.getItem('userToken')? localStorage.getItem('userToken') : '';
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${userToken}`,
      'Content-Type': 'application/json',
    });

    return this.httpClient.delete(`${environment.baseUrl}api/Profile/PaymentMethods/delete/{id}`,{
      headers
    })
}
//POST api/Profile/PaymentMethods/init
// {
//   "method": "string",
//   "amount": 0.1
// }
initPaymentMethods(){
    const userToken = localStorage.getItem('userToken')? localStorage.getItem('userToken') : '';
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${userToken}`,
      'Content-Type': 'application/json',
    });

    return this.httpClient.post(`${environment.baseUrl}api/Profile/PaymentMethods/init`,{},{
      headers
    })
}
//POST api/Profile/PaymentMethods/confirm
// {
//   "transactionId": "string",
//   "paymentMethod": "string",
//   "amount": 0,
//   "status": "string"
// }
confirmPaymentMethods(){
    const userToken = localStorage.getItem('userToken')? localStorage.getItem('userToken') : '';
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${userToken}`,
      'Content-Type': 'application/json',
    });

    return this.httpClient.post(`${environment.baseUrl}api/Profile/PaymentMethods/confirm`,{},{
      headers
    })
}



}
