declare namespace Corpix.Entities {
  enum NotificationType {
    Default
  }

  interface Notification {
    _id: string;
    processInstance: BpmnProcessInstance;
    owner: User;
    code: string;
    params: string[];
    date: Date;
    visible: boolean;
    comment: string;
  }
}
