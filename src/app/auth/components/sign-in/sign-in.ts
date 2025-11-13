import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sign-in',
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './sign-in.html',
  styleUrl: './sign-in.scss',
})
export class SignInComponent {

  constructor(private router: Router, private authService: AuthService) {}

  form = new FormGroup({
    phone: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]{10,15}$/),
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












  onSubmit(){
    if(this.form.valid){
    this.authService.phoneNumber = this.form.get('phone')?.value ?? '';
    this.authService.login().subscribe({
      next: res => {
        this.router.navigate(['/auth/otp-validation-login'])
      }
    })
  }
  }

  onSignIn() {
    this.router.navigate(['/home']);
  }
}
