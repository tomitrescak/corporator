import { mutation, query, resolver } from '../notifications_model';
import { create, its } from './test_utils';

its(
  'insert a new node into database',
  {
    // clear: ['BpmnProcessInstance', 'Notification'],
    user: {}
  },
  async (ctx, user) => {
    const bpmn = await create.bpmnProcessInstance(ctx);
    await mutation.notify(
      null,
      { userId: user.id, code: 'ServiceStarted', params: ['a'], processInstanceId: bpmn.id },
      ctx
    );
  }
);
