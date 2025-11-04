import { CommonModule } from '@angular/common';
import { Component, effect, signal } from '@angular/core';
import { FormControl, FormGroup, FormsModule, MinLengthValidator, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

interface SignUpForm{
  name: FormControl;
  email: FormControl;
}

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.html',
  standalone: true,
  imports:[RouterLink, CommonModule, FormsModule, ReactiveFormsModule],
  styleUrl: './sign-up.scss',
})
export class SignUpComponent {
  form = new FormGroup({
   name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
   email: new FormControl(null, [Validators.required, Validators.email]),
})
}

