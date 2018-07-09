import { FlowNode } from '.';

export abstract class BaseEvent extends FlowNode {

  constructor(baseEvent: Bpmn.BaseEvent) {
    super(baseEvent);
  }
}