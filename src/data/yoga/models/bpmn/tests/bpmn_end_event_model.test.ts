import { ProcessActionResult } from '../../bpmn_process_instance_model';
import { EndEvent } from '../bpmn_end_event_model';

describe('Bpmn End Event', () => {
  it('executes', () => {
    const endEvent = new EndEvent({ $type: 'endEvent' } as any);

    const state = { finish: jest.fn() } as any;
    // unused arguments
    const context = {} as any;
    const result: ProcessActionResult = { active: [], executed: [], processInstance: null };

    endEvent.execute(state, context, result);

    expect(state.finish).toHaveBeenCalled();
  });

  it('adds to executed list', () => {
    const endEvent = new EndEvent({ $type: 'endEvent' } as any);

    const state = { finish: jest.fn() } as any;
    const context = {} as any;
    const result: ProcessActionResult = { active: [], executed: [], processInstance: null };

    endEvent.execute(state, context, result);

    expect(result.executed.length).toEqual(1);
  });
});
