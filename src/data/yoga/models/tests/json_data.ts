export const bpmn = `<?xml version="1.0" encoding="UTF-8"?>
<bpmn:definitions xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" id="Definitions_0jloarl" targetNamespace="http://bpmn.io/schema/bpmn">
  <bpmn:process id="Process_1" isExecutable="false">
    <bpmn:startEvent id="StartEvent_1" name="Start">
      <bpmn:outgoing>SequenceFlow_06nr081</bpmn:outgoing>
    </bpmn:startEvent>
    <bpmn:task id="Task_124kol6" name="A">
      <bpmn:incoming>SequenceFlow_06nr081</bpmn:incoming>
      <bpmn:outgoing>SequenceFlow_0m6e1dq</bpmn:outgoing>
    </bpmn:task>
    <bpmn:sequenceFlow id="SequenceFlow_06nr081" sourceRef="StartEvent_1" targetRef="Task_124kol6" />
    <bpmn:sequenceFlow id="SequenceFlow_0m6e1dq" sourceRef="Task_124kol6" targetRef="ParallelGateway_09y1yr8" />
    <bpmn:parallelGateway id="ParallelGateway_09y1yr8" name="Fork">
      <bpmn:incoming>SequenceFlow_0m6e1dq</bpmn:incoming>
      <bpmn:outgoing>SequenceFlow_0xyok6d</bpmn:outgoing>
      <bpmn:outgoing>SequenceFlow_0sfc3si</bpmn:outgoing>
    </bpmn:parallelGateway>
    <bpmn:task id="Task_1imx9ug" name="B">
      <bpmn:incoming>SequenceFlow_0xyok6d</bpmn:incoming>
      <bpmn:outgoing>SequenceFlow_1lhoqo9</bpmn:outgoing>
    </bpmn:task>
    <bpmn:sequenceFlow id="SequenceFlow_0xyok6d" sourceRef="ParallelGateway_09y1yr8" targetRef="Task_1imx9ug" />
    <bpmn:task id="Task_08smd7w" name="C">
      <bpmn:incoming>SequenceFlow_0sfc3si</bpmn:incoming>
      <bpmn:outgoing>SequenceFlow_1awhlk0</bpmn:outgoing>
    </bpmn:task>
    <bpmn:sequenceFlow id="SequenceFlow_0sfc3si" sourceRef="ParallelGateway_09y1yr8" targetRef="Task_08smd7w" />
    <bpmn:sequenceFlow id="SequenceFlow_1lhoqo9" sourceRef="Task_1imx9ug" targetRef="ParallelGateway_013yvmi" />
    <bpmn:parallelGateway id="ParallelGateway_013yvmi" name="Join">
      <bpmn:incoming>SequenceFlow_1lhoqo9</bpmn:incoming>
      <bpmn:incoming>SequenceFlow_1awhlk0</bpmn:incoming>
      <bpmn:outgoing>SequenceFlow_19wigzr</bpmn:outgoing>
    </bpmn:parallelGateway>
    <bpmn:sequenceFlow id="SequenceFlow_1awhlk0" sourceRef="Task_08smd7w" targetRef="ParallelGateway_013yvmi" />
    <bpmn:endEvent id="EndEvent_0gtowi7" name="Finish">
      <bpmn:incoming>SequenceFlow_05aak41</bpmn:incoming>
      <bpmn:incoming>SequenceFlow_1eq1yih</bpmn:incoming>
      <bpmn:incoming>SequenceFlow_1c11ado</bpmn:incoming>
    </bpmn:endEvent>
    <bpmn:sequenceFlow id="SequenceFlow_19wigzr" sourceRef="ParallelGateway_013yvmi" targetRef="ExclusiveGateway_07y2d30" />
    <bpmn:exclusiveGateway id="ExclusiveGateway_07y2d30" name="Exclusive" default="SequenceFlow_05aak41">
      <bpmn:incoming>SequenceFlow_19wigzr</bpmn:incoming>
      <bpmn:outgoing>SequenceFlow_05aak41</bpmn:outgoing>
      <bpmn:outgoing>SequenceFlow_0l5zzsg</bpmn:outgoing>
    </bpmn:exclusiveGateway>
    <bpmn:sequenceFlow id="SequenceFlow_05aak41" sourceRef="ExclusiveGateway_07y2d30" targetRef="EndEvent_0gtowi7" />
    <bpmn:task id="Task_08o4k6s" name="D">
      <bpmn:incoming>SequenceFlow_0l5zzsg</bpmn:incoming>
      <bpmn:outgoing>SequenceFlow_1i28ud1</bpmn:outgoing>
    </bpmn:task>
    <bpmn:sequenceFlow id="SequenceFlow_0l5zzsg" sourceRef="ExclusiveGateway_07y2d30" targetRef="Task_08o4k6s" />
    <bpmn:inclusiveGateway id="InclusiveGateway_1f4oifr" name="Inclusive" default="SequenceFlow_19tjykd">
      <bpmn:incoming>SequenceFlow_1i28ud1</bpmn:incoming>
      <bpmn:outgoing>SequenceFlow_19tjykd</bpmn:outgoing>
      <bpmn:outgoing>SequenceFlow_0anwd2h</bpmn:outgoing>
    </bpmn:inclusiveGateway>
    <bpmn:sequenceFlow id="SequenceFlow_1i28ud1" sourceRef="Task_08o4k6s" targetRef="InclusiveGateway_1f4oifr" />
    <bpmn:sequenceFlow id="SequenceFlow_19tjykd" sourceRef="InclusiveGateway_1f4oifr" targetRef="Task_0izqbtw" />
    <bpmn:task id="Task_1basoe9" name="F">
      <bpmn:incoming>SequenceFlow_0anwd2h</bpmn:incoming>
      <bpmn:outgoing>SequenceFlow_1eq1yih</bpmn:outgoing>
    </bpmn:task>
    <bpmn:sequenceFlow id="SequenceFlow_0anwd2h" sourceRef="InclusiveGateway_1f4oifr" targetRef="Task_1basoe9" />
    <bpmn:sequenceFlow id="SequenceFlow_1eq1yih" sourceRef="Task_1basoe9" targetRef="EndEvent_0gtowi7" />
    <bpmn:task id="Task_0izqbtw" name="E">
      <bpmn:incoming>SequenceFlow_19tjykd</bpmn:incoming>
      <bpmn:outgoing>SequenceFlow_1c11ado</bpmn:outgoing>
    </bpmn:task>
    <bpmn:sequenceFlow id="SequenceFlow_1c11ado" sourceRef="Task_0izqbtw" targetRef="EndEvent_0gtowi7" />
  </bpmn:process>`;

// default
export const json = {
  $type: 'bpmn:Definitions',
  rootElements: [
    {
      $type: 'bpmn:Process',
      id: 'Process_1',
      isExecutable: false,
      flowElements: [
        {
          $type: 'bpmn:StartEvent',
          id: 'StartEvent_1',
          name: 'Start',
          outgoing: [
            {
              $type: 'bpmn:SequenceFlow',
              id: 'SequenceFlow_06nr081'
            }
          ]
        },
        {
          $type: 'bpmn:UserTask',
          id: 'Task_124kol6',
          name: 'A',
          incoming: [
            {
              $type: 'bpmn:SequenceFlow',
              id: 'SequenceFlow_06nr081'
            }
          ],
          outgoing: [
            {
              $type: 'bpmn:SequenceFlow',
              id: 'SequenceFlow_0m6e1dq'
            }
          ]
        },
        {
          $type: 'bpmn:SequenceFlow',
          id: 'SequenceFlow_06nr081',
          sourceRef: {
            $type: 'bpmn:StartEvent',
            id: 'StartEvent_1',
            name: 'Start'
          },
          targetRef: {
            $type: 'bpmn:Task',
            id: 'Task_124kol6',
            name: 'A'
          }
        },
        {
          $type: 'bpmn:SequenceFlow',
          id: 'SequenceFlow_0m6e1dq',
          sourceRef: {
            $type: 'bpmn:Task',
            id: 'Task_124kol6',
            name: 'A'
          },
          targetRef: {
            $type: 'bpmn:ParallelGateway',
            id: 'ParallelGateway_09y1yr8',
            name: 'Fork'
          }
        },
        {
          $type: 'bpmn:ParallelGateway',
          id: 'ParallelGateway_09y1yr8',
          name: 'Fork',
          incoming: [
            {
              $type: 'bpmn:SequenceFlow',
              id: 'SequenceFlow_0m6e1dq'
            }
          ],
          outgoing: [
            {
              $type: 'bpmn:SequenceFlow',
              id: 'SequenceFlow_0xyok6d'
            },
            {
              $type: 'bpmn:SequenceFlow',
              id: 'SequenceFlow_0sfc3si'
            }
          ]
        },
        {
          $type: 'bpmn:SendTask',
          id: 'Task_1imx9ug',
          name: 'B',
          incoming: [
            {
              $type: 'bpmn:SequenceFlow',
              id: 'SequenceFlow_0xyok6d'
            }
          ],
          outgoing: [
            {
              $type: 'bpmn:SequenceFlow',
              id: 'SequenceFlow_1lhoqo9'
            }
          ]
        },
        {
          $type: 'bpmn:SequenceFlow',
          id: 'SequenceFlow_0xyok6d',
          sourceRef: {
            $type: 'bpmn:ParallelGateway',
            id: 'ParallelGateway_09y1yr8',
            name: 'Fork'
          },
          targetRef: {
            $type: 'bpmn:Task',
            id: 'Task_1imx9ug',
            name: 'B'
          }
        },
        {
          $type: 'bpmn:ScriptTask',
          id: 'Task_08smd7w',
          name: 'C',
          incoming: [
            {
              $type: 'bpmn:SequenceFlow',
              id: 'SequenceFlow_0sfc3si'
            }
          ],
          outgoing: [
            {
              $type: 'bpmn:SequenceFlow',
              id: 'SequenceFlow_1awhlk0'
            }
          ]
        },
        {
          $type: 'bpmn:SequenceFlow',
          id: 'SequenceFlow_0sfc3si',
          sourceRef: {
            $type: 'bpmn:ParallelGateway',
            id: 'ParallelGateway_013yvmi',
            name: 'Join'
          },
          targetRef: {
            $type: 'bpmn:Task',
            id: 'Task_08smd7w',
            name: 'C'
          }
        },
        {
          $type: 'bpmn:SequenceFlow',
          id: 'SequenceFlow_1lhoqo9',
          sourceRef: {
            $type: 'bpmn:Task',
            id: 'Task_1imx9ug',
            name: 'B'
          },
          targetRef: {
            $type: 'bpmn:ParallelGateway',
            id: 'ParallelGateway_013yvmi',
            name: 'Join'
          }
        },
        {
          $type: 'bpmn:ParallelGateway',
          id: 'ParallelGateway_013yvmi',
          name: 'Join',
          incoming: [
            {
              $type: 'bpmn:SequenceFlow',
              id: 'SequenceFlow_1lhoqo9'
            },
            {
              $type: 'bpmn:SequenceFlow',
              id: 'SequenceFlow_1awhlk0'
            }
          ],
          outgoing: [
            {
              $type: 'bpmn:SequenceFlow',
              id: 'SequenceFlow_19wigzr'
            }
          ]
        },
        {
          $type: 'bpmn:SequenceFlow',
          id: 'SequenceFlow_1awhlk0',
          sourceRef: {
            $type: 'bpmn:Task',
            id: 'Task_08smd7w',
            name: 'C'
          },
          targetRef: {
            $type: 'bpmn:ParallelGateway',
            id: 'ParallelGateway_013yvmi',
            name: 'Join'
          }
        },
        {
          $type: 'bpmn:EndEvent',
          id: 'EndEvent_0gtowi7',
          name: 'Finish',
          incoming: [
            {
              $type: 'bpmn:SequenceFlow',
              id: 'SequenceFlow_05aak41'
            },
            {
              $type: 'bpmn:SequenceFlow',
              id: 'SequenceFlow_1eq1yih'
            },
            {
              $type: 'bpmn:SequenceFlow',
              id: 'SequenceFlow_1c11ado'
            }
          ]
        },
        {
          $type: 'bpmn:SequenceFlow',
          id: 'SequenceFlow_19wigzr',
          sourceRef: {
            $type: 'bpmn:ParallelGateway',
            id: 'ParallelGateway_013yvmi',
            name: 'Join'
          },
          targetRef: {
            $type: 'bpmn:EndEvent',
            id: 'EndEvent_0gtowi7',
            name: 'Finish'
          }
        },
        {
          $type: 'bpmn:ExclusiveGateway',
          id: 'ExclusiveGateway_07y2d30',
          name: 'Exclusive',
          default: {
            $type: 'bpmn:SequenceFlow',
            id: 'SequenceFlow_05aak41'
          },
          incoming: [
            {
              $type: 'bpmn:SequenceFlow',
              id: 'SequenceFlow_19wigzr'
            }
          ],
          outgoing: [
            {
              $type: 'bpmn:SequenceFlow',
              id: 'SequenceFlow_05aak41'
            },
            {
              $type: 'bpmn:SequenceFlow',
              id: 'SequenceFlow_0l5zzsg'
            }
          ]
        },
        {
          $type: 'bpmn:SequenceFlow',
          id: 'SequenceFlow_05aak41',
          sourceRef: {
            $type: 'bpmn:ExclusiveGateway',
            id: 'ExclusiveGateway_07y2d30',
            name: 'Exclusive'
          },
          targetRef: {
            $type: 'bpmn:EndEvent',
            id: 'EndEvent_0gtowi7',
            name: 'Finish'
          }
        },
        {
          $type: 'bpmn:Task',
          id: 'Task_08o4k6s',
          name: 'D',
          incoming: [
            {
              $type: 'bpmn:SequenceFlow',
              id: 'SequenceFlow_0l5zzsg'
            }
          ],
          outgoing: [
            {
              $type: 'bpmn:SequenceFlow',
              id: 'SequenceFlow_1i28ud1'
            }
          ]
        },
        {
          $type: 'bpmn:SequenceFlow',
          id: 'SequenceFlow_0l5zzsg',
          sourceRef: {
            $type: 'bpmn:ExclusiveGateway',
            id: 'ExclusiveGateway_07y2d30',
            name: 'Exclusive'
          },
          targetRef: {
            $type: 'bpmn:Task',
            id: 'Task_08o4k6s',
            name: 'D'
          }
        },
        {
          $type: 'bpmn:InclusiveGateway',
          id: 'InclusiveGateway_1f4oifr',
          name: 'Inclusive',
          default: {
            $type: 'bpmn:SequenceFlow',
            id: 'SequenceFlow_19tjykd'
          },
          incoming: [
            {
              $type: 'bpmn:SequenceFlow',
              id: 'SequenceFlow_1i28ud1'
            }
          ],
          outgoing: [
            {
              $type: 'bpmn:SequenceFlow',
              id: 'SequenceFlow_19tjykd'
            },
            {
              $type: 'bpmn:SequenceFlow',
              id: 'SequenceFlow_0anwd2h'
            }
          ]
        },
        {
          $type: 'bpmn:SequenceFlow',
          id: 'SequenceFlow_1i28ud1',
          sourceRef: {
            $type: 'bpmn:Task',
            id: 'Task_08o4k6s',
            name: 'D'
          },
          targetRef: {
            $type: 'bpmn:InclusiveGateway',
            id: 'InclusiveGateway_1f4oifr',
            name: 'Inclusive'
          }
        },
        {
          $type: 'bpmn:SequenceFlow',
          id: 'SequenceFlow_19tjykd',
          sourceRef: {
            $type: 'bpmn:InclusiveGateway',
            id: 'InclusiveGateway_1f4oifr',
            name: 'Inclusive'
          },
          targetRef: {
            $type: 'bpmn:Task',
            id: 'Task_0izqbtw',
            name: 'E'
          }
        },
        {
          $type: 'bpmn:ReceiveTask',
          id: 'Task_1basoe9',
          name: 'F',
          incoming: [
            {
              $type: 'bpmn:SequenceFlow',
              id: 'SequenceFlow_0anwd2h'
            }
          ],
          outgoing: [
            {
              $type: 'bpmn:SequenceFlow',
              id: 'SequenceFlow_1eq1yih'
            }
          ]
        },
        {
          $type: 'bpmn:SequenceFlow',
          id: 'SequenceFlow_0anwd2h',
          sourceRef: {
            $type: 'bpmn:InclusiveGateway',
            id: 'InclusiveGateway_1f4oifr',
            name: 'Inclusive'
          },
          targetRef: {
            $type: 'bpmn:Task',
            id: 'Task_1basoe9',
            name: 'F'
          }
        },
        {
          $type: 'bpmn:SequenceFlow',
          id: 'SequenceFlow_1eq1yih',
          sourceRef: {
            $type: 'bpmn:Task',
            id: 'Task_1basoe9',
            name: 'F'
          },
          targetRef: {
            $type: 'bpmn:EndEvent',
            id: 'EndEvent_0gtowi7',
            name: 'Finish'
          }
        },
        {
          $type: 'bpmn:Task',
          id: 'Task_0izqbtw',
          name: 'E',
          incoming: [
            {
              $type: 'bpmn:SequenceFlow',
              id: 'SequenceFlow_19tjykd'
            }
          ],
          outgoing: [
            {
              $type: 'bpmn:SequenceFlow',
              id: 'SequenceFlow_1c11ado'
            }
          ]
        },
        {
          $type: 'bpmn:SequenceFlow',
          id: 'SequenceFlow_1c11ado',
          sourceRef: {
            $type: 'bpmn:Task',
            id: 'Task_0izqbtw',
            name: 'E'
          },
          targetRef: {
            $type: 'bpmn:EndEvent',
            id: 'EndEvent_0gtowi7',
            name: 'Finish'
          }
        }
      ]
    }
  ]
};

// task 'A' has incorrect seqflow id in incoming list
export const jsonSourceFlowError = {
  $type: 'bpmn:Definitions',
  rootElements: [
    {
      $type: 'bpmn:Process',
      id: 'Process_1',
      isExecutable: false,
      flowElements: [
        {
          $type: 'bpmn:Task',
          id: 'Task_124kol6',
          name: 'A',
          incoming: [
            {
              $type: 'bpmn:SequenceFlow',
              id: 'blah'
            }
          ]
        },
        {
          $type: 'bpmn:SequenceFlow',
          id: 'SequenceFlow_06nr081',
          sourceRef: {
            $type: 'bpmn:StartEvent',
            id: 'StartEvent_1',
            name: 'Start'
          },
          targetRef: {
            $type: 'bpmn:Task',
            id: 'Task_124kol6',
            name: 'A'
          }
        }
      ]
    }
  ]
};

// start node has Task element in outgoing list instead of a SequenceFlow
export const jsonTargetFlowError = {
  $type: 'bpmn:Definitions',
  rootElements: [
    {
      $type: 'bpmn:Process',
      id: 'Process_1',
      isExecutable: false,
      flowElements: [
        {
          $type: 'bpmn:StartEvent',
          id: 'StartEvent_1',
          name: 'Start',
          outgoing: [
            {
              $type: 'bpmn:SequenceFlow',
              id: 'SequenceFlow_06nr081'
            }
          ]
        },
        {
          $type: 'bpmn:Task',
          id: 'SequenceFlow_06nr081',
          sourceRef: {
            $type: 'bpmn:StartEvent',
            id: 'StartEvent_1',
            name: 'Start'
          },
          targetRef: {
            $type: 'bpmn:Task',
            id: 'Task_124kol6',
            name: 'A'
          }
        }        
      ]
    }
  ]
};

// Sequence Flow element's sourceRef is a SequenceFLow element instead of a FlowNode 
export const jsonSourceNodeError = {
  $type: 'bpmn:Definitions',
  rootElements: [
    {
      $type: 'bpmn:Process',
      id: 'Process_1',
      isExecutable: false,
      flowElements: [
        {
          $type: 'bpmn:SequenceFlow',
          id: 'SequenceFlow_06nr081',
          sourceRef: {
            $type: 'bpmn:StartEvent',
            id: 'StartEvent_1',
            name: 'Start'
          },
        },
        {
          $type: 'bpmn:SequenceFlow',
          id: 'StartEvent_1',
          name: 'Start'
        }
      ]
    }
  ]
};

// Sequence Flow element's targetRef is a SequenceFLow element instead of a FlowNode 
export const jsonTargetNodeError = {
  $type: 'bpmn:Definitions',
  rootElements: [
    {
      $type: 'bpmn:Process',
      id: 'Process_1',
      isExecutable: false,
      flowElements: [
        {
          $type: 'bpmn:SequenceFlow',
          id: 'SequenceFlow_06nr081',
          sourceRef: {
            $type: 'bpmn:StartEvent',
            id: 'StartEvent_1',
            name: 'Start'
          },
          targetRef: {
            $type: 'bpmn:Task',
            id: 'Task_124kol6',
            name: 'A'
          }
        },
        {
          $type: 'bpmn:StartEvent',
          id: 'StartEvent_1',
          name: 'Start',
          outgoing: [
            {
              $type: 'bpmn:SequenceFlow',
              id: 'SequenceFlow_06nr081'
            }
          ]
        },
        {
          $type: 'bpmn:SequenceFlow',
          id: 'Task_124kol6',
          name: 'A',
          incoming: [
            {
              $type: 'bpmn:SequenceFlow',
              id: 'SequenceFlow_06nr081'
            }
          ],
          outgoing: [
            {
              $type: 'bpmn:SequenceFlow',
              id: 'SequenceFlow_0m6e1dq'
            }
          ]
        }
      ]
    }
  ]
};

// ParallelGateway's default flow is linked to a Task Element instead of a SequenceFlow Element
export const jsonDefaultNodeError = {
  $type: 'bpmn:Definitions',
  rootElements: [
    {
      $type: 'bpmn:Process',
      id: 'Process_1',
      isExecutable: false,
      flowElements: [
        {
          $type: 'bpmn:ParallelGateway',
          id: 'ParallelGateway_09y1yr8',
          name: 'Fork',
          default: {
            $type: 'bpmn:Task',
            id: 'Task_1imx9ug'
          }
        },
        {
          $type: 'bpmn:Task',
          id: 'Task_1imx9ug',
          name: 'B'
        }
      ]
    }
  ]
};

// ParallelGateway's default flow is linked to a Task Element instead of a SequenceFlow Element
export const jsonNoSequenceFlowError = {
  $type: 'bpmn:Definitions',
  rootElements: [
    {
      $type: 'bpmn:Process',
      id: 'Process_1',
      isExecutable: false,
      flowElements: [
        {
          $type: 'bpmn:Task',
          id: 'Task_124kol6',
          name: 'A',
          incoming: [
            {
              $type: 'bpmn:SequenceFlow',
              id: 'SequenceFlow_06nr081'
            }
          ],
          outgoing: [
            {
              $type: 'bpmn:SequenceFlow',
              id: 'SequenceFlow_0m6e1dq'
            }
          ]
        }
      ]
    }
  ]
};