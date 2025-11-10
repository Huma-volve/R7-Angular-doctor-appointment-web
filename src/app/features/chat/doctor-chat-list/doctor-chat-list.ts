import { Component } from '@angular/core';
import { ChatService } from '../chat.service';
import { Chat } from '../chat.interface';
import { PatientRoutingModule } from "../../../patient/patient-routing-module";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-doctor-chat-list',
  imports: [PatientRoutingModule, RouterLink],
  templateUrl: './doctor-chat-list.html',
  styleUrl: './doctor-chat-list.scss',
})
export class DoctorChatList {

  chatList: Chat[] = []

  constructor(chatService: ChatService){
    this.chatList = chatService.getChats();
  }

}
