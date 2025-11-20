import { HttpClient, HttpHeaders } from "@angular/common/http";
import { inject, Injectable, PLATFORM_ID } from "@angular/core";
import { environment } from "../../core/environment/environment";
import { isPlatformBrowser } from "@angular/common";

@Injectable({
  providedIn:'root'
})

export class ChatService{
  private httpClient = inject(HttpClient);

  searchDoctors(text: string){
    return this.httpClient.get(`api/chat/chat/chats?search=${text}`);
  }

//GET api/Profile/PaymentMethods/getall
getAllChat(){

    return this.httpClient.get(`api/chat/Chat/chats`)
}

  startChat(receiverId: string){

    return this.httpClient.post(`api/chat/chat/startChat?receiverId=${receiverId}`, { receiverId });
  }
  sendMessage(chatId: number, content: string, receiverId: string | any) {
    const formData = new FormData();
    formData.append('chatId', chatId.toString());
    formData.append('ReceiverId', receiverId);
    formData.append('Content', content);
    return this.httpClient.post(`api/chat/chat/send`, formData);
  }
}
