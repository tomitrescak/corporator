import { BpmnProcessInstance, ProcessActionResult } from 'data/yoga/models/bpmn_process_instance_model';
import { BaseElement } from './index';

export abstract class Event extends BaseElement {

  constructor(event: any) {
    super(event);

  }
  
  abstract execute(_state: BpmnProcessInstance, _context: ServerContext, result: ProcessActionResult): void;
}
