it('runs', () => {
  /**/
});
// import { ServerContext } from '../context';
// import { create } from '../../../shared/test_data';
// import { InstanceStatus } from '../bpmn_process_instance_model';

// let context: ServerContext;

// // connect context to database
// beforeAll(async () => {
//   context = await ServerContext.connect();
// });

// // disconnect context from database
// afterAll(async () => {
//   await ServerContext.disconnect(context);
// });

// it('should aggregate docs from collection', async () => {
//   await context.Activities.insertMany([
//     create.activityDao({id: 'aid1', status: InstanceStatus.Finished}),
//     create.activityDao({id: 'aid2', status: InstanceStatus.Finished}),
//     create.activityDao({id: 'aid3', status: InstanceStatus.Finished}),
//     create.activityDao({id: 'aid4', status: InstanceStatus.Paused}),
//     create.activityDao({id: 'aid5', status: InstanceStatus.Paused}),
//     create.activityDao({id: 'aid6', status: InstanceStatus.Aborted}),
//   ]);

//   const images = await context.Activities.find({ status: 'paused' }).toArray();
//   expect(images.length).toBe(2);

//   const topFiles = await context.Activities.collection
//     .aggregate([{ $group: { _id: '$status', count: { $sum: 1 } } }, { $sort: { count: -1 } }])
//     .toArray();

//   expect(topFiles).toEqual([
//     { _id: 'finished', count: 3 },
//     { _id: 'paused', count: 2 },
//     { _id: 'aborted', count: 1 }
//   ]);
// });

it('hello', () => undefined);
