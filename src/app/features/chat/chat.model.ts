export interface ChatTap {
  id: string;
  title: string;
  avatarUrl: string;
  lastMessage: string;
  unreadCount: number;
  updatedAt: string;
  isSuggestion?: boolean;
}

export interface Message {
  id: number;
  isPatient: boolean;
  content: string;
  senderUserId: string;
  mediaUrl: null;
  fileType: string;
  sentAt: string;
  isRead: boolean;
}
export interface Doctor{id: string, name: string, img: string}
