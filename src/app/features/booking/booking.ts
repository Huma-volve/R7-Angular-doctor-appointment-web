import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared-module';

@Component({
  selector: 'app-booking',
  imports: [SharedModule],
  templateUrl: './booking.html',
  styleUrl: './booking.scss',
  standalone: true,
})
export class Booking {

}
