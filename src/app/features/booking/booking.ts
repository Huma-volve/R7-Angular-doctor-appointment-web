import { Component, inject } from '@angular/core';
import { SharedModule } from '../../shared/shared-module';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';


@Component({
  selector: 'app-booking',
  imports: [SharedModule,
     MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule
  ],
  templateUrl: './booking.html',
  styleUrl: './booking.scss',
  standalone: true,
})
export class Booking {
 
}
