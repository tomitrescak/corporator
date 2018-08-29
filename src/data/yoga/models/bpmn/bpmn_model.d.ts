declare namespace Bpmn {
  enum GatewayDirections {
    Unspecified = 'unspecified',
    Converging = 'converging',
    Diverging = 'diverging',
    Mixed = 'mixed'
  }

  enum TaskTypes {
    Default = 'default',
    User = 'user',
    Send = 'send',
    Receive = 'receive',
    Service = 'service',
    Manual = 'manual',
    Script = 'script',
    Business = 'business'
  }
  
  enum TaskMarkers {
    None = 'none',
    Loop = 'loop',
    MultiInstance = 'multi-instance',
    Compensation = 'compensation'
  }

  interface ITrigger {
    async trigger(state: BpmnProcessInstance) : Promise<ITrigger[]>;
  }

  interface Group {
    organisation: string;
    roles: string[];
  }

  interface BaseElement {
    id: string;
    name: string;
    $type: string;
    description: string;
  }
  
  interface LaneElement extends BaseElement {
    lane: Lane;
  }

  interface FlowNode extends LaneElement {
    incoming: SequenceFlow[];
    outgoing: SequenceFlow[];
  }
  interface BaseEvent extends FlowNode {}
  
  interface BoundaryEvent extends BaseEvent {
    interrupting: boolean;
  }

  interface StartEvent extends BaseEvent {}

  interface EndEvent extends BaseEvent {}

  interface Gateway extends FlowNode {
    direction: GatewayDirections;
    default?: FlowNode;
  }

  interface ExclusiveGateway extends Gateway {}

  interface InclusiveGateway extends Gateway {}

  interface ParallelGateway extends Gateway {}

  interface Flow extends LaneElement {
    sourceRef: FlowNode;
    targetRef: FlowNode;
  }

  interface SequenceFlow extends Flow {}
  
  interface ConditionalFlow extends Flow {
    condition: string;
  }

  interface LaneSet extends BaseElement {
    lanes: Lane[];
  }

  interface Lane extends BaseElement {
    roles: Group;
    nodes: FlowNode[];
  }

  interface Task extends FlowNode {
    marker?: TaskMarkers;
    attachedEvents?: BoundaryEvent[];
  }

  interface UserTask extends Task {
    
  }

  interface SendTask extends Task {
    
  }

  interface ReceiveTask extends Task {
    
  }

  interface SubProcessTask extends Task {
    processRef: string;
  }

  // interface ServiceTask extends Task {
  // }

  // interface ManualTask extends Task { }

  interface ScriptTask extends Task {
    script: string;
    url: string;
  }

  // interface BusinessRuleTask extends Task {
  // }
}
