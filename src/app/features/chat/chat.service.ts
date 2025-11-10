import { Injectable } from "@angular/core";
import { Chat } from "./chat.interface";
@Injectable({
  providedIn: 'root',
})
export class ChatService{
  private chats: Chat[] = [
  {
    id: 1,
    name: "Dr. Robert Lewis",
    message: "It's been around six.....",
    time: "5:30 PM",
    unreadCount: 3,
    image: "assets/images/user1.png",
  },
  {
    id: 2,
    name: "Dr. Jana",
    message: "you: ok I will do it like...",
    time: "1:25 PM",
    unreadCount: 0,
    image: "assets/images/user3.png",
  },
  {
    id: 3,
    name: "Dr. Jessica Turner",
    message: "It's been around six.....",
    time: "Yesterday",
    unreadCount: 0,
    image: "assets/images/user1.png",
  },
  {
    id: 4,
    name: "Dr. Jessica",
    message: "It's been around six.....",
    time: "2 days",
    unreadCount: 0,
    image: "assets/images/user2.png",
  },
];
  getChats(): Chat[] {
    return this.chats;
  }
}
