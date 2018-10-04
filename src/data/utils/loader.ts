import * as DataLoader from 'dataloader';

import { Prisma } from '../prisma';
import { LruCacheWrapper } from './lru_cache';

export class Loader<V, S = any, K = string> {
  public db: () => Prisma.Prisma;

  private singleLoader: DataLoader<K, V>;
  private multiLoader: DataLoader<K, V[]>;
  private existLoader: any;

  constructor(
    db: () => Prisma.Prisma,
    querySingle: keyof Prisma.Query = null,
    queryMultiple: keyof Prisma.Query = null,
    info?: string,
    multiSelector: (key: K) => S = () => ({} as any)
  ) {
    this.db = db;

    if (querySingle) {
      this.singleLoader = this.createLoader(
        id => (this.db().query as any)[querySingle]({ where: { id } }, info) as Promise<V>
      );
    }
    if (queryMultiple) {
      this.multiLoader = this.createLoader(
        id =>
          (this.db().query as any)[queryMultiple]({ where: multiSelector(id) }, info) as Promise<
            V[]
          >
      );
      this.existLoader = async () => {
        const records = await (this.db().query as any)[queryMultiple]({ first: 1 });
        return records.length > 0;
      };
    }
  }

  findById(id: K) {
    if (!this.singleLoader) {
      throw new Error('You need to have a single loader! Init it in constructor');
    }
    return this.singleLoader.load(id);
  }

  findAll(key: K = '' as any) {
    if (!this.multiLoader) {
      throw new Error('You need to have a multi loader! Init it in constructor');
    }
    return this.multiLoader.load(key);
  }

  exists() {
    if (!this.multiLoader) {
      throw new Error('You need to have a multi loader! Init it in constructor');
    }
    return this.existLoader();
  }

  clear(key: K) {
    this.singleLoader.clear(key);
    this.multiLoader.clearAll();
  }

  createLoader(selectorFunction: (key: K) => Promise<V[]>): DataLoader<K, V[]>;
  createLoader(selectorFunction: (key: K) => Promise<V>): DataLoader<K, V>;
  createLoader(selectorFunction: (key: K) => Promise<any>): DataLoader<K, any> {
    const options = {
      cacheMap: new LruCacheWrapper()
    };
    const loader = new DataLoader((keys: any[]) => {
      return Promise.all(keys.map(selectorFunction));
    }, options);

    return loader;
  }
}
