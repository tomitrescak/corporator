import { Yoga } from '../../yoga';

export type FixtureContext = {
  processes?: Yoga.BpmnProcess[];
  processInstances?: Yoga.BpmnProcessInstance[];
  taskInstances?: Yoga.BpmnTaskInstance[];
};
