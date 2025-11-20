import { CommonModule } from '@angular/common';
import { Component, inject} from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../auth.service';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { ToastService } from '../../../core/services/toaster.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.html',
  standalone: true,
  imports:[RouterLink, CommonModule, ReactiveFormsModule],
  styleUrl: './sign-up.scss',
})
export class SignUpComponent {

  constructor(private router: Router, private authService: AuthService){

  }

  form = new FormGroup({
    name: new FormControl('', [Validators.required,Validators.pattern(/^[A-Za-z\s]{9,25}$/)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required, Validators.pattern(/^\+?[0-9]{10,15}$/),
    ])
})


// Available countries
  countries = [
    { name: 'Egypt', code: '(+20)', flag: './assets/images/Flag.jpg' },
    { name: 'Germany', code: '(+49)', flag: './assets/images/germany.png' },
  ];

  // Default country
  selectedCountry = this.countries[0];

  selectCountry(country: any) {
    this.selectedCountry = country; // instantly update
  }

  onSignUp(){
    this.router.navigate(['/auth/sign-in']);
  }

  onSubmit() {
    if (this.form.valid) {
      const name = this.form.get('name')?.value ?? '';
      console.log('Phone number:', name);
      const email = this.form.get('email')?.value ?? '';
      console.log('Phone number:', email);
      const phone = this.form.get('phone')?.value ?? '';
      console.log('Phone number:', phone);

      // Sending User Data Into Backend
      this.authService.register({
        fullName: name,
        email: email,
        phoneNumber: phone
      })
      // .pipe(
      //   catchError(
      //     (error) => {
      //       return throwError(()=>{
      //           new Error('Error Happend')
      //       })
      //     }
      //   )
      // )
      .subscribe({
        next:  (data: any) => {
          console.log(data)
          this.authService.phoneNumber = this.form.get('phone')?.value ?? ''
          this.router.navigate(['/auth/otp-validation-register']);
        },
        error: (error : Error) => {
          console.log(error.message)
        }
      })
    } else {
      this.form.markAllAsTouched();
    }
  }

}

