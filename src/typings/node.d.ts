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
