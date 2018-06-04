export interface DataSet {
  getValue(name: string): any;
  setValue(name: string, value: any): void;
}
