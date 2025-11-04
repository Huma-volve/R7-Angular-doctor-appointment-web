import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './sign-in.html',
  styleUrl: './sign-in.scss',
})
export class SignInComponent {
  email = '';
  password = '';

  // constructor(private router: Router) {}

  // onSubmit() {
  //   console.log('Signing in with', this.email);
  //   this.router.navigate(['/home']);
  // }
}
