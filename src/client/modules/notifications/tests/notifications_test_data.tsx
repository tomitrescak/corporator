import { create, QueryTypes } from 'client/tests';

const defaultNotification: QueryTypes.Notifications = {
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
  notification: Partial<QueryTypes.Notifications> = {}
): QueryTypes.Notifications {
  return { ...defaultNotification, ...notification };
}
