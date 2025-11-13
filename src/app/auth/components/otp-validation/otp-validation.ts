import { CommonModule } from '@angular/common';
import { Component, DestroyRef, effect, inject, OnInit, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from 'express';
import { interval } from 'rxjs';

@Component({
  selector: 'app-otp-validation',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './otp-validation.html',
  styleUrl: './otp-validation.scss',
})
export class OtpValidationComponent implements OnInit {


  constructor(private activatedRoute: ActivatedRoute, private router: Router) {

  }
  ngOnInit(): void {

  }


}
