import { create, QueryTypes } from 'client/tests';

const defaultNotification: QueryTypes.NotificationsNotifications = {
  createdAt: create.createdDate,
  id: 'nid',
  processInstance: {
    id: 'piid',
    process: {
      name: 'Process Name'
    }
  },
  text: 'Notification Text',
  type: QueryTypes.NotificationType.Info
};

export function createNotification(
  notification: Partial<QueryTypes.NotificationsNotifications> = {}
): QueryTypes.NotificationsNotifications {
  return { ...defaultNotification, ...notification };
}
