import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './sign-in.html',
  styleUrl: './sign-in.scss',
})
export class SignInComponent {
  constructor(private router: Router) {}

  form = new FormGroup({
    phone: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]{10,15}$/),
    ])
})
  onSignIn() {
    this.router.navigate(['/home']);
  }
}
