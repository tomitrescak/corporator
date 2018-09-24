export const student_purchase = `<?xml version="1.0" encoding="UTF-8"?>
<bpmn:definitions xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" id="Definitions_1akzsyb" targetNamespace="http://bpmn.io/schema/bpmn">
  <bpmn:collaboration id="Collaboration_0y95kdl">
    <bpmn:participant id="Participant_1cros1n" name="SPF A" processRef="Process_1" />
    <bpmn:participant id="Participant_07gcwxr" name="SPF B" processRef="Process_1cjdh2u" />
  </bpmn:collaboration>
  <bpmn:process id="Process_1" isExecutable="false">
    <bpmn:laneSet id="LaneSet_0yxtvfy">
      <bpmn:lane id="Lane_1gyu675" name="Student">
        <bpmn:flowNodeRef>StartEvent_1</bpmn:flowNodeRef>
        <bpmn:flowNodeRef>Task_17t05yl</bpmn:flowNodeRef>
        <bpmn:flowNodeRef>Task_02gew3f</bpmn:flowNodeRef>
        <bpmn:flowNodeRef>Task_1d8fd6i</bpmn:flowNodeRef>
        <bpmn:flowNodeRef>BoundaryEvent_15kdtez</bpmn:flowNodeRef>
        <bpmn:flowNodeRef>EndEvent_0ojrzkm</bpmn:flowNodeRef>
      </bpmn:lane>
      <bpmn:lane id="Lane_134tbkt" name="Admin">
        <bpmn:flowNodeRef>EndEvent_1svthix</bpmn:flowNodeRef>
        <bpmn:flowNodeRef>Task_0f1st02</bpmn:flowNodeRef>
        <bpmn:flowNodeRef>Task_01gi5e1</bpmn:flowNodeRef>
        <bpmn:flowNodeRef>ExclusiveGateway_14c7ot2</bpmn:flowNodeRef>
        <bpmn:flowNodeRef>ExclusiveGateway_1ac4yx8</bpmn:flowNodeRef>
        <bpmn:flowNodeRef>EndEvent_186c5v9</bpmn:flowNodeRef>
        <bpmn:flowNodeRef>Task_14qe8bh</bpmn:flowNodeRef>
      </bpmn:lane>
    </bpmn:laneSet>
    <bpmn:startEvent id="StartEvent_1">
      <bpmn:outgoing>SequenceFlow_1v4vufq</bpmn:outgoing>
    </bpmn:startEvent>
    <bpmn:sequenceFlow id="SequenceFlow_1v4vufq" sourceRef="StartEvent_1" targetRef="Task_17t05yl" />
    <bpmn:userTask id="Task_17t05yl" name="Submit Request">
      <bpmn:incoming>SequenceFlow_1v4vufq</bpmn:incoming>
      <bpmn:outgoing>SequenceFlow_1a0iw2t</bpmn:outgoing>
    </bpmn:userTask>
    <bpmn:sequenceFlow id="SequenceFlow_1a0iw2t" sourceRef="Task_17t05yl" targetRef="Task_1d8fd6i" />
    <bpmn:subProcess id="Task_1d8fd6i" name="Approval">
      <bpmn:incoming>SequenceFlow_1a0iw2t</bpmn:incoming>
      <bpmn:outgoing>SequenceFlow_0fvr9vw</bpmn:outgoing>
    </bpmn:subProcess>
    <bpmn:boundaryEvent id="BoundaryEvent_15kdtez" name="Rejected" attachedToRef="Task_1d8fd6i">
      <bpmn:outgoing>SequenceFlow_0wldrva</bpmn:outgoing>
      <bpmn:errorEventDefinition />
    </bpmn:boundaryEvent>
    <bpmn:sequenceFlow id="SequenceFlow_0wldrva" sourceRef="BoundaryEvent_15kdtez" targetRef="EndEvent_0ojrzkm" />
    <bpmn:endEvent id="EndEvent_0ojrzkm" name="Rejected">
      <bpmn:incoming>SequenceFlow_0wldrva</bpmn:incoming>
      <bpmn:terminateEventDefinition />
    </bpmn:endEvent>
    <bpmn:sequenceFlow id="SequenceFlow_0fvr9vw" sourceRef="Task_1d8fd6i" targetRef="Task_14qe8bh" />
    <bpmn:sequenceFlow id="SequenceFlow_1boj9kv" sourceRef="Task_14qe8bh" targetRef="ExclusiveGateway_14c7ot2" />
    <bpmn:sequenceFlow id="SequenceFlow_0u6zbzn" name="No" sourceRef="ExclusiveGateway_14c7ot2" targetRef="EndEvent_1svthix" />
    <bpmn:exclusiveGateway id="ExclusiveGateway_14c7ot2" name="Valid?">
      <bpmn:incoming>SequenceFlow_1boj9kv</bpmn:incoming>
      <bpmn:outgoing>SequenceFlow_0u6zbzn</bpmn:outgoing>
      <bpmn:outgoing>SequenceFlow_04z5i4h</bpmn:outgoing>
      <bpmn:outgoing>SequenceFlow_0c71yza</bpmn:outgoing>
    </bpmn:exclusiveGateway>
    <bpmn:endEvent id="EndEvent_1svthix" name="Rejected">
      <bpmn:incoming>SequenceFlow_0u6zbzn</bpmn:incoming>
      <bpmn:terminateEventDefinition />
    </bpmn:endEvent>
    <bpmn:sequenceFlow id="SequenceFlow_04z5i4h" sourceRef="ExclusiveGateway_14c7ot2" targetRef="Task_02gew3f" />
    <bpmn:task id="Task_02gew3f" name="Adjusting">
      <bpmn:incoming>SequenceFlow_04z5i4h</bpmn:incoming>
      <bpmn:outgoing>SequenceFlow_16r7eqg</bpmn:outgoing>
    </bpmn:task>
    <bpmn:sequenceFlow id="SequenceFlow_16r7eqg" sourceRef="Task_02gew3f" targetRef="Task_14qe8bh" />
    <bpmn:sequenceFlow id="SequenceFlow_0c71yza" name="Yes" sourceRef="ExclusiveGateway_14c7ot2" targetRef="Task_0f1st02" />
    <bpmn:sendTask id="Task_0f1st02" name="Notify Student">
      <bpmn:incoming>SequenceFlow_0c71yza</bpmn:incoming>
      <bpmn:outgoing>SequenceFlow_11rmtdd</bpmn:outgoing>
    </bpmn:sendTask>
    <bpmn:exclusiveGateway id="ExclusiveGateway_1ac4yx8" name="Tech Request?">
      <bpmn:incoming>SequenceFlow_11rmtdd</bpmn:incoming>
      <bpmn:outgoing>SequenceFlow_0wiye6r</bpmn:outgoing>
      <bpmn:outgoing>SequenceFlow_02lqc4n</bpmn:outgoing>
    </bpmn:exclusiveGateway>
    <bpmn:sequenceFlow id="SequenceFlow_11rmtdd" sourceRef="Task_0f1st02" targetRef="ExclusiveGateway_1ac4yx8" />
    <bpmn:sequenceFlow id="SequenceFlow_0wiye6r" name="Yes" sourceRef="ExclusiveGateway_1ac4yx8" targetRef="Task_01gi5e1" />
    <bpmn:sendTask id="Task_01gi5e1" name="Notify Tech">
      <bpmn:incoming>SequenceFlow_0wiye6r</bpmn:incoming>
      <bpmn:outgoing>SequenceFlow_10uuo4q</bpmn:outgoing>
    </bpmn:sendTask>
    <bpmn:sequenceFlow id="SequenceFlow_10uuo4q" sourceRef="Task_01gi5e1" targetRef="EndEvent_186c5v9" />
    <bpmn:sequenceFlow id="SequenceFlow_02lqc4n" name="No" sourceRef="ExclusiveGateway_1ac4yx8" targetRef="EndEvent_186c5v9" />
    <bpmn:endEvent id="EndEvent_186c5v9" name="Accepted">
      <bpmn:incoming>SequenceFlow_10uuo4q</bpmn:incoming>
      <bpmn:incoming>SequenceFlow_02lqc4n</bpmn:incoming>
    </bpmn:endEvent>
    <bpmn:userTask id="Task_14qe8bh" name="Validation">
      <bpmn:incoming>SequenceFlow_0fvr9vw</bpmn:incoming>
      <bpmn:incoming>SequenceFlow_16r7eqg</bpmn:incoming>
      <bpmn:outgoing>SequenceFlow_1boj9kv</bpmn:outgoing>
    </bpmn:userTask>
  </bpmn:process>
  <bpmn:process id="Process_1cjdh2u">
    <bpmn:laneSet id="LaneSet_0bj5idx">
      <bpmn:lane id="Lane_01jbglx" name="Supervisor">
        <bpmn:flowNodeRef>StartEvent_09cq8iu</bpmn:flowNodeRef>
        <bpmn:flowNodeRef>Task_1c0tszi</bpmn:flowNodeRef>
        <bpmn:flowNodeRef>EndEvent_08flz5n</bpmn:flowNodeRef>
        <bpmn:flowNodeRef>ExclusiveGateway_1r8olns</bpmn:flowNodeRef>
        <bpmn:flowNodeRef>Task_0cs2nx5</bpmn:flowNodeRef>
        <bpmn:flowNodeRef>EndEvent_1lvj8zf</bpmn:flowNodeRef>
      </bpmn:lane>
      <bpmn:lane id="Lane_07u09ox" name="Approver">
        <bpmn:flowNodeRef>Task_0es3aa5</bpmn:flowNodeRef>
        <bpmn:flowNodeRef>SendTask_1z0mzw8</bpmn:flowNodeRef>
        <bpmn:flowNodeRef>ExclusiveGateway_0smd7rk</bpmn:flowNodeRef>
        <bpmn:flowNodeRef>EndEvent_03j3sau</bpmn:flowNodeRef>
      </bpmn:lane>
    </bpmn:laneSet>
    <bpmn:startEvent id="StartEvent_09cq8iu">
      <bpmn:outgoing>SequenceFlow_1g6j69j</bpmn:outgoing>
      <bpmn:outgoing>SequenceFlow_1rse4fv</bpmn:outgoing>
    </bpmn:startEvent>
    <bpmn:sequenceFlow id="SequenceFlow_1g6j69j" sourceRef="StartEvent_09cq8iu" targetRef="Task_1c0tszi" />
    <bpmn:userTask id="Task_1c0tszi" name="Sign">
      <bpmn:incoming>SequenceFlow_1g6j69j</bpmn:incoming>
      <bpmn:outgoing>SequenceFlow_0a5sfgx</bpmn:outgoing>
    </bpmn:userTask>
    <bpmn:sequenceFlow id="SequenceFlow_1rse4fv" sourceRef="StartEvent_09cq8iu" targetRef="Task_0es3aa5" />
    <bpmn:sequenceFlow id="SequenceFlow_0a5sfgx" sourceRef="Task_1c0tszi" targetRef="ExclusiveGateway_1r8olns" />
    <bpmn:sequenceFlow id="SequenceFlow_0uakzqr" name="Yes" sourceRef="ExclusiveGateway_1r8olns" targetRef="EndEvent_08flz5n" />
    <bpmn:endEvent id="EndEvent_08flz5n" name="Approved">
      <bpmn:incoming>SequenceFlow_0uakzqr</bpmn:incoming>
      <bpmn:incoming>SequenceFlow_0u7aius</bpmn:incoming>
    </bpmn:endEvent>
    <bpmn:userTask id="Task_0es3aa5" name="Sign">
      <bpmn:incoming>SequenceFlow_1rse4fv</bpmn:incoming>
      <bpmn:outgoing>SequenceFlow_06e7kp6</bpmn:outgoing>
    </bpmn:userTask>
    <bpmn:exclusiveGateway id="ExclusiveGateway_0smd7rk" name="Valid?">
      <bpmn:incoming>SequenceFlow_06e7kp6</bpmn:incoming>
      <bpmn:outgoing>SequenceFlow_16lcfca</bpmn:outgoing>
      <bpmn:outgoing>SequenceFlow_0u7aius</bpmn:outgoing>
    </bpmn:exclusiveGateway>
    <bpmn:sendTask id="SendTask_1z0mzw8" name="Notify Student">
      <bpmn:incoming>SequenceFlow_16lcfca</bpmn:incoming>
      <bpmn:outgoing>SequenceFlow_16obt5y</bpmn:outgoing>
    </bpmn:sendTask>
    <bpmn:endEvent id="EndEvent_03j3sau" name="Rejected">
      <bpmn:incoming>SequenceFlow_16obt5y</bpmn:incoming>
      <bpmn:errorEventDefinition id="ErrorEventDefinition_0zw6f91" />
    </bpmn:endEvent>
    <bpmn:sequenceFlow id="SequenceFlow_06e7kp6" sourceRef="Task_0es3aa5" targetRef="ExclusiveGateway_0smd7rk" />
    <bpmn:sequenceFlow id="SequenceFlow_16lcfca" name="No" sourceRef="ExclusiveGateway_0smd7rk" targetRef="SendTask_1z0mzw8" />
    <bpmn:sequenceFlow id="SequenceFlow_16obt5y" sourceRef="SendTask_1z0mzw8" targetRef="EndEvent_03j3sau" />
    <bpmn:sequenceFlow id="SequenceFlow_0u7aius" name="Yes" sourceRef="ExclusiveGateway_0smd7rk" targetRef="EndEvent_08flz5n" />
    <bpmn:exclusiveGateway id="ExclusiveGateway_1r8olns" name="Valid?">
      <bpmn:incoming>SequenceFlow_0a5sfgx</bpmn:incoming>
      <bpmn:outgoing>SequenceFlow_0uakzqr</bpmn:outgoing>
      <bpmn:outgoing>SequenceFlow_0gaxum7</bpmn:outgoing>
    </bpmn:exclusiveGateway>
    <bpmn:sendTask id="Task_0cs2nx5" name="Notify Student">
      <bpmn:incoming>SequenceFlow_0gaxum7</bpmn:incoming>
      <bpmn:outgoing>SequenceFlow_0qzliii</bpmn:outgoing>
    </bpmn:sendTask>
    <bpmn:endEvent id="EndEvent_1lvj8zf" name="Rejected">
      <bpmn:incoming>SequenceFlow_0qzliii</bpmn:incoming>
      <bpmn:errorEventDefinition />
    </bpmn:endEvent>
    <bpmn:sequenceFlow id="SequenceFlow_0gaxum7" name="No" sourceRef="ExclusiveGateway_1r8olns" targetRef="Task_0cs2nx5" />
    <bpmn:sequenceFlow id="SequenceFlow_0qzliii" sourceRef="Task_0cs2nx5" targetRef="EndEvent_1lvj8zf" />
  </bpmn:process>
  <bpmndi:BPMNDiagram id="BPMNDiagram_1">
    <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Collaboration_0y95kdl">
      <bpmndi:BPMNShape id="Participant_1cros1n_di" bpmnElement="Participant_1cros1n">
        <dc:Bounds x="123" y="82" width="1175" height="357" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="_BPMNShape_StartEvent_2" bpmnElement="StartEvent_1">
        <dc:Bounds x="199" y="133" width="36" height="36" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Lane_1gyu675_di" bpmnElement="Lane_1gyu675">
        <dc:Bounds x="153" y="82" width="1145" height="174" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Lane_134tbkt_di" bpmnElement="Lane_134tbkt">
        <dc:Bounds x="153" y="256" width="1145" height="183" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="SequenceFlow_1v4vufq_di" bpmnElement="SequenceFlow_1v4vufq">
        <di:waypoint x="235" y="151" />
        <di:waypoint x="285" y="151" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNShape id="UserTask_0jbb17f_di" bpmnElement="Task_17t05yl">
        <dc:Bounds x="285" y="111" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="SequenceFlow_1a0iw2t_di" bpmnElement="SequenceFlow_1a0iw2t">
        <di:waypoint x="385" y="151" />
        <di:waypoint x="435" y="151" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNShape id="SubProcess_0gbdh2u_di" bpmnElement="Task_1d8fd6i">
        <dc:Bounds x="435" y="111" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="BoundaryEvent_0hmovv0_di" bpmnElement="BoundaryEvent_15kdtez">
        <dc:Bounds x="517" y="133" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="545" y="117" width="44" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="SequenceFlow_0wldrva_di" bpmnElement="SequenceFlow_0wldrva">
        <di:waypoint x="553" y="151" />
        <di:waypoint x="603" y="151" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNShape id="EndEvent_03uocm9_di" bpmnElement="EndEvent_0ojrzkm">
        <dc:Bounds x="603" y="133" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="599" y="176" width="44" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="SequenceFlow_0fvr9vw_di" bpmnElement="SequenceFlow_0fvr9vw">
        <di:waypoint x="485" y="191" />
        <di:waypoint x="485" y="289" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNShape id="ExclusiveGateway_14c7ot2_di" bpmnElement="ExclusiveGateway_14c7ot2" isMarkerVisible="true">
        <dc:Bounds x="678" y="304" width="50" height="50" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="660" y="289" width="30" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="SequenceFlow_1boj9kv_di" bpmnElement="SequenceFlow_1boj9kv">
        <di:waypoint x="535" y="329" />
        <di:waypoint x="678" y="329" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="SequenceFlow_0u6zbzn_di" bpmnElement="SequenceFlow_0u6zbzn">
        <di:waypoint x="703" y="354" />
        <di:waypoint x="703" y="379" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="713" y="360" width="15" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNShape id="EndEvent_1503xqc_di" bpmnElement="EndEvent_1svthix">
        <dc:Bounds x="685" y="379" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="681" y="422" width="44" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Task_02gew3f_di" bpmnElement="Task_02gew3f">
        <dc:Bounds x="653" y="111" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="SequenceFlow_04z5i4h_di" bpmnElement="SequenceFlow_04z5i4h">
        <di:waypoint x="703" y="304" />
        <di:waypoint x="703" y="191" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="SequenceFlow_16r7eqg_di" bpmnElement="SequenceFlow_16r7eqg">
        <di:waypoint x="675" y="191" />
        <di:waypoint x="675" y="229" />
        <di:waypoint x="522" y="229" />
        <di:waypoint x="522" y="289" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="SequenceFlow_0c71yza_di" bpmnElement="SequenceFlow_0c71yza">
        <di:waypoint x="728" y="329" />
        <di:waypoint x="776" y="329" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="736" y="311" width="18" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNShape id="SendTask_0ezujg0_di" bpmnElement="Task_0f1st02">
        <dc:Bounds x="776" y="289" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="ExclusiveGateway_1ac4yx8_di" bpmnElement="ExclusiveGateway_1ac4yx8" isMarkerVisible="true">
        <dc:Bounds x="924" y="304" width="50" height="50" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="912" y="280" width="74" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="SequenceFlow_11rmtdd_di" bpmnElement="SequenceFlow_11rmtdd">
        <di:waypoint x="876" y="329" />
        <di:waypoint x="924" y="329" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="SequenceFlow_0wiye6r_di" bpmnElement="SequenceFlow_0wiye6r">
        <di:waypoint x="974" y="329" />
        <di:waypoint x="1028" y="329" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="992" y="311" width="18" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNShape id="SendTask_0nn2ql3_di" bpmnElement="Task_01gi5e1">
        <dc:Bounds x="1028" y="289" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="EndEvent_186c5v9_di" bpmnElement="EndEvent_186c5v9">
        <dc:Bounds x="1202" y="311" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="1197" y="292" width="46" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="SequenceFlow_10uuo4q_di" bpmnElement="SequenceFlow_10uuo4q">
        <di:waypoint x="1128" y="329" />
        <di:waypoint x="1202" y="329" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="SequenceFlow_02lqc4n_di" bpmnElement="SequenceFlow_02lqc4n">
        <di:waypoint x="949" y="354" />
        <di:waypoint x="949" y="387" />
        <di:waypoint x="1220" y="387" />
        <di:waypoint x="1220" y="347" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="957" y="356" width="15" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNShape id="UserTask_0qjrc4z_di" bpmnElement="Task_14qe8bh">
        <dc:Bounds x="435" y="289" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Participant_07gcwxr_di" bpmnElement="Participant_07gcwxr">
        <dc:Bounds x="123" y="500" width="919" height="539" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Lane_01jbglx_di" bpmnElement="Lane_01jbglx">
        <dc:Bounds x="153" y="500" width="889" height="278" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Lane_07u09ox_di" bpmnElement="Lane_07u09ox">
        <dc:Bounds x="153" y="778" width="889" height="261" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="StartEvent_09cq8iu_di" bpmnElement="StartEvent_09cq8iu">
        <dc:Bounds x="204" y="590.5" width="36" height="36" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="SequenceFlow_1g6j69j_di" bpmnElement="SequenceFlow_1g6j69j">
        <di:waypoint x="240" y="609" />
        <di:waypoint x="290" y="609" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNShape id="UserTask_0cjzzuf_di" bpmnElement="Task_1c0tszi">
        <dc:Bounds x="290" y="569" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="SequenceFlow_1rse4fv_di" bpmnElement="SequenceFlow_1rse4fv">
        <di:waypoint x="240" y="609" />
        <di:waypoint x="265" y="609" />
        <di:waypoint x="265" y="879" />
        <di:waypoint x="290" y="879" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNShape id="UserTask_0lh7ndf_di" bpmnElement="Task_0es3aa5">
        <dc:Bounds x="290" y="839" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="ExclusiveGateway_1r8olns_di" bpmnElement="ExclusiveGateway_1r8olns" isMarkerVisible="true">
        <dc:Bounds x="496" y="584" width="50" height="50" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="506" y="563" width="30" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="SequenceFlow_0a5sfgx_di" bpmnElement="SequenceFlow_0a5sfgx">
        <di:waypoint x="390" y="609" />
        <di:waypoint x="496" y="609" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNShape id="EndEvent_08flz5n_di" bpmnElement="EndEvent_08flz5n">
        <dc:Bounds x="780" y="591" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="774" y="567" width="47" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="SequenceFlow_0uakzqr_di" bpmnElement="SequenceFlow_0uakzqr">
        <di:waypoint x="546" y="609" />
        <di:waypoint x="780" y="609" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="553" y="591" width="18" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="SequenceFlow_0gaxum7_di" bpmnElement="SequenceFlow_0gaxum7">
        <di:waypoint x="521" y="634" />
        <di:waypoint x="521" y="669" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="529" y="640" width="15" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNShape id="SendTask_0ap5a3j_di" bpmnElement="Task_0cs2nx5">
        <dc:Bounds x="471" y="669" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="SequenceFlow_0qzliii_di" bpmnElement="SequenceFlow_0qzliii">
        <di:waypoint x="571" y="709" />
        <di:waypoint x="621" y="709" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNShape id="EndEvent_0rnnxty_di" bpmnElement="EndEvent_1lvj8zf">
        <dc:Bounds x="621" y="691" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="617" y="734" width="44" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="ExclusiveGateway_0smd7rk_di" bpmnElement="ExclusiveGateway_0smd7rk" isMarkerVisible="true">
        <dc:Bounds x="496" y="854" width="50" height="50" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="506" y="830" width="30" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="SendTask_1z0mzw8_di" bpmnElement="SendTask_1z0mzw8">
        <dc:Bounds x="471" y="939" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="EndEvent_03j3sau_di" bpmnElement="EndEvent_03j3sau">
        <dc:Bounds x="621" y="961" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="617" y="1004" width="44" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="SequenceFlow_16lcfca_di" bpmnElement="SequenceFlow_16lcfca">
        <di:waypoint x="521" y="904" />
        <di:waypoint x="521" y="939" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="529" y="910.5" width="15" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="SequenceFlow_16obt5y_di" bpmnElement="SequenceFlow_16obt5y">
        <di:waypoint x="571" y="979" />
        <di:waypoint x="621" y="979" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="SequenceFlow_06e7kp6_di" bpmnElement="SequenceFlow_06e7kp6">
        <di:waypoint x="390" y="879" />
        <di:waypoint x="496" y="879" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="SequenceFlow_0u7aius_di" bpmnElement="SequenceFlow_0u7aius">
        <di:waypoint x="546" y="879" />
        <di:waypoint x="798" y="879" />
        <di:waypoint x="798" y="627" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="556" y="861" width="18" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
    </bpmndi:BPMNPlane>
  </bpmndi:BPMNDiagram>
</bpmn:definitions>
`;
