import { CommonModule } from '@angular/common';
import { Component, DestroyRef, effect, inject, OnInit, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { interval } from 'rxjs';

@Component({
  selector: 'app-otp-validation',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './otp-validation.html',
  styleUrl: './otp-validation.scss',
})
export class OtpValidationComponent implements OnInit {
  counter = signal(60);
  digits = [signal(''), signal(''), signal(''), signal('')];

  isFinished = signal(false);
  destroyRef = inject(DestroyRef);

  form = '';

  constructor() {
    effect(() => {
      if (this.counter() == 0) {
        this.destroyRef.onDestroy(() => {
          this.isFinished.set(true);
        });
      }
    });
  }
  ngOnInit(): void {
    const subscription = interval(1000).subscribe(() => {
      const current = this.counter();

      if (current > 0) {
        this.counter.set(current - 1);
      } else {
        this.isFinished.set(true);
        this.destroyRef.onDestroy(() => {
          subscription.unsubscribe();
        });
      }
    });
  }

  onSubmit(form : NgForm) {
    form.resetForm();
  }
}
