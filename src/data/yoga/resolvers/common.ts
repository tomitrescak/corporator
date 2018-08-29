import { Yoga } from '../../yoga';

export type FixtureContext = {
  userId?: string;
  processes?: Yoga.BpmnProcess[];
  processInstances?: Yoga.BpmnProcessInstance[];
  taskInstances?: Yoga.BpmnTaskInstance[];
};
