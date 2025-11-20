export interface INotificationsResponse {
  data: INotificationItem[];
}
export interface INotificationItem {
  id: number;
  content: string;
  applicationUserId: string;
  types: number;
  isRead: boolean;
  createdAt: string;
}
