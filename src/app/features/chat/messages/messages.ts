import { Component, Input, input, signal } from '@angular/core';
import { ChatService } from '../chat.service';
import { FormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';
import { Message } from '../chat.model';

@Component({
  selector: 'app-messages',
  imports: [FormsModule, CommonModule],
  templateUrl: './messages.html',
  styleUrl: './messages.scss',
})
export class Messages {
  @Input({ required: true }) receiverId!: string;
  @Input({ required: true }) selectedUser!: any;
  senderId = '';
  content='';
  chatId = ''
  messages = signal<{
  id: number;
  content: string;
  sentAt: Date;
  isPatient: boolean;
  isRead: boolean;
}[]>([])
  constructor(private chatService: ChatService){

  }

  ngOnChanges() {
    console.log('Receiver ID changed:', this.receiverId);
    console.log('Receiver ID changed SelectedUSer:', this.selectedUser.id);
    console.log('Receiver ID changed SelectedUSer:', this.selectedUser);
    this.startChat()
    }

  startChat(){
    const id = this.receiverId;
    this.chatService.startChat(id).subscribe({
      next: (res: any) =>{
        console.log(res)
        console.log('Hello Messages are hereeeeee.')
        this.messages.set(res.data.messageListDTO)
        this.senderId= res.data.senderId;
        this.chatId= res.data.id;
        console.log('Sender ID changed:',this.senderId)
      }
    })
  }

sendMessage() {
  if (!this.content.trim()) return; // prevent sending empty messages

  this.chatService.sendMessage(+this.chatId, this.content, this.receiverId).subscribe({
    next: (res: any) => {
      console.log(res);

      // Add the new message to the messages signal
      const newMessage = {
        id: res.data.id || Date.now(), // fallback id
        content: this.content,
        sentAt: new Date(),
        isPatient: true,
        isRead: false
      };
      this.messages.update((msgs) => [...msgs, newMessage]);

      // Clear the input field
      this.content = '';
    },
    error: (err) => {
      console.error('Send message error:', err);
    }
  });
}
}
