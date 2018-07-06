// import BpmnModdle from 'bpmn-moddle';
import { Access } from './accesses_model';

export enum ProcessStatus {
  Draft = 'draft',
  Proposal = 'proposal',
  Published = 'published'
}

export class BpmnProcess {
  access: Access;
  definition: string;
  generatedDescription: string;
  version: number;
  status: string;
  roles: string[];
  actionCount: number;

  constructor(processModelDao: Corpix.Collections.BpmnProcessDao) {
    this.access = new Access(processModelDao.access);
    this.definition = this.generatedDescription = processModelDao.generatedDescription;
    this.version = processModelDao.version;
    this.status = processModelDao.status;
    this.roles = processModelDao.roles;
    this.actionCount = processModelDao.actionCount;
  }

  async loadDefinition(_bpmn: string) {
    return new Promise((resolve, _reject) => {
      // moddle.fromXML(bpmn, (error, def) => {
      //   if (error) {
      //     reject(error);
      //   }
      //   this.definition = def;

      //   // console.log(JSON.stringify(def, null, 2));
      //   // console.log(Object.getOwnPropertyNames(def));

      //   resolve(this.definition);
      // });
      resolve(true);
    });
  }
}
