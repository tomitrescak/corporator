import { Yoga } from '../../yoga';

export type FixtureContext = {
  userId: string;
  processes: Yoga.BpmnProcessInstance;
  tasks: Yoga.BpmnTaskInstance;
};
