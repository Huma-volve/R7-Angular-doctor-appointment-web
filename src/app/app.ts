import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgxSpinnerComponent } from 'ngx-spinner';
import { SharedModule } from './shared/shared-module';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgxSpinnerComponent,SharedModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  standalone:true,
})
export class App {
  protected readonly title = signal('doctor-app');

  constructor(){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.


  }

 



}
