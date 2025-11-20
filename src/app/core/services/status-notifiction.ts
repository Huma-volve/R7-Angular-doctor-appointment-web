import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StatusNotifiction {
    notifications = signal<any[]>([]);

  setNotifications(list: any[]) {
    this.notifications.set(list);
  }
}
