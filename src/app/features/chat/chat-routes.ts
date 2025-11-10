import { Routes } from '@angular/router';
import { Chat } from './chat';


export const CHAT_ROUTES: Routes = [
  {
    path: '',
    component: Chat,
    children: [
      {
        path: 'no-messages',
        loadComponent: () =>
          import('./no-messages/no-messages').then(
            (m) => m.NoMessages
          ),
      },
      {
        path: 'doctor-chat/:userId',
        loadComponent: () =>
          import('./chat-messages/chat-messages').then(
            (m) => m.ChatMessages
          ),
      },
      // redirect
      { path: '', redirectTo: 'no-messages', pathMatch: 'full' },
    ]
  },
];
