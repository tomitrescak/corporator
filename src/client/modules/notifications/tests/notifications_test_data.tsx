import { create, QueryTypes } from 'client/tests';

const defaultNotification: QueryTypes.NotificationsQuery_Notifications = {
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
  notification: Partial<QueryTypes.NotificationsQuery_Notifications> = {}
): QueryTypes.NotificationsQuery_Notifications {
  return { ...defaultNotification, ...notification };
}
