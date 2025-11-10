import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SharedModule } from '../../shared/shared-module';

@Component({
  selector: 'app-contact-us',
  imports: [ReactiveFormsModule,SharedModule],
  templateUrl: './contact-us.html',
  styleUrl: './contact-us.scss',
  standalone: true
})
export class ContactUs {
    contactForm!: FormGroup;

constructor(private fb: FormBuilder)  { }


ngOnInit(): void {
 
    this.contactForm  = this.fb.group({
          name: [
      '',
      [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern(/^[A-Za-zأ-يء\s]+$/),
      ],
    ],

    email: ['', [Validators.required, Validators.email]],

    message: ['', [Validators.required, Validators.minLength(10)]],
  }); 
}


sendData():void{
  if(this.contactForm.valid){
    console.log(this.contactForm.value)
    this.contactForm.reset()
  }
}
 
}
