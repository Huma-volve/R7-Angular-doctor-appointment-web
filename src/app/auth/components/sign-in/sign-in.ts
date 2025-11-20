import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../auth.service';
declare const google: any;
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
// Client-ID
// 88901426404-b7cll2ij2ub4oj8r6dtcbukjfl6c4fia.apps.googleusercontent.com
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




user = signal<any>(null);

  private clientId = '88901426404-lld8dkpoa17pdtthamkh5drpfmvcafk7.apps.googleusercontent.com';

  ngAfterViewInit() {
    google.accounts.id.initialize({
      client_id: this.clientId,
      callback: (res: any) => this.handleCredentialResponse(res),
    });
  }

  // Call this when your button is clicked
  loginWithGoogle() {
    google.accounts.id.prompt(); // open the Google account selector popup
    this.authService.loginWithGoogle(this.clientId).subscribe({
      next: res => console.log(res)
    })
  }

  handleCredentialResponse(response: any) {
    const jwtToken = response.credential;
    console.log('JWT Token:', jwtToken);

    // Send JWT to backend
    this.authService.loginWithGoogle(jwtToken).subscribe({
      next: (res)=>{
        this.router.navigate(['/home'])
      }
    });
  }
  logout() {
    google.accounts.id.disableAutoSelect();
    this.user.set(null);
  }

}
