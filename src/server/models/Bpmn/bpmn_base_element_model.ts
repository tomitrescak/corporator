
export abstract class BaseElement {
  id: string;
  name: string;
  $type: string;
  description: string;


  constructor(baseElement: Bpmn.BaseElement) {

    this.id = baseElement.id;
    this.name = baseElement.name;
    this.$type = baseElement.$type.toLowerCase();
    this.description = baseElement.description;

  }
}
