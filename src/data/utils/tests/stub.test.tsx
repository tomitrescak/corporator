import { purge } from 'data/utils';

describe('Future', () => {
  describe('purge', () => {
    it('cleans up unused fields', () => {
      expect(purge({})).toEqual({});
    });

    it('cleans up unused fields', () => {
      expect(purge({ a: 1, b: undefined })).toEqual({ a: 1 });
      expect(purge({ c: 1, b: null })).toEqual({ c: 1 });
      expect(purge({ a: 1, b: '' })).toEqual({ a: 1 });
      expect(purge({ a: 1, b: '', c: { d: null, e: 1 } })).toEqual({ a: 1, c: { e: 1 } });
    });
  });
});
