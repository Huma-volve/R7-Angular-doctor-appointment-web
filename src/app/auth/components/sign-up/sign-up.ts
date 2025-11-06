import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.html',
  standalone: true,
  imports:[RouterLink, CommonModule, ReactiveFormsModule],
  styleUrl: './sign-up.scss',
})
export class SignUpComponent {

  constructor(private router: Router){

  }

  form = new FormGroup({
    name: new FormControl('', [Validators.required,Validators.pattern(/^[a-z]{9,25}$/)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]{10,15}$/),
    ])
})

  onSignUp(){
    this.router.navigate(['/auth/sign-in']);
  }

}

