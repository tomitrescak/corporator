interface LocalGlobal extends NodeJS.Global {
  __MONGO_URI__: string;
  __MONGO_DB_NAME__: string;
  __MONGOD__: any;
  expect: any;
}

declare var global: LocalGlobal;
