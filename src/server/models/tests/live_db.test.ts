import { ServerContext } from '../context';

let context: ServerContext;

// connect context to database
beforeAll(async () => {
  context = await ServerContext.connect();
});

// disconnect context from database
afterAll(async () => {
  await ServerContext.disconnect(context);
});

it('should aggregate docs from collection', async () => {
  await context.Activities.insertMany([
    { type: 'Document' },
    { type: 'Video' },
    { type: 'Image' },
    { type: 'Document' },
    { type: 'Image' },
    { type: 'Document' }
  ]);

  const images = await context.Activities.find({ type: 'Image' }).toArray();
  expect(images.length).toBe(2);

  const topFiles = await context.Activities.collection
    .aggregate([{ $group: { _id: '$type', count: { $sum: 1 } } }, { $sort: { count: -1 } }])
    .toArray();

  expect(topFiles).toEqual([
    { _id: 'Document', count: 3 },
    { _id: 'Image', count: 2 },
    { _id: 'Video', count: 1 }
  ]);
});
