import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-otp-validation-register',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './otp-validation-register.html',
  styleUrl: './otp-validation-register.scss',
})
export class OtpValidationRegister implements OnInit {

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
    this.router.navigate(['/auth/sign-up'])
  }


  onSubmit(){
    const otpNumber = Object.values(this.form.value).join('');
    console.log(otpNumber)
    this.authService.verifyRegister(otpNumber).subscribe({
      next: res => {
        console.log(res)
        this.router.navigate(['/auth/sign-in'])
      }
    })
  }


}
