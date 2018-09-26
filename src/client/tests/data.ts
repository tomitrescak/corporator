import GraphQLMock from 'graphql-mock';
import { makeExecutableSchema } from 'graphql-tools';
import { protect, unprotect } from 'mobx-state-tree';

import { client } from 'client/config/apollo';
import { context } from 'client/config/context';
import { AppStore } from 'client/stores/app_store';

import { typeDefs } from 'data/generated/type_defs';

const schema = makeExecutableSchema({
  typeDefs,
  resolverValidationOptions: {
    requireResolversForResolveType: false
  }
});

export const mock = new GraphQLMock(schema);

const createdDate = new Date(2018, 1, 2);
const modifiedDate = new Date(2018, 1, 10);
const finishedDate = new Date(2018, 2, 15);
// const dateDuration = (finishedDate - createdDate);

// mock context
const mockedContext = {
  Ui: { ...context.Ui },
  i18n: context.i18n
};
mockedContext.Ui.relativeDate = () => '2 months ago';

export const create = {
  context(): App.Context {
    return mockedContext;
  },
  client() {
    return client();
  },
  date(addDays: number = 0) {
    return new Date(2018, 1, 2 + addDays);
  },
  store(data: Partial<typeof AppStore.Type> = {}, mockStore = false) {
    const store = AppStore.create(data as any);
    if (mockStore) {
      unprotect(store);
      store.client = () => mock.client;
      protect(store);
    }
    return store;
  },
  mocks() {
    // tslint:disable-next-line:no-shadowed-variable
    const dayjs: any = () => ({
      from(_date: any) {
        // return datejs('2018/02/23').from(date);
      }
    });
    dayjs.extend = () => {
      /**/
    };
    // jest.mock('dayjs', () => dayjs);
  },
  createdDate,
  modifiedDate,
  finishedDate
};
