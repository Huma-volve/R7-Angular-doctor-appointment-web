import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-otp-validation-login',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './otp-validation-login.html',
  styleUrl: './otp-validation-login.scss',
})
export class OtpValidationLogin implements OnInit {

  counter = signal(60);
  isFinished = signal(false)
  constructor(private authService: AuthService, private router: Router){

  }

  ngOnInit(){
    const interval = setInterval(() => {
      const current = this.counter();
      if (current > 0) {
        this.counter.update(v => v - 1);
      } else {
        clearInterval(interval);
        this.isFinished.set(true);
      }
    }, 1000);
  }

  form = new FormGroup({
    c1: new FormControl('', [Validators.required,Validators.pattern(/[0-9]/)]),
    c2: new FormControl('', [Validators.required,Validators.pattern(/[0-9]/)]),
    c3: new FormControl('', [Validators.required,Validators.pattern(/[0-9]/)]),
    c4: new FormControl('', [Validators.required,Validators.pattern(/[0-9]/)])
  })

  resend(){
    this.authService.resendOtp().subscribe({
      next: res => {
        console.log(res)
      }
    });
  }

  setAnotherPhoneNumber(){
    this.router.navigate(['/auth/sign-in'])
  }

  onSubmit(){
    if(this.form.valid){
      const otpNumber = Object.values(this.form.value).join('');
    console.log(otpNumber)
    this.authService.verifyLogin(otpNumber).subscribe({
      next: (res: any) => {
        const token = res.data.accessToken;
          this.authService.storeToken(token);
          if(token){
            console.log('Access Token saved:', token);
            this.authService.isLoggedIn();
            this.router.navigate(['/home'])
          }else{
            this.router.navigate(['/auth/sign-up'])
          }

      }

    })
    }
  }
}
