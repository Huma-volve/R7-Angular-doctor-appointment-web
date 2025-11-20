import { Component, output, signal } from '@angular/core';

import { ChatService } from '../chat.service';
import { FormsModule } from '@angular/forms';
import { Messages } from '../messages/messages';



@Component({
  selector: 'app-list',
  imports: [FormsModule],
  templateUrl: './list.html',
  styleUrl: './list.scss',
})
export class List {
  chats = signal<any>([]);
  filtered = signal<any>([]);
  messages = signal<Messages[]>([]);
  receiverId = output<string>()
  id = ''
  searchText = '';
  selectedUser= output<object>()
  isSelectedTap = signal(false)
  constructor(private chatService: ChatService){
  }
  ngOnInit(){
    this.getAllChaTaps()
  }
  getAllChaTaps(){
    this.chatService.getAllChat().subscribe({
      next: res =>{
        // this.chatList = res.
        console.log(res)
      }
    })
  }
  clickedUser(user: any){
    console.log(user)
  }
  onSearch() {
    const term = this.searchText.trim().toLowerCase();
    if(this.searchText){
      this.chatService.searchDoctors(term).subscribe({
      next: (res: any) => {
        console.log(res)
        this.chats.set(res.data.doctorsListDTO);
        console.log(this.chats)
      }
    });
    }
      // Hazem Al-Saadi
  }
  clickedChatTap(id : string){
    this.id = id
    this.receiverId.emit(id)
  }
  onSelectUser(user : object){
    this.selectedUser.emit(user)
  }
}
