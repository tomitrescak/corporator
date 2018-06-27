export interface DataSet {
  getValue(name: string): any;
  setValue(name: string, value: any): void;
  getError(name: string): any;
  getStringValue(name: string): any;
  setStringValue(name: string, value: any): void;
  isExpression(key: string): boolean;
}
