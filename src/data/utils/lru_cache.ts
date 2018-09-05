import lru = require('lru-cache');

export class LruCacheWrapper<K, V> {
  cache: any;

  constructor(cacheSize = 500) {
    this.cache = lru({ max: cacheSize });
  }

  clear() {
    this.cache.reset();
  }
  get(key: K) {
    return this.cache.get(key) || undefined;
  }
  set(key: K, value: V) {
    return this.cache.set(key, value);
  }
  delete(key: K) {
    if (this.cache.has(key)) {
      this.cache.del(key);
      return true;
    }
    return false;
  }
}
