import { DataProvider, IndexedDataProvider, ListItemsProvider } from './data_provider_model';

export class DataSet extends DataProvider {
  owner: DataProvider;
  user: DataProvider;
  roles: IndexedDataProvider;
  organisations: IndexedDataProvider;
  lists: ListItemsProvider;
}
