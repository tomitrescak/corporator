// const NodeEnvironment = require('jest-environment-node');
// const MongoConnector = require('apollo-connector-mongodb').MongoConnector;

// class MongoEnvironment extends NodeEnvironment {
//   constructor(config) {
//     super(config);
//   }

//   async setup() {
//     console.log('Setup MongoDB Test Environment');

//     const MongodbMemoryServer = require('mongodb-memory-server');

//     const MONGO_DB_NAME = 'jest';
//     const mongod = new MongodbMemoryServer.default({
//       instance: {
//         dbName: MONGO_DB_NAME
//       },
//       binary: {
//         version: '3.2.19'
//       }
//     });

//     // module.exports = function() {
//     global.__MONGOD__ = mongod;
//     global.__MONGO_DB_NAME__ = MONGO_DB_NAME;
//     // };

//     this.global.__MONGO_URI__ = await global.__MONGOD__.getConnectionString();
//     this.global.__MONGO_DB_NAME__ = global.__MONGO_DB_NAME__;
//     // this.global.__CONNECTOR__ = new MongoConnector(
//     //   this.global__MONGO_URI__,
//     //   this.global.__MONGO_DB_NAME__
//     // );

//     await super.setup();
//   }

//   async teardown() {
//     console.log('Teardown MongoDB Test Environment');

//     await super.teardown();
//   }

//   runScript(script) {
//     return super.runScript(script);
//   }
// }

// module.exports = MongoEnvironment;
