import { Component, OnInit } from '@angular/core';
import { MainFooter } from '../../../shared/main-footer/main-footer';
import { List } from "../list/list";
import { Messages } from '../messages/messages';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-chatt',
  imports: [MainFooter, List, Messages, CommonModule],
  templateUrl: './chatt.html',
  styleUrls: ['./chatt.scss'],
})
export class Chatt implements OnInit {
  receiverId = '';
  selectedUser: any = {};

  isMobileView = false; // true when screen < 768px
  showChat = false; // true when a user is selected on mobile

  ngOnInit() {
    this.checkScreen();
    window.addEventListener('resize', () => this.checkScreen());
  }

  checkScreen() {
    this.isMobileView = window.innerWidth < 768;
    if (!this.isMobileView) {
      this.showChat = true; // desktop always show chat
    } else {
      this.showChat = false; // mobile hide chat until user clicked
    }
  }

  getReceiverId(event: string) {
    this.receiverId = event;
  }

  getSelectedUser(user: any) {
    this.selectedUser = user;
  }

  onSelectUser(user: any) {
    this.selectedUser = user;
    if (this.isMobileView) this.showChat = true;
  }

  goBack() {
    if (this.isMobileView) this.showChat = false;
  }
}
