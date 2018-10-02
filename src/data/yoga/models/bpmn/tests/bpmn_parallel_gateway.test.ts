import { ProcessActionResult } from '../../bpmn_process_instance_model';
import ParallelGateway from '../bpmn_parallel_gateway_model';

describe('Bpmn Parallel Gateway', () => {
  it('executes with 3 incoming nodes', () => {
    const outgoing = [{ execute: jest.fn() } as any, { execute: jest.fn() } as any] as any;
    const parGateDAO = { $type: 'parallelGateway', incoming: [{} as any, {} as any, {} as any], outgoing } as any;
    const parGate = new ParallelGateway(parGateDAO, {} as any, {} as any, outgoing);

    // unused arguments
    const state = {} as any;
    const context = {} as any;
    const result: ProcessActionResult = { active: [], executed: [], processInstance: null };

    // gateway must be reached 3 separate times before moving onto the outgoing flow nodes
    parGate.execute(state, context, result);
    expect(outgoing[0].execute).not.toHaveBeenCalled();
    expect(outgoing[1].execute).not.toHaveBeenCalled();

    parGate.execute(state, context, result);
    expect(outgoing[0].execute).not.toHaveBeenCalled();
    expect(outgoing[1].execute).not.toHaveBeenCalled();

    parGate.execute(state, context, result);
    expect(outgoing[0].execute).toHaveBeenCalled();
    expect(outgoing[1].execute).toHaveBeenCalled();
  });

  it('adds to executed list', () => {
    const outgoing = [{ execute: jest.fn() } as any, { execute: jest.fn() } as any] as any;
    const parGateDAO = { $type: 'parallelGateway', incoming: [{} as any, {} as any, {} as any], outgoing } as any;
    const parGate = new ParallelGateway(parGateDAO, {} as any, {} as any, outgoing);

    const state = {} as any;
    const context = {} as any;
    const result: ProcessActionResult = { active: [], executed: [], processInstance: null };

    // gateway must be reached 3 separate times before moving onto the outgoing flow nodes
    parGate.execute(state, context, result);
    expect(result.executed.length).toEqual(0);

    parGate.execute(state, context, result);
    expect(result.executed.length).toEqual(0);

    parGate.execute(state, context, result);
    expect(result.executed.length).toEqual(1);
  });
});
