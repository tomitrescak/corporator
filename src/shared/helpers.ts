interface Indexable<T> {
  [index: string]: T;
}

interface Group<T> {
  key: string;
  values: T[];
}

export function groupBy<T>(xs: T[], key: string): Indexable<T[]> {
  return xs.reduce(function(previous: any, current: Indexable<any>) {
    // Indexable<Array<Indexable<T>>>
    (previous[current[key]] = previous[current[key]] || []).push(current);
    return previous;
  }, {});
}

export function groupByArray<T>(xs: T[], key: string | Function): Array<Group<T>> {
  return xs.reduce(function(previous, current: Indexable<any>) {
    let v = key instanceof Function ? key(current) : current[key];
    let el = previous.find(r => r && r.key === v);
    if (el) {
      el.values.push(current);
    } else {
      previous.push({
        key: v,
        values: [current]
      });
    }
    return previous;
  }, []);
}
