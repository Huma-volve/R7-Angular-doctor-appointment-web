import { Component } from '@angular/core';
import { SharedModule } from '../shared-module';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-main-footer',
  imports: [SharedModule,RouterLink],
  templateUrl: './main-footer.html',
  styleUrl: './main-footer.scss',
  standalone: true,
})
export class MainFooter {

}
