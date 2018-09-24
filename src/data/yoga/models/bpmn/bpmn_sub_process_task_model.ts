import { BpmnProcessInstance } from '../bpmn_process_instance_model';
import { BpmnProcessModel } from '../bpmn_process_model';
import { BoundaryEvent } from './bpmn_boundary_event_model';
import { Lane } from './bpmn_lane_model';
import { Task } from './bpmn_task_model';

export class SubProcessTask extends Task {
  processRef: string;

  constructor(task: Bpmn.SubProcessTask, lane?: Lane, attachedEvents?: BoundaryEvent[]) {
    super(task, lane, attachedEvents);
    this.processRef = task.processRef;
  }

  async execute(state: BpmnProcessInstance, context: ServerContext) {
    
    const processModelDAO = await context.db.query.bpmnProcess({
      where: {
        id: this.processRef
      }
    });
    if (!processModelDAO) {
      throw new Error('Process Model Not Found');
    }
    
    
    
    // const processModel = new BpmnProcessModel(processDAO);
    const processModel = new BpmnProcessModel(processModelDAO);

    const subprocess = await BpmnProcessInstance.createInstance(this.processRef, processModel, context);
    
    subprocess.start(context);
    
    return;
  }
}
