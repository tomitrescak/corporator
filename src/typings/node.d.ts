interface Global extends NodeJS.Global {
  __MONGO_URI__: string;
  __MONGO_DB_NAME__: string;
  __MONGOD__: any;
}

declare var global: Global;
