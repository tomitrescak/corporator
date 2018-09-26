declare namespace NodeJS {
  interface Global {
    __MONGO_URI__: string;
    __MONGO_DB_NAME__: string;
    __MONGOD__: any;
    expect: any;
    jest: any;
    I18: any;
  }
}

interface Function {
  displayName: string;
  childContextTypes: any;
  contextTypes: any;
  propTypes: any;
  defaultProps: any;
}

interface String {
  url(): string;
  safeFilePath(): string;
}
