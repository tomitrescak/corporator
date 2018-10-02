import { SequenceFlow } from '../';
import { ProcessActionResult } from '../../bpmn_process_instance_model';

describe('Bpmn Sequence Flow', () => {
  it('executes', () => {
    const targetRef = { execute: jest.fn() } as any;
    const seqFlow = new SequenceFlow({ $type: 'sequenceFlow' } as any, {} as any, {} as any, targetRef);

    // unused arguments
    const state = {} as any;
    const context = {} as any;
    const result: ProcessActionResult = { active: [], executed: [], processInstance: null };

    seqFlow.execute(state, context, result);

    expect(targetRef.execute).toHaveBeenCalled();

  });

  it('adds to executed list', () => {
    const targetRef = { execute: jest.fn() } as any;
    const seqFlow = new SequenceFlow({ $type: 'sequenceFlow' } as any, {} as any, {} as any, targetRef);

    const state = {} as any;
    const context = {} as any;
    const result: ProcessActionResult = { active: [], executed: [], processInstance: null };

    seqFlow.execute(state, context, result);

    expect(result.executed.length).toEqual(1);
  });
});
