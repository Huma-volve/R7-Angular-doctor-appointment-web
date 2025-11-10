import { Component } from '@angular/core';
import { MainNavbar } from '../../shared/main-navbar/main-navbar';
import { MainFooter } from '../../shared/main-footer/main-footer';
import { RouterOutlet } from '@angular/router';
import { DoctorChatList } from './doctor-chat-list/doctor-chat-list';

@Component({
  selector: 'app-chat',
  imports: [MainNavbar, MainFooter, RouterOutlet, DoctorChatList],
  templateUrl: './chat.html',
  styleUrl: './chat.scss',
})
export class Chat {

}
