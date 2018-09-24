import { its } from 'data/tests';

describe('BpmnProcessModel', () => {
  its('has processes', {
    clear: ['BpmnProcess']
  }, async (ctx) => {
    const m = await ctx.db.query.bpmnProcesses({});
    expect(m.length).toBe(3)
  })
})