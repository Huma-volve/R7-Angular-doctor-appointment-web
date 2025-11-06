import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-auth-container',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './auth-container.html',
  styleUrl: './auth-container.scss',

})
export class AuthContainerComponent {

}
