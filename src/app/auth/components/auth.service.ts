import { HttpClient } from "@angular/common/http";
import { DestroyRef, inject, Injectable, signal } from "@angular/core";
import type { User } from "./user.model";
import { environment } from "../../core/environment/environment";

@Injectable({
  providedIn: 'root'
})

export class AuthService{

  private httpClient = inject(HttpClient)
  private userToken = localStorage.getItem('userToken')? localStorage.getItem('userToken') : '';
  phoneNumber = '';

  getAccessToken(){
    return this.userToken= localStorage.getItem('userToken')? localStorage.getItem('userToken') : ''
  }

  register(user: User){
    return this.httpClient.post(`api/Identity/Accounts/Register`, user)
  }

  verifyRegister(otpNumber: string){
    return this.httpClient.post(`api/Identity/Accounts/verify-Register`, {
      phoneNumber: this.phoneNumber,
      otpNumber
    })
  }

  login(){
    return this.httpClient.post(`api/Identity/Accounts/login`, {
      phoneNumber: this.phoneNumber
    })
  }

  resendOtp(){
    return this.httpClient.post(`api/Identity/Accounts/resend-otp`, {
      phoneNumber: this.phoneNumber
    })
  }

  verifyLogin(otpNumber: string){
    return this.httpClient.post(`api/Identity/Accounts/verify-login`,{
      phoneNumber: this.phoneNumber,
      otpNumber
    })
  }

  // Just for Routing Guard
  isLoggedIn(): boolean {
    const userToken = localStorage.getItem('userToken')
    return userToken ? true : false;
  }

  storeToken(userToken: string) {
    localStorage.setItem('userToken', userToken);
  }

  logout() {
    localStorage.removeItem('userToken');
  }

}
