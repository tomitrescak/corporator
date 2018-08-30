import * as DataLoader from 'dataloader';

import { Prisma } from '../../prisma';
import { LruCacheWrapper } from './lru_cache';

export class Loader<K, V> {
  private singleLoader: DataLoader<K, V>;
  private multiLoader: DataLoader<K, V[]>;
  private existLoader: any;
  private db: Prisma.Prisma;

  constructor(
    querySingle: keyof Prisma.Query,
    queryMultiple: keyof Prisma.Query,
    singleSelector: (key: K) => Object = id => ({ id }),
    multiSelector: (key: K) => Object = () => ({})
  ) {
    this.singleLoader = this.createLoader(
      id => (this.db.query as any)[querySingle]({ where: singleSelector(id) }) as Promise<V>
    );
    this.multiLoader = this.createLoader(
      id => (this.db.query as any)[queryMultiple]({ where: multiSelector(id) }) as Promise<V[]>
    );
    this.existLoader = async () => !!(await (this.db.query as any)[queryMultiple]({ first: 1 }));
  }

  findById(db: Prisma.Prisma, id: K) {
    this.db = db;
    return this.singleLoader.load(id);
  }

  findAll(db: Prisma.Prisma, key: K = '' as any) {
    this.db = db;
    return this.multiLoader.load(key);
  }

  exists(db: Prisma.Prisma) {
    this.db = db;
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
