import { Component,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SharedModule } from '../../shared/shared-module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
   standalone: true,
  imports: [SharedModule,CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeComponent {

}


