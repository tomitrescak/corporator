import { create, its } from 'data/tests';
import { mutation } from '../process_instance_resolver';

its(
  'launch process',
  {
    clear: ['BpmnProcess', 'BpmnProcessInstance', 'Log']
  },
  async ctx => {
    const process = await create.process(ctx, { name: 'Test Process' });

    const result = await mutation.launchProcessInstance(
      null,
      { input: { processId: process.id } },
      ctx
    );
  }
);
